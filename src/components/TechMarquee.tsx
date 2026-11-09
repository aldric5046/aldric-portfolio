import React from 'react';
import { marqueeTech } from '../data/portfolioData';
import { Terminal, Layers, Sparkles } from 'lucide-react';

export const TechMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const techList = [...marqueeTech, ...marqueeTech, ...marqueeTech];

  return (
    <section className="relative py-10 overflow-hidden border-y border-brand-green/10 bg-dark-900/50 backdrop-blur-md">
      {/* Left and Right blur gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-dark-950 via-dark-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-dark-950 via-dark-950/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Ticker Track */}
      <div className="flex w-max items-center gap-6 animate-marquee hover:[animation-play-state:paused]">
        {techList.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel hover:border-brand-green/40 hover:bg-brand-forest/30 transition-all duration-300 group cursor-default select-none shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green/60 group-hover:bg-brand-neon group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            <span className="text-sm font-semibold text-slate-300 tracking-wide group-hover:text-white transition-colors">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

