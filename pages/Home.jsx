import React, { useReducer, useCallback, useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { projects, steps, testimonials, starRatings } from '../data/homeData';
import { services } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import headerImage from '../assets/header.avif';
import mixerImage from '../assets/mixer.png';
import bathtubImage from '../assets/bathtub.png';
import aboutBackgroundImage from '../assets/slider1/be6b51_87e025bca05249b3970a1e6c2226ed05~mv2.avif';
import ctaBackgroundImage from '../assets/Slider1/photoslide1.avif';

// Preload critical image
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

// Preload header image on module load
preloadImage(headerImage);

// Reducer for state management
const initialState = {
  currentStep: 0,
  activeTab: 'remodeling',
  currentProject: 0,
  currentTestimonial: 0
};

function homeReducer(state, action) {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, currentStep: action.payload };
    case 'SET_TAB':
      return { ...state, activeTab: action.payload };
    case 'SET_PROJECT':
      return { ...state, currentProject: action.payload };
    case 'SET_TESTIMONIAL':
      return { ...state, currentTestimonial: action.payload };
    default:
      return state;
  }
}

const Home = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(homeReducer, initialState);
  const { currentStep, activeTab, currentProject, currentTestimonial } = state;

  // URL Preview state
  const [urlPreviews, setUrlPreviews] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [isMapActive, setIsMapActive] = useState(false);

  // Extract URLs from text
  const extractUrls = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex) || [];
  };

  // Fetch URL metadata for preview using a more reliable method
  const fetchUrlMetadata = async (url) => {
    try {
      // Extract domain for favicon
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      
      // Try multiple favicon/logo sources
      const possibleLogos = [
        `https://www.google.com/s2/favicons?domain=${domain}&sz=128`, // Google favicon service
        `${urlObj.origin}/favicon.ico`,
        `${urlObj.origin}/apple-touch-icon.png`,
        `${urlObj.origin}/android-chrome-192x192.png`
      ];

      // Use CORS proxy to fetch page metadata
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      const html = data.contents;

      // Extract metadata with better regex patterns
      const titleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                        html.match(/<meta[^>]*name=["']twitter:title["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                        html.match(/<title[^>]*>([^<]+)<\/title>/i);
      
      const descriptionMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                              html.match(/<meta[^>]*name=["']twitter:description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                              html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
      
      const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
      const twitterImageMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
      
      // Prefer OG image, then Twitter image, then Google favicon
      let imageUrl = null;
      if (ogImageMatch && ogImageMatch[1]) {
        imageUrl = ogImageMatch[1];
        console.log('Found OG image:', imageUrl);
      } else if (twitterImageMatch && twitterImageMatch[1]) {
        imageUrl = twitterImageMatch[1];
        console.log('Found Twitter image:', imageUrl);
      } else {
        // Fallback to Google's favicon service - ALWAYS set this
        imageUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
        console.log('Using Google favicon:', imageUrl);
      }

      // Make relative URLs absolute
      if (imageUrl && !imageUrl.startsWith('http')) {
        imageUrl = new URL(imageUrl, url).href;
      }

      const result = {
        url,
        title: titleMatch ? titleMatch[1].trim() : domain,
        description: descriptionMatch ? descriptionMatch[1].trim() : '',
        image: imageUrl, // This should NEVER be null now
        loading: false
      };
      
      console.log('Final preview data:', result);
      return result;
    } catch (error) {
      console.warn('Failed to fetch URL metadata:', error);
      
      // Fallback: still show domain favicon
      try {
        const urlObj = new URL(url);
        const domain = urlObj.hostname;
        return {
          url,
          title: domain,
          description: 'Click to visit',
          image: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
          loading: false
        };
      } catch {
        return {
          url,
          title: url,
          description: '',
          image: null,
          loading: false
        };
      }
    }
  };

  // Handle message text change and URL detection
  const handleMessageChange = async (e) => {
    const text = e.target.value;
    setMessageText(text);

    const urls = extractUrls(text);
    const newUrls = urls.filter(url => !urlPreviews.some(preview => preview.url === url));

    if (newUrls.length > 0) {
      // Add loading previews
      const loadingPreviews = newUrls.map(url => ({
        url,
        title: 'Loading...',
        description: '',
        image: null,
        loading: true
      }));

      setUrlPreviews(prev => [...prev, ...loadingPreviews]);

      // Fetch metadata for new URLs
      const metadataPromises = newUrls.map(url => fetchUrlMetadata(url));
      const metadata = await Promise.all(metadataPromises);

      setUrlPreviews(prev => {
        const updated = [...prev];
        metadata.forEach(meta => {
          const index = updated.findIndex(p => p.url === meta.url);
          if (index !== -1) {
            updated[index] = meta;
          }
        });
        return updated;
      });
    }

    // Remove previews for URLs that are no longer in the text
    setUrlPreviews(prev => prev.filter(preview => urls.includes(preview.url)));
  };

  // Load Elfsight script with better performance
  useEffect(() => {
    // Only load if testimonials section exists and script hasn't been loaded
    const testimonialsSection = document.getElementById('testimonials');
    if (!testimonialsSection) return;

    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      script.defer = true; // Add defer for better performance
      script.onload = () => {
        // Only reinit if eapps exists and we need to reload widgets
        if (window.eapps && window.eapps.reinit) {
          setTimeout(() => window.eapps.reinit(), 100); // Small delay to ensure DOM is ready
        }
      };
      script.onerror = (error) => {
        console.warn('Failed to load Elfsight script:', error);
      };
      document.head.appendChild(script); // Move to head for better loading
    } else if (window.eapps && window.eapps.reinit) {
      // Only reinit if already loaded
      setTimeout(() => window.eapps.reinit(), 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${headerImage})`,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/80 via-[#333333]/60 to-white/95"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-8 animate-fade-in space-y-8">
            <h1 className="text-[72px] font-custom text-white leading-tight drop-shadow-2xl">
              Where Innovation Meets<br />
              Renovation
            </h1>

            <button 
              onClick={() => navigate('/contact')} 
              className="px-12 py-5 bg-[#f6f1ef] text-[#333333] text-base font-semibold font-wix-madefor hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-[0_20px_60px_rgba(246,241,239,0.3)]"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        {/* Background Image with Fade - Only on Right Side */}
        <div
          className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-cover bg-no-repeat opacity-15 transition-opacity duration-700 hover:opacity-25"
          style={{
            backgroundImage: `url(${aboutBackgroundImage})`,
            backgroundPosition: 'left center'
          }}
        ></div>

        {/* White overlay gradient to blend left to right */}
        <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f6f1ef] rounded-full mb-8">
              <span className="text-[#333333] font-custom text-sm font-semibold tracking-wide uppercase">About Us</span>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-[42px] font-custom text-[#333333] leading-tight">
                General Contractor<br />
                Throughout South Florida
              </h2>

              <div className="space-y-6 text-[#5b5b5b] font-wix-madefor leading-relaxed">
                <p className="hover:text-[#333333] transition-colors duration-300 text-[16px]">
                  Procontractors is a boutique general contractor specializing in high-end residential remodeling and light commercial build-outs for residential and commercial property owners. We offer the systems and expertise of a major construction company, delivered through a highly personalized, hands-on team that prioritizes your vision.
                </p>

                <p className="hover:text-[#333333] transition-colors duration-300 text-[16px]">
                  For years, our team has been committed to radical transparency, accountability, and process over improvisation. We don't just build structures; we build long-term relationships by doing right by our clients, partners, and subcontractors on every project. From luxury residential renovations to specialized commercial build-outs, let us transform your goals into a solid reality.
                </p>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <section className="py-32 bg-gradient-to-b from-[#f6f1ef] to-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Title */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#333333] rounded-full mb-6">
              <span className="text-[#f6f1ef] font-custom text-sm font-semibold tracking-wide uppercase">How We Work</span>
            </div>

            <h2 className="text-[42px] font-custom text-[#333333] mb-6">
              Our Simple 3-Step Process
            </h2>
            <p className="text-[#5b5b5b] font-wix-madefor max-w-3xl mx-auto leading-relaxed text-[16px]">
              At Procontractors, we prioritize process over improvisation to ensure every project is executed with large-firm standards and boutique-level attention.
            </p>
          </div>

          {/* Step Icons */}
          <div className="flex justify-center items-center gap-6 mb-20">
            {[0, 1, 2].map((index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => dispatch({ type: 'SET_STEP', payload: index })}
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 shadow-lg ${currentStep === index
                      ? 'bg-primary text-white shadow-xl scale-110'
                      : 'bg-[#f6f1ef] text-primary hover:bg-gray-50'
                    }`}
                  aria-label={`Go to step ${index + 1}`}
                >
                  {index === 0 && (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
                {index < 2 && (
                  <div className={`h-1 w-16 rounded transition-all duration-500 ${currentStep > index ? 'bg-primary' : 'bg-gray-300'
                    }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Slider Content */}
          <div className="relative px-2 sm:px-4">
            {/* Navigation Arrows - Mobile Optimized */}
            <button
              onClick={() => dispatch({ type: 'SET_STEP', payload: currentStep > 0 ? currentStep - 1 : 2 })}
              className="absolute left-0 sm:-left-2 md:-left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white text-[#333333] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-105 group"
              aria-label="Previous step"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => dispatch({ type: 'SET_STEP', payload: currentStep < 2 ? currentStep + 1 : 0 })}
              className="absolute right-0 sm:-right-2 md:-right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white text-[#333333] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-105 group"
              aria-label="Next step"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Step Cards - Fully Responsive */}
            <div className="max-w-6xl mx-auto px-8 sm:px-10 md:px-12 lg:px-16">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-auto md:h-[480px]">
                  {/* Image - Top on Mobile, Left on Desktop */}
                  <div className="h-80 md:h-full overflow-hidden relative bg-gradient-to-br from-[#333333] to-[#5b5b5b]">
                    <img
                      key={currentStep}
                      src={steps[currentStep].image}
                      alt={steps[currentStep].title}
                      className="w-full h-full object-cover transition-all duration-700 ease-in-out animate-fade-in"
                      loading="lazy"
                    />
                  </div>

                  {/* Content - Bottom on Mobile, Right on Desktop */}
                  <div className="bg-gradient-to-br from-[#333333] to-[#5b5b5b] text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[280px] sm:min-h-[320px] md:min-h-0">
                    <div key={currentStep} className="animate-fade-in space-y-4 sm:space-y-5 transition-all duration-700">
                      {/* Step Number Badge */}
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#f6f1ef] rounded-full transition-all duration-500">
                        <span className="text-[#333333] font-bold text-lg sm:text-xl font-wix-madefor transition-all duration-500">{currentStep + 1}</span>
                      </div>

                      <h3 className="text-[32px] font-bold font-custom leading-tight !text-[#f6f1ef] transition-all duration-500" style={{ color: '#f6f1ef' }}>
                        {steps[currentStep].title}
                      </h3>

                      <p className="text-[#f6f1ef]/90 font-wix-madefor leading-relaxed transition-all duration-500 text-[14px] sm:text-[15px] md:text-[16px]" style={{ color: 'rgba(246, 241, 239, 0.9)' }}>
                        {steps[currentStep].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Dots - Modern Style */}
            <div className="flex justify-center gap-4 mt-12">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => dispatch({ type: 'SET_STEP', payload: index })}
                  className={`transition-all duration-500 rounded-full shadow-md ${currentStep === index
                      ? 'w-16 h-4 bg-[#333333] scale-105'
                      : 'w-4 h-4 bg-[#5b5b5b]/30 hover:bg-[#5b5b5b]/60 hover:scale-110'
                    }`}
                  aria-label={`Go to step ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h3 className="text-[42px] font-custom text-[#2a2a2a] mb-12 text-center">
              Our Services
            </h3>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {/* Service 1 - Kitchen Renovations */}
              <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20 h-full">
                                <div className="flex flex-col items-center text-center space-y-6 h-full">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <img src={mixerImage} alt="Kitchen Mixer" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-2xl text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Kitchen Renovations
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor flex-grow">
                                        Modern, elegant, and functional kitchens designed for your lifestyle.
                                    </p>

                                    {/* Learn More Button */}
                                    <Link
                                      to="/services/kitchen-renovations"
                                      className="mt-auto px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md"
                                    >
                                      Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Service 2 - Bathroom Remodels */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20 h-full">
                                <div className="flex flex-col items-center text-center space-y-6 h-full">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <img src={bathtubImage} alt="Bathtub" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-2xl text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Bathroom Remodels
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor flex-grow">
                                        Luxurious upgrades that turn your bathroom into a personal retreat.
                                    </p>

                                    {/* Learn More Button */}
                                    <Link
                                      to="/services/bathroom-remodels"
                                      className="mt-auto px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md"
                                    >
                                      Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Service 3 - Home Remodeling */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20 h-full">
                                <div className="flex flex-col items-center text-center space-y-6 h-full">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <div className="text-[#2a2a2a] group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-2xl text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Home Remodeling
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor flex-grow">
                                        Custom solutions to enhance style, flow, and comfort throughout your home.
                                    </p>

                                    {/* Learn More Button */}
                                    <Link
                                      to="/services/home-remodeling"
                                      className="mt-auto px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md"
                                    >
                                      Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Service 4 - Home Additions */}
                            <div className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group w-full max-w-sm mx-auto border border-gray-200 hover:border-[#2a2a2a]/20 h-full">
                                <div className="flex flex-col items-center text-center space-y-6 h-full">
                                    {/* Icon Container */}
                                    <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-2xl group-hover:bg-[#2a2a2a]/5 transition-all duration-300">
                                        <div className="text-[#2a2a2a] group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="font-custom font-bold text-2xl text-[#2a2a2a] leading-tight min-h-[3.5rem] flex items-center">
                                        Home Additions
                                    </h4>

                                    {/* Decorative Divider */}
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#2a2a2a]/30 to-transparent"></div>

                                    {/* Description */}
                                    <p className="text-gray-600 text-[16px] leading-relaxed font-wix-madefor flex-grow">
                                        Expand your living space with expert craftsmanship and seamless integration.
                                    </p>

                                    {/* Learn More Button */}
                                    <Link
                                      to="/services/home-additions"
                                      className="mt-auto px-6 py-2.5 bg-[#2a2a2a] text-white hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold text-sm hover:scale-105 shadow-md"
                                    >
                                      Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Title */}
          <h2 className="text-[42px] font-custom text-primary text-center mb-20">
            Our Projects
          </h2>

          {/* Project Slider */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => dispatch({ type: 'SET_PROJECT', payload: currentProject > 0 ? currentProject - 1 : projects.length - 1 })}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-[#333333] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-105"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => dispatch({ type: 'SET_PROJECT', payload: currentProject < projects.length - 1 ? currentProject + 1 : 0 })}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-[#333333] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-105"
              aria-label="Next project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Project Card */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-auto md:h-[600px]">
                  {/* Image */}
                  <div className="h-80 md:h-full overflow-hidden relative bg-gradient-to-br from-[#333333] to-[#5b5b5b]">
                    <img
                      key={currentProject}
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 animate-fade-in"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-primary text-white p-10 md:p-12 flex flex-col justify-center min-h-[400px] md:min-h-0">
                    <div key={currentProject} className="animate-fade-in space-y-6">
                      <h2 className="text-[42px] font-bold font-custom mb-6">
                        {projects[currentProject].title}
                      </h2>

                      <div className="space-y-4 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                        <div className="flex items-start space-x-3">
                          <span className="text-secondary font-semibold text-sm uppercase tracking-wider min-w-[100px]">Client:</span>
                          <span className="text-white font-medium font-wix-madefor text-[16px]">{projects[currentProject].client}</span>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div className="flex items-start space-x-3">
                          <span className="text-secondary font-semibold text-sm uppercase tracking-wider min-w-[100px]">Contractor:</span>
                          <span className="text-white font-medium font-wix-madefor text-[16px]">{projects[currentProject].contractor}</span>
                        </div>
                        <div className="h-px bg-white/10"></div>
                        <div className="flex items-start space-x-3">
                          <span className="text-secondary font-semibold text-sm uppercase tracking-wider min-w-[100px]">Budget:</span>
                          <span className="text-white font-bold font-wix-madefor text-[16px]">{projects[currentProject].budget}</span>
                        </div>
                      </div>

                      <blockquote className="text-white/90 font-wix-madefor italic leading-relaxed border-l-4 border-secondary/50 pl-6 my-6 bg-white/5 py-4 rounded-r-lg text-[16px]">
                        "{projects[currentProject].testimonial}"
                      </blockquote>

                      <button onClick={() => navigate('/contact')} className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-lg font-wix-madefor font-semibold w-fit hover:scale-105 shadow-lg">
                        GET A QUOTE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => dispatch({ type: 'SET_PROJECT', payload: index })}
                  className={`transition-all duration-300 rounded-full ${currentProject === index
                      ? 'w-12 h-3 bg-primary'
                      : 'w-3 h-3 bg-gray-300 hover:bg-accent'
                    }`}
                  aria-label={`Go to project ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Image with Fade - Only on Right Side */}
        <div
          className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-cover bg-center bg-no-repeat opacity-25 transition-opacity duration-700 hover:opacity-35"
          style={{
            backgroundImage: `url(${ctaBackgroundImage})`
          }}
        ></div>

        {/* White overlay gradient to blend left to right */}
        <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-[42px] font-custom text-primary mb-8 leading-tight">
                Choose Procontractors<br />
                For Your Project
              </h2>

              <div className="space-y-5 text-accent font-wix-madefor leading-relaxed">
                <p className="text-[16px]">
                  Whether you are planning a high-end remodel for a single room or an entire home renovation, you can trust Procontractors for residential and light commercial services that elevate your property. It is essential to choose a contractor that prioritizes doing things the right way, offering the specialized resources and systems of a large firm delivered through a boutique, hands-on approach. We guide your project with professional oversight from the initial exploratory call to the masterful final walkthrough.
                </p>

                <p className="text-[16px]">
                  We believe in process over improvisation, which means we never show up unready for your project. We invest the necessary time during the planning phase to ensure the final results exceed your expectations in both quality and service.
                </p>
              </div>

              <button onClick={() => navigate('/contact')} className="mt-8 px-10 py-4 bg-primary text-white hover:bg-accent transition-all duration-300 rounded-lg font-wix-madefor font-semibold hover:scale-105 shadow-lg text-[16px]">
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-[42px] font-bold font-custom text-white mb-4">
            Get help planning and executing<br />
            your project today!
          </h2>
          <p className="text-secondary/90 mb-8 text-[16px]" style={{ fontFamily: "'Wix Madefor Display', serif" }}>
            Learn more about our services.
          </p>
          <button onClick={() => navigate('/contact')} className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 rounded-lg font-wix-madefor font-semibold hover:scale-105">
            GET A QUOTE
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f6f1ef] rounded-full mb-6">
              <span className="text-[#333333] font-custom text-sm font-semibold tracking-wide uppercase">Client Reviews</span>
            </div>

            <h2 className="text-[42px] font-custom text-[#333333] mb-6">
              Our Commitment to Quality
            </h2>
          </div>

          {/* Elfsight Google Reviews | Untitled Google Reviews */}
          <div className="elfsight-app-ab7ae93a-cbf1-44e0-9ba2-4e16d3cdaf39" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Service Locations List */}
            <div>
              <h2 className="text-[42px] font-custom text-primary mb-8">
                Our Service<br />
                Locations
              </h2>

              <div className="space-y-4">
                <Link
                  to="/locations/miami-dade"
                  className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-primary font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Wix Madefor Display', serif" }}>Miami-Dade</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/locations/broward"
                  className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-primary font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Wix Madefor Display', serif" }}>Broward</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/locations/coral-gables"
                  className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-primary font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Wix Madefor Display', serif" }}>Coral Gables</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/locations/fort-lauderdale"
                  className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-primary font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Wix Madefor Display', serif" }}>Fort Lauderdale</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/locations/miami-shores"
                  className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-primary font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Wix Madefor Display', serif" }}>Miami Shores</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/locations/miami-beach"
                  className="flex items-center justify-between py-4 border-b border-gray-300 hover:border-primary transition-colors duration-300 group cursor-pointer"
                >
                  <span className="text-primary font-medium group-hover:text-accent transition-colors" style={{ fontFamily: "'Wix Madefor Display', serif" }}>Miami Beach</span>
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Google Map */}
            <div className="rounded-2xl h-[600px] overflow-hidden shadow-xl relative">
              {/* Click to Activate Overlay */}
              {!isMapActive && (
                <div 
                  onClick={() => setIsMapActive(true)}
                  className="absolute inset-0 z-10 cursor-pointer"
                >
                </div>
              )}
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d544891.8863607991!2d-80.54466274844884!3d25.91058525523948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6681a512beb129a5%3A0x1737a80daecd14d5!2sProcontractors%20LLC!5e1!3m2!1sen!2sph!4v1768489211016!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: isMapActive ? 'auto' : 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Miami Service Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(rgba(51,51,51,0.85), rgba(51,51,51,0.85)), url('https://img.freepik.com/free-photo/black-white-scene-showcasing-life-construction-workers-site_23-2151333280.jpg?t=st=1767456166~exp=1767459766~hmac=57ff9e5bf25cd1e258880ad84b2b55f641ce2815094696052b0a59bffd57d079&w=1480')" }}>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f6f1ef] rounded-full">
                <span className="text-[#333333] font-custom text-sm font-semibold tracking-wide uppercase">Contact Us</span>
              </div>

              <h2 className="text-[42px] font-custom leading-tight">
                Start Your<br />
                Project Today
              </h2>

              <p className="text-[#f6f1ef]/90 font-wix-madefor leading-relaxed text-[16px]">
                Send us a message and we will reply your project to our team right away. Tell us what the form and we will answer all of your questions as soon as possible.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+17867890097"
                  className="inline-block px-8 py-3 border-2 border-[#f6f1ef] text-[#f6f1ef] hover:bg-[#f6f1ef] hover:text-[#333333] transition-all duration-300 rounded-full font-wix-madefor font-bold text-lg"
                >
                  786-789-0097
                </a>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-[42px] font-custom text-[#333333] mb-8 text-center">
                Contact Us
              </h3>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor bg-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor bg-white"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor bg-white"
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  value={messageText}
                  onChange={handleMessageChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-[#333333] transition-colors font-wix-madefor resize-none bg-white"
                ></textarea>

                {/* URL Previews */}
                {urlPreviews.length > 0 && (
                  <div className="space-y-3">
                    {urlPreviews.map((preview, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex items-start gap-3">
                          {preview.image && !preview.loading ? (
                            <div className="w-16 h-16 flex-shrink-0">
                              <img
                                src={preview.image}
                                alt={preview.title}
                                className="w-full h-full object-cover rounded-lg bg-white"
                                onError={(e) => {
                                  // Fallback to link icon if image fails
                                  e.target.parentElement.innerHTML = `
                                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                      </svg>
                                    </div>
                                  `;
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            {preview.loading ? (
                              <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                              </div>
                            ) : (
                              <>
                                <h4 className="font-semibold text-[#333333] truncate mb-1 text-[16px]">
                                  {preview.title}
                                </h4>
                                {preview.description && (
                                  <p className="text-gray-600 line-clamp-2 text-[16px]">
                                    {preview.description}
                                  </p>
                                )}
                                <p className="text-gray-400 mt-1 truncate text-[16px]">
                                  {preview.url}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full px-10 py-5 bg-[#333333] text-[#f6f1ef] hover:bg-[#5b5b5b] transition-all duration-300 rounded-full font-wix-madefor font-semibold hover:scale-105 shadow-xl text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Accordion Item Component with React.memo for performance
const AccordionItem = React.memo(({ title, description }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 pb-4 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-wix-madefor text-primary hover:text-accent transition-colors duration-300 py-2 group"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title} section`}
      >
        <span className="text-[16px] font-bold group-hover:translate-x-1 transition-transform duration-300">{title}</span>
        <svg
          className={`w-6 h-6 transition-all duration-500 ${isOpen ? 'rotate-45 text-accent' : 'text-primary'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="text-accent font-wix-madefor leading-relaxed bg-secondary/30 p-4 rounded-lg">
          <p className="text-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

export default Home;
