import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Testimonials = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);

  // Load Elfsight script only when component mounts (lazy load)
  useEffect(() => {
    // Set a maximum timeout for loading (5 seconds)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Hide loading after 5 seconds regardless

    // Use Intersection Observer to load script only when user scrolls near the reviews section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Check if script already exists
          const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
          
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://elfsightcdn.com/platform.js';
            script.async = true;
            script.defer = true; // Defer loading
            
            // Set loading to false when script loads
            script.onload = () => {
              clearTimeout(loadingTimeout);
              setTimeout(() => setIsLoading(false), 1000); // Small delay to ensure widget renders
            };
            
            script.onerror = () => {
              clearTimeout(loadingTimeout);
              setIsLoading(false); // Hide loading on error too
            };
            
            document.body.appendChild(script);
          } else if (window.eapps) {
            // If script exists and eapps is loaded, reload widgets
            window.eapps.reinit();
            clearTimeout(loadingTimeout);
            setTimeout(() => setIsLoading(false), 500);
          }
          
          // Disconnect observer after loading
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' }); // Load 200px before the element is visible

    // Observe the elfsight container
    const elfsightContainer = document.querySelector('.elfsight-app-045ebe75-d28e-4bd0-9fdc-a6ad66f64f3e');
    if (elfsightContainer) {
      observer.observe(elfsightContainer);
    }

    return () => {
      clearTimeout(loadingTimeout);
      observer.disconnect();
    };
  }, []);
  const testimonials = [
    {
      rating: 5,
      text: "Procontractors transformed our kitchen beyond our expectations. The team was professional, punctual, and the quality of work is outstanding. We couldn't be happier!",
      name: "Tyler E.",
      role: "Homeowner",
      location: "Florida"
    },
    {
      rating: 5,
      text: "Eduardo was great - he fixed a huge whole in my drywall and repainted the area. He was quick, efficient, and very neat. Everything was cleaned up and as good as new. I would recommend him to anyone looking for repairs!.",
      name: "Jennie B.",
      role: "Homeowner",
      location: "Florida"
    },
    {
      rating: 5,
      text: "Eduardo is punctual, professional, and great attention to detail. He fixed drywall holes and matched the textured ceiling perfectly you’d never know it was patched. He also helped with a few extra things without hesitation. Clean, professional work. Highly recommend if you want quality work done right the first time.",
      name: "Libby G.",
      role: "Homeowner",
      location: "Florida"
    },
    {
      rating: 5,
      text: "Eduardo was fantastic to work with. He was very professional, respectful of our time and did a phenomenal job installing new drywall and painting our house. Would highly recommend Procontractors!.",
      name: "Christina V.",
      role: "Homeowner",
      location: "Florida"
    },
    {
      rating: 5,
      text: "Very happy with the outcome of this project. Eduardo and his team at Procontractors were amazing. They were on time, sent the estimate when promised and left the house clean. Would hire them for every other house project. Thank you for a great service!!.",
      name: "Nicole M.",
      role: "Homeowner",
      location: "Florida"
    },
    {
      rating: 5,
      text: "Eduardo did a great job patching and painting some holes in my drywall. He communicated well, showed up on time, did good work, and was very professional. Would highly recommend.",
      name: "Paul V.",
      role: "Homeowner",
      location: "Florida"
    }
  ];

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
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">CLIENT REVIEWS</span>
          </div>

          <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Client Testimonials
          </h1>
          <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
          <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied clients about their experience working with Procontractors.
          </p>
        </div>
      </section>

      {/* Testimonials Grid - Premium Card Design */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Loading State */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              {/* Spinner */}
              <div className="relative w-20 h-20 mb-6">
                <div className="absolute inset-0 border-4 border-[#f6f1ef] rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#333333] rounded-full border-t-transparent animate-spin"></div>
              </div>
              
              {/* Loading Text */}
              <p className="text-[#333333] font-wix-madefor text-lg font-semibold mb-2">
                Loading Reviews...
              </p>
              <p className="text-[#5b5b5b] font-wix-madefor text-sm">
                Please wait while we fetch our client testimonials
              </p>
            </div>
          )}
          
          {/* Elfsight Google Reviews */}
          <div 
            className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
          >
            <div className="elfsight-app-045ebe75-d28e-4bd0-9fdc-a6ad66f64f3e" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Design */}
      <section className="pt-4 pb-20 bg-[#f6f1ef]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#333333] text-[#f6f1ef] rounded-full text-xs font-custom font-bold tracking-wider mb-6">
              BY THE NUMBERS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {/* Stat 1 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#333333] mb-4 group-hover:scale-110 transition-transform duration-300">
                300+
              </div>
              <p className="text-[#5b5b5b] font-wix-madefor text-[16px] font-semibold">
                Happy Clients
              </p>
            </div>

            {/* Stat 2 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#333333] mb-4 group-hover:scale-110 transition-transform duration-300">
                4.9/5
              </div>
              <p className="text-[#5b5b5b] font-wix-madefor text-[16px] font-semibold">
                Average Rating
              </p>
            </div>

            {/* Stat 3 */}
            <div className="group">
              <div className="text-[42px] font-bold font-custom text-[#333333] mb-4 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <p className="text-[#5b5b5b] font-wix-madefor text-[16px] font-semibold">
                Would Recommend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Elegant */}
      <section className="relative py-28 bg-[#ffffff] overflow-hidden">
        {/* Background Pattern */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#333333] rounded-full mb-8 backdrop-blur-sm">
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">JOIN THE COMMUNITY</span>
          </div>
          
          <h2 className="text-[42px] font-custom text-[#333333] mb-6 tracking-tight">
            Join Our Satisfied Clients
          </h2>
          <div className="w-24 h-1 bg-[#333333] mx-auto mb-8"></div>
          
          <p className="text-[#5b5b5b] font-wix-madefor text-[16px] mb-12 leading-relaxed max-w-2xl mx-auto">
            Experience the Procontractors difference. Contact us today for your complimentary consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="tel:786-789-0097"
              className="px-10 py-4 bg-[#333333] text-[#f6f1ef] rounded-full font-wix-madefor font-bold hover:bg-[#4a4a4a] hover:scale-105 transition-all duration-300 shadow-2xl min-w-[200px]"
            >
              Call 786-789-0097
            </a>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-transparent border-2 border-[#333333] text-[#333333] rounded-full font-wix-madefor font-bold hover:bg-[#333333] hover:text-[#f6f1ef] hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              Get a Quote
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-[#333333]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-wix-madefor text-[16px] font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-wix-madefor text-[16px] font-semibold">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-wix-madefor text-[16px] font-semibold">98% Satisfaction</span>
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

export default Testimonials;
