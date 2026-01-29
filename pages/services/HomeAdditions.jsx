import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';

// Import home addition images
import additionImg1 from '../../assets/NewPortfolio/Home Additions/Custom Bar - Pinecrest.webp';
import additionImg2 from '../../assets/NewPortfolio/Home Additions/Hotel Remodeling - Sunny Isles Beach.webp';
import additionImg3 from '../../assets/NewPortfolio/Residential/Custom Bar - Pinecrest.webp';

const HomeAdditions = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Room Additions',
      description: 'Add bedrooms, offices, or living spaces that blend seamlessly with your home'
    },
    {
      title: 'Second Story Additions',
      description: 'Expand upward to maximize lot space while gaining significant square footage'
    },
    {
      title: 'Sunrooms & Enclosures',
      description: 'Create bright, naturally-lit spaces for relaxation and entertainment'
    },
    {
      title: 'In-Law Suites',
      description: 'Self-contained living quarters for family members or guests'
    },
    {
      title: 'Garage Conversions',
      description: 'Transform unused garage space into functional living areas'
    },
    {
      title: 'Outdoor Living',
      description: 'Covered patios, screened porches, and outdoor entertainment areas'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Needs Assessment',
      description: 'Understand your space requirements, budget, and how the addition will serve your lifestyle.'
    },
    {
      step: '02',
      title: 'Architectural Design',
      description: 'Create detailed plans that match your home\'s architecture and maximize functionality.'
    },
    {
      step: '03',
      title: 'Permits & Approvals',
      description: 'Navigate zoning requirements and secure all necessary building permits.'
    },
    {
      step: '04',
      title: 'Foundation & Framing',
      description: 'Build a solid structural foundation and framework for your addition.'
    },
    {
      step: '05',
      title: 'Finishing & Integration',
      description: 'Complete interior and exterior work to seamlessly integrate with existing home.'
    }
  ];

  const benefits = [
    'Increase living space',
    'Avoid moving costs',
    'Boost property value',
    'Customize to your needs',
    'Maintain neighborhood ties',
    'Better ROI than moving'
  ];

  const additionTypes = [
    {
      title: 'Master Suite Addition',
      description: 'Private bedroom retreat with ensuite bathroom and walk-in closet'
    },
    {
      title: 'Kitchen Extension',
      description: 'Expand your kitchen for better flow and entertaining capabilities'
    },
    {
      title: 'Home Office',
      description: 'Dedicated workspace separated from main living areas'
    },
    {
      title: 'Family Room',
      description: 'Additional gathering space for entertainment and relaxation'
    },
    {
      title: 'Bonus Room',
      description: 'Flexible space for gym, playroom, or hobby area'
    },
    {
      title: 'Bathroom Addition',
      description: 'Extra bathrooms to accommodate growing family needs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Home Additions Miami | Room Additions & House Expansion Services</title>
        <meta name="description" content="Expert home additions in Miami. Add rooms, second stories, or living spaces without moving. Quality craftsmanship & seamless integration. Free quote." />
        <meta name="keywords" content="home additions Miami, room additions, house expansion, second story addition, home extension Miami, residential additions" />
        <link rel="canonical" href="https://procontractorsmiami.com/services/home-additions" />
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
                Home Additions & Expansions
              </h1>
              <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
              <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                Expand your living space with expertly designed home additions that seamlessly integrate with your existing structure.
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
                  Expand Your Living Space
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6">
                  We expand your living space seamlessly with home additions that flow naturally into your existing structure. If you need more room without leaving the home you love, we add value and comfort through thoughtful planning and expert execution.
                </p>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  Our process ensures that your new living space is built with high-quality craftsmanship and personalized oversight from start to finish. Whether you're adding a master suite, expanding your kitchen, or creating a home office, we ensure the addition matches your home's existing architecture and exceeds your expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#333333] text-white text-sm font-bold font-wix-madefor hover:bg-[#4a4a4a] transition-all duration-300 rounded-full shadow-lg"
                  >
                    GET FREE QUOTE
                  </button>
                  <button
                    onClick={() => navigate('/portfolio', { state: { category: 'Home Additions' } })}
                    className="px-8 py-4 bg-transparent border-2 border-[#333333] text-[#333333] text-sm font-bold font-wix-madefor hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-full"
                  >
                    VIEW GALLERY
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={additionImg1}
                  alt="Home Addition in Miami"
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
                Comprehensive home addition services tailored to your needs.
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
                  src={additionImg2}
                  alt="Home Addition Design"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Benefits of Home Additions
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  A home addition is one of the best investments you can make in your home. Beyond the obvious aesthetic improvements, a well designed addition can significantly enhance your daily life and home value.
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
              Ready to Expand Your Home?
            </h2>

            <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Let's explore how a home addition can meet your needs. Schedule a consultation to discuss your project and receive a detailed quote.
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

export default HomeAdditions;
