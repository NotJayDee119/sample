import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/White on transparent.png';
import { locationsData } from '../data/locationsData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMobileLocationOpen, setIsMobileLocationOpen] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [expandedMobileLocation, setExpandedMobileLocation] = useState(null);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsMobileLocationOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsLocationDropdownOpen(false);
    setIsMobileLocationOpen(false);
    // Smooth scroll to top using Lenis
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e) => {
    setIsMenuOpen(false);
    setIsLocationDropdownOpen(false);
    setIsMobileLocationOpen(false);
    // Smooth scroll to top using Lenis
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileLocation = () => {
    setIsMobileLocationOpen(!isMobileLocationOpen);
  };

  // Use imported locations data
  const locations = locationsData;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] shadow-lg">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-3.5 md:py-3 lg:py-3 xl:py-3.5 flex items-center justify-between">
        {/* Logo - Mobile */}
        <Link to="/" onClick={handleLogoClick} className="flex lg:hidden items-center group flex-shrink-0 z-50 ml-4 mr-auto relative">
          <img src={logo} alt="Procontractors" className="h-32 sm:h-20 md:h-20 w-auto max-w-[280px] sm:max-w-[220px] md:max-w-[240px] object-contain transition-transform duration-300 group-hover:scale-105 absolute top-1/2 -translate-y-1/2" />
        </Link>

        {/* Logo - Desktop */}
        <Link to="/" onClick={handleLogoClick} className="hidden lg:flex items-center group flex-shrink-0 z-50">
          <img src={logo} alt="Procontractors" className="h-20 xl:h-24 w-auto max-w-[260px] xl:max-w-[280px] object-contain transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Navigation Menu - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-6">
          <div className="flex items-center gap-8 xl:gap-10 text-white font-wix-madefor font-normal">
            <Link to="/about" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/portfolio" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/testimonials" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/financing" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group">
              Financing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div 
              className="relative group/location"
              onMouseEnter={() => setIsLocationDropdownOpen(true)}
              onMouseLeave={() => {
                setIsLocationDropdownOpen(false);
                setHoveredLocation(null);
              }}
            >
              <button className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] flex items-center gap-1">
                Locations
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isLocationDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover/location:w-full"></span>
              </button>
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 transition-all duration-300 origin-top ${
                  isLocationDropdownOpen 
                    ? 'opacity-100 scale-100 translate-y-0 visible' 
                    : 'opacity-0 scale-95 -translate-y-3 invisible'
                }`}
              >
                <div className="px-4 py-2 border-b border-gray-200/50 mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Service Areas</p>
                </div>
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="relative group/locationItem"
                    onMouseEnter={() => setHoveredLocation(location.name)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    <Link
                      to={location.url}
                      onClick={handleLinkClick}
                      className="group/item flex items-center justify-between px-4 py-3 text-[#2a2a2a] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 text-[15px] font-wix-madefor font-medium"
                      style={{ 
                        transitionDelay: isLocationDropdownOpen ? `${index * 40}ms` : '0ms' 
                      }}
                    >
                      <span className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-gray-400 group-hover/item:text-[#2a2a2a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location.name}
                      </span>
                      {location.services && location.services.length > 0 ? (
                        <svg className="w-4 h-4 text-gray-400 group-hover/item:text-[#2a2a2a] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-300 group-hover/item:text-[#2a2a2a] group-hover/item:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>
                    
                    {/* Nested Services Submenu */}
                    {location.services && location.services.length > 0 && (
                      <div 
                        className={`absolute left-full top-0 ml-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 py-3 transition-all duration-300 origin-left ${
                          hoveredLocation === location.name
                            ? 'opacity-100 scale-100 translate-x-0 visible' 
                            : 'opacity-0 scale-95 -translate-x-3 invisible'
                        }`}
                      >
                        <div className="px-4 py-2 border-b border-gray-200/50 mb-2">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Services</p>
                        </div>
                        {location.services.map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            to={service.url}
                            onClick={handleLinkClick}
                            className="group/service flex items-center justify-between px-4 py-2.5 text-[#2a2a2a] hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 text-[14px] font-wix-madefor font-medium"
                            style={{ 
                              transitionDelay: hoveredLocation === location.name ? `${serviceIndex * 30}ms` : '0ms' 
                            }}
                          >
                            <span className="flex items-center gap-2">
                              <svg className="w-3.5 h-3.5 text-gray-400 group-hover/service:text-[#2a2a2a] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {service.name}
                            </span>
                            <svg className="w-3.5 h-3.5 text-gray-300 group-hover/service:text-[#2a2a2a] group-hover/service:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Careers Links - Between Nav and Phone */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 flex-shrink-0 mr-12 xl:mr-16">
          <Link to="/careers" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group text-white font-wix-madefor font-normal">
            Careers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="relative hover:text-gray-300 transition-all duration-300 text-[15px] xl:text-[17px] group text-white font-wix-madefor font-normal">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Get a Quote Button */}
        <div className="hidden lg:flex items-center flex-shrink-0">
          <Link 
            to="/contact" 
            onClick={handleLinkClick}
            className="px-5 xl:px-7 py-2.5 bg-white text-[#2a2a2a] hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-wix-madefor font-semibold rounded-full text-[14px] xl:text-[16px] shadow-md hover:shadow-lg"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white hover:text-gray-300 transition-colors duration-300 p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center relative">
            <span 
              className={`block w-6 h-0.5 bg-current absolute transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-current absolute transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-current absolute transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '0px', paddingTop: '82px' }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`bg-[#2a2a2a] transition-all duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ height: 'auto', maxHeight: 'calc(100vh - 76px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full overflow-y-auto px-6 py-6 flex flex-col space-y-1 text-white font-wix-madefor font-medium">
            <Link 
              to="/about" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                About
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/services" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                Services
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/portfolio" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                Portfolio
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/testimonials" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                Testimonials
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/financing" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                Financing
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            {/* Mobile Location Dropdown */}
            <div className="border-b border-white/10">
              <button 
                onClick={toggleMobileLocation}
                className="group w-full hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 transform hover:translate-x-1"
              >
                <span className="flex items-center justify-between">
                  <span>Location</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 ${
                      isMobileLocationOpen ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileLocationOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pr-2 py-2 space-y-1">
                  {locations.map((location, index) => (
                    <div key={index} className="space-y-1">
                      {/* Location Item */}
                      {location.services && location.services.length > 0 ? (
                        <div className="group/item flex items-center gap-1 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                          style={{ 
                            transitionDelay: isMobileLocationOpen ? `${index * 30}ms` : '0ms',
                            animation: isMobileLocationOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s both` : 'none'
                          }}
                        >
                          <Link
                            to={location.url}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 flex-1"
                          >
                            <svg className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location.name}
                          </Link>
                          <button
                            onClick={() => setExpandedMobileLocation(expandedMobileLocation === location.name ? null : location.name)}
                            className="p-1 hover:bg-white/10 rounded transition-all duration-200"
                          >
                            <svg 
                              className={`w-4 h-4 text-gray-500 group-hover/item:text-white transition-all duration-300 ${
                                expandedMobileLocation === location.name ? 'rotate-180' : ''
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <Link
                          to={location.url}
                          onClick={handleLinkClick}
                          className="group/item flex items-center justify-between px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                          style={{ 
                            transitionDelay: isMobileLocationOpen ? `${index * 30}ms` : '0ms',
                            animation: isMobileLocationOpen ? `slideInLeft 0.3s ease-out ${index * 0.05}s both` : 'none'
                          }}
                        >
                          <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-500 group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location.name}
                          </span>
                          <svg className="w-4 h-4 text-gray-500 group-hover/item:text-white group-hover/item:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )}
                      
                      {/* Nested Services for this Location */}
                      {location.services && location.services.length > 0 && (
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            expandedMobileLocation === location.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-6 pr-2 py-1 space-y-1">
                            {location.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.url}
                                onClick={handleLinkClick}
                                className="group/service flex items-center justify-between px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                                style={{ 
                                  transitionDelay: expandedMobileLocation === location.name ? `${serviceIndex * 20}ms` : '0ms'
                                }}
                              >
                                <span className="flex items-center gap-2">
                                  <svg className="w-3.5 h-3.5 text-gray-600 group-hover/service:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {service.name}
                                </span>
                                <svg className="w-3.5 h-3.5 text-gray-600 group-hover/service:text-white group-hover/service:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              to="/careers" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                Careers
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group hover:bg-white/5 rounded-lg transition-all duration-300 py-3 px-4 border-b border-white/10 transform hover:translate-x-1"
              onClick={handleLinkClick}
            >
              <span className="flex items-center justify-between">
                Contact
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3">
              {/* GET A QUOTE Button */}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-white hover:text-gray-300 active:scale-95 transition-all duration-300 font-wix-madefor font-bold rounded-full text-center text-lg border-2 border-white/20 hover:border-white/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                GET A QUOTE
              </Link>
              
              {/* Call Button */}
              <a 
                href="tel:786-789-0097" 
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#2a2a2a] hover:bg-gray-100 active:scale-95 transition-all duration-300 font-wix-madefor font-semibold rounded-full text-center shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                786-789-0097
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
