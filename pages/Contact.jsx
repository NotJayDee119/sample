import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMapActive, setIsMapActive] = useState(false);

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
    <div className="min-h-screen bg-[#f6f1ef]">
      <Navbar />

      {/* Hero Section - Modern & Elegant */}
      <section className="relative pt-40 pb-28 bg-[#333333] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#f6f1ef] rounded-full animate-pulse"></span>
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">LET'S CONNECT</span>
          </div>

          <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Get in Touch
          </h1>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us today for a complimentary consultation and detailed estimate.
          </p>
        </div>
      </section>

      {/* Contact Content Section - Premium Design */}
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
                      <Link to="/locations/miami-dade" className="hover:text-[#333333] transition-colors">Miami-Dade</Link>
                      <br />
                      <Link to="/locations/broward" className="hover:text-[#333333] transition-colors">Broward</Link>
                      <br />
                      <Link to="/locations/coral-gables" className="hover:text-[#333333] transition-colors">Coral Gables</Link>
                      <br />
                      <Link to="/locations/fort-lauderdale" className="hover:text-[#333333] transition-colors">Fort Lauderdale</Link>
                      <br />
                      <Link to="/locations/miami-shores" className="hover:text-[#333333] transition-colors">Miami Shores</Link>
                      <br />
                      <Link to="/locations/miami-beach" className="hover:text-[#333333] transition-colors">Miami Beach</Link>
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
              <div className="mt-12 p-6 bg-[#f6f1ef] rounded-2xl border border-[#333333]/10">
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
            <div className="bg-[#f6f1ef] rounded-3xl p-10 shadow-xl border border-[#333333]/10">
              <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
                SEND MESSAGE
              </div>
              
              <h2 className="text-[42px] font-custom text-[#333333] mb-8">
                Send Us a Message
              </h2>

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
                  <label className="block text-[#333333] font-wix-madefor text-sm font-bold mb-3">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-white border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm placeholder:text-[#5b5b5b]/50"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[#333333] font-wix-madefor text-sm font-bold mb-3">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-white border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm placeholder:text-[#5b5b5b]/50"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[#333333] font-wix-madefor text-sm font-bold mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(561) 123-4567"
                    className="w-full px-5 py-4 bg-white border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm placeholder:text-[#5b5b5b]/50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#333333] font-wix-madefor text-sm font-bold mb-3">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 bg-white border-2 border-[#333333]/10 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor text-sm resize-none placeholder:text-[#5b5b5b]/50"
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

      {/* Map Section - Modern Design */}
      <section className="py-28 bg-[#f6f1ef]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
              SERVICE AREA
            </div>
            <h2 className="text-[42px] font-custom text-[#333333] mb-4">
              We Serve South Florida
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#333333]/10 relative">
            {/* Click to Activate Overlay */}
            {!isMapActive && (
              <div 
                onClick={() => setIsMapActive(true)}
                className="absolute inset-0 z-10 cursor-pointer"
              >
              </div>
            )}
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544891.8863607991!2d-80.54466274844884!3d25.91058525523948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6681a512beb129a5%3A0x1737a80daecd14d5!2sProcontractors%20LLC!5e1!3m2!1sen!2sph!4v1768489211016!5m2!1sen!2sph" 
              width="100%" 
              height="450" 
              style={{ border: 0, pointerEvents: isMapActive ? 'auto' : 'none' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
