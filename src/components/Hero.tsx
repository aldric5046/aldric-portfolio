import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Star, Sparkles, GraduationCap, FolderGit2, Cpu } from 'lucide-react';
import { personalInfo, heroStats } from '../data/portfolioData';
import { ThreePolyhedron } from './ThreePolyhedron';
import profilePhoto from '../assets/profile.jpg';

interface HeroProps {
  onExploreClick: () => void;
}

/* Floating particle config */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 4.7) % 100}%`,
  size: `${2 + (i % 4)}px`,
  duration: `${8 + (i % 7) * 2}s`,
  delay: `${(i * 0.45) % 10}s`,
  opacity: 0.3 + (i % 5) * 0.1,
}));

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-diagonal-grid bg-glow-radial"
    >
      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {PARTICLES.map(p => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: '-10px',
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* ── Aurora background blobs ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="aurora-blob absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-brand-green/8 blur-[100px]" />
        <div className="aurora-blob absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/6 blur-[90px]" style={{ animationDelay: '2s' }} />
        <div className="aurora-blob absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-green/5 blur-[80px]" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

            {/* Status Pill */}
            <div className="animate-fade-down delay-100 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span>Available for Projects &amp; Tech Hackathons</span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              I Build{' '}
              <span className="text-gradient-green drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                Intelligent Web Experiences
              </span>{' '}
              With Vision and Passion
              <span className="cursor-blink" />
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up delay-300 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              {personalInfo.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
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

            {/* Social Proof */}
            <div className="animate-fade-up delay-500 flex items-center gap-4 pt-4 border-t border-brand-green/10 w-full max-w-lg">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-dark-950 bg-emerald-900/80 flex items-center justify-center text-xs font-bold text-brand-neon shadow-sm">AL</div>
                <div className="w-9 h-9 rounded-full border-2 border-dark-950 bg-brand-dark flex items-center justify-center text-xs font-bold text-white shadow-sm">AI</div>
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
                <p className="text-xs text-slate-400 font-medium">First-Year CSE (AI) • Thejus Engineering College</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">

            {/* Card 1: Academic Stat — shimmer + icon bob + orbiting dot */}
            <div className="animate-fade-left delay-300 card-shimmer card-border-pulse glass-card rounded-2xl p-5 flex flex-col justify-between border-brand-green/20 relative overflow-hidden group">
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/10 rounded-full blur-2xl group-hover:bg-brand-green/25 transition-all pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500/8 rounded-full blur-xl pointer-events-none" />

              {/* Icon with orbiting dot */}
              <div className="relative w-9 h-9 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-forest/60 border border-brand-green/30 flex items-center justify-center text-brand-neon">
                  <GraduationCap className="w-5 h-5 stroke-[2] icon-bob" />
                </div>
                {/* Orbiting dot */}
                <span className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1">
                  <span className="animate-orbit block w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_6px_rgba(34,197,94,0.9)]" />
                </span>
              </div>

              <div>
                <span className="animate-stat-flash text-2xl font-extrabold text-white tracking-tight block" style={{ animationDelay: '0.4s' }}>
                  {heroStats.academicStatus}
                </span>
                <span className="text-xs font-semibold text-brand-neon block mt-0.5">{heroStats.department}</span>
                <p className="text-[11px] text-slate-400 mt-2 leading-tight">{heroStats.collegeShort} • Thrissur</p>

                {/* Animated progress bar */}
                <div className="mt-3 h-[2px] rounded-full bg-brand-green/10 overflow-hidden">
                  <div className="bar-fill h-full bg-gradient-to-r from-brand-green to-emerald-300 rounded-full" style={{ animationDelay: '0.9s' }} />
                </div>

                {/* Tri-dot status indicator */}
                <div className="flex items-center gap-1 mt-2">
                  <span className="dot-pulse-1 w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
                  <span className="dot-pulse-2 w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
                  <span className="dot-pulse-3 w-1.5 h-1.5 rounded-full bg-brand-green inline-block" />
                  <span className="text-[10px] text-slate-500 ml-1 font-mono">Active</span>
                </div>
              </div>
            </div>

            {/* Card 2: Profile Visual */}
            <div className="animate-profile-card glass-card rounded-2xl relative overflow-hidden group min-h-[170px] border-brand-green/30"
              style={{ background: 'linear-gradient(145deg, #07110a 0%, #0a1a0d 60%, #071209 100%)' }}>

              {/* Radial glow bg */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,197,94,0.22)_0%,transparent_70%)] pointer-events-none" />

              {/* Scanline */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent animate-[scanline_3s_ease-in-out_infinite]" style={{ top: '30%' }} />
              </div>

              {/* Corner brackets — animated slide in */}
              <span className="animate-bracket absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-brand-green/70 rounded-tl-sm pointer-events-none" />
              <span className="animate-bracket absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-brand-green/70 rounded-tr-sm pointer-events-none" style={{ animationDelay: '0.5s' }} />
              <span className="animate-bracket absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-brand-green/70 rounded-bl-sm pointer-events-none" style={{ animationDelay: '0.55s' }} />
              <span className="animate-bracket absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-brand-green/70 rounded-br-sm pointer-events-none" style={{ animationDelay: '0.6s' }} />

              {/* Year badge */}
              <div className="animate-fade-down delay-500 absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-brand-forest/80 border border-brand-green/30 text-[9px] font-mono text-brand-neon z-20 tracking-widest">
                {heroStats.yearsActive}
              </div>

              {/* Main content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full py-5 px-3">

                {/* Pulsing rings + photo */}
                <div className="relative flex items-center justify-center mb-2.5">
                  {/* Ping rings */}
                  <span className="absolute w-20 h-20 rounded-full border border-brand-green/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.2s' }} />
                  <span className="absolute w-[72px] h-[72px] rounded-full border border-brand-green/15 animate-ping" style={{ animationDuration: '2s', animationDelay: '1.6s' }} />

                  {/* Spinning conic ring wrapper */}
                  <div className="animate-ring-spin relative w-16 h-16 rounded-full p-[2px]"
                    style={{ boxShadow: '0 0 24px 4px rgba(34,197,94,0.35)' }}>
                    {/* Rotating gradient border */}
                    <div className="animate-ring-rotate absolute inset-0 rounded-full"
                      style={{ background: 'conic-gradient(from 0deg, #22c55e, #4ade80, #86efac, #22c55e, #15803d, #22c55e)' }} />

                    {/* Photo */}
                    <div className="animate-photo-zoom relative w-full h-full rounded-full overflow-hidden border-[2.5px] border-dark-950 z-10">
                      <img
                        src={profilePhoto}
                        alt="Aldric"
                        className="w-full h-full object-cover object-top scale-110"
                      />
                    </div>

                    {/* Online dot */}
                    <span className="animate-online-dot absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-brand-green border-2 border-dark-950 shadow-[0_0_10px_rgba(34,197,94,1)] z-20" />
                  </div>
                </div>

                {/* Name */}
                <span className="animate-name-up text-[13px] font-bold text-white tracking-tight leading-tight">Aldric</span>
                {/* Role */}
                <span className="animate-role-up text-[10px] text-brand-neon/80 font-mono mb-2">Aspiring AI Engineer</span>

                {/* Skill pills — pop in one by one */}
                <div className="flex gap-1.5 flex-wrap justify-center">
                  <span className="animate-pill-1 px-1.5 py-0.5 rounded-md bg-brand-green/10 border border-brand-green/25 text-[8px] font-semibold text-brand-neon tracking-wide">AI/ML</span>
                  <span className="animate-pill-2 px-1.5 py-0.5 rounded-md bg-brand-green/10 border border-brand-green/25 text-[8px] font-semibold text-brand-neon tracking-wide">React</span>
                  <span className="animate-pill-3 px-1.5 py-0.5 rounded-md bg-brand-green/10 border border-brand-green/25 text-[8px] font-semibold text-brand-neon tracking-wide">Python</span>
                </div>
              </div>
            </div>

            {/* Card 3: 3D Polyhedron — shimmer + animated label + glow dots */}
            <div className="animate-fade-left delay-500 card-shimmer glass-card rounded-2xl p-4 flex flex-col justify-between border-brand-green/25 relative overflow-hidden group min-h-[220px]">
              {/* Ambient corner glow */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-green/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-green/20 transition-all" />

              {/* Top HUD row */}
              <div className="flex items-center justify-between mb-1 z-10 relative">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-brand-neon animate-spin-slow" />
                  <span className="text-[9px] font-mono text-brand-neon/70 tracking-widest uppercase">3D Engine</span>
                </div>
                <div className="flex gap-1">
                  <span className="dot-pulse-1 w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="dot-pulse-2 w-1.5 h-1.5 rounded-full bg-brand-green" />
                  <span className="dot-pulse-3 w-1.5 h-1.5 rounded-full bg-brand-green" />
                </div>
              </div>

              <div className="w-full h-36 relative">
                <ThreePolyhedron />
              </div>

              <div className="mt-2 text-center pt-2 border-t border-brand-green/10">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-forest/70 border border-brand-green/30 text-[11px] font-semibold text-brand-neon tracking-wide">
                  {heroStats.codeQuality}
                </span>
                {/* Animated fill bar beneath label */}
                <div className="mt-2 h-[2px] rounded-full bg-brand-green/10 overflow-hidden">
                  <div className="bar-fill h-full bg-gradient-to-r from-emerald-400 via-brand-green to-emerald-300 rounded-full" style={{ animationDelay: '1.1s' }} />
                </div>
              </div>
            </div>

            {/* Card 4: Projects Stat — animated number reveal + shimmer + icon bob */}
            <div className="animate-fade-left delay-600 card-shimmer card-border-pulse glass-card rounded-2xl p-5 flex flex-col justify-between border-brand-green/20 relative overflow-hidden group">
              {/* Glow blobs */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-brand-green/8 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-400/6 rounded-full blur-xl pointer-events-none" />

              {/* Icon with orbiting dot */}
              <div className="relative w-9 h-9 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-forest/60 border border-brand-green/30 flex items-center justify-center text-brand-neon">
                  <FolderGit2 className="w-5 h-5 stroke-[2] icon-bob" />
                </div>
                <span className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1">
                  <span className="animate-orbit block w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_rgba(110,231,183,0.9)]" style={{ animationDelay: '1s' }} />
                </span>
              </div>

              <div>
                {/* Big animated number */}
                <div className="animate-number-reveal text-3xl sm:text-4xl font-extrabold text-brand-neon tracking-tight drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                  {heroStats.projectsCount}
                </div>
                <span className="text-sm font-bold text-white block mt-1">{heroStats.projectsLabel}</span>
                <p className="text-[11px] text-slate-400 mt-1">Web apps, AI notebooks &amp; student utilities</p>

                {/* Animated fill bar */}
                <div className="mt-3 h-[2px] rounded-full bg-brand-green/10 overflow-hidden">
                  <div className="bar-fill h-full bg-gradient-to-r from-brand-green to-emerald-300 rounded-full" style={{ animationDelay: '1.0s' }} />
                </div>

                {/* Live indicator */}
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                  <span className="text-[10px] font-mono text-slate-500">Building more...</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
