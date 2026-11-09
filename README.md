# Aldric — Dark Glassmorphic AI & Web Developer Portfolio

A modern, high-performance personal portfolio website built for **Aldric**, a first-year B.Tech student in Computer Science & Engineering (Artificial Intelligence) at **Thejus Engineering College, Thrissur, Kerala**.

The design directly matches the visual language and aesthetic mood of the attached reference design: **ultra-dark backgrounds** (`#050806`), **vibrant emerald green accents** (`#22c55e` / `#4ade80`), **frosted glassmorphic cards** with 1px green-tinted borders, **interactive 3D Three.js elements**, and **silky Lenis smooth scrolling**.

---

## ✦ Key Features

- **Theme & Design Language**:
  - Deep dark background (`#050806`) with subtle atmospheric green radial glow spots and diagonal grid accents.
  - Electric green accents (`#22c55e`, `#16a34a`, `#4ade80`) for buttons, active states, icons, and glowing badges.
  - Frosted glassmorphism (`backdrop-blur-xl bg-[#0c130e]/70 border border-emerald-500/15`).
  - Modern geometric sans-serif typography (`Plus Jakarta Sans` / `Inter`) with high-contrast text and emerald gradient headings.
- **Interactive 3D Elements (Three.js WebGL)**:
  - **Hero Bento Grid**: Interactive glossy green wireframe 3D cage / polyhedron that reacts to cursor movement and rotates smoothly.
  - **Features Section**: Interactive glossy green ribbed organic spiral sphere matching the reference layout.
  - Automatically paused when scrolled out of view or when `prefers-reduced-motion` is active.
- **Section Lineup**:
  1. **Sticky Glass Navbar**: Brand logo with glowing green pulse, pill navigation, active section tracking, "Get in Touch" button, and animated mobile drawer.
  2. **Hero & Bento Grid**: Bold headline, dual CTAs (*"View my work"* & *"Download resume"*), student trust rating badge, and a 4-card Bento grid.
  3. **Tech Stack Infinite Marquee**: Horizontally scrolling ticker featuring `Python`, `React`, `Next.js`, `TypeScript`, `Tailwind CSS`, `PyTorch`, `Git`, `Three.js`, `FastAPI`, `Linux`, pausing on hover.
  4. **Animated Counters**: *"Transforming Ideas Into Impact"* with 3 smooth count-up counters (500+ Hours, 10+ Projects, 100% Passion).
  5. **About Aldric**: Personal narrative, education card at Thejus Engineering College, Thrissur, and current learning roadmap.
  6. **Skills & Focus Areas**: 3 vertical glass feature cards with glowing green icon badges (*Web Development*, *AI & Machine Learning*, *UI/UX & Creative Tech*) + 1 large feature card with 3D organic sphere and CTA.
  7. **Featured Projects**: Responsive grid with category filters, stylized preview mockups, tech badges, GitHub repository links, and live demo buttons.
  8. **Academic & Tech Journey**: Vertical timeline with an animated vertical glowing green SVG line that traces as you scroll.
  9. **Contact & Social Connect**: Dark glass form with real-time field validation, direct contact buttons (*Email*, *GitHub*, *LinkedIn*, *Instagram*), and a collaborative bottom CTA banner.
  10. **Minimal Footer**: Copyright, college attribution, and smooth back-to-top button.
- **Micro-Interactions**:
  - Lenis smooth inertia scrolling.
  - Top green scroll progress bar.
  - Desktop custom cursor with glowing green follower.
  - Keyboard accessible navigation and visible focus rings.

---

## ✦ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Animation & Motion**: [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## ✦ Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 2. Installation
Open your terminal in the project directory and install the dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to see your portfolio in action.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## ✦ How to Edit Your Content

All of your portfolio content is organized in a single file:  
👉 **`src/data/portfolioData.ts`**

You do not need to hunt through component files to update your info!

### 1. Editing Personal Details & Links
Open `src/data/portfolioData.ts` and modify `personalInfo`:
```typescript
export const personalInfo = {
  name: 'Aldric',
  title: 'B.Tech Student in Computer Science & Engineering (AI)',
  college: 'Thejus Engineering College',
  location: 'Thrissur, Kerala, India',
  email: 'your.real.email@example.com', // Replace with your email
  github: 'https://github.com/your-username', // Replace with your GitHub
  linkedin: 'https://linkedin.com/in/your-username', // Replace with your LinkedIn
  instagram: 'https://instagram.com/your-username', // Replace with your Instagram
  resumeUrl: '/resume.pdf', // Put your PDF file in the public/ folder and link it here
  heroHeadline: 'I Build Intelligent Web Experiences With Vision and Passion',
  heroSubtitle: '...',
  aboutStory: [
    '...',
  ],
};
```

### 2. Adding / Editing Projects
In `src/data/portfolioData.ts`, edit `projectsData`:
```typescript
export const projectsData: Project[] = [
  {
    id: 'project-1',
    title: 'Your Real Project Name',
    tagline: 'Short one-line summary',
    description: 'Detailed description of what you built and how it works.',
    tags: ['Next.js', 'Python', 'Tailwind CSS'],
    category: 'AI & ML', // 'AI & ML' | 'Full Stack Web' | 'Creative Tech'
    githubUrl: 'https://github.com/your-username/repo-name',
    liveUrl: 'https://your-demo-url.vercel.app',
    featured: true,
    badge: 'Featured Build',
    metrics: '99% Accuracy',
  },
  // Add more projects as you build them!
];
```

### 3. Updating Stats & Metrics
In `src/data/portfolioData.ts`, adjust `impactStats` and `heroStats`:
```typescript
export const impactStats: StatItem[] = [
  {
    value: 500, // Number that counts up
    suffix: '+',
    label: 'Hours of Learning & Coding',
    sublabel: 'Dedicated to mastering AI fundamentals and modern full-stack web development',
  },
  // ...
];
```

### 4. Updating Tech Marquee Skills
To add or reorder technologies in the infinite ticker, edit `marqueeTech` in `src/data/portfolioData.ts`:
```typescript
export const marqueeTech = [
  'Python',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  // Add your tools here!
];
```

---

## ✦ How to Deploy to Vercel

### Method 1: Deploy with Git & Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aldric portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/aldric-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New Project"** and select your `aldric-portfolio` repository.
   - Vercel will automatically detect **Vite**:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click **"Deploy"**.

Your website will be live in seconds at a URL like `https://aldric-portfolio.vercel.app` with automatic HTTPS, global CDN caching, and automated rebuilds whenever you push changes to GitHub!

### Method 2: Deploy using Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run deployment from the project root:
   ```bash
   vercel
   ```
3. To deploy directly to production:
   ```bash
   vercel --prod
   ```

---

## ✦ Quality & Accessibility Checklist

- [x] **Responsive**: Handcrafted breakpoints for Mobile (375px+), Tablet (768px+), and Desktop (1024px, 1440px+).
- [x] **Color Contrast**: Compliant text contrast with high-visibility slate/white typography against dark surfaces.
- [x] **Focus States**: Visible focus rings (`focus-visible:ring-2 focus-visible:ring-brand-green`) for keyboard navigation.
- [x] **Reduced Motion**: Disables heavy animations and smooth-scrolling automatically if the user has enabled reduced motion in their OS.
- [x] **SEO & Social Cards**: Semantic HTML5 elements (`header`, `main`, `section`, `footer`), Open Graph tags, and custom vector favicon.

---

Designed & Built for **Aldric** • Thejus Engineering College, Thrissur, Kerala.
