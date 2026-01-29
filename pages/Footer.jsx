import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/White on transparent.png';
import thumbtackLogo from '../assets/Thumtack.png';
import { locationsData } from '../data/locationsData';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [expandedLocation, setExpandedLocation] = useState(null);

  const handleLogoClick = () => {
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

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleLocation = (locationName) => {
    setExpandedLocation(expandedLocation === locationName ? null : locationName);
  };

  // Use imported locations data
  const locations = locationsData;

  return (
    <footer className="bg-gradient-to-b from-primary to-[#1a1a1a] text-secondary">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2 text-left">
            <Link to="/" onClick={handleLogoClick} className="inline-block mb-6">
              <img src={logo} alt="Procontractors" className="h-24 sm:h-28 md:h-16 lg:h-20 xl:h-24 w-auto max-w-[280px] sm:max-w-[300px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px] object-contain transition-transform duration-300 hover:scale-105" />
            </Link>
            <p className="text-secondary/80 font-wix-madefor text-[16px] leading-relaxed mb-6 max-w-md">
              Your trusted partner for residential and light commercial construction projects. We provide masterful workmanship, radical transparency, and exceptional results through a boutique, hands-on approach.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-start gap-3 text-[16px]">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:786-789-0097" className="hover:text-white transition-colors font-wix-madefor">786-789-0097</a>
              </div>
              <div className="flex items-center justify-start gap-3 text-[16px]">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:admin@procontractorsfl.com" className="hover:text-white transition-colors font-wix-madefor">admin@procontractorsfl.com</a>
              </div>
              <div className="flex items-start justify-start gap-3 text-[16px]">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-wix-madefor">
                  <Link to="/locations/miami-dade" className="hover:text-white transition-colors">Miami-Dade</Link>
                  {" I "}
                  <Link to="/locations/broward" className="hover:text-white transition-colors">Broward</Link>
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-left">
            <button 
              onClick={() => toggleSection('company')}
              className="flex items-center justify-between w-full md:pointer-events-none"
            >
              <h3 className="text-white font-bold font-wix-madefor text-[16px] mb-3 md:mb-6">Company</h3>
              <svg 
                className={`w-5 h-5 text-white transition-transform duration-300 md:hidden ${openSection === 'company' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`space-y-3 font-wix-madefor text-[16px] overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${openSection === 'company' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li><Link to="/" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/services" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/about" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">About</Link></li>
              <li><Link to="/portfolio" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Portfolio</Link></li>
              <li><Link to="/testimonials" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Testimonials</Link></li>
              <li><Link to="/careers" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link to="/faq" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">FAQ</Link></li>
            </ul>
          </div>

          {/* Project Types */}
          <div className="text-left">
            <button 
              onClick={() => toggleSection('projects')}
              className="flex items-center justify-between w-full md:pointer-events-none"
            >
              <h3 className="text-white font-bold font-wix-madefor text-[16px] mb-3 md:mb-6">Project Types</h3>
              <svg 
                className={`w-5 h-5 text-white transition-transform duration-300 md:hidden ${openSection === 'projects' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`space-y-3 font-wix-madefor text-[16px] overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${openSection === 'projects' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li><Link to="/services" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Kitchen Renovations</Link></li>
              <li><Link to="/services" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Bathroom Remodels</Link></li>
              <li><Link to="/services" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Home Remodeling</Link></li>
              <li><Link to="/services" className="text-secondary/80 hover:text-white transition-colors hover:translate-x-1 inline-block">Home Additions</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="text-left">
            <button 
              onClick={() => toggleSection('locations')}
              className="flex items-center justify-between w-full md:pointer-events-none"
            >
              <h3 className="text-white font-bold font-wix-madefor text-[16px] mb-3 md:mb-6">Locations</h3>
              <svg 
                className={`w-5 h-5 text-white transition-transform duration-300 md:hidden ${openSection === 'locations' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${openSection === 'locations' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-2 font-wix-madefor text-[16px]">
                {locations.map((location, index) => (
                  <div key={index}>
                    {/* Location with nested services */}
                    {location.services && location.services.length > 0 ? (
                      <div>
                        <div className="flex items-center gap-1">
                          <Link
                            to={location.url}
                            className="text-secondary/80 hover:text-white transition-colors flex-1 py-1"
                          >
                            {location.name}
                          </Link>
                          <button
                            onClick={() => toggleLocation(location.name)}
                            className="p-1 hover:bg-white/10 rounded transition-all duration-200 md:hidden"
                          >
                            <svg 
                              className={`w-4 h-4 text-secondary/80 hover:text-white transition-all duration-300 ${
                                expandedLocation === location.name ? 'rotate-180' : ''
                              }`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Nested Services - Mobile Only */}
                        <div 
                          className={`md:hidden overflow-hidden transition-all duration-300 ${
                            expandedLocation === location.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-4 py-1 space-y-2">
                            {location.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.url}
                                className="block text-sm text-secondary/70 hover:text-white transition-colors py-1"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={location.url}
                        className="block text-secondary/80 hover:text-white transition-colors py-1"
                      >
                        {location.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media - Mobile Only, Centered, After Locations */}
          <div className="md:hidden flex items-center justify-center gap-3 mt-8 col-span-full">
            <a href="https://www.instagram.com/procontractorsfl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.thumbtack.com/fl/miami/interior-painting/procontractors-llc/service/456805029921775616" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden" aria-label="Thumbtack">
              <img src={thumbtackLogo} alt="Thumbtack" className="w-full h-full object-cover rounded-full" />
            </a>
          </div>

          {/* Social Media - Desktop Only, in Company Section */}
          <div className="hidden md:flex lg:col-span-2 items-center justify-start gap-3">
            <a href="https://www.instagram.com/procontractorsfl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.thumbtack.com/fl/miami/interior-painting/procontractors-llc/service/456805029921775616" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden" aria-label="Thumbtack">
              <img src={thumbtackLogo} alt="Thumbtack" className="w-full h-full object-cover rounded-full" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-center items-center">
            <p className="text-secondary/70 font-wix-madefor text-[16px]">
              &copy; {new Date().getFullYear()} Procontractors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
