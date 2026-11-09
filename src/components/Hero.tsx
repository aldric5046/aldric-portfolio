import React from 'react';
import { ArrowRight, Download, Star, Sparkles, GraduationCap, FolderGit2 } from 'lucide-react';
import { personalInfo, heroStats } from '../data/portfolioData';
import { ThreePolyhedron } from './ThreePolyhedron';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-diagonal-grid bg-glow-radial"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span>Available for Projects & Tech Hackathons</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              I Build{' '}
              <span className="text-gradient-green drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                Intelligent Web Experiences
              </span>{' '}
              With Vision and Passion
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroSubtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-green text-dark-950 font-bold text-sm tracking-tight hover:bg-brand-neon hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-slate-200 text-sm font-semibold hover:text-brand-neon transition-colors duration-200 border border-slate-800 hover:border-brand-green/40 bg-dark-900/60 backdrop-blur-sm"
              >
                <Download className="w-4 h-4 stroke-[2] group-hover:-translate-y-0.5 transition-transform" />
                <span>Download resume</span>
              </a>
            </div>

            {/* Social Proof / Student Trust Indicator */}
            <div className="flex items-center gap-4 pt-4 border-t border-brand-green/10 w-full max-w-lg">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-dark-950 bg-emerald-900/80 flex items-center justify-center text-xs font-bold text-brand-neon shadow-sm">
                  AL
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-dark-950 bg-brand-dark flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  AI
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-dark-950 bg-emerald-950 flex items-center justify-center text-xs font-bold text-brand-green shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 text-brand-neon mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-green text-brand-green" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">5.0</span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  First-Year CSE (AI) • Thejus Engineering College
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid Layout */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Card 1: Top-Left Academic Stat */}
            <div className="glass-card rounded-2xl p-5 flex flex-col justify-between border-brand-green/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl group-hover:bg-brand-green/20 transition-all pointer-events-none" />
              <div className="w-9 h-9 rounded-xl bg-brand-forest/60 border border-brand-green/30 flex items-center justify-center text-brand-neon mb-4">
                <GraduationCap className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight block">
                  {heroStats.academicStatus}
                </span>
                <span className="text-xs font-semibold text-brand-neon block mt-0.5">
                  {heroStats.department}
                </span>
                <p className="text-[11px] text-slate-400 mt-2 leading-tight">
                  {heroStats.collegeShort} • Thrissur
                </p>
              </div>
            </div>

            {/* Card 2: Top-Right Profile Visual Placeholder */}
            <div className="glass-card rounded-2xl p-4 flex flex-col justify-end border-brand-green/20 relative overflow-hidden group min-h-[170px] bg-gradient-to-b from-dark-900 to-emerald-950/40">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green/20 via-transparent to-transparent opacity-60" />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-brand-forest/80 border border-brand-green/30 text-[10px] font-mono text-brand-neon">
                {heroStats.yearsActive}
              </div>
              
              {/* Profile Avatar Graphic & Tech Tag */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2">
                <div className="relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-brand-green via-brand-neon to-emerald-300 shadow-[0_0_20px_rgba(34,197,94,0.35)] mb-2">
                  <div className="w-full h-full rounded-full bg-dark-950 flex items-center justify-center overflow-hidden">
                    {/* Stylized Avatar Illustration */}
                    <svg viewBox="0 0 64 64" className="w-full h-full text-brand-neon" fill="currentColor">
                      <rect width="64" height="64" fill="#08100a" />
                      <circle cx="32" cy="24" r="12" fill="#22c55e" opacity="0.85" />
                      <path d="M12 56 C12 42, 20 38, 32 38 C44 38, 52 42, 52 56 Z" fill="#16a34a" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-brand-green border-2 border-dark-950 shadow-sm" />
                </div>
                <span className="text-sm font-bold text-white tracking-tight">Aldric</span>
                <span className="text-[11px] text-slate-400">Aspiring AI Engineer</span>
              </div>
            </div>

            {/* Card 3: Bottom-Left 3D Glossy Polyhedron Cage (From Reference!) */}
            <div className="glass-card rounded-2xl p-4 flex flex-col justify-between border-brand-green/25 relative overflow-hidden group min-h-[220px]">
              <div className="w-full h-36 relative">
                <ThreePolyhedron />
              </div>
              <div className="mt-2 text-center pt-2 border-t border-brand-green/10">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-forest/70 border border-brand-green/30 text-[11px] font-semibold text-brand-neon tracking-wide">
                  {heroStats.codeQuality}
                </span>
              </div>
            </div>

            {/* Card 4: Bottom-Right Projects Built Stat */}
            <div className="glass-card rounded-2xl p-5 flex flex-col justify-between border-brand-green/20 relative overflow-hidden group">
              <div className="w-9 h-9 rounded-xl bg-brand-forest/60 border border-brand-green/30 flex items-center justify-center text-brand-neon mb-4">
                <FolderGit2 className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-neon tracking-tight drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                  {heroStats.projectsCount}
                </span>
                <span className="text-sm font-bold text-white block mt-1">
                  {heroStats.projectsLabel}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Web apps, AI notebooks & student utilities
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

