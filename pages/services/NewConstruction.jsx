import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';

// Import new construction images
import constructionImg1 from '../../assets/NewPortfolio/Commercial/Hotel Renovation - Downtown Miami.webp';
import constructionImg2 from '../../assets/NewPortfolio/Commercial/Hotel Remodeling - Sunny Isles Beach.webp';
import constructionImg3 from '../../assets/NewPortfolio/Commercial/Italian Restaurant - Miami Beach.webp';

const NewConstruction = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Custom Home Building',
      description: 'Turn your vision into reality with fully customized new home construction'
    },
    {
      title: 'Site Preparation',
      description: 'Complete site work including grading, utilities, and foundation preparation'
    },
    {
      title: 'Architectural Services',
      description: 'In-house design capabilities or collaboration with your chosen architect'
    },
    {
      title: 'Structural Excellence',
      description: 'Superior framing, roofing, and structural systems built to last'
    },
    {
      title: 'Premium Systems',
      description: 'Modern HVAC, electrical, and plumbing with energy efficient solutions'
    },
    {
      title: 'Finishing Touches',
      description: 'High end interior finishes, fixtures, and custom millwork throughout'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Vision & Site Analysis',
      description: 'Understand your dream home vision and evaluate site conditions and opportunities.'
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Create architectural plans, obtain permits, and finalize all specifications.'
    },
    {
      step: '03',
      title: 'Foundation & Framing',
      description: 'Establish solid foundation and build structural framework of your home.'
    },
    {
      step: '04',
      title: 'Systems & Enclosure',
      description: 'Install MEP systems, exterior finishes, windows, and roofing.'
    },
    {
      step: '05',
      title: 'Interior & Completion',
      description: 'Complete interior finishes, landscaping, and final inspections.'
    }
  ];

  const benefits = [
    'Built to your exact specifications',
    'Modern building codes & standards',
    'Energy efficient construction',
    'Warranty protection',
    'No renovation compromises',
    'Long term value investment'
  ];

  const constructionTypes = [
    {
      title: 'Single-Family Homes',
      description: 'Custom residential construction for individual homeowners'
    },
    {
      title: 'Luxury Estates',
      description: 'High end custom homes with premium features and finishes'
    },
    {
      title: 'Multi-Family Buildings',
      description: 'Duplexes, triplexes, and small apartment complexes'
    },
    {
      title: 'Commercial Buildings',
      description: 'Office buildings, retail centers, and mixed-use developments'
    },
    {
      title: 'Spec Homes',
      description: 'Builder-designed homes for the open market'
    },
    {
      title: 'Green Building',
      description: 'Sustainable construction with LEED and energy-star features'
    }
  ];

  return (
    <>
      <Helmet>
        <title>New Construction Miami | Custom Home Building & Commercial Construction</title>
        <meta name="description" content="Expert new construction services in Miami. Build your dream home or commercial property with superior craftsmanship and modern standards. Free consultation." />
        <meta name="keywords" content="new construction Miami, custom home builder, home building Miami, commercial construction, new home construction, general contractor Miami" />
        <link rel="canonical" href="https://procontractorsmiami.com/services/new-construction" />
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
                New Construction & Custom Building
              </h1>
              <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
              <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                Build your dream from the ground up with expert new construction that brings your vision to life.
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
                  Build Your Dream Home
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6">
                  We bring your dream home to life with expert new construction services that combine innovative design with superior craftsmanship. From foundation to finishing touches, we manage every phase of your build with meticulous attention to detail.
                </p>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  Our team ensures that your new home is built to the highest standards of quality, efficiency, and modern living. Unlike renovation projects where you must work around existing structures, new construction gives you complete creative freedom to design the perfect home for your lifestyle.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#333333] text-white text-sm font-bold font-wix-madefor hover:bg-[#4a4a4a] transition-all duration-300 rounded-full shadow-lg"
                  >
                    GET FREE QUOTE
                  </button>
                  <button
                    onClick={() => navigate('/portfolio', { state: { category: 'Commercial' } })}
                    className="px-8 py-4 bg-transparent border-2 border-[#333333] text-[#333333] text-sm font-bold font-wix-madefor hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-full"
                  >
                    VIEW GALLERY
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={constructionImg1}
                  alt="New Construction Project in Miami"
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
                Comprehensive new construction services tailored to your needs.
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
                  src={constructionImg2}
                  alt="Custom Home Construction"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Benefits of New Construction
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  A new construction project is one of the best investments you can make. Beyond the obvious aesthetic improvements, a well designed build can significantly enhance your daily life and property value.
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

        {/* Quality & Standards Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-custom text-[#333333] mb-4">
                Quality & Standards
              </h2>
              <p className="text-[#5b5b5b] text-[16px] font-wix-madefor max-w-2xl mx-auto">
                Building to the highest industry standards
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-[22px] font-custom text-[#333333] mb-3">Licensed & Insured</h3>
                <p className="text-[#5b5b5b] font-wix-madefor">
                  Fully licensed general contractors with comprehensive insurance coverage
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-[22px] font-custom text-[#333333] mb-3">Code Compliance</h3>
                <p className="text-[#5b5b5b] font-wix-madefor">
                  All work meets or exceeds current building codes and regulations
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
                <h3 className="text-[22px] font-custom text-[#333333] mb-3">Warranty Protection</h3>
                <p className="text-[#5b5b5b] font-wix-madefor">
                  Comprehensive warranty coverage on workmanship and materials
                </p>
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
              Ready to Build Your Dream?
            </h2>

            <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Start your new construction journey today. Contact us for a consultation and discover how we can build your perfect home.
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

export default NewConstruction;
