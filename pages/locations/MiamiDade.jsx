import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mixerImage from '../../assets/mixer.png';
import bathtubImage from '../../assets/bathtub.png';

const MiamiDade = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the email body
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
        `.trim();

        // Create mailto link with pre-filled information
        const mailtoLink = `mailto:admin@procontractorsfl.com?subject=Contact Form Submission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;

        // Open the user's email client
        window.location.href = mailtoLink;

        // Reset form after opening email client
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Modern & Elegant */}
            <section className="relative pt-40 pb-28 bg-[#333333] overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="hidden md:block absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
                    {/* Breadcrumb Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
                        <Link to="/" className="text-[#f6f1ef]/70 hover:text-[#f6f1ef] font-wix-madefor text-sm font-medium tracking-wide transition-colors">Home</Link>
                        <span className="text-[#f6f1ef]/50">»</span>
                        <span className="text-[#f6f1ef] font-wix-madefor text-sm font-medium tracking-wide">Miami Dade</span>
                    </div>

                    <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
                        Miami Dade
                    </h1>
                    <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
                    <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                        Premier General Contracting Services in Miami Dade County.
                    </p>
                </div>
            </section>

            {/* Locations Served Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Section Header */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[16px] font-wix-madefor text-gray-500 tracking-widest uppercase">Locations Served</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>
                        <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-8">
                            General Contractors Miami Dade
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwVnYUWtarEgpc0fs_wEVFnOXab3UWN2UQSH-IE0dIUVkUR-nhixzTy05F7tEbTAI6Cdm8Wty_kPQfWZgydcJea1GOCKVoLn-iIlb2Utz8Z8lct3l0tIe61QATbjqtfSs8yUSRs=s1108-k-no"
                                    alt="Construction worker"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <p className="text-gray-700 leading-relaxed font-wix-madefor text-[16px]">
                                Miami Dade is full of vibrant neighborhoods, from the bustling streets of Downtown Miami to the serene bayside communities of Coral Gables and Coconut Grove. Transform your property into the home of your dreams with a new construction project or a custom remodel with Procontractors LLC, your trusted general contractors in Miami Dade.
                            </p>

                            <div className="pt-6">
                                <h3 className="text-[32px] font-custom text-[#2a2a2a] mb-4">
                                    Miami Dade General Contractor
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-wix-madefor mb-6 text-[16px]">
                                    Managing a home improvement project requires a professional to coordinate every detail from design to execution. Procontractors LLC handles everything, so you don't have to juggle multiple contractors. We provide a seamless experience from start to finish, ensuring your vision becomes reality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-16">
                {/* Main Content */}
                <div className="space-y-8">

                    {/* Tile Work Section */}
                    <div className="mb-16">
                        <h3 className="text-[32px] font-custom text-[#2a2a2a] mb-4 text-center">
                            Contractors in Miami Dade Specializing in Tile Work and Renovation Projects
                        </h3>
                        <p className="text-gray-700 leading-relaxed font-wix-madefor text-[16px]">
                            At Procontractors, we specialize in new construction, tile work, and renovation projects. Our expertise in this area allows us to create stunning and functional spaces that reflect your style and preferences. Whether you're looking for a modern, sleek design or a more traditional aesthetic, our team of the best general contractors has the knowledge and skills to bring your vision to life.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="mb-16">
                        <h3 className="text-[32px] font-custom text-[#2a2a2a] mb-12 text-center">
                            Services Offered in Miami Dade and South Florida
                        </h3>

                        {/* Service Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                            {/* Service 1 - Kitchen Renovations */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <img src={mixerImage} alt="Kitchen Mixer" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-[22px] text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Kitchen Renovations
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor">
                                        Stylish and functional upgrades to make your culinary space extraordinary.
                                    </p>
                                </div>
                            </div>

                            {/* Service 2 - Bathroom Remodels */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <img src={bathtubImage} alt="Bathtub" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-[22px] text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Bathroom Remodels
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor">
                                        Transform your bathroom into a luxurious retreat with our expert remodeling services.
                                    </p>
                                </div>
                            </div>

                            {/* Service 3 - Home Remodeling */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <div className="text-[#2a2a2a] group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-[22px] text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Home Remodeling
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor">
                                        Comprehensive home improvements to enhance your living space and add value.
                                    </p>
                                </div>
                            </div>

                            {/* Service 4 - Home Additions */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20">
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <div className="text-[#2a2a2a] group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-[22px] text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Home Additions
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor">
                                        Expand your living space with expertly designed and built home additions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section with Background Image */}
                    <section
                        className="relative my-20 rounded-2xl overflow-hidden min-h-[500px]"
                        style={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content */}
                        <div className="relative z-10 py-24 px-8 text-center">
                            <h3 className="text-[42px] font-custom text-white mb-6">
                                Experience the Art of Home Remodeling
                            </h3>
                            <p className="text-white/90 font-wix-madefor text-[18px] max-w-3xl mx-auto mb-8 leading-relaxed">
                                At Procontractors LLC, we specialize in transforming homes with expert craftsmanship and personalized design. Whether it's a kitchen, bathroom, or full home remodel, we bring your vision to life. Contact us today for a free quote and take the first step toward your dream home.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <a
                                    href="tel:786-789-0097"
                                    className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2a2a2a] transition-all duration-300 font-wix-madefor font-semibold rounded-full"
                                >
                                    786-789-0097
                                </a>
                                <Link
                                    to="/portfolio"
                                    className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2a2a2a] transition-all duration-300 font-wix-madefor font-semibold rounded-full"
                                >
                                    View Our Projects
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Additional Info Section - Two Column Layout */}
                    <section className="my-20">
                        <p className="text-gray-700 leading-relaxed font-wix-madefor text-center max-w-4xl mx-auto text-[16px]">
                            As general contractors serving Miami Dade, we pride ourselves on masterful workmanship, timely project completion, and personalized service. Contact us today to schedule a free estimate and start transforming your home with Procontractors LLC.
                        </p>
                    </section>
                </div>
            </div>

            {/* Other Locations Section */}
            <section className="py-24 bg-[#f7f3f1]">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <h2 className="text-[42px] font-custom text-[#2a2a2a] mb-6">
                            Other Locations
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Miami Beach */}
                        <Link
                            to="/locations/miami-beach"
                            className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-400 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-[18px] font-custom text-[#2a2a2a] font-semibold">Miami Beach</span>
                        </Link>

                        {/* Coral Gables */}
                        <Link
                            to="/locations/coral-gables"
                            className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-400 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-[18px] font-custom text-[#2a2a2a] font-semibold">Coral Gables</span>
                        </Link>

                        {/* Fort Lauderdale */}
                        <Link
                            to="/locations/fort-lauderdale"
                            className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-400 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-[18px] font-custom text-[#2a2a2a] font-semibold">Fort Lauderdale</span>
                        </Link>

                        {/* Miami Shores */}
                        <Link
                            to="/locations/miami-shores"
                            className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-400 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-lg font-custom text-[#2a2a2a] font-semibold">Miami Shores</span>
                        </Link>

                        {/* Broward */}
                        <Link
                            to="/locations/broward"
                            className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-400 flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="text-lg font-custom text-[#2a2a2a] font-semibold">Broward</span>
                        </Link>

                        {/* Miami Dade - Current Page */}
                        <div className="flex items-center gap-4 p-6 bg-[#2a2a2a] text-white rounded-xl border-2 border-[#2a2a2a]">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white flex-shrink-0">
                                <svg className="w-6 h-6 text-[#2a2a2a]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[16px] font-custom font-semibold">Miami Dade</span>
                                <span className="text-xs font-wix-madefor opacity-75">Current Page</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-28 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side - Contact Information */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
                                CONTACT INFO
                            </div>

                            <h2 className="text-[42px] font-custom text-[#333333] mb-4">
                                Contact Information
                            </h2>
                            <p className="text-[#5b5b5b] font-wix-madefor text-[16px] mb-12 leading-relaxed">
                                Reach out to us through any of the following channels. We're here to help bring your vision to life.
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-8">
                                {/* Service Area */}
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-[#f6f1ef] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#333333] transition-all duration-300">
                                        <svg className="w-7 h-7 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-wix-madefor text-[#333333] text-[18px] mb-2">
                                            Service Area
                                        </h3>
                                        <div className="text-[#5b5b5b] font-wix-madefor text-[16px] leading-relaxed">
                                            <a href="https://www.google.com/maps/place/Miami-Dade+County,+FL" target="_blank" rel="noopener noreferrer" className="hover:text-[#333333] transition-colors">
                                                Miami Dade
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-[#f6f1ef] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#333333] transition-all duration-300">
                                        <svg className="w-7 h-7 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-wix-madefor text-[#333333] text-[18px] mb-2">
                                            Phone
                                        </h3>
                                        <a href="tel:7867890097" className="text-[#5b5b5b] font-wix-madefor text-[16px] hover:text-[#333333] transition-colors">
                                            786-789-0097
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-5 group">
                                    <div className="w-14 h-14 bg-[#f6f1ef] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#333333] transition-all duration-300">
                                        <svg className="w-7 h-7 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-wix-madefor text-[#333333] text-[18px] mb-2">
                                            Email
                                        </h3>
                                        <a href="mailto:admin@procontractorsfl.com" className="text-[#5b5b5b] font-wix-madefor text-[16px] hover:text-[#333333] transition-colors break-all">
                                            admin@procontractorsfl.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-12 p-6 bg-white rounded-2xl border border-[#333333]/10">
                                <div className="flex flex-wrap gap-6 justify-center text-[#333333]">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-wix-madefor text-[16px] font-semibold">Licensed & Insured</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-wix-madefor text-[16px] font-semibold">Free Estimates</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#333333]/10">
                            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
                                SEND MESSAGE
                            </div>

                            <h3 className="text-[32px] font-custom text-[#333333] mb-8">
                                Send Us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
                                        <p className="text-green-800 font-wix-madefor text-sm font-semibold">
                                            ✓ Opening your email client...
                                        </p>
                                    </div>
                                )}

                                {/* Full Name */}
                                <div>
                                    <label className="block text-[#333333] font-wix-madefor text-[14px] font-bold mb-3">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-[#f6f1ef] border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm placeholder:text-[#5b5b5b]/50"
                                        required
                                    />
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-[#333333] font-wix-madefor text-[14px] font-bold mb-3">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-[#f6f1ef] border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm placeholder:text-[#5b5b5b]/50"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-[#333333] font-wix-madefor text-[14px] font-bold mb-3">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(561) 123-4567"
                                        className="w-full px-5 py-4 bg-[#f6f1ef] border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm placeholder:text-[#5b5b5b]/50"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[#333333] font-wix-madefor text-[14px] font-bold mb-3">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-5 py-4 bg-[#f6f1ef] border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm resize-none placeholder:text-[#5b5b5b]/50"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-8 py-5 bg-[#333333] text-[#f6f1ef] rounded-full font-wix-madefor font-bold hover:bg-[#5b5b5b] transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3 group"
                                >
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MiamiDade;
