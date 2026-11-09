import React, { useEffect, useState, useRef } from 'react';
import { impactStats } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 2000; // ms
          const startTime = performance.now();

          const updateCounters = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const newCounts = impactStats.map((stat) =>
              Math.floor(easeProgress * stat.value)
            );
            setCounts(newCounts);

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            } else {
              setCounts(impactStats.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Section Title */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-neon block mb-2">
              Metrics That Matter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Transforming Ideas <br />
              <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Into Impact
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Consistently learning, building, and contributing towards intelligent technological systems.
            </p>
          </div>

          {/* 3 Large Animated Counter Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {impactStats.map((stat, idx) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 border-brand-green/15 hover:border-brand-green/35 relative group"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-brand-neon tracking-tight drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] mb-2 font-mono">
                  {counts[idx]}
                  <span className="text-brand-green ml-0.5">{stat.suffix}</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-normal">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

