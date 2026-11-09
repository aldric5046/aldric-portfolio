import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  return (
    <footer className="py-12 border-t border-brand-green/10 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo & Attribution */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-brand-green/30 flex items-center justify-center text-brand-green">
              <Code2 className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Aldric <span className="text-brand-green">•</span> Portfolio
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Thejus Engineering College, Thrissur, Kerala
              </p>
            </div>
          </div>

          {/* Center Copyright */}
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Aldric. Built with curiosity</span>
            <Heart className="w-3.5 h-3.5 text-brand-green fill-brand-green inline" />
            <span>& Next-gen web tech.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={onBackToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-green/20 hover:border-brand-green/50 hover:bg-brand-forest/40 text-xs font-bold text-slate-200 hover:text-brand-neon transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};
