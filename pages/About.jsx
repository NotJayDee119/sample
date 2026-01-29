import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import JuanHeadshot from '../assets/Juan_Headshot.jpg';
import PaolaHeadshot from '../assets/Paola_Headshot.jpg';

const About = () => {
  const navigate = useNavigate();
  
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
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">OUR STORY</span>
          </div>

          <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            About Us
          </h1>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          <p className="text-[#f6f1ef]/80 font-wix-madefor max-w-3xl mx-auto leading-relaxed text-[16px]">
            Transforming homes and businesses across South Florida with quality craftsmanship and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story Section - Premium Design */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
                  FOUNDED ON EXCELLENCE
                </div>
                <h2 className="text-[42px] font-custom text-[#333333] mb-8 leading-tight">
                  Founders & Our Story
                </h2>
              </div>
              
              <div className="space-y-6 text-[#5b5b5b] font-wix-madefor leading-[1.8]">
                <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#333333] first-letter:mr-1 first-letter:float-left first-letter:font-custom first-letter:leading-[0.9] text-[16px]">
                  Procontractors LLC was founded by Juan Chahin and Paola Dos Santos with a shared belief: successful construction is not driven by shortcuts or personalities, it is driven by process, accountability, and disciplined execution.
                </p>
                
                <p className="text-[16px]">
                  Juan brings deep technical and operational leadership to the firm. With an engineering background and years of experience managing complex, multimillion dollar construction projects across hospitality, commercial, and high end residential sectors, his career has been shaped in environments where schedules are rigid, inspections are unforgiving, and mistakes carry real financial consequences. That experience established the operational backbone of Procontractors: planning, coordination, and control.
                </p>
                
                <p className="text-[16px]">
                  Paola complements that foundation with a strong background in industrial engineering, business strategy, and customer success. Holding an MBA in Human Resources Management, her experience spans international sales, account management, and client operations, where clarity, systems, and communication are essential to scale results. Her perspective ensures that Procontractors is not only built well in the field, but structured professionally behind the scenes.
                </p>
                
                <p className="text-[16px]">
                  Procontractors was created to bridge a common gap in the construction industry: the disconnect between technical execution and client experience.
                </p>
                
                <p className="text-[16px]">
                  Too often, projects suffer not from lack of effort, but from weak planning, unclear contracts, poor communication, and reactive decision making. The company was intentionally designed to eliminate that friction.
                </p>
                
                <p className="text-[16px]">
                  Today, Procontractors operates as a boutique, owner led construction firm that applies large firm discipline without large firm bureaucracy. Every project benefits from direct leadership involvement, clear scopes, realistic schedules, transparent budgets, and proactive communication before problems turn into delays or disputes.
                </p>
                
                <p className="text-[#333333] text-[16px]">
                  The result is a construction partner built for clients who value predictability, professionalism, and long term relationships. Not improvisation. Not volume. But process and the results that come from it.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#f6f1ef]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#333333] font-wix-madefor">Licensed & Insured Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#f6f1ef]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#333333] font-wix-madefor">10+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#333333] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#f6f1ef]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#333333] font-wix-madefor">Satisfaction Guaranteed</span>
                </div>
              </div>

              <button onClick={() => navigate('/contact')} className="mt-8 px-10 py-4 bg-[#333333] text-[#f6f1ef] rounded-full font-wix-madefor font-bold hover:bg-[#5b5b5b] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3 group">
                GET A QUOTE
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Image - Modern Card Design */}
            <div className="relative flex items-start">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#333333]/20 to-[#5b5b5b]/20 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full">
                <img
                  src="https://static.wixstatic.com/media/be6b51_99d06defa2ab4cfcb85d811f39d8464d~mv2.jpg/v1/fit/w_1290,h_2796,q_90,enc_avif,quality_auto/be6b51_99d06defa2ab4cfcb85d811f39d8464d~mv2.jpg"
                  alt="Professional contractor"
                  className="w-full h-[1000px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#333333] text-[#f6f1ef] p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-bold font-custom mb-1">300+</div>
                <div className="text-sm font-wix-madefor opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section - Premium Cards */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
              THE EXPERTS
            </div>
            <h2 className="text-[42px] font-custom text-[#333333] mb-6">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-6"></div>
            <p className="text-[#5b5b5b] font-wix-madefor max-w-2xl mx-auto leading-relaxed text-[16px]">
              Experienced professionals dedicated to bringing your vision to life.
            </p>
          </div>

          {/* Team Grid - Horizontal Layout */}
          <div className="space-y-16 max-w-6xl mx-auto">
            
            {/* Team Member 1 - Juan Chahin */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-[#f6f1ef] transition-all duration-500 group"
            >
              {/* Image Column - 2/5 width */}
              <div 
                onClick={() => navigate('/team/juan')}
                className="lg:col-span-2 cursor-pointer transition-all duration-300 relative group/image h-full"
              >
                <div className="relative h-full min-h-[500px] overflow-hidden">
                  <img
                    src={JuanHeadshot}
                    alt="Juan Chahin - Founder"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gray-600/0 group-hover/image:bg-gray-600/30 transition-all duration-300"></div>
                  
                  {/* Name Badge Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl text-center transition-all duration-500 group-hover/image:bg-gray-500">
                      <h3 className="text-[32px] font-custom text-[#333333] mb-1 transition-colors duration-500 group-hover/image:text-white">
                        Juan Chahin
                      </h3>
                      <p className="text-[#5b5b5b] font-wix-madefor tracking-widest uppercase transition-colors duration-500 group-hover/image:text-white/70 text-[16px]">
                        Founder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Column - 3/5 width */}
              <div className="lg:col-span-3 p-10">
                <div className="space-y-5 text-[#5b5b5b] font-wix-madefor leading-[1.9]">
                  <p className="text-[16px]">
                    <span className="text-[#333333] text-[16px]">Juan Chahin</span> is the Founder of Procontractors LLC and a <span className="font-semibold text-[#333333]">licensed Florida General Contractor</span> with an engineering background and over a decade of experience delivering complex construction projects across South Florida.
                  </p>
                  <p className="text-[16px]">
                    Before founding Procontractors, Juan managed multimillion-dollar ground-up and interior buildouts in hospitality, commercial, and high-end residential environments where tight schedules, strict inspections, and zero-margin errors demanded structure over improvisation.
                  </p>
                  <p className="text-[16px]">
                    At Procontractors, Juan remains directly involved in every project, applying large-firm discipline within a boutique, hands-on model. His focus is simple: clear scopes, realistic schedules, transparent budgets, and proactive communication so clients experience fewer surprises and better outcomes.
                  </p>
                </div>
              </div>
            </div>


            { /* Team Member 2 - Paola Dos Santos */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-[#f6f1ef] transition-all duration-500 group"
            >
              {/* Content Column - 3/5 width */}
              <div className="lg:col-span-3 p-10 flex items-center h-full">
                <div className="space-y-5 text-[#5b5b5b] font-wix-madefor leading-[1.9]">
                  <p className="text-[16px]">
                    <span className="text-[#333333] text-[16px]">Paola Dos Santos</span> is the Co-Founder of Procontractors LLC, bringing a strong background in <span className="font-semibold text-[#333333]">industrial engineering, business strategy, and customer success</span> to the firm's leadership.
                  </p>
                  <p className="text-[16px]">
                    She holds an MBA in Human Resources Management and a Bachelor's degree in Industrial Engineering. Over the past several years, Paola has built her career in international sales, account management, and customer success roles, where she consistently applied analytical thinking to improve processes and strengthen client relationships.
                  </p>
                  <p className="text-[16px]">
                    At Procontractors, Paola focuses on client experience, operational systems, contract clarity, and internal process development. Her role ensures that projects are not only well-built, but professionally managed from onboarding through completion, supporting the company's commitment to transparency, accountability, and long-term partnerships.
                  </p>
                </div>
              </div>

              {/* Image Column - 2/5 width */}
              <div 
                onClick={() => navigate('/team/paola')}
                className="lg:col-span-2 cursor-pointer transition-all duration-300 relative group/image h-full"
              >
                <div className="relative h-full min-h-[500px] overflow-hidden">
                  <img
                    src={PaolaHeadshot}
                    alt="Paola Dos Santos - Co-Founder"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/70 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gray-600/0 group-hover/image:bg-gray-600/30 transition-all duration-300"></div>

                  {/* Name Badge Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl text-center transition-all duration-500 group-hover/image:bg-gray-500">
                      <h3 className="text-[32px] font-custom text-[#333333] mb-1 transition-colors duration-500 group-hover/image:text-white">
                        Paola Dos Santos
                      </h3>
                      <p className="text-[#5b5b5b] font-wix-madefor tracking-widest uppercase transition-colors duration-500 group-hover/image:text-white/70 text-[16px]">
                        CO-FOUNDER
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Our Core Values Section - Modern Cards */}
      <section className="py-28 bg-[#f6f1ef]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
              WHAT DRIVES US
            </div>
            <h2 className="text-[42px] font-custom text-[#333333] mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-6"></div>
            <p className="text-[#5b5b5b] font-wix-madefor max-w-2xl mx-auto text-[16px]">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="group bg-white rounded-3xl p-8 text-center hover:bg-[#333333] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-[#333333]/10">
              <div className="w-20 h-20 bg-[#f6f1ef] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#5b5b5b] transition-all duration-500 group-hover:scale-110">
                <svg className="w-10 h-10 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-[22px] font-bold font-custom text-[#333333] group-hover:text-[#f6f1ef] mb-4 transition-colors duration-500">
                Accountability
              </h4>
              <p className="text-[#5b5b5b] group-hover:text-[#f6f1ef]/80 font-wix-madefor leading-relaxed transition-colors duration-500 text-[16px]">
                We take full ownership of every project, providing professional coordination and overseeing every decision and outcome from start to finish. We provide the highly personalized oversight of a boutique team that treats your investment as our own.
              </p>
            </div>

            {/* Teamwork */}
            <div className="group bg-white rounded-3xl p-8 text-center hover:bg-[#333333] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-[#333333]/10">
              <div className="w-20 h-20 bg-[#f6f1ef] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#5b5b5b] transition-all duration-500 group-hover:scale-110">
                <svg className="w-10 h-10 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-[22px] font-bold font-custom text-[#333333] group-hover:text-[#f6f1ef] mb-4 transition-colors duration-500">
                Precision
              </h4>
              <p className="text-[#5b5b5b] group-hover:text-[#f6f1ef]/80 font-wix-madefor leading-relaxed transition-colors duration-500 text-[16px]">
                We believe that strong planning and rigorous systems lead to superior results, avoiding the common pitfalls of last-minute guesswork. By applying the standards and expertise of a large firm to our boutique model, we ensure every renovation is executed with efficiency.
              </p>
            </div>

            {/* Transparency */}
            <div className="group bg-white rounded-3xl p-8 text-center hover:bg-[#333333] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-[#333333]/10">
              <div className="w-20 h-20 bg-[#f6f1ef] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#5b5b5b] transition-all duration-500 group-hover:scale-110">
                <svg className="w-10 h-10 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-[22px] font-bold font-custom text-[#333333] group-hover:text-[#f6f1ef] mb-4 transition-colors duration-500">
                Transparency
              </h4>
              <p className="text-[#5b5b5b] group-hover:text-[#f6f1ef]/80 font-wix-madefor leading-relaxed transition-colors duration-500 text-[16px]">
                We operate with absolute honesty through clear scopes of work, open communication, and honest pricing at every stage of the project. Our commitment to transparency eliminates friction, ensuring you are fully informed and confident in the value you are receiving.
              </p>
            </div>

            {/* Partnership */}
            <div className="group bg-white rounded-3xl p-8 text-center hover:bg-[#333333] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-[#333333]/10">
              <div className="w-20 h-20 bg-[#f6f1ef] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-[#5b5b5b] transition-all duration-500 group-hover:scale-110">
                <svg className="w-10 h-10 text-[#333333] group-hover:text-[#f6f1ef] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-[22px] font-bold font-custom text-[#333333] group-hover:text-[#f6f1ef] mb-4 transition-colors duration-500">
                Partnership
              </h4>
              <p className="text-[#5b5b5b] group-hover:text-[#f6f1ef]/80 font-wix-madefor leading-relaxed transition-colors duration-500 text-[16px]">
                We focus on building lasting relationships by doing right by our clients, subcontractors, and partners on every single job. Our goal is to be your lifelong trusted partner, leveraging our network to transfer the highest quality and value directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Design */}
      <section className="relative py-28 bg-[#333333] overflow-hidden">
        {/* Background Pattern */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {/* Stat 1 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#f6f1ef] mb-3 group-hover:scale-110 transition-transform duration-300">
                    300+
              </div>
              <p className="text-[#f6f1ef]/70 font-wix-madefor text-sm md:text-base tracking-wide text-[16px]">
                Projects Completed
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#f6f1ef] mb-3 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <p className="text-[#f6f1ef]/70 font-wix-madefor text-sm md:text-base tracking-wide text-[16px]">
                Years Experience
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#f6f1ef] mb-3 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <p className="text-[#f6f1ef]/70 font-wix-madefor text-sm md:text-base tracking-wide text-[16px]">
                Client Satisfaction
              </p>
            </div>

            {/* Stat 4 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#f6f1ef] mb-3 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <p className="text-[#f6f1ef]/70 font-wix-madefor text-sm md:text-base tracking-wide text-[16px]">
                Team Members
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Elegant */}
      <section className="py-28 bg-[#f6f1ef]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-8">
            LET'S GET STARTED
          </div>

          <h2 className="text-[42px] font-custom text-[#333333] mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          
          <p className="text-[#5b5b5b] font-wix-madefor mb-12 leading-relaxed max-w-2xl mx-auto text-[16px]">
            Ready to transform your space? Contact us today for a complimentary consultation and detailed estimate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="tel:+17867890097" className="px-10 py-4 bg-[#333333] text-[#f6f1ef] rounded-full font-wix-madefor font-bold hover:bg-[#5b5b5b] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl min-w-[240px] text-center">
              Call 786-789-0097
            </a>
            <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-transparent border-2 border-[#333333] text-[#333333] rounded-full font-wix-madefor font-bold hover:bg-[#333333] hover:text-[#f6f1ef] transition-all duration-300 hover:scale-105 min-w-[240px]">
             GET A QUOTE
            </button>
          </div>

          {/* Additional Trust Elements */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-[#5b5b5b]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-wix-madefor text-[16px]">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-wix-madefor text-[16px]">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-wix-madefor text-[16px]">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
