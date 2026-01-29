import React from 'react';
import Navbar from './Navbar';

const Careers = () => {
  const laborRoles = [
    'Experienced Painters',
    'Framing Carpenters',
    'Drywall Installers',
    'Site Supervisors',
    'High Skilled Handyman'
  ];

  const corporateRoles = [
    'Project Managers',
    'Estimators',
    'Assistant Project Managers',
    'Administrative Support',
    'Other Corporate and Operations Roles'
  ];

  return (
    <div className="min-h-screen bg-[#f6f1ef]">
      <Navbar />

      {/* Hero Section */}
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
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">JOIN OUR TEAM</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Build Your Career With Us
          </h1>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          <p className="text-[#f6f1ef]/80 font-wix-madefor max-w-3xl mx-auto leading-relaxed text-lg">
            Join a team dedicated to excellence in construction and remodeling. We're looking for talented individuals who share our passion for quality craftsmanship.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 lg:py-20 bg-[#f6f1ef]">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-custom text-[#333333] mb-6 leading-tight">
              Why Choose Procontractors?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Culture */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f6f1ef] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-[22px] font-custom font-bold text-[#333333] mb-4">Collaborative Culture</h4>
              <p className="text-gray-700 font-wix-madefor leading-relaxed">
                Join a team that values collaboration, respect, and mutual support. We believe that great results come from great relationships and a positive work environment.
              </p>
            </div>

            {/* Growth Mindset */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f6f1ef] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-[22px] font-custom font-bold text-[#333333] mb-4">Growth Mindset</h4>
              <p className="text-gray-700 font-wix-madefor leading-relaxed">
                We invest in your development through mentorship, training, and hands-on experience. Your growth is our priority, with real opportunities to advance your career.
              </p>
            </div>

            {/* Long-term Opportunities */}
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#f6f1ef] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-[22px] font-custom font-bold text-[#333333] mb-4">Long-term Opportunities</h4>
              <p className="text-gray-700 font-wix-madefor leading-relaxed">
                Build a lasting career with us. We value employee longevity and offer stable, long-term positions with competitive compensation and benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Opportunities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.sbci.com/wp-content/uploads/2016/10/contractor-management-1280x720.jpg" 
                  alt="Construction workers collaborating" 
                  className="w-full h-[400px] lg:h-[500px] object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/50 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-custom text-[#333333] mb-6 leading-tight">
                  Creating opportunities is what we live for.
                </h2>
                <p className="text-gray-700 font-wix-madefor text-lg leading-relaxed">
                  We empower our team to grow in their job and at our company, building in advancement opportunities through mentorship, training, and hands on experience. We value employee longevity and are proud to have so many spend the length of their careers with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Better Together Section */}
      <section className="py-20 lg:py-28 bg-[#f6f1ef]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-custom text-[#333333] mb-6 leading-tight">
                  We're better together.
                </h2>
                <p className="text-gray-700 font-wix-madefor text-lg leading-relaxed">
                  We all have our own strengths and expertise, but we work as a team to achieve common goals for our clients.
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-[400px] lg:h-[500px] object-cover filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Field & Skilled Labor Positions Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-8">
              FIELD POSITIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-custom text-[#333333] mb-8 leading-tight">
              Our team consists of talented individuals across a variety of roles and experience levels.
            </h2>
            <p className="text-gray-700 font-wix-madefor text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              We're actively hiring skilled construction professionals who take pride in their work. If you're an experienced trade professional, Procontractors offers long-term career paths and real opportunities to advance.
            </p>
          </div>

          {/* Roles List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {laborRoles.map((role, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-6 bg-[#f6f1ef] rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#333333] transition-all duration-300 ${
                  index === laborRoles.length - 1 ? 'md:col-start-1 md:col-end-3 md:w-1/2 md:mx-auto md:justify-center' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[#333333] font-wix-madefor text-lg font-medium">
                  {role}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdjvdOHhYZ55SbeClQuQuADE3KEq7f7J0ig57c7uCIAZe5ZRQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#333333] text-[#f6f1ef] rounded-full hover:bg-[#2d3e50] transition-all duration-300 font-wix-madefor font-bold text-lg hover:shadow-xl hover:scale-105"
            >
              Apply Now
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Administrative & Corporate Positions Section */}
      <section className="py-20 lg:py-28 bg-[#f6f1ef]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-8">
              CORPORATE POSITIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-custom text-[#333333] mb-8 leading-tight">
              Administrative & Corporate Positions
            </h2>
            <p className="text-gray-700 font-wix-madefor text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              We're actively growing our team beyond the job site. If you're a construction professional who thrives in planning, coordination, leadership, or operations, Procontractors offers an environment where your work directly impacts project success and company growth.
            </p>
          </div>

          {/* Roles List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {corporateRoles.map((role, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-[#333333] transition-all duration-300 ${
                  index === corporateRoles.length - 1 ? 'md:col-start-1 md:col-end-3 md:w-1/2 md:mx-auto md:justify-center' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[#333333] font-wix-madefor text-lg font-medium">
                  {role}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://www.linkedin.com/company/procontractors-llc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#0077B5] text-white rounded-full hover:bg-[#006399] transition-all duration-300 font-wix-madefor font-bold text-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Apply on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
