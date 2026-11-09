import { Project, SkillCategory, StatItem, JourneyMilestone, SocialLink } from '../types';

export const personalInfo = {
  name: 'Aldric',
  title: 'B.Tech Student in Computer Science & Engineering (AI)',
  college: 'Thejus Engineering College',
  location: 'Thrissur, Kerala, India',
  email: 'aldricaldric88@gmail.com', // Aldric's contact email
  github: 'https://github.com/aldric5046', // Aldric's GitHub profile
  linkedin: 'https://linkedin.com/in/aldric', // [Your LinkedIn profile]
  instagram: 'https://instagram.com/aldric', // [Your Instagram handle]
  resumeUrl: '#', // [Link to your PDF resume]
  heroHeadline: 'I Build Intelligent Web Experiences With Vision and Passion',
  heroSubtitle:
    'First-year B.Tech Computer Science & Engineering (AI) student at Thejus Engineering College, Thrissur. Passionate about AI/ML, modern web development, and crafting purposeful digital solutions.',
  aboutStory: [
    "Hello! I'm Aldric, an aspiring computer science engineer specializing in Artificial Intelligence at Thejus Engineering College, Thrissur, Kerala.",
    "Driven by curiosity and a desire to build things that solve real problems, I explore the intersections of machine learning algorithms, modern web development architectures, and fluid human-computer interaction.",
    "When I am not writing code or debugging models, you will find me participating in tech communities, experimenting with new open-source libraries, and continuously honing my problem-solving skills."
  ],
};

export const heroStats = {
  academicStatus: '1st Year B.Tech',
  department: 'CSE (Artificial Intelligence)',
  collegeShort: 'Thejus Engineering College',
  yearsActive: '2026 – 2030',
  codeQuality: '100% Passion & Curiosity',
  projectsCount: '10+',
  projectsLabel: 'Projects & Experiments',
};

export const marqueeTech = [
  'Python',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'PyTorch',
  'Node.js',
  'Git & GitHub',
  'Three.js',
  'Vite',
  'Figma',
  'C / C++',
  'FastAPI',
  'Linux',
  'Scikit-Learn',
];

export const impactStats: StatItem[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Hours of Learning & Coding',
    sublabel: 'Dedicated to mastering AI fundamentals and modern full-stack web development',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Projects & Prototypes',
    sublabel: 'Hands-on builds spanning web apps, AI algorithms, and frontend experiments',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Dedication to Quality',
    sublabel: 'Driven by curiosity, clean code practices, and continuous engineering improvement',
  },
];

export const featureSkills: SkillCategory[] = [
  {
    title: 'Web Development',
    subtitle: 'Modern full-stack interfaces',
    iconName: 'Globe',
    skills: [
      'React & Next.js (App Router)',
      'TypeScript & Modern JavaScript',
      'Tailwind CSS & Responsive UI',
      'REST APIs & Backend Integrations',
    ],
  },
  {
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent models & data',
    iconName: 'Cpu',
    skills: [
      'Python (NumPy, Pandas, Matplotlib)',
      'Machine Learning Core Concepts',
      'Neural Networks & PyTorch Basics',
      'Data Preprocessing & Visualization',
    ],
  },
  {
    title: 'UI/UX & Creative Tech',
    subtitle: 'Micro-interactions & 3D',
    iconName: 'Sparkles',
    skills: [
      'Framer Motion Animations',
      'Three.js / WebGL Visuals',
      'Figma Prototyping & Design Systems',
      'Accessible & Performant Code',
    ],
  },
];

export const highlightFeature = {
  title: 'Where Engineering Meets AI Innovation',
  subtitle:
    'Dedicated to bridging algorithmic artificial intelligence with intuitive, high-performance web applications that make a tangible difference.',
  badge: 'Core Philosophy',
  ctaText: 'Explore My Work',
  ctaLink: '#projects',
};

export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: '[Smart Campus AI Assistant]',
    tagline: 'An intelligent conversational portal for college resources and student queries',
    description:
      '[Placeholder Project Description]: A prototype campus assistant built with Next.js, Python, and natural language processing to help students quickly find course schedules, faculty details, and campus announcements.',
    tags: ['Next.js', 'Python', 'FastAPI', 'Tailwind CSS'],
    category: 'AI & ML',
    githubUrl: 'https://github.com/your-username/smart-campus-assistant',
    liveUrl: 'https://smart-campus-demo.vercel.app',
    featured: true,
    badge: 'Featured Build',
    metrics: 'NLP Prototype',
  },
  {
    id: 'project-2',
    title: '[Visionary - Web Portfolio Engine]',
    tagline: 'High-performance interactive dark-mode portfolio with 3D WebGL visuals',
    description:
      '[Placeholder Project Description]: A modern, responsive developer portfolio utilizing Vite, Three.js shaders, Tailwind CSS, and Lenis smooth scrolling for immersive storytelling.',
    tags: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Creative Tech',
    githubUrl: 'https://github.com/aldric5046/aldric-portfolio',
    liveUrl: '#',
    featured: true,
    badge: 'Interactive UI',
    metrics: '99 Lighthouse Score',
  },
  {
    id: 'project-3',
    title: '[Student Study Resource Hub]',
    tagline: 'Collaborative knowledge-sharing platform for CSE students',
    description:
      '[Placeholder Project Description]: A lightweight web application organizing semester lecture notes, previous year question papers, and curated study materials for first-year engineering students.',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Supabase'],
    category: 'Full Stack Web',
    githubUrl: 'https://github.com/your-username/study-hub',
    liveUrl: '#',
    featured: false,
    badge: 'Utility App',
    metrics: 'Full Stack',
  },
  {
    id: 'project-4',
    title: '[Image Classification ML Pipeline]',
    tagline: 'Convolutional neural network experiment for computer vision tasks',
    description:
      '[Placeholder Project Description]: An educational machine learning notebook and Streamlit dashboard benchmarking image classification accuracy using PyTorch on standard datasets.',
    tags: ['Python', 'PyTorch', 'Streamlit', 'OpenCV'],
    category: 'AI & ML',
    githubUrl: 'https://github.com/your-username/cv-classifier',
    liveUrl: '#',
    featured: false,
    badge: 'ML Experiment',
    metrics: 'Deep Learning',
  },
];

export const journeyData: JourneyMilestone[] = [
  {
    period: '2026 – Present (Current)',
    title: 'B.Tech in Computer Science & Engineering (AI)',
    organization: 'Thejus Engineering College',
    location: 'Thrissur, Kerala',
    description:
      'Pursuing undergraduate engineering focusing on Artificial Intelligence, Data Structures, Algorithms, Mathematics for Machine Learning, and Software Engineering principles.',
    highlights: [
      'Specialized curriculum in AI & Machine Learning',
      'Active member of college technical clubs & student developer societies',
      'Building hands-on coding projects alongside coursework',
    ],
    badge: 'Current Degree',
  },
  {
    period: '2024 – 2026',
    title: 'Higher Secondary Education (Computer Science)',
    organization: '[Your School Name / Board]',
    location: 'Kerala, India',
    description:
      'Completed secondary schooling with core subjects in Computer Science, Mathematics, Physics, and Chemistry, laying a strong foundation in programming logic.',
    highlights: [
      'Learned fundamental programming with Python and C++',
      'Developed strong analytical and mathematical problem-solving skills',
      'Ignited personal passion for software development and algorithms',
    ],
    badge: 'Foundation',
  },
  {
    period: '2026 – Ongoing',
    title: 'Self-Directed Developer & Project Sprinting',
    organization: 'Independent Learning & Open Source',
    location: 'Remote',
    description:
      'Committed daily schedule to building web applications, exploring modern JavaScript frameworks, and training introductory ML models.',
    highlights: [
      'Mastered modern frontend tooling: Next.js, React, Tailwind CSS, TypeScript',
      'Exploring PyTorch and Scikit-Learn for intelligent data modeling',
      'Publishing code regularly on GitHub and building a public portfolio',
    ],
    badge: 'Continuous Growth',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/aldric5046',
    icon: 'Github',
    handle: '@aldric5046',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/your-username', // [Your LinkedIn link]
    icon: 'Linkedin',
    handle: 'Aldric',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/your-username', // [Your Instagram link]
    icon: 'Instagram',
    handle: '@aldric.builds',
  },
  {
    name: 'Email',
    href: 'mailto:aldricaldric88@gmail.com',
    icon: 'Mail',
    handle: 'aldricaldric88@gmail.com',
  },
];
