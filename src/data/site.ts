import { FiLayout, FiZap, FiLayers, FiLifeBuoy } from "react-icons/fi";

import collage2 from "../assets/images/collage_2.webp";
import collage3 from "../assets/images/collage_3.webp";
import collage4 from "../assets/images/collage_4.webp";
import collage5 from "../assets/images/collage_5.webp";
import collage6 from "../assets/images/collage_6.webp";

export const site = {
  name: "VIRTEX LABS | Premium Digital Design & Web Agency",
  description: "We architect digital presence. Virtex Labs fuses high-end web design with rigorous engineering to create scalable platforms that drive measurable growth. Contact us for more details.",
  url: "https://virtexlabs.com/",
  ogImage: "/images/mountainV-og.jpg",
  nav_left: [
    { label: "Services", href: "#services" },
    { label: "FAQ", href: "/faq" },
  ],
  nav_right: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],
  features: [
    "Astro-first performance",
    "Tailwind design system",
    "GSAP + Framer Motion motion layer",
    "SEO-ready structure"
  ],

  vision: {
    phrase1: "We build lean products that feels sharp,",
    phrase2: "that will give your vision a true meaning."
  },

  services: [
    {
      title: "Web Designing",
      description_short: "Stunning, responsive websites built to engage and convert visitors.",
      image: collage2,
      description:
        "We craft visually stunning, highly responsive websites tailored to your brand. From wireframes to launch, we ensure every pixel serves a purpose in engaging your audience.",
      gallery: [
        collage2,
        collage3,
        collage4,
        collage5,
        collage6,
      ],
    },
    {
      title: "UI/UX Designing",
      description_short: "Intuitive, user-focused interfaces designed for seamless digital experiences.",
      image: collage3,
      description:
        "User-centric design that feels as good as it looks. We map out intuitive user journeys and create interfaces that reduce friction and maximize conversion rates.",
      gallery: [
        collage2,
        collage4,
        collage3,
      ],
    },
    {
      title: "Web Applications",
      description_short: "Scalable web applications engineered for performance, reliability, and growth.",
      image: collage4,
      description:
        "Powerful, scalable web applications built for complex business needs. We handle robust backend architecture seamlessly integrated with blazing-fast frontends.",
      gallery: [
        collage4,
        collage6,
        collage2,
        collage3,
      ],
    },
    {
      title: "Mobile Applications",
      description_short: "Fast, intuitive mobile apps that deliver exceptional user experiences.",
      image: collage5,
      description:
        "Native and cross-platform mobile experiences that put your business right in your customers' pockets. Fast, secure, and incredibly intuitive.",
      gallery: [
        collage5,
        collage3,
        collage2,
        collage6,
      ],
    },
  ],

  whyUs: {
    mobileHeroText: "At Virtex Labs, we engineer robust digital ecosystems, bridging the gap between bold vision and flawless execution.",
    blurLines: [
      "At Virtex Labs, we don't just",
      "write code, we build robust,",
      "scalable digital ecosystems.",
      "Every interface we craft bridges",
      "the gap between bold vision",
      "and flawless technical execution.",
      "We obsess over performance,",
      "ensuring your users experience",
      "nothing but seamless perfection.",
    ],
    reasons: [
      {
        title: "Fluid & Responsive",
        description:
          "We don't just build websites, we engineer digital ecosystems. Every interface is meticulously crafted with pixel-perfect precision, ensuring that whether your users are on a massive desktop monitor or a compact mobile screen, the experience remains flawless, immersive, and uncompromisingly intuitive.",
        mobileDescription:
          "Pixel-perfect, fluid interfaces that adapt flawlessly to any screen size.",
        Icon: FiLayout,
      },
      {
        title: "Uncompromising Performance",
        description:
          "Speed isn't a luxury, it's the baseline. We build incredibly fast, lean architectures with rigorous SEO optimization and efficient asset delivery. This means drastically reduced bounce rates, maximized user retention, and top-tier search engine visibility that keeps you ahead of the competition.",
        mobileDescription:
          "Lightning-fast architectures optimized for SEO and maximum user retention.",
        Icon: FiZap,
      },
      {
        title: "Future-Proof Architecture",
        description:
          "Your business isn't static, and your software shouldn't be either. We architect solutions using pristine, maintainable code and industry-leading frameworks. This modular approach guarantees that as your user base grows and your needs evolve, your platform scales seamlessly without accumulating technical debt.",
        mobileDescription:
          "Scalable, pristine code built with industry-leading modern frameworks.",
        Icon: FiLayers,
      },
      {
        title: "Dedicated Partnership",
        description:
          "Launch day is just the beginning. We embed ourselves as an extension of your team, providing round-the-clock technical support, continuous security monitoring, and strategic guidance. We are deeply committed to ensuring your digital presence not only survives but thrives in a dynamic market.",
        mobileDescription:
          "Round-the-clock technical support and strategic guidance post-launch.",
        Icon: FiLifeBuoy,
      },
    ]
  },

  process: {
    introLines: [
      "Great digital products don't happen by accident.",
      "They are the result of deliberate strategy, relentless refinement, and flawless execution.",
      "We strip away the guesswork and replace it with a transparent, collaborative workflow.",
      "From architecture and wireframing to deployment and optimization, every phase is meticulously mapped out.",
    ],
    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "We dive deep into your goals, your users, and the competitive landscape. Before a single line is written, we map every assumption, constraint, and opportunity, so the direction we move in is the right one from the start.",
        mobileDescription:
          "We map every assumption, constraint, and opportunity before writing a single line of code.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
      },
      {
        number: "02",
        title: "Plan & Design",
        description:
          "We translate strategy into structure, wireframes, user flows, and high-fidelity designs that feel intuitive before development begins. Every interaction is deliberate, every layout earns its place.",
        mobileDescription:
          "Translating strategy into wireframes, flows, and intuitive high-fidelity designs.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
      },
      {
        number: "03",
        title: "Build",
        description:
          "Clean code. Rigorous standards. We develop with performance and maintainability baked in, not bolted on. Every component is tested, every integration considered, so what ships is something you're proud to put your name on.",
        mobileDescription:
          "Developing with rigorous standards, ensuring performance is baked in, not bolted on. ",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
      },
      {
        number: "04",
        title: "Test & Refine",
        description:
          "We stress-test every edge case, optimise every bottleneck, and refine every detail until it's genuinely excellent. Real-device testing, performance audits, accessibility checks, nothing launches until it's ready.",
        mobileDescription:
          "Stress-testing edge cases and auditing performance. Nothing launches until it's ready.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
      },
      {
        number: "05",
        title: "Launch",
        description:
          "Go-live is just the beginning. We handle deployment, monitor stability, and stay in your corner through every post-launch iteration. Your growth is the metric we care about long after the handoff.",
        mobileDescription:
          "We handle deployment and monitor stability, staying in your corner post-launch. ",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
      },
    ],
  },

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
    established: "2026",
    location: "Sri Lanka",
  },

  // portfolio: [
  //   {
  //     title: "Virtex Labs",
  //     label: "Personal project",
  //     description: "This very website, built with Astro, GSAP ScrollTrigger, and Tailwind CSS. A showcase of motion-driven, performance-first web design.",
  //     href: "#",
  //   },
  //   {
  //     title: "SocialPulse AI",
  //     label: "Concept build",
  //     description: "An AI-powered social media analytics dashboard prototype. Real-time sentiment analysis with a clean, data-dense interface.",
  //     href: "#",
  //   },
  // ],

  // stats: [
  //   { value: "1+", label: "Years of experience" },
  //   { value: "10+", label: "Technologies mastered" },
  //   { value: "5+", label: "Projects completed" },
  // ],

  socials: [
    { label: "Instagram", href: "https://www.instagram.com/virtexlabs/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/virtex-labs/" },
    { label: "Twitter / X", href: "https://x.com/virtexlabs/" },
  ],
};