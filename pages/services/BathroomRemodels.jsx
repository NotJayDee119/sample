import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';

// Import bathroom images
import bathroomImg1 from '../../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Coral Gables.webp';
import bathroomImg2 from '../../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Miami Beach.webp';
import bathroomImg3 from '../../assets/NewPortfolio/Bathroom/Home Remodeling - Sunny Isles Beach.webp';

const BathroomRemodels = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Luxury Fixtures',
      description: 'Premium faucets, showerheads, and hardware that combine elegance with functionality'
    },
    {
      title: 'Custom Vanities',
      description: 'Tailored vanity designs with ample storage and beautiful countertops'
    },
    {
      title: 'Tile & Stone Work',
      description: 'Expert installation of porcelain, ceramic, marble, and natural stone'
    },
    {
      title: 'Walk-In Showers',
      description: 'Modern frameless glass enclosures with custom tile and luxury features'
    },
    {
      title: 'Spa Features',
      description: 'Rainfall showers, heated floors, towel warmers, and ambient lighting'
    },
    {
      title: 'Smart Storage',
      description: 'Innovative storage solutions to maximize space and reduce clutter'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Design Consultation',
      description: 'Meet with our experts to discuss your vision, style preferences, and functional needs.'
    },
    {
      step: '02',
      title: '3D Visualization',
      description: 'See your new bathroom come to life with detailed 3D renderings and layouts.'
    },
    {
      step: '03',
      title: 'Material Selection',
      description: 'Choose from premium tiles, fixtures, vanities, and finishes at our showroom.'
    },
    {
      step: '04',
      title: 'Expert Installation',
      description: 'Our skilled craftsmen execute the renovation with precision and attention to detail.'
    },
    {
      step: '05',
      title: 'Quality Inspection',
      description: 'Final walkthrough to ensure every element exceeds your expectations.'
    }
  ];

  const benefits = [
    'Increased property value',
    'Enhanced daily comfort',
    'Water efficiency savings',
    'Improved functionality',
    'Spa-like atmosphere',
    'Modernized aesthetics'
  ];

  return (
    <>
      <Helmet>
        <title>Bathroom Remodels Miami | Luxury Bathroom Renovation Services</title>
        <meta name="description" content="Transform your bathroom into a luxury spa retreat. Expert bathroom remodeling in Miami with custom vanities, walk-in showers & premium finishes. Free quote." />
        <meta name="keywords" content="bathroom remodels Miami, bathroom renovation, luxury bathroom, walk-in shower, bathroom contractors Miami, spa bathroom" />
        <link rel="canonical" href="https://procontractorsmiami.com/services/bathroom-remodels" />
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
                Luxury Bathroom Remodeling
              </h1>
              <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
              <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                Transform your bathroom into a luxury retreat with expert remodeling that blends style, comfort, and functionality.
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
                  Transform Your Bathroom
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6">
                  We create a luxurious and practical oasis in your home by turning your bathroom into a custom, spa like retreat. These renovations blend modern comfort, timeless design, and high end finishes to create a refreshing and indulgent space.
                </p>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  Every element is designed around your daily routine to ensure the final result feels personalized and tranquil. From elegant walk-in showers to custom vanities, we handle every detail with expert craftsmanship and attention to your vision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#333333] text-white text-sm font-bold font-wix-madefor hover:bg-[#4a4a4a] transition-all duration-300 rounded-full shadow-lg"
                  >
                    GET FREE QUOTE
                  </button>
                  <button
                    onClick={() => navigate('/portfolio', { state: { category: 'Bathroom' } })}
                    className="px-8 py-4 bg-transparent border-2 border-[#333333] text-[#333333] text-sm font-bold font-wix-madefor hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-full"
                  >
                    VIEW GALLERY
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={bathroomImg1}
                  alt="Luxury Bathroom Remodel in Miami"
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
                Luxury bathroom elements designed for your comfort and style.
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
                A streamlined approach to your bathroom transformation
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f6f1ef] p-8 rounded-2xl flex items-start gap-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl font-custom text-[#333333]/20 font-bold">
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
                  src={bathroomImg2}
                  alt="Master Bathroom Design"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Why Remodel Your Bathroom?
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  A bathroom remodel offers numerous benefits beyond aesthetics. Modern fixtures improve water efficiency, updated layouts enhance functionality, and luxury finishes create a relaxing retreat you'll enjoy daily.
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
              Create Your Dream Bathroom
            </h2>

            <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Let's discuss your bathroom remodeling project. Contact us for a free consultation and personalized quote.
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

export default BathroomRemodels;
