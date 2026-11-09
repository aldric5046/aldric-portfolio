import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, BookOpen, BrainCircuit, Rocket, Compass, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden bg-glow-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Tomorrow's Software With{' '}
            <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Curiosity & Grit
            </span>
          </h2>
        </div>

        {/* 2-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Story & College Badge */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-8 border-brand-green/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-forest/70 border border-brand-green/40 flex items-center justify-center text-brand-neon">
                  <BrainCircuit className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Aldric's Journey & Vision
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-neon mt-0.5 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutStory.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Education Box */}
              <div className="mt-8 p-5 rounded-xl bg-dark-900/80 border border-brand-green/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-lg bg-emerald-950 border border-brand-green/30 flex items-center justify-center text-brand-neon shrink-0">
                    <BookOpen className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Thejus Engineering College
                    </h4>
                    <p className="text-xs text-brand-neon font-medium mt-0.5">
                      B.Tech in Computer Science & Engineering (AI)
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Thrissur, Kerala • Batch of 2026 – 2030
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-forest/90 border border-brand-green/40 text-xs font-semibold text-brand-neon whitespace-nowrap">
                  1st Year Student
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What I'm Learning & Core Values */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card: Current Focus Areas */}
            <div className="glass-card rounded-2xl p-7 border-brand-green/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-neon mb-4">
                <Rocket className="w-4 h-4" />
                <span>Current Learning Roadmap</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-4">
                What I'm Actively Exploring
              </h3>
              
              <ul className="space-y-3.5">
                {[
                  {
                    title: 'Machine Learning & Python',
                    desc: 'Mathematical foundations, linear algebra, Scikit-Learn, and PyTorch.',
                  },
                  {
                    title: 'Full-Stack Modern Web',
                    desc: 'Next.js App Router, TypeScript, server components, and Tailwind styling.',
                  },
                  {
                    title: 'Data Structures & Algorithms',
                    desc: 'Problem solving in C++ and Python for algorithmic competitions.',
                  },
                  {
                    title: 'UI/UX & Interactive Design',
                    desc: 'Clean typography, responsive glassmorphism, and Three.js 3D web interfaces.',
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card: Core Engineering Philosophy */}
            <div className="glass-card rounded-2xl p-6 border-brand-green/20 bg-gradient-to-br from-dark-900 to-emerald-950/30">
              <span className="text-xs font-mono text-brand-neon tracking-wide block mb-2">
                // MY PHILOSOPHY
              </span>
              <p className="text-sm text-slate-200 italic leading-relaxed">
                "As a first-year student, my biggest asset is genuine curiosity and the discipline to build every single day. I believe in writing honest code, learning deeply from fundamentals, and turning ambitious concepts into intuitive tools."
              </p>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-brand-green/10">
                <span className="text-xs font-bold text-white">— Aldric</span>
                <span className="text-[11px] text-brand-neon font-mono">Thrissur, Kerala</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
