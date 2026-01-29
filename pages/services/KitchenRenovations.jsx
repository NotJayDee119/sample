import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';

// Import kitchen images
import kitchenImg1 from '../../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Miami Shores.webp';
import kitchenImg2 from '../../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Downtown Miami.webp';
import kitchenImg3 from '../../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Miami.webp';

const KitchenRenovations = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Custom Cabinetry',
      description: 'Premium custom cabinets designed to maximize storage and enhance your kitchen aesthetic'
    },
    {
      title: 'Modern Appliances',
      description: 'Integration of high end, energy efficient appliances for optimal functionality'
    },
    {
      title: 'Countertop Excellence',
      description: 'Quartz, granite, and marble countertops that combine beauty with durability'
    },
    {
      title: 'Smart Layouts',
      description: 'Optimized kitchen layouts that improve workflow and maximize space efficiency'
    },
    {
      title: 'Lighting Design',
      description: 'Layered lighting solutions including task, ambient, and accent lighting'
    },
    {
      title: 'Backsplash & Finishes',
      description: 'Stunning tile work and premium finishes that complete your dream kitchen'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We meet to discuss your vision, budget, and timeline for your kitchen renovation.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed designs and 3D renderings of your new kitchen.'
    },
    {
      step: '03',
      title: 'Material Selection',
      description: 'Choose from premium materials, finishes, and fixtures that match your style.'
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Expert craftsmen bring your kitchen to life with precision and care.'
    },
    {
      step: '05',
      title: 'Final Walkthrough',
      description: 'We ensure every detail meets your expectations before project completion.'
    }
  ];

  const benefits = [
    'Increased home value',
    'Improved functionality',
    'Enhanced aesthetics',
    'Better energy efficiency',
    'More storage space',
    'Modern conveniences'
  ];

  return (
    <>
      <Helmet>
        <title>Kitchen Renovations Miami | Custom Kitchen Remodeling Services</title>
        <meta name="description" content="Transform your kitchen with expert renovation services in Miami. Custom cabinetry, modern appliances, and premium finishes. Free consultation & quote." />
        <meta name="keywords" content="kitchen renovations Miami, kitchen remodeling, custom kitchen cabinets, kitchen design Miami, kitchen contractors" />
        <link rel="canonical" href="https://procontractorsmiami.com/services/kitchen-renovations" />
      </Helmet>

      <div className="min-h-screen bg-[#f6f1ef]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-40 pb-24 bg-[#333333] overflow-hidden">
          <div className="hidden md:block absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="text-center">

              <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
                Kitchen Renovations in Miami
              </h1>
              <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
              <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                Transform the heart of your home with custom kitchen renovations that blend style, functionality, and expert craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Expert Kitchen Remodeling
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6">
                  We modernize your culinary space with stylish and functional upgrades that transform the heart of your home into something extraordinary. Whether you prefer sleek modern layouts or classic chef inspired designs, we craft expert kitchen remodeling services tailored specifically to your lifestyle.
                </p>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  Our goal is to blend high end finishes with practical solutions that meet the standards of a large firm through a hands on team. From custom cabinetry to premium countertops, we handle every aspect of your kitchen renovation with precision and care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#333333] text-white text-sm font-bold font-wix-madefor hover:bg-[#4a4a4a] transition-all duration-300 rounded-full shadow-lg"
                  >
                    GET FREE QUOTE
                  </button>
                  <button
                    onClick={() => navigate('/portfolio', { state: { category: 'Kitchen' } })}
                    className="px-8 py-4 bg-transparent border-2 border-[#333333] text-[#333333] text-sm font-bold font-wix-madefor hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-full"
                  >
                    VIEW GALLERY
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={kitchenImg1}
                  alt="Modern Kitchen Renovation in Miami"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-[#f6f1ef]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-custom text-[#333333] mb-4">
                What We Offer
              </h2>
              <p className="text-[#5b5b5b] text-[16px] font-wix-madefor max-w-2xl mx-auto">
                Comprehensive kitchen renovation services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-[22px] font-custom text-[#333333] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-custom text-[#333333] mb-4">
                Our Process
              </h2>
              <p className="text-[#5b5b5b] text-[16px] font-wix-madefor max-w-2xl mx-auto">
                A seamless journey from concept to completion
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f6f1ef] p-8 rounded-2xl flex items-start gap-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-[42px] font-custom text-[#333333]/20 font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] font-custom text-[#333333] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#5b5b5b] font-wix-madefor text-[16px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-[#f6f1ef]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img
                  src={kitchenImg2}
                  alt="Custom Kitchen Design"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Benefits of Kitchen Renovation
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  A kitchen renovation is one of the best investments you can make in your home. Beyond the obvious aesthetic improvements, a well designed kitchen can significantly enhance your daily life and home value.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[16px] text-[#333333] font-wix-madefor">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-28 bg-[#333333] overflow-hidden">
          <div className="hidden md:block absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
            <h2 className="text-[42px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
              Ready to Transform Your Kitchen?
            </h2>

            <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Contact us today for a complimentary consultation and detailed estimate. Let's bring your dream kitchen to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-[#f6f1ef] text-[#333333] text-base font-bold font-wix-madefor hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-2xl min-w-[200px]"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => navigate('/services')}
                className="px-10 py-4 bg-transparent border-2 border-[#f6f1ef] text-[#f6f1ef] text-base font-bold font-wix-madefor hover:bg-[#f6f1ef] hover:text-[#333333] hover:scale-105 transition-all duration-300 rounded-full min-w-[200px]"
              >
                All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KitchenRenovations;
