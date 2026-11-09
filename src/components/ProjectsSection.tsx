import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, FolderCode } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'AI & ML', 'Full Stack Web', 'Creative Tech'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-dark-950 relative overflow-hidden bg-glow-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wider uppercase mb-3">
              <FolderCode className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Builds &{' '}
              <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Experiments
              </span>
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Practical projects engineered during my first year of computer science studies. Open-source code available on GitHub.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-panel self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-brand-green text-dark-950 shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-brand-green/20 hover:border-brand-green/50 hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Glow Highlight on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl group-hover:bg-brand-green/20 transition-all pointer-events-none" />

              <div>
                {/* Visual Header / Mockup representation */}
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-dark-900 via-dark-850 to-emerald-950/60 border border-brand-green/15 mb-6 relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-brand-green/40 transition-colors">
                  {/* Subtle code pattern backdrop */}
                  <div className="absolute inset-0 opacity-15 font-mono text-[10px] text-brand-neon p-3 overflow-hidden select-none pointer-events-none">
                    {'const model = await tf.loadLayersModel("/weights");\nconst prediction = model.predict(tensorData);\nreturn { status: 200, output: prediction };'}
                  </div>

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-brand-forest/90 border border-brand-green/40 text-[10px] font-bold text-brand-neon tracking-wide uppercase">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="px-2.5 py-1 rounded-full bg-dark-950/80 border border-slate-700 text-[10px] font-mono text-slate-300">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Center graphic / icon */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-950/90 border border-brand-green/30 flex items-center justify-center text-brand-neon group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all">
                      <Sparkles className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Bottom badge */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{project.badge || 'Project'}</span>
                    <span className="text-brand-green">● Ready to inspect</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-neon transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-brand-green/90 mb-3">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Buttons */}
              <div className="pt-4 border-t border-brand-green/10">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-dark-900 border border-brand-green/20 text-[11px] font-medium text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 hover:bg-brand-forest/60 border border-brand-green/25 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-green hover:bg-brand-neon text-dark-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
