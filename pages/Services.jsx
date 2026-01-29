import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

// Import service images from NewPortfolio folders - Optimized WebP
import kitchenImg from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Miami Shores.webp';
import bathroomImg from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Coral Gables.webp';
import interiorImg from '../assets/NewPortfolio/Home Additions/Hotel Remodeling - Sunny Isles Beach.webp';
import homeImg from '../assets/NewPortfolio/Home Additions/Custom Bar - Pinecrest.webp';
import designImg from '../assets/NewPortfolio/Commercial/Italian Restaurant - Miami Beach.webp';
import constructionImg from '../assets/NewPortfolio/Commercial/Hotel Renovation - Downtown Miami.webp';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      category: 'Renovations',
      title: 'Kitchen Renovations',
      description: 'We modernize your culinary space with stylish and functional upgrades that transform the heart of your home into something extraordinary. Whether you prefer sleek modern layouts or classic chef inspired designs, we craft expert kitchen remodeling services tailored specifically to your lifestyle. Our goal is to blend high end finishes with practical solutions that meet the standards of a large firm through a hands on team.',
      image: kitchenImg,
      link: '/services/kitchen-renovations',
      buttonText: 'KITCHEN RENOVATION'
    },
    {
      category: 'Remodels',
      title: 'Bathroom Remodels',
      description: 'We create a luxurious and practical oasis in your home by turning your bathroom into a custom, spa like retreat. These renovations blend modern comfort, timeless design, and high end finishes to create a refreshing and indulgent space. Every element is designed around your daily routine to ensure the final result feels personalized and tranquil.',
      image: bathroomImg,
      link: '/services/bathroom-remodels',
      buttonText: 'BATHROOM REMODEL'
    },
    {
      category: 'Redesigns',
      title: 'Home Remodeling',
      description: 'We specialize in full service home remodeling designed to transform your living space while improving comfort, functionality, and long term value. From reconfiguring layouts to upgrading finishes, our team manages every phase of the remodeling process with precision, transparency, and expert craftsmanship. Our boutique approach combines elegant design with personalized touches to enhance how you live and feel at home.',
      image: interiorImg,
      link: '/services/home-remodeling',
      buttonText: 'HOME REMODELING'
    },
    {
      category: 'Additions',
      title: 'Home Additions',
      description: 'We expand your living space seamlessly with home additions that flow naturally into your existing structure. If you need more room without leaving the home you love, we add value and comfort through thoughtful planning and expert execution. Our process ensures that your new living space is built with high quality craftsmanship and personalized oversight from start to finish.',
      image: homeImg,
      link: '/services/home-additions',
      buttonText: 'HOME ADDITIONS'
    },
    {
      category: 'Design / Build',
      title: 'Design / Build',
      description: 'We offer comprehensive design build services that streamline your project from concept to completion. Our integrated approach combines architectural design with construction expertise, ensuring seamless communication and efficient execution. We work closely with you to create custom solutions that reflect your vision while maintaining budget and timeline integrity.',
      image: designImg,
      link: '/services/design-build',
      buttonText: 'DESIGN / BUILD'
    },
    {
      category: 'Construction',
      title: 'New Construction',
      description: 'We bring your dream home to life with expert new construction services that combine innovative design with superior craftsmanship. From foundation to finishing touches, we manage every phase of your build with meticulous attention to detail. Our team ensures that your new home is built to the highest standards of quality, efficiency, and modern living.',
      image: constructionImg,
      link: '/services/new-construction',
      buttonText: 'NEW CONSTRUCTION'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f6f1ef]">
      <Navbar />

      {/* Hero Section - Modern & Minimalist */}
      <section className="relative pt-40 pb-24 bg-[#333333] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center">
            {/* Subtle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#f6f1ef] rounded-full animate-pulse"></span>
              <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">SERVICES</span>
            </div>

            <h1 className="text-7xl font-custom text-[#f6f1ef] mb-6 tracking-tight">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
            <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction and remodeling solutions tailored for residential and commercial excellence.
            </p>
          </div>
        </div>
      </section>

      {/* All Services Button */}
      <section className="bg-[#f6f1ef]/95 backdrop-blur-lg border-b border-[#333333]/10 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-center">
            <button
              className="px-6 py-3 rounded-full font-custom text-sm font-semibold tracking-wide transition-all duration-300 bg-[#333333] text-[#f6f1ef] shadow-lg shadow-[#333333]/20"
            >
              All Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid - Premium Card Design */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 w-full flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/95 text-[#333333] px-4 py-1.5 rounded-md text-[10px] font-custom font-bold tracking-[0.15em] shadow-md backdrop-blur-sm">
                      {service.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[32px] font-custom text-[#333333] mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3 mb-7">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[16px] text-[#333333] font-wix-madefor leading-tight">Professional service with quality guarantee</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[16px] text-[#333333] font-wix-madefor leading-tight">Licensed & insured professionals</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(service.link);
                    }}
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#333333] text-white text-[16px] font-wix-madefor font-semibold rounded-full hover:bg-[#4a4a4a] transition-all duration-300 group/btn shadow-md hover:shadow-lg tracking-wide"
                  >
                    <span>{service.buttonText}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Elegant */}
      <section className="relative py-28 bg-[#333333] overflow-hidden">
        {/* Background Pattern */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">GET STARTED TODAY</span>
          </div>

          <h2 className="text-[42px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Ready to Transform Your Space?
          </h2>

          <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
            Contact us today for a complimentary consultation and detailed estimate. Let's bring your vision to life with precision and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-[#f6f1ef] text-[#333333] text-base font-bold font-wix-madefor hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-[#f6f1ef]/20 min-w-[200px]"
            >
              Get Quote
            </button>
            <button
              onClick={() => navigate('/portfolio')}
              className="px-10 py-4 bg-transparent border-2 border-[#f6f1ef] text-[#f6f1ef] text-base font-bold font-wix-madefor hover:bg-[#f6f1ef] hover:text-[#333333] hover:scale-105 transition-all duration-300 rounded-full min-w-[200px]"
            >
              View Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-[#f6f1ef]/60">
            <div className="text-center">
              <div className="text-[32px] font-bold font-custom text-[#f6f1ef] mb-2">300+</div>
              <div className="text-[16px] font-wix-madefor tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] font-bold font-custom text-[#f6f1ef] mb-2">10+</div>
              <div className="text-[16px] font-wix-madefor tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[32px] font-bold font-custom text-[#f6f1ef] mb-2">98%</div>
              <div className="text-[16px] font-wix-madefor tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
