import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';

// Import home remodeling images
import homeImg1 from '../../assets/NewPortfolio/Home Additions/Hotel Remodeling - Sunny Isles Beach.webp';
import homeImg2 from '../../assets/NewPortfolio/Residential/Home Remodeling - Fort Lauderdale.webp';
import homeImg3 from '../../assets/NewPortfolio/Residential/Home Remodeling - Sunny Isles.webp';

const HomeRemodeling = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Full-Service Remodeling',
      description: 'Complete home transformations from structural changes to finishing touches'
    },
    {
      title: 'Layout Optimization',
      description: 'Reconfigure spaces to improve flow, functionality, and modern living'
    },
    {
      title: 'Interior Design',
      description: 'Expert design services to create cohesive, beautiful living spaces'
    },
    {
      title: 'Structural Updates',
      description: 'Safe removal of walls, additions, and structural modifications'
    },
    {
      title: 'Premium Finishes',
      description: 'High-quality flooring, lighting, fixtures, and custom millwork'
    },
    {
      title: 'Energy Efficiency',
      description: 'Modern insulation, windows, and HVAC systems for comfort and savings'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Vision & Discovery',
      description: 'In-depth consultation to understand your lifestyle, needs, and remodeling goals.'
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Comprehensive design plans including layouts, elevations, and material selections.'
    },
    {
      step: '03',
      title: 'Permitting & Planning',
      description: 'Handle all permits, approvals, and logistics for a smooth project start.'
    },
    {
      step: '04',
      title: 'Expert Execution',
      description: 'Skilled craftsmen transform your space with precision and quality control.'
    },
    {
      step: '05',
      title: 'Final Reveal',
      description: 'Complete walkthrough and quality assurance before you enjoy your new home.'
    }
  ];

  const benefits = [
    'Enhanced comfort & livability',
    'Increased home value',
    'Improved energy efficiency',
    'Modernized aesthetics',
    'Better functionality',
    'Personalized spaces'
  ];

  const remodelingTypes = [
    {
      title: 'Whole Home Remodeling',
      description: 'Complete transformation of your entire living space with cohesive design'
    },
    {
      title: 'Living Room Updates',
      description: 'Modern living areas with open concepts and entertainment-focused designs'
    },
    {
      title: 'Master Suite Renovation',
      description: 'Luxurious bedroom and bathroom combinations for ultimate relaxation'
    },
    {
      title: 'Basement Finishing',
      description: 'Transform unused basement space into functional living areas'
    },
    {
      title: 'Multi-Room Projects',
      description: 'Coordinated remodeling across multiple rooms for seamless flow'
    },
    {
      title: 'Historic Restoration',
      description: 'Preserve character while updating functionality and systems'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Remodeling Miami | Complete Home Renovation Services</title>
        <meta name="description" content="Full-service home remodeling in Miami. Transform your living space with expert design, quality craftsmanship & personalized service. Free consultation." />
        <meta name="keywords" content="home remodeling Miami, home renovation, interior remodeling, whole house remodel, home improvement Miami, residential remodeling" />
        <link rel="canonical" href="https://procontractorsmiami.com/services/home-remodeling" />
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
                Complete Home Remodeling Services
              </h1>
              <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
              <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                Transform your living space with comprehensive home remodeling that blends style, functionality, and expert craftsmanship.
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
                  Reimagine Your Home
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6">
                  We specialize in full-service home remodeling designed to transform your living space while improving comfort, functionality, and long-term value. From reconfiguring layouts to upgrading finishes, our team manages every phase of the remodeling process with precision, transparency, and expert craftsmanship.
                </p>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  Our boutique approach combines elegant design with personalized touches to enhance how you live and feel at home. Whether you're updating a single room or transforming your entire house, we bring decades of experience and dedication to quality that sets us apart.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#333333] text-white text-sm font-bold font-wix-madefor hover:bg-[#4a4a4a] transition-all duration-300 rounded-full shadow-lg"
                  >
                    GET FREE QUOTE
                  </button>
                  <button
                    onClick={() => navigate('/portfolio', { state: { category: 'Residential' } })}
                    className="px-8 py-4 bg-transparent border-2 border-[#333333] text-[#333333] text-sm font-bold font-wix-madefor hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-full"
                  >
                    VIEW GALLERY
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={homeImg1}
                  alt="Complete Home Remodeling in Miami"
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
                Comprehensive remodeling services tailored to your needs.
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
                  src={homeImg2}
                  alt="Home Renovation Design"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Benefits of Remodeling
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  A comprehensive home remodel is a significant investment that pays dividends in comfort, functionality, and property value. Beyond aesthetics, remodeling can modernize outdated systems, improve energy efficiency, and adapt your home to your evolving lifestyle.
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
              Ready to Transform Your Home?
            </h2>

            <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Let's discuss your home remodeling vision. Schedule a free consultation to explore possibilities and get a detailed quote.
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

export default HomeRemodeling;
