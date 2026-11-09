import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-brand-green/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-brand-green/40 flex items-center justify-center text-brand-green group-hover:scale-105 group-hover:border-brand-green transition-all shadow-[0_0_12px_rgba(34,197,94,0.25)]">
              <Code2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-green transition-colors">
              Aldric
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_#22c55e]" />
          </button>

          {/* Desktop Center Pill Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-pill shadow-inner"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                    isActive
                      ? 'bg-brand-green/20 text-brand-neon border border-brand-green/40 shadow-[0_0_12px_rgba(34,197,94,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-green text-dark-950 text-sm font-bold tracking-tight hover:bg-brand-neon hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-lg bg-dark-900 border border-brand-green/20 text-slate-200 hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-dark-950/95 backdrop-blur-2xl border-b border-brand-green/20 p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-green/15 text-brand-neon border border-brand-green/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />}
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-brand-green/10">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-green text-dark-950 text-sm font-bold tracking-tight hover:bg-brand-neon shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

