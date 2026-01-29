import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServiceData } from '../../../data/locationServices';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <span className="text-[18px] font-wix-madefor font-bold text-[#2a2a2a]">{title}</span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="p-6 pt-0 bg-white">
                    <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed">{content}</p>
                </div>
            </div>
        </div>
    );
};

const CoralGablesBathroomRemodeling = () => {
    const cityName = "Coral Gables";
    const serviceSlug = "bathroom-remodeling";
    const serviceData = getServiceData(serviceSlug, cityName);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500;
        let start = null;

        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
                    
                    if (!existingScript) {
                        const script = document.createElement('script');
                        script.src = 'https://elfsightcdn.com/platform.js';
                        script.async = true;
                        script.defer = true;
                        
                        script.onload = () => {
                            clearTimeout(loadingTimeout);
                            setTimeout(() => setIsLoading(false), 1000);
                        };
                        
                        script.onerror = () => {
                            clearTimeout(loadingTimeout);
                            setIsLoading(false);
                        };
                        
                        document.body.appendChild(script);
                    } else if (window.eapps) {
                        window.eapps.reinit();
                        clearTimeout(loadingTimeout);
                        setTimeout(() => setIsLoading(false), 500);
                    }
                    
                    observer.disconnect();
                }
            });
        }, { rootMargin: '200px' });

        const elfsightContainer = document.querySelector('.elfsight-app-9d1c640f-d65a-46d4-94f7-e727d6afbfbc');
        if (elfsightContainer) {
            observer.observe(elfsightContainer);
        }

        return () => {
            clearTimeout(loadingTimeout);
            observer.disconnect();
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailBody = `
Location: ${cityName}
Service: ${serviceData.serviceName}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
        `.trim();

        const mailtoLink = `mailto:admin@procontractorsfl.com?subject=${encodeURIComponent(serviceData.serviceName + ' in ' + cityName)} - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="relative pt-40 pb-28 bg-[#333333] overflow-hidden">
                <div className="hidden md:block absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
                        <Link to="/" className="text-[#f6f1ef]/70 hover:text-[#f6f1ef] font-wix-madefor text-sm font-medium tracking-wide transition-colors">Home</Link>
                        <span className="text-[#f6f1ef]/50">»</span>
                        <Link to="/locations" className="text-[#f6f1ef]/70 hover:text-[#f6f1ef] font-wix-madefor text-sm font-medium tracking-wide transition-colors">Locations</Link>
                        <span className="text-[#f6f1ef]/50">»</span>
                        <Link to={`/locations/${cityName.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#f6f1ef]/70 hover:text-[#f6f1ef] font-wix-madefor text-sm font-medium tracking-wide transition-colors">{cityName}</Link>
                        <span className="text-[#f6f1ef]/50">»</span>
                        <span className="text-[#f6f1ef] font-wix-madefor text-sm font-medium tracking-wide">{serviceData.serviceName}</span>
                    </div>

                    <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
                        {serviceData.serviceName} in {cityName}
                    </h1>
                    <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
                    <p className="text-[#f6f1ef]/80 font-wix-madefor text-[18px] max-w-3xl mx-auto leading-relaxed">
                        {serviceData?.shortDesc || `Professional ${serviceData.serviceName.toLowerCase()} services in ${cityName}`}
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[14px] font-wix-madefor text-gray-500 tracking-widest uppercase">Our Services</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-6">
                                Expert {serviceData.serviceName} Services
                            </h2>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed mb-8">
                                {serviceData.overviewParagraph1}
                            </p>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed mb-8">
                                {serviceData.overviewParagraph2}
                            </p>
                            <button
                                onClick={() => smoothScrollTo('quote-form')}
                                className="bg-[#2a2a2a] text-white py-3 px-8 rounded-lg font-wix-madefor font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Get Free Quote
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl p-10 shadow-xl">
                            <h3 className="text-[32px] font-custom text-[#f6f1ef] mb-8">What We Offer</h3>
                            <ul className="space-y-4">
                                {serviceData?.features?.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-6 h-6 text-[#5b5b5b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-[#f6f1ef]/90 font-wix-madefor text-[18px] group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-6">
                            Why Choose Procontractors?
                        </h2>
                        <p className="text-gray-600 font-wix-madefor text-[16px] max-w-3xl mx-auto">
                            We're your trusted partner for {serviceData.serviceName.toLowerCase()} in {cityName}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-[22px] font-custom font-bold text-[#2a2a2a] mb-4">Licensed & Certified</h4>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed">
                                Fully licensed, bonded, and insured contractors with proven expertise in {cityName}.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-[22px] font-custom font-bold text-[#2a2a2a] mb-4">On-Time Delivery</h4>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed">
                                We respect your time and guarantee completion within the agreed timeline.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-[#2a2a2a] rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h4 className="text-[22px] font-custom font-bold text-[#2a2a2a] mb-4">Quality Guaranteed</h4>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed">
                                Premium materials and expert craftsmanship on every project, big or small.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[14px] font-wix-madefor text-gray-500 tracking-widest uppercase">Our Expertise</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-6">
                                Trust Your Contracting Needs to The Top Professionals
                            </h2>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed mb-8">
                                {serviceData.expertiseParagraph1}
                            </p>
                            <p className="text-gray-600 font-wix-madefor text-[16px] leading-relaxed mb-8">
                                {serviceData.expertiseParagraph2}
                            </p>
                            <button
                                onClick={() => smoothScrollTo('quote-form')}
                                className="bg-[#2a2a2a] text-white py-3 px-8 rounded-lg font-wix-madefor font-semibold hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Request A Free Quote
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: 'Permits', content: 'We handle all necessary permits and ensure compliance with local building codes and regulations.' },
                                { title: 'Insurance', content: 'Fully insured and bonded for your protection and peace of mind throughout the project.' },
                                { title: 'Cost Estimates', content: 'Transparent, detailed cost estimates with no hidden fees or surprises.' },
                                { title: 'Trade Connections', content: 'Established relationships with trusted subcontractors and suppliers for quality work.' },
                                { title: 'Shorter Timeline', content: 'Efficient project management and coordination to complete your project on schedule.' }
                            ].map((item, index) => (
                                <AccordionItem key={index} title={item.title} content={item.content} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                <div className="max-w-4xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-[42px] font-custom text-[#f6f1ef] mb-6">
                            Ready to Start Your {serviceData.serviceName} Project?
                        </h2>
                        <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-2xl mx-auto">
                            Get a free quote for your {serviceData.serviceName.toLowerCase()} project in {cityName}. 
                            Contact us today to discuss your vision!
                        </p>
                    </div>

                    <div id="quote-form" className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
                        <h3 className="text-[32px] font-custom text-[#2a2a2a] mb-8 text-center">Request Your Free Quote</h3>
                        
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 font-wix-madefor text-center">
                                    Thank you! Your email client will open shortly. We'll get back to you soon!
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-[14px] font-wix-madefor font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-all font-wix-madefor"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[14px] font-wix-madefor font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-all font-wix-madefor"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-[14px] font-wix-madefor font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-all font-wix-madefor"
                                    placeholder="(305) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[14px] font-wix-madefor font-medium text-gray-700 mb-2">
                                    Project Details *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2a2a] focus:border-transparent transition-all font-wix-madefor resize-none"
                                    placeholder={`Tell us about your ${serviceData.serviceName.toLowerCase()} project in ${cityName}...`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#2a2a2a] text-white py-4 px-8 rounded-lg font-wix-madefor font-semibold text-lg hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Get Your Free Quote
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-[14px] font-wix-madefor text-gray-500 tracking-widest uppercase">Client Reviews</span>
                                <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-6">
                                Client Experiences with Us
                            </h2>
                        </div>

                        <div>
                            {isLoading && (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <div className="relative w-20 h-20 mb-6">
                                        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                                        <div className="absolute inset-0 border-4 border-[#333333] rounded-full border-t-transparent animate-spin"></div>
                                    </div>
                                    <p className="text-[#333333] font-wix-madefor text-lg font-semibold mb-2">
                                        Loading Reviews...
                                    </p>
                                    <p className="text-gray-500 font-wix-madefor text-sm">
                                        Please wait while we fetch our client testimonials
                                    </p>
                                </div>
                            )}
                            
                            <div 
                                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
                            >
                                <div className="elfsight-app-9d1c640f-d65a-46d4-94f7-e727d6afbfbc" data-elfsight-app-lazy></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-8 text-center">
                    <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-4">
                        Proudly Serving {cityName}
                    </h2>
                    <p className="text-gray-600 font-wix-madefor text-[16px] max-w-3xl mx-auto">
                        {serviceData.footerDescription}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CoralGablesBathroomRemodeling;
