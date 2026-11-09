import React, { useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Intersection Observer for Active Section Highlight
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth Navigation Handler
  const handleNavigate = useCallback((sectionId: string) => {
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetEl, {
          offset: -40,
          duration: 1.2,
        });
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 font-sans antialiased selection:bg-brand-green selection:text-black">
      {/* Top Green Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Cursor Glow */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="w-full relative">
        {/* 01. Hero with Bento Grid & 3D Polyhedron */}
        <Hero onExploreClick={() => handleNavigate('projects')} />

        {/* 02. Infinite Tech Stack Marquee */}
        <TechMarquee />

        {/* 03. Impact Stats Counters ("Transforming Ideas Into Impact") */}
        <StatsSection />

        {/* 04. About Aldric (Thejus Engineering College) */}
        <AboutSection />

        {/* 05. Skills / "What I Do" (3 Feature Cards + 1 Large 3D Organic Sphere Card) */}
        <FeaturesSection onExploreProjects={() => handleNavigate('projects')} />

        {/* 06. Featured Projects */}
        <ProjectsSection />

        {/* 07. Academic & Tech Journey Timeline */}
        <JourneyTimeline />

        {/* 08. Contact Section & Direct Connect */}
        <ContactSection />
      </main>

      {/* 09. Minimal Footer */}
      <Footer onBackToTop={() => handleNavigate('hero')} />
    </div>
  );
};

export default App;
