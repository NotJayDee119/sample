import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';

// Import design/build images
import designImg1 from '../../assets/NewPortfolio/Commercial/Italian Restaurant - Miami Beach.webp';
import designImg2 from '../../assets/NewPortfolio/Commercial/Hotel Renovation - Downtown Miami.webp';
import designImg3 from '../../assets/NewPortfolio/Commercial/Hotel Remodeling - Sunny Isles Beach.webp';

const DesignBuild = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Unified Vision',
      description: 'Single point of contact coordinates design and construction for seamless execution'
    },
    {
      title: 'Time Efficiency',
      description: 'Overlapping design and construction phases reduce overall project timeline'
    },
    {
      title: 'Cost Control',
      description: 'Early contractor input helps optimize budget and prevent costly changes'
    },
    {
      title: 'Quality Assurance',
      description: 'Integrated team ensures design intent is fully realized in construction'
    },
    {
      title: 'Streamlined Communication',
      description: 'No finger-pointing between designer and builder - one responsible team'
    },
    {
      title: 'Innovation & Value',
      description: 'Collaborative approach enables creative solutions and better value engineering'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Programming',
      description: 'Deep dive into your needs, goals, budget, and vision for the project.'
    },
    {
      step: '02',
      title: 'Conceptual Design',
      description: 'Create initial design concepts with cost estimates and schedule projections.'
    },
    {
      step: '03',
      title: 'Design Development',
      description: 'Refine designs with detailed drawings, material selections, and specifications.'
    },
    {
      step: '04',
      title: 'Pre-Construction',
      description: 'Finalize budget, schedule, permits, and logistics before breaking ground.'
    },
    {
      step: '05',
      title: 'Construction & Delivery',
      description: 'Execute the build with ongoing design support and quality oversight.'
    }
  ];

  const benefits = [
    'Faster project completion',
    'Better cost predictability',
    'Enhanced collaboration',
    'Reduced change orders',
    'Single point accountability',
    'Integrated problem-solving'
  ];

  const constructionTypes = [
    {
      title: 'Residential Design Build',
      description: 'Custom homes, major renovations, and additions with integrated design services'
    },
    {
      title: 'Commercial Projects',
      description: 'Office spaces, retail stores, restaurants, and hospitality venues'
    },
    {
      title: 'Multi-Family Housing',
      description: 'Apartment complexes, condos, and townhome developments'
    },
    {
      title: 'Mixed-Use Developments',
      description: 'Projects combining residential, commercial, and retail spaces'
    },
    {
      title: 'Historic Renovations',
      description: 'Sensitive restoration and adaptive reuse of historic properties'
    },
    {
      title: 'Tenant Improvements',
      description: 'Interior build-outs and customization for commercial tenants'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Design Build Miami | Integrated Design & Construction Services</title>
        <meta name="description" content="Streamlined design-build services in Miami. Combine architectural design with construction expertise for faster, more efficient projects. Free consultation." />
        <meta name="keywords" content="design build Miami, design-build contractor, integrated design construction, commercial design build, residential design build" />
        <link rel="canonical" href="https://procontractorsmiami.com/services/design-build" />
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
                Design / Build Services
              </h1>
              <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
              <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
                Streamline your project with integrated design and construction services under one roof.
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
                  Integrated Design & Construction
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-6">
                  We offer comprehensive design build services that streamline your project from concept to completion. Our integrated approach combines architectural design with construction expertise, ensuring seamless communication and efficient execution.
                </p>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  We work closely with you to create custom solutions that reflect your vision while maintaining budget and timeline integrity. Unlike traditional design bid build approaches, our unified team eliminates the friction between designer and builder, resulting in better outcomes and fewer surprises.
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
                  src={designImg1}
                  alt="Design Build Project in Miami"
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
                Comprehensive design build services tailored to your needs.
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
                  src={designImg2}
                  alt="Design Build Approach"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-[42px] font-custom text-[#333333] mb-6">
                  Benefits of Design Build
                </h2>
                <p className="text-[#5b5b5b] text-[16px] font-wix-madefor leading-relaxed mb-8">
                  A design build approach is one of the best investments you can make for your project. Beyond the obvious efficiency improvements, an integrated design and construction process can significantly enhance project outcomes and value.
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

        {/* Comparison Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-custom text-[#333333] mb-4">
                Design Build vs Traditional Approach
              </h2>
              <p className="text-[#5b5b5b] text-[16px] font-wix-madefor max-w-2xl mx-auto">
                See how our integrated approach compares
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-custom text-[#333333] mb-6">Design Build</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Single point of contact and responsibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Overlapping design and construction phases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Early cost and schedule certainty</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Collaborative problem-solving throughout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Fewer change orders and disputes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#5b5b5b]/10 p-10 rounded-2xl">
                <h3 className="text-3xl font-custom text-[#333333] mb-6">Traditional Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Separate contracts for design and construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Sequential phases extend timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Budget unknown until bidding complete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">Potential finger-pointing between parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">✗</span>
                    <span className="text-[#5b5b5b] font-wix-madefor">More change orders and cost overruns</span>
                  </li>
                </ul>
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
              Start Your Design Build Project
            </h2>

            <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-[16px] max-w-2xl mx-auto leading-relaxed">
              Experience the design build difference. Contact us to discuss your project and discover how our integrated approach delivers better results.
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

export default DesignBuild;
