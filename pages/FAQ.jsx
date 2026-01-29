import React from 'react';
import Navbar from './Navbar';

const FAQ = () => {
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
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Got Questions?
          </h1>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          <p className="text-[#f6f1ef]/80 font-wix-madefor text-base max-w-3xl mx-auto leading-relaxed">
            At Procontractors, we prioritize radical transparency and welcome every question about our process. Below are some of the most common questions we receive from our clients.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-28 bg-[#f6f1ef]">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-[42px] font-custom text-[#333333] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-[#333333] mx-auto mb-8"></div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-5">
            <FAQItem
              question="What services does Procontractors provide?"
              answer="Procontractors is a licensed General Contractor offering full-service construction and remodeling solutions. Our services include home additions, kitchen remodeling, bathroom remodeling, garage conversions, new construction and commercial renovations. We manage projects from concept to completion, including permits, inspections, subcontractor coordination, and final execution."
            />
            <FAQItem
              question="Are you fully licensed and insured?"
              answer="Yes. Procontractors holds active licenses in General Contracting, Plumbing, Mechanical and Electrical, allowing us to legally and professionally manage every phase of a project in-house. We are fully insured and operate in compliance with all local and state regulations."
            />
            <FAQItem
              question="What does 'turnkey' or 'start-to-finish' service mean?"
              answer="Turnkey service means we handle the entire project for you. This includes planning, permits, design coordination, scheduling, material procurement, licensed trades, inspections, and final delivery. You work with one point of contact, while we manage all moving parts behind the scenes."
            />
            <FAQItem
              question="How is Procontractors different from other contractors?"
              answer="We combine the structure, systems, and standards of a large construction firm with the personalized attention of a hands-on team. Our work is process-driven, not improvised. We prioritize clear scopes, detailed planning, transparent pricing, and consistent communication so there are no surprises during the project."
            />
            <FAQItem
              question="Do you handle permits and inspections?"
              answer="Yes. We manage all required permits and coordinate inspections with the appropriate authorities. Our team ensures that every phase of the project meets code requirements and passes inspections, reducing delays and compliance risks."
            />
            <FAQItem
              question="What types of clients do you typically work with?"
              answer="We work with homeowners, real estate investors, property managers, and business owners seeking high-quality construction and remodeling services. Many of our clients value organization, transparency, and long-term reliability over quick or low-cost solutions."
            />
            <FAQItem
              question="How do I get started?"
              answer="Getting started is simple. Contact us to schedule a free initial consultation. We'll review your goals, assess your space, and guide you through the next steps to determine if Procontractors is the right fit for your project."
            />
            <FAQItem
              question="Do you offer design-build services?"
              answer="Yes. We offer design-build services for residential and commercial projects in Miami and surrounding areas. This means we manage the entire process from initial planning and design coordination to permitting and construction under one streamlined workflow. We work closely with architects, designers, and engineers as needed, and guide you through every phase so there are no surprises along the way."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-wix-madefor text-[#333333] p-6 hover:bg-[#f6f1ef]/20 transition-colors duration-300"
      >
        <span className="font-medium pr-4">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transition-all duration-500 ${isOpen ? 'rotate-45 text-[#5b5b5b]' : 'text-[#333333]'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 text-[#5b5b5b] font-wix-madefor text-sm leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
