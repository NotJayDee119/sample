import React from 'react';
import Navbar from './Navbar';
import { Settings, Globe, Database } from 'lucide-react';

const Financing = () => {
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
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">FLEXIBLE FINANCING</span>
          </div>

          <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Financing Options
          </h1>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
            Transform your space today with our hassle-free financing solutions tailored to your budget.
          </p>
        </div>
      </section>

      {/* Main Financing Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Keep your budget flexible */}
            <div className="bg-[#e8e4e1] p-16 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center min-h-[350px]">
              <h2 className="text-[42px] font-custom text-[#333333] mb-8">
                Keep your budget flexible
              </h2>
              <a 
                href="https://www.acornfinance.com/pre-qualify/?d=6ISWA&utm_medium=web_pre_qual_link_copy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[#333333] text-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-colors duration-300 font-medium"
              >
                Explore Offers
              </a>
            </div>

            {/* Apply in minutes */}
            <div className="bg-[#e8e4e1] p-16 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center min-h-[350px]">
              <h2 className="text-[42px] font-custom text-[#333333] mb-8">
                Apply in minutes
              </h2>
              <a 
                href="https://www.procontractorsfl.com/_files/ugd/eee548_150c3a05c49845f88036ed70948386ee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-[#333333] text-[#333333] rounded-full hover:bg-[#333333] hover:text-white transition-colors duration-300 font-medium"
              >
                Read more
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hassle-free */}
            <div className="bg-[#e8e4e1] p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Settings className="w-12 h-12 text-[#333333]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[32px] font-custom text-[#333333] mb-4 text-center">
                Hassle-free
              </h3>
              <p className="text-gray-700 text-[16px] text-center leading-relaxed font-wix-madefor">
                No impact to your credit score when checking for pre-qualified offers
              </p>
            </div>

            {/* Safe and Secure */}
            <div className="bg-[#e8e4e1] p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Globe className="w-12 h-12 text-[#333333]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[32px] font-custom text-[#333333] mb-4 text-center">
                Safe and Secure
              </h3>
              <p className="text-gray-700 text-[16px] text-center leading-relaxed font-wix-madefor">
                We partner a network of lenders to bring you flexible financing options for your project
              </p>
            </div>

            {/* Flexible */}
            <div className="bg-[#e8e4e1] p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                <Database className="w-12 h-12 text-[#333333]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[32px] font-custom text-[#333333] mb-4 text-center">
                Flexible
              </h3>
              <p className="text-gray-700 text-[16px] text-center leading-relaxed font-wix-madefor">
                Loans from $1,000–$100,000 with competitive APRs and 2-20 year terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financing;
