import React, { useState } from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 900);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden bg-glow-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/60 border border-brand-green/30 text-brand-neon text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Connect &{' '}
            <span className="text-gradient-green drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Build Together
            </span>
          </h2>
          <p className="text-sm text-slate-300">
            Have a project idea, want to collaborate on a hackathon, or just want to chat about AI and web development? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Quick Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-7 border-brand-green/20">
              <h3 className="text-xl font-bold text-white mb-2">
                Connect Directly
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Feel free to email me directly or connect with me across my social profiles.
              </p>

              <div className="space-y-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-dark-900/80 border border-brand-green/15 hover:border-brand-green/45 hover:bg-brand-forest/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-950 border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:text-brand-neon group-hover:scale-105 transition-all">
                        {getSocialIcon(item.icon)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-brand-neon transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {item.handle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-brand-green group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Location Glass Card */}
            <div className="glass-panel rounded-2xl p-6 border-brand-green/15 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-forest/80 border border-brand-green/30 flex items-center justify-center text-brand-neon shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Campus & Location
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Thejus Engineering College • Thrissur, Kerala, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border-brand-green/20 relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 border-2 border-brand-green mx-auto flex items-center justify-center text-brand-neon shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Aldric will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-dark-900 border border-brand-green/30 text-xs font-bold text-brand-neon hover:bg-brand-forest/50 transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Aldric Friend"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all ${
                          errors.name ? 'border-red-500/80 ring-1 ring-red-500' : 'border-brand-green/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all ${
                          errors.email ? 'border-red-500/80 ring-1 ring-red-500' : 'border-brand-green/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Collaboration / Project / Question"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-brand-green/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hi Aldric, I came across your portfolio and wanted to connect about..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-green transition-all resize-none ${
                        errors.message ? 'border-red-500/80 ring-1 ring-red-500' : 'border-brand-green/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-green text-dark-950 font-bold text-sm tracking-tight hover:bg-brand-neon hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all duration-300 disabled:opacity-50 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Final CTA Banner */}
        <div className="mt-20 rounded-3xl p-8 sm:p-12 glass-card border-brand-green/30 bg-gradient-to-r from-emerald-950/60 via-dark-900 to-dark-950 relative overflow-hidden text-center">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Open to Collaborative Hackathons & Student Projects
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Looking to team up with fellow developers, participate in competitive build sprints, or create impactful AI & web applications.
          </p>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-green text-dark-950 font-bold text-sm tracking-tight hover:bg-brand-neon hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all"
          >
            <span>Connect on LinkedIn</span>
            <Sparkles className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
