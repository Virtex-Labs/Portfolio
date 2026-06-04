export const site = {
  name: "Virtex Labs",
  description: "We build fast, clean, conversion-focused startup websites.",
  url: "https://virtexlabs.com/",
  ogImage: "favicon.svg",
  nav_left: [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#work" },
  ],
  nav_right: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  features: [
    "Astro-first performance",
    "Tailwind design system",
    "GSAP + Framer Motion motion layer",
    "SEO-ready structure"
  ],

  services: [
    {
      title: "Full-stack web development",
      description: "End-to-end React & Node.js applications, from pixel-perfect UI to robust API layers, built for scale.",
      icon: "stack",
    },
    {
      title: "Frontend engineering",
      description: "Performant, animated interfaces with a strong design sensibility. Every interaction is intentional.",
      icon: "layers",
    },
    {
      title: "Portfolio & personal sites",
      description: "Developer portfolios and personal brands that stand out, crafted to convert visitors into opportunities.",
      icon: "user",
    },
    {
      title: "MVP builds",
      description: "Rapid prototypes for founders validating an idea. Ship fast, learn faster, iterate with confidence.",
      icon: "rocket",
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, users, and constraints. We map the problem space before writing a single line of code.",
    },
    {
      step: "02",
      title: "Design & prototype",
      description: "Wireframes, component systems, and interactive mockups. You see and feel the product before it's built.",
    },
    {
      step: "03",
      title: "Build",
      description: "Clean, maintainable code shipped iteratively. Every commit moves the product forward with full transparency.",
    },
    {
      step: "04",
      title: "Launch & support",
      description: "Deployment, handoff, and ongoing help if needed. We don't disappear after the last push.",
    },
  ],

  techStack: [
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "Next.js", color: "#000000" },
    { name: "Astro", color: "#FF5D01" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "GSAP", color: "#88CE02" },
    { name: "Git / GitHub", color: "#F05032" },
    { name: "Vercel", color: "#000000" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Figma", color: "#F24E1E" },
  ],

  about: {
    headline: "VIRTEX LABS is a one-person studio, a full-stack engineer and CS/AI student based in Sri Lanka.",
    description: "I build modern web products that are fast, clean, and designed to actually work. No bloated teams, no unnecessary overhead, just focused execution and craft.",
    established: "2024",
    location: "Sri Lanka",
  },

  portfolio: [
    {
      title: "Virtex Labs",
      label: "Personal project",
      description: "This very website, built with Astro, GSAP ScrollTrigger, and Tailwind CSS. A showcase of motion-driven, performance-first web design.",
      href: "#",
    },
    {
      title: "SocialPulse AI",
      label: "Concept build",
      description: "An AI-powered social media analytics dashboard prototype. Real-time sentiment analysis with a clean, data-dense interface.",
      href: "#",
    },
  ],

  stats: [
    { value: "1+", label: "Years of experience" },
    { value: "10+", label: "Technologies mastered" },
    { value: "5+", label: "Projects completed" },
  ],

  socials: [
    { label: "GitHub", href: "#", icon: "github" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
};