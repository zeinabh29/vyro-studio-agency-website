import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { name: 'Awwwards', href: 'https://awwwards.com' },
    { name: 'Behance', href: 'https://behance.net' },
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter/X', href: 'https://twitter.com' },
  ];

  return (
    <footer className="relative bg-[#101116] border-t border-[rgba(255,255,255,0.08)] overflow-hidden pt-20 pb-12">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#A6FF4D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Massive Call To Action Banner */}
        <div className="rounded-3xl bg-gradient-to-b from-[#191A21] to-[#14151C] border border-[rgba(255,255,255,0.12)] p-8 sm:p-12 md:p-16 mb-20 relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#A6FF4D]/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#A6FF4D] bg-[#A6FF4D]/10 border border-[#A6FF4D]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D] animate-ping" />
              Available for Q1 / Q2 Partnerships
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#F5F4F0] leading-[1.08]">
              Have a project in mind?{' '}
              <span className="text-[#A6FF4D] italic font-normal">Let's make it happen.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#A6A6B0] max-w-xl leading-relaxed">
              We collaborate with visionary founders and global enterprises ready to set the benchmark in their category.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" size="lg" showArrow cursorText="START">
                Initiate Project
              </Button>
              <Button to="/work" variant="secondary" size="lg">
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 select-none mb-6">
              <div className="w-9 h-9 rounded-xl bg-[#191A21] border border-white/10 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L10 18L14 6L20 18" stroke="#A6FF4D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-2xl tracking-tight text-[#F5F4F0] leading-none">
                  VYRO
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#A6A6B0] uppercase mt-0.5">
                  STUDIO
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#A6A6B0] max-w-sm leading-relaxed mb-6">
              We create digital experiences that move brands forward. Independent creative agency based in Zurich, New York, and Tokyo.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A6A6B0]">
              <span className="w-2 h-2 rounded-full bg-[#A6FF4D]" />
              <span>HQ Zurich Time:</span>
              <span className="text-[#F5F4F0] font-semibold">{time || '12:00:00'} CET</span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F4F0] mb-5">
              // Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Agency', path: '/about' },
                { name: 'Services & Practice', path: '/services' },
                { name: 'Featured Work', path: '/work' },
                { name: 'Contact & Inquiry', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#A6A6B0] hover:text-[#A6FF4D] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Col */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F4F0] mb-5">
              // Connect
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A6A6B0] hover:text-[#A6FF4D] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F4F0] mb-5">
              // Inquiries
            </h4>
            <div className="space-y-4 text-sm text-[#A6A6B0]">
              <a
                href="mailto:partnerships@vyrostudio.design"
                className="block text-[#F5F4F0] hover:text-[#A6FF4D] transition-colors font-mono text-xs"
              >
                partnerships@vyrostudio.design
              </a>
              <div className="space-y-1 text-xs">
                <p className="text-[#F5F4F0] font-semibold">Studio Zurich</p>
                <p>Bleicherweg 10, 8002 Zürich</p>
                <p className="text-[#A6A6B0]">+41 44 215 90 00</p>
              </div>
              <div className="space-y-1 text-xs pt-2">
                <p className="text-[#F5F4F0] font-semibold">Studio New York</p>
                <p>520 Broadway, SoHo, NY 10012</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#A6A6B0] font-mono">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} VYRO STUDIO AG. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>DESIGNED FOR THE BENCHMARK</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#191A21] border border-white/10 hover:border-[#A6FF4D] hover:text-[#A6FF4D] transition-all text-[#F5F4F0] group"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
