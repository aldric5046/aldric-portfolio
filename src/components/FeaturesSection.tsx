import React from 'react';
import { featureSkills, highlightFeature } from '../data/portfolioData';
import { Globe, Cpu, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ThreeOrganicSphere } from './ThreeOrganicSphere';

interface FeaturesSectionProps {
  onExploreProjects: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onExploreProjects }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 stroke-[2]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 stroke-[2]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 stroke-[2]" />;
      default:
        return <ShieldCheck className="w-5 h-5 stroke-[2]" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-dark-950 relative overflow-hidden bg-diagonal-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Discover My Core Focus Areas &{' '}
            <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Technical Skills
            </span>
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From modern web engineering to foundational machine learning, here are the domains I passionately explore and implement in real-world projects.
          </p>
        </div>

        {/* Layout: Left 3 Glass Cards + Right 1 Large Highlight Card with 3D Sphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 3 Vertical Glass Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featureSkills.map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between border-brand-green/20 hover:border-brand-green/45 transition-all duration-300 group"
              >
                <div>
                  {/* Glowing Green Circular Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-dark-950 font-bold mb-6 shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:scale-110 group-hover:bg-brand-neon transition-all">
                    {getIcon(feature.iconName)}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-brand-neon transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-brand-green/90 font-medium mb-4">
                    {feature.subtitle}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-brand-green/10">
                    {feature.skills.map((skill: string, sIdx: number) => (
                      <li
                        key={sIdx}
                        className="text-xs text-slate-300 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-green" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 1 Large Highlight Card with 3D Organic Green Visual */}
          <div className="lg:col-span-5 flex">
            <div className="glass-card rounded-2xl p-8 border-brand-green/25 relative overflow-hidden flex flex-col justify-between w-full bg-gradient-to-b from-dark-900 via-dark-950 to-emerald-950/40 group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-green/20 transition-all" />

              {/* 3D Organic Ribbed Shape Canvas */}
              <div className="w-full h-56 sm:h-64 relative flex items-center justify-center">
                <ThreeOrganicSphere />
              </div>

              {/* Text & Action */}
              <div className="relative z-10 text-center mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-forest/70 border border-brand-green/30 text-[11px] font-bold uppercase tracking-wider text-brand-neon mb-3">
                  {highlightFeature.badge}
                </span>

                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  {highlightFeature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-md mx-auto">
                  {highlightFeature.subtitle}
                </p>

                <button
                  onClick={onExploreProjects}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-dark-950 text-xs sm:text-sm font-bold tracking-tight hover:bg-brand-neon hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                >
                  <span>{highlightFeature.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
