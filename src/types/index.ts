export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: 'AI & ML' | 'Full Stack Web' | 'Creative Tech' | 'System Tools';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  handle: string;
}

