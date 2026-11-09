import React, { useEffect, useRef, useState } from 'react';
import { journeyData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Milestone } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far down the timeline container has scrolled into view
      if (rect.top <= windowHeight * 0.75) {
        const scrolled = (windowHeight * 0.75 - rect.top) / rect.height;
        const clamped = Math.min(Math.max(scrolled, 0.05), 1);
        setLineHeight(clamped * 100);
      } else {
        setLineHeight(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey" className="py-24 bg-dark-950 relative overflow-hidden bg-diagonal-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wider uppercase mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic & Tech Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            My Journey &{' '}
            <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Milestones
            </span>
          </h2>
          <p className="text-sm text-slate-300">
            Education, foundational learning, and hands-on coding milestones shaping my engineering mindset.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-6 sm:pl-10 ml-2 sm:ml-6">

          {/* Background Vertical Guide Track */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-dark-800" />

          {/* Animated Vertical Glowing Green Line */}
          <div
            className="absolute left-0 top-3 w-[2px] bg-gradient-to-b from-brand-neon via-brand-green to-emerald-700 shadow-[0_0_12px_rgba(34,197,94,0.8)] transition-all duration-200 ease-out"
            style={{ height: `${lineHeight}%` }}
          />

          {/* Milestones List */}
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <div key={item.period} className="relative group">

                {/* Glowing Node Dot on the vertical line */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-dark-950 border-2 border-brand-green flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.6)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
                </div>

                {/* Milestone Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border-brand-green/20 group-hover:border-brand-green/45 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-neon">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-forest/80 border border-brand-green/30 text-[10px] font-semibold text-brand-green uppercase tracking-wide">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 mb-4">
                    <span className="font-semibold text-brand-green">{item.organization}</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-3 border-t border-brand-green/10 space-y-2">
                    {item.highlights.map((h: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
