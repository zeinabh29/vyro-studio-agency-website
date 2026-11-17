import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#101116]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 select-none"
            data-cursor="VYRO"
            aria-label="VYRO Studio Home"
          >
            {/* Custom SVG Monogram */}
            <div className="w-9 h-9 rounded-xl bg-[#191A21] border border-white/10 flex items-center justify-center group-hover:border-[#A6FF4D] group-hover:bg-[#22232B] transition-all duration-300 shadow-sm">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L10 18L14 6L20 18" stroke="#A6FF4D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-syne font-extrabold text-xl tracking-tight text-[#F5F4F0] group-hover:text-[#A6FF4D] transition-colors leading-none">
                VYRO
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#A6A6B0] uppercase mt-0.5">
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-5 py-2 rounded-full bg-[#191A21]/70 border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-[#101116] font-bold'
                      : 'text-[#A6A6B0] hover:text-[#F5F4F0] hover:bg-white/[0.04]'
                  }`}
                  data-cursor="LINK"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#A6FF4D]"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button to="/contact" size="sm" showArrow cursorText="HIRE US">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-[#191A21] border border-white/10 flex items-center justify-center text-[#F5F4F0] hover:text-[#A6FF4D] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#101116] flex flex-col justify-between px-8 pt-32 pb-12 md:hidden"
          >
            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#A6FF4D]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A6FF4D]">
                // Navigation Menu
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * idx, duration: 0.4 }}
                    >
                      <Link
                        to={link.path}
                        className={`font-syne text-4xl font-bold uppercase tracking-tight flex items-center justify-between py-2 transition-colors ${
                          isActive ? 'text-[#A6FF4D]' : 'text-[#F5F4F0] hover:text-[#A6FF4D]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive ? (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#A6FF4D]" />
                        ) : (
                          <ArrowUpRight className="w-6 h-6 opacity-40" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
              <Button to="/contact" size="lg" className="w-full text-center" showArrow>
                Let's Talk
              </Button>
              <div className="flex items-center justify-between text-xs text-[#A6A6B0] font-mono">
                <span>hello@vyrostudio.design</span>
                <span>Zurich / NYC / Tokyo</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
