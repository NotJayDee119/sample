import React, { useEffect } from "react";
import { BrowserRouter as BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from 'lenis';
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

// Import all components directly (no lazy loading)
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Financing from "./pages/Financing";
import FAQ from "./pages/FAQ";
import JuanProfile from "./pages/JuanProfile";
import PaolaProfile from "./pages/PaolaProfile";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

// Import service pages
import KitchenRenovations from "./pages/services/KitchenRenovations";
import BathroomRemodels from "./pages/services/BathroomRemodels";
import HomeRemodeling from "./pages/services/HomeRemodeling";
import HomeAdditions from "./pages/services/HomeAdditions";
import DesignBuild from "./pages/services/DesignBuild";
import NewConstruction from "./pages/services/NewConstruction";

// Import location pages directly
import MiamiDade from "./pages/locations/MiamiDade";
import Broward from "./pages/locations/Broward";
import CoralGables from "./pages/locations/CoralGables";
import FortLauderdale from "./pages/locations/FortLauderdale";
import MiamiShores from "./pages/locations/MiamiShores";
import MiamiBeach from "./pages/locations/MiamiBeach";

// Import location-service pages
import CoralGablesKitchenRemodeling from "./pages/locations/services/CoralGablesKitchenRemodeling";
import CoralGablesBathroomRemodeling from "./pages/locations/services/CoralGablesBathroomRemodeling";
import CoralGablesHomeRemodeling from "./pages/locations/services/CoralGablesHomeRemodeling";
import CoralGablesHomeAdditions from "./pages/locations/services/CoralGablesHomeAdditions";
import CoralGablesNewConstruction from "./pages/locations/services/CoralGablesNewConstruction";

import MiamiBeachKitchenRemodeling from "./pages/locations/services/MiamiBeachKitchenRemodeling";
import MiamiBeachBathroomRemodeling from "./pages/locations/services/MiamiBeachBathroomRemodeling";
import MiamiBeachHomeRemodeling from "./pages/locations/services/MiamiBeachHomeRemodeling";
import MiamiBeachHomeAdditions from "./pages/locations/services/MiamiBeachHomeAdditions";
import MiamiBeachNewConstruction from "./pages/locations/services/MiamiBeachNewConstruction";

import FortLauderdaleKitchenRemodeling from "./pages/locations/services/FortLauderdaleKitchenRemodeling";
import FortLauderdaleBathroomRemodeling from "./pages/locations/services/FortLauderdaleBathroomRemodeling";
import FortLauderdaleHomeRemodeling from "./pages/locations/services/FortLauderdaleHomeRemodeling";
import FortLauderdaleHomeAdditions from "./pages/locations/services/FortLauderdaleHomeAdditions";
import FortLauderdaleNewConstruction from "./pages/locations/services/FortLauderdaleNewConstruction";

import MiamiShoresKitchenRemodeling from "./pages/locations/services/MiamiShoresKitchenRemodeling";
import MiamiShoresBathroomRemodeling from "./pages/locations/services/MiamiShoresBathroomRemodeling";
import MiamiShoresHomeRemodeling from "./pages/locations/services/MiamiShoresHomeRemodeling";
import MiamiShoresHomeAdditions from "./pages/locations/services/MiamiShoresHomeAdditions";

import MiamiDadeKitchenRemodeling from "./pages/locations/services/MiamiDadeKitchenRemodeling";
import MiamiDadeBathroomRemodeling from "./pages/locations/services/MiamiDadeBathroomRemodeling";
import MiamiDadeHomeRemodeling from "./pages/locations/services/MiamiDadeHomeRemodeling";
import MiamiDadeHomeAdditions from "./pages/locations/services/MiamiDadeHomeAdditions";

import BrowardKitchenRemodeling from "./pages/locations/services/BrowardKitchenRemodeling";
import BrowardBathroomRemodeling from "./pages/locations/services/BrowardBathroomRemodeling";
import BrowardHomeRemodeling from "./pages/locations/services/BrowardHomeRemodeling";
import BrowardHomeAdditions from "./pages/locations/services/BrowardHomeAdditions";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on initial load/reload
    window.scrollTo(0, 0);
  }, []); // Empty dependency array - runs only on mount

  useEffect(() => {
    // Scroll to top smoothly when route changes
    window.lenis?.scrollTo(0, { duration: 1.2 });
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with optimized settings for smoother experience
    const lenis = new Lenis({
      duration: 1.4, // Slightly longer for smoother feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced for smoother scrolling
      smoothTouch: false, // Disable on touch for better mobile performance
      touchMultiplier: 1.5,
      infinite: false,
      lerp: 0.08, // Lower lerp = smoother but slower response (0.1 is default)
      autoResize: true,
      syncTouch: false, // Better touch handling
      syncTouchLerp: 0.075,
    });

    // Make lenis globally accessible
    window.lenis = lenis;

    // Optimized animation frame loop with time tracking
    let animationId;
    function raf(time) {
      lenis.raf(time);
      animationId = requestAnimationFrame(raf);
    }

    animationId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      lenis.destroy();
    };
  }, []);
  // Choose Router based on mount point so the app can be embedded in WordPress
  const isEmbedded = typeof document !== 'undefined' && !!document.getElementById('pro-contractors-root');

  const Router = isEmbedded ? HashRouter : BrowserRouter;

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            
            {/* Individual Service Pages */}
            <Route path="/services/kitchen-renovations" element={<KitchenRenovations />} />
            <Route path="/services/bathroom-remodels" element={<BathroomRemodels />} />
            <Route path="/services/home-remodeling" element={<HomeRemodeling />} />
            <Route path="/services/home-additions" element={<HomeAdditions />} />
            <Route path="/services/design-build" element={<DesignBuild />} />
            <Route path="/services/new-construction" element={<NewConstruction />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/team/juan" element={<JuanProfile />} />
            <Route path="/team/paola" element={<PaolaProfile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/locations/miami-dade" element={<MiamiDade />} />
            <Route path="/locations/broward" element={<Broward />} />
            <Route path="/locations/coral-gables" element={<CoralGables />} />
            <Route path="/locations/fort-lauderdale" element={<FortLauderdale />} />
            <Route path="/locations/miami-shores" element={<MiamiShores />} />
            <Route path="/locations/miami-beach" element={<MiamiBeach />} />
            
            {/* Coral Gables Service Pages */}
            <Route path="/locations/coral-gables/kitchen-remodeling" element={<CoralGablesKitchenRemodeling />} />
            <Route path="/locations/coral-gables/bathroom-remodeling" element={<CoralGablesBathroomRemodeling />} />
            <Route path="/locations/coral-gables/home-remodeling" element={<CoralGablesHomeRemodeling />} />
            <Route path="/locations/coral-gables/home-additions" element={<CoralGablesHomeAdditions />} />
            <Route path="/locations/coral-gables/new-construction" element={<CoralGablesNewConstruction />} />
            
            {/* Miami Beach Service Pages */}
            <Route path="/locations/miami-beach/kitchen-remodeling" element={<MiamiBeachKitchenRemodeling />} />
            <Route path="/locations/miami-beach/bathroom-remodeling" element={<MiamiBeachBathroomRemodeling />} />
            <Route path="/locations/miami-beach/home-remodeling" element={<MiamiBeachHomeRemodeling />} />
            <Route path="/locations/miami-beach/home-additions" element={<MiamiBeachHomeAdditions />} />
            <Route path="/locations/miami-beach/new-construction" element={<MiamiBeachNewConstruction />} />
            
            {/* Fort Lauderdale Service Pages */}
            <Route path="/locations/fort-lauderdale/kitchen-remodeling" element={<FortLauderdaleKitchenRemodeling />} />
            <Route path="/locations/fort-lauderdale/bathroom-remodeling" element={<FortLauderdaleBathroomRemodeling />} />
            <Route path="/locations/fort-lauderdale/home-remodeling" element={<FortLauderdaleHomeRemodeling />} />
            <Route path="/locations/fort-lauderdale/home-additions" element={<FortLauderdaleHomeAdditions />} />
            <Route path="/locations/fort-lauderdale/new-construction" element={<FortLauderdaleNewConstruction />} />
            
            {/* Miami Shores Service Pages */}
            <Route path="/locations/miami-shores/kitchen-remodeling" element={<MiamiShoresKitchenRemodeling />} />
            <Route path="/locations/miami-shores/bathroom-remodeling" element={<MiamiShoresBathroomRemodeling />} />
            <Route path="/locations/miami-shores/home-remodeling" element={<MiamiShoresHomeRemodeling />} />
            <Route path="/locations/miami-shores/home-additions" element={<MiamiShoresHomeAdditions />} />
            
            {/* Miami-Dade Service Pages */}
            <Route path="/locations/miami-dade/kitchen-remodeling" element={<MiamiDadeKitchenRemodeling />} />
            <Route path="/locations/miami-dade/bathroom-remodeling" element={<MiamiDadeBathroomRemodeling />} />
            <Route path="/locations/miami-dade/home-remodeling" element={<MiamiDadeHomeRemodeling />} />
            <Route path="/locations/miami-dade/home-additions" element={<MiamiDadeHomeAdditions />} />
            
            {/* Broward Service Pages */}
            <Route path="/locations/broward/kitchen-remodeling" element={<BrowardKitchenRemodeling />} />
            <Route path="/locations/broward/bathroom-remodeling" element={<BrowardBathroomRemodeling />} />
            <Route path="/locations/broward/home-remodeling" element={<BrowardHomeRemodeling />} />
            <Route path="/locations/broward/home-additions" element={<BrowardHomeAdditions />} />
            
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
};

export default App;
