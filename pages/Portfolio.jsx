import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

// Import Bathroom images - Optimized WebP
import bathroom1 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Coral Gables.webp';
import bathroom2 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Coral Springs.webp';
import bathroom3 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Miami Beach (2).webp';
import bathroom4 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Miami Beach.webp';
import bathroom5 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - Miami Lakes.webp';
import bathroom6 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - North Miami(1).webp';
import bathroom7 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - North Miami(2).webp';
import bathroom8 from '../assets/NewPortfolio/Bathroom/Bathroom Remodeling - North Miami.webp';
import bathroom9 from '../assets/NewPortfolio/Bathroom/Home Remodeling - Sunny Isles Beach.webp';

// Import Commercial images - Optimized WebP
import commercial1 from '../assets/NewPortfolio/Commercial/Church Remodeling - Miami.webp';
import commercial2 from '../assets/NewPortfolio/Commercial/Church Remodeling- Miami.WEBP';
import commercial3 from '../assets/NewPortfolio/Commercial/Hotel Remodeling - Sunny Isles Beach(1).webp';
import commercial4 from '../assets/NewPortfolio/Commercial/Hotel Remodeling - Sunny Isles Beach(2).webp';
import commercial5 from '../assets/NewPortfolio/Commercial/Hotel Remodeling - Sunny Isles Beach.webp';
import commercial6 from '../assets/NewPortfolio/Commercial/Hotel Renovation - Downtown Miami.webp';
import commercial7 from '../assets/NewPortfolio/Commercial/Italian Restaurant - Miami Beach(1).webp';
import commercial8 from '../assets/NewPortfolio/Commercial/Italian Restaurant - Miami Beach.webp';
import commercial9 from '../assets/NewPortfolio/Commercial/Pizza Restaurant - Miami Beach.WEBP';
import commercial10 from '../assets/NewPortfolio/Commercial/Retail Store - Aventura(1).webp';
import commercial11 from '../assets/NewPortfolio/Commercial/Retail Store - Aventura(2).webp';
import commercial12 from '../assets/NewPortfolio/Commercial/Retail Store - Aventura.webp';

// Import Home Additions images - Optimized WebP
import homeAddition1 from '../assets/NewPortfolio/Home Additions/Custom Bar - Pinecrest(1).webp';
import homeAddition2 from '../assets/NewPortfolio/Home Additions/Custom Bar - Pinecrest.webp';
import homeAddition3 from '../assets/NewPortfolio/Home Additions/Hotel Remodeling - Sunny Isles Beach.webp';

// Import Kitchen images - Optimized WebP
import kitchen1 from '../assets/NewPortfolio/Kitchen/Home Remodeling - Fort Lauderdale.webp';
import kitchen2 from '../assets/NewPortfolio/Kitchen/Home Remodeling - Sunny Isles.webp';
import kitchen3 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Downtown Miami.webp';
import kitchen4 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Miami (2).webp';
import kitchen5 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Miami Shores.webp';
import kitchen6 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Miami.webp';
import kitchen7 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - North Miami Beach.webp';
import kitchen8 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - North Miami.webp';
import kitchen9 from '../assets/NewPortfolio/Kitchen/Kitchen Remodeling - Pompano Beach.webp';

// Import Residential images - Optimized WebP
import residential1 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - Coral Gables.webp';
import residential2 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - Coral Springs.webp';
import residential3 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - Miami Beach Beach.webp';
import residential4 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - Miami Beach.webp';
import residential5 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - Miami Lakes.webp';
import residential6 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - North Miami(1).webp';
import residential7 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - North Miami(2).webp';
import residential8 from '../assets/NewPortfolio/Residential/Bathroom Remodeling - North Miami.webp';
import residential9 from '../assets/NewPortfolio/Residential/Custom Bar - Pinecrest.webp';
import residential10 from '../assets/NewPortfolio/Residential/Home Remodeling - Fort Lauderdale.webp';
import residential11 from '../assets/NewPortfolio/Residential/Home Remodeling - Sunny Isles(1).webp';
import residential12 from '../assets/NewPortfolio/Residential/Home Remodeling - Sunny Isles.webp';
import residential13 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - Downtown Miami.webp';
import residential14 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - Miami (2).webp';
import residential15 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - Miami Shores.webp';
import residential16 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - Miami.webp';
import residential17 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - North Miami Beach.webp';
import residential18 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - North Miami.webp';
import residential19 from '../assets/NewPortfolio/Residential/Kitchen Remodeling - Pompano Beach.webp';

const Portfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isClosing, setIsClosing] = useState(false);

  // Set initial filter from navigation state
  useEffect(() => {
    if (location.state?.category) {
      setActiveFilter(location.state.category);
      // Clear the state to prevent it from persisting on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const filterCategories = [
    'All',
    'Kitchen',
    'Bathroom',
    'Home Additions',
    'Residential',
    'Commercial'
  ];

  const portfolioItems = [
    // Bathroom Projects
    {
      image: bathroom1,
      title: 'Bathroom Remodeling - Coral Gables',
      category: 'Bathroom'
    },
    {
      image: bathroom2,
      title: 'Bathroom Remodeling - Coral Springs',
      category: 'Bathroom'
    },
    {
      image: bathroom3,
      title: 'Bathroom Remodeling - Miami Beach',
      category: 'Bathroom'
    },
    {
      image: bathroom4,
      title: 'Bathroom Remodeling - Miami Beach',
      category: 'Bathroom'
    },
    {
      image: bathroom5,
      title: 'Bathroom Remodeling - Miami Lakes',
      category: 'Bathroom'
    },
    {
      image: bathroom6,
      title: 'Bathroom Remodeling - North Miami',
      category: 'Bathroom'
    },
    {
      image: bathroom7,
      title: 'Bathroom Remodeling - North Miami',
      category: 'Bathroom'
    },
    {
      image: bathroom8,
      title: 'Bathroom Remodeling - North Miami',
      category: 'Bathroom'
    },
    {
      image: bathroom9,
      title: 'Home Remodeling - Sunny Isles Beach',
      category: 'Bathroom'
    },
    // Commercial Projects
    {
      image: commercial1,
      title: 'Church Remodeling - Miami',
      category: 'Commercial'
    },
    {
      image: commercial2,
      title: 'Church Remodeling - Miami',
      category: 'Commercial'
    },
    {
      image: commercial3,
      title: 'Hotel Remodeling - Sunny Isles Beach',
      category: 'Commercial'
    },
    {
      image: commercial4,
      title: 'Hotel Remodeling - Sunny Isles Beach',
      category: 'Commercial'
    },
    {
      image: commercial5,
      title: 'Hotel Remodeling - Sunny Isles Beach',
      category: 'Commercial'
    },
    {
      image: commercial6,
      title: 'Hotel Renovation - Downtown Miami',
      category: 'Commercial'
    },
    {
      image: commercial7,
      title: 'Italian Restaurant - Miami Beach',
      category: 'Commercial'
    },
    {
      image: commercial8,
      title: 'Italian Restaurant - Miami Beach',
      category: 'Commercial'
    },
    {
      image: commercial9,
      title: 'Pizza Restaurant - Miami Beach',
      category: 'Commercial'
    },
    {
      image: commercial10,
      title: 'Retail Store - Aventura',
      category: 'Commercial'
    },
    {
      image: commercial11,
      title: 'Retail Store - Aventura',
      category: 'Commercial'
    },
    {
      image: commercial12,
      title: 'Retail Store - Aventura',
      category: 'Commercial'
    },
    // Home Additions Projects
    {
      image: homeAddition1,
      title: 'Custom Bar - Pinecrest',
      category: 'Home Additions'
    },
    {
      image: homeAddition2,
      title: 'Custom Bar - Pinecrest',
      category: 'Home Additions'
    },
    {
      image: homeAddition3,
      title: 'Hotel Remodeling - Sunny Isles Beach',
      category: 'Home Additions'
    },
    // Kitchen Projects
    {
      image: kitchen1,
      title: 'Home Remodeling - Fort Lauderdale',
      category: 'Kitchen'
    },
    {
      image: kitchen2,
      title: 'Home Remodeling - Sunny Isles',
      category: 'Kitchen'
    },
    {
      image: kitchen3,
      title: 'Kitchen Remodeling - Downtown Miami',
      category: 'Kitchen'
    },
    {
      image: kitchen4,
      title: 'Kitchen Remodeling - Miami',
      category: 'Kitchen'
    },
    {
      image: kitchen5,
      title: 'Kitchen Remodeling - Miami Shores',
      category: 'Kitchen'
    },
    {
      image: kitchen6,
      title: 'Kitchen Remodeling - Miami',
      category: 'Kitchen'
    },
    {
      image: kitchen7,
      title: 'Kitchen Remodeling - North Miami Beach',
      category: 'Kitchen'
    },
    {
      image: kitchen8,
      title: 'Kitchen Remodeling - North Miami',
      category: 'Kitchen'
    },
    {
      image: kitchen9,
      title: 'Kitchen Remodeling - Pompano Beach',
      category: 'Kitchen'
    },
    // Residential Projects
    {
      image: residential1,
      title: 'Bathroom Remodeling - Coral Gables',
      category: 'Residential'
    },
    {
      image: residential2,
      title: 'Bathroom Remodeling - Coral Springs',
      category: 'Residential'
    },
    {
      image: residential3,
      title: 'Bathroom Remodeling - Miami Beach',
      category: 'Residential'
    },
    {
      image: residential4,
      title: 'Bathroom Remodeling - Miami Beach',
      category: 'Residential'
    },
    {
      image: residential5,
      title: 'Bathroom Remodeling - Miami Lakes',
      category: 'Residential'
    },
    {
      image: residential6,
      title: 'Bathroom Remodeling - North Miami',
      category: 'Residential'
    },
    {
      image: residential7,
      title: 'Bathroom Remodeling - North Miami',
      category: 'Residential'
    },
    {
      image: residential8,
      title: 'Bathroom Remodeling - North Miami',
      category: 'Residential'
    },
    {
      image: residential9,
      title: 'Custom Bar - Pinecrest',
      category: 'Residential'
    },
    {
      image: residential10,
      title: 'Home Remodeling - Fort Lauderdale',
      category: 'Residential'
    },
    {
      image: residential11,
      title: 'Home Remodeling - Sunny Isles',
      category: 'Residential'
    },
    {
      image: residential12,
      title: 'Home Remodeling - Sunny Isles',
      category: 'Residential'
    },
    {
      image: residential13,
      title: 'Kitchen Remodeling - Downtown Miami',
      category: 'Residential'
    },
    {
      image: residential14,
      title: 'Kitchen Remodeling - Miami',
      category: 'Residential'
    },
    {
      image: residential15,
      title: 'Kitchen Remodeling - Miami Shores',
      category: 'Residential'
    },
    {
      image: residential16,
      title: 'Kitchen Remodeling - Miami',
      category: 'Residential'
    },
    {
      image: residential17,
      title: 'Kitchen Remodeling - North Miami Beach',
      category: 'Residential'
    },
    {
      image: residential18,
      title: 'Kitchen Remodeling - North Miami',
      category: 'Residential'
    },
    {
      image: residential19,
      title: 'Kitchen Remodeling - Pompano Beach',
      category: 'Residential'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleImageClick = (item, index) => {
    setSelectedImage(item);
    setSelectedIndex(index);
  };

  const handleNext = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  }, [selectedIndex, filteredItems]);

  const handlePrevious = useCallback(() => {
    const prevIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  }, [selectedIndex, filteredItems]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300); // Match animation duration
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          handleClose();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handleNext, handlePrevious, handleClose]);

  return (
    <div className="min-h-screen bg-[#f6f1ef]">
      <Navbar />

      {/* Hero Section - Modern & Minimalist */}
      <section className="relative pt-40 pb-24 bg-[#333333] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center">
            {/* Subtle Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#f6f1ef] rounded-full animate-pulse"></span>
              <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">OUR WORK</span>
            </div>

            <h1 className="text-[72px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
              Our Portfolio
            </h1>
            <div className="w-24 h-1 bg-[#5b5b5b] mx-auto mb-8"></div>
            <p className="text-[#f6f1ef]/80 font-wix-madefor text-[16px] max-w-3xl mx-auto leading-relaxed">
              Showcase of our finest work and successful projects completed for satisfied clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section - Modern & Clean */}
      <section className="py-12 bg-[#f6f1ef]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-wix-madefor text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#333333] text-[#f6f1ef] shadow-lg scale-105'
                    : 'bg-white text-[#333333] hover:bg-[#5b5b5b] hover:text-[#f6f1ef] shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Clean Modern Design */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#5b5b5b] font-wix-madefor text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container */}
                <div className="relative h-[300px] overflow-hidden cursor-pointer" onClick={() => handleImageClick(item, index)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* CTA Section - Modern & Elegant */}
      <section className="relative py-28 bg-[#333333] overflow-hidden">
        {/* Background Pattern */}
        <div className="hidden md:block absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5b5b5b]/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-[#f6f1ef] font-custom text-sm font-medium tracking-wide">GET STARTED TODAY</span>
          </div>

          <h2 className="text-[42px] font-custom text-[#f6f1ef] mb-6 tracking-tight">
            Ready to Start Your Project?
          </h2>

          <p className="text-[#f6f1ef]/80 font-wix-madefor mb-12 text-base max-w-2xl mx-auto leading-relaxed">
            Contact us today for a complimentary consultation and detailed estimate. Let's bring your vision to life with precision and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-[#f6f1ef] text-[#333333] text-base font-bold font-wix-madefor hover:bg-white hover:scale-105 transition-all duration-300 rounded-full shadow-2xl hover:shadow-[#f6f1ef]/20 min-w-[200px]"
            >
              Get Quote
            </button>
            <a
              href="tel:7867890097"
              className="px-10 py-4 bg-transparent border-2 border-[#f6f1ef] text-[#f6f1ef] text-base font-bold font-wix-madefor hover:bg-[#f6f1ef] hover:text-[#333333] hover:scale-105 transition-all duration-300 rounded-full min-w-[200px] text-center"
            >
              Call 786-789-0097
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-[#f6f1ef]/60">
            <div className="text-center">
              <div className="text-4xl font-bold font-custom text-[#f6f1ef] mb-2">300+</div>
              <div className="text-[16px] font-wix-madefor tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-custom text-[#f6f1ef] mb-2">10+</div>
              <div className="text-[16px] font-wix-madefor tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-custom text-[#f6f1ef] mb-2">98%</div>
              <div className="text-[16px] font-wix-madefor tracking-wide">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal - Professional Redesign */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            animation: isClosing ? 'fadeOut 0.3s ease-out' : 'fadeIn 0.3s ease-out'
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Main Image Container */}
          <div 
            className="relative w-full max-w-6xl mx-auto px-4 md:px-20 z-10 flex items-center justify-center"
            style={{
              animation: isClosing ? 'scaleOut 0.3s ease-out' : 'scaleIn 0.3s ease-out'
            }}
          >
            {/* Image Container */}
            <div className="relative group inline-block">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain transition-all duration-500 ease-in-out"
              />
              
              {/* Close Button - Positioned on Image Corner */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 group z-20 shadow-lg"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Arrows - Outside Image */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:-translate-x-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 group-hover:translate-x-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Bottom Bar - Progress & Thumbnails Hint */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col items-center justify-center gap-3">
            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedIndex(idx);
                    setSelectedImage(filteredItems[idx]);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === selectedIndex 
                      ? 'w-8 h-2 bg-white' 
                      : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            
            {/* Project Info */}
            <div className="text-center">
              <h3 className="text-white font-custom text-xl md:text-2xl font-semibold tracking-tight">{selectedImage.title}</h3>
              <span className="text-white/60 font-custom text-sm md:text-base uppercase tracking-wider">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;
