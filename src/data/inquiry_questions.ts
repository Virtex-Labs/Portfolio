export const SERVICES = [
  {
    id: "web-app",
    title: "Web Application Development",
    description:
      "For complex platforms, custom software, and portals (e.g. SaaS, internal dashboards, booking systems).",
    info: "Milestone Model (30/30/40): 30% upfront for Project Kickoff & Architecture, 30% split across verifiable Feature-Based Sprints, and 40% upon UAT & Final Deployment.",
  },
  {
    id: "web-design",
    title: "Web Development & Design",
    description:
      "For landing pages, digital business cards, and marketing sites (e.g. standard business presences).",
    info: "Hybrid Setup: 50% upfront Commitment Deposit, and 50% upon Pre-Launch approval on a staging server. A standard Yearly Retainer plan begins post-launch for hosting and maintenance.",
  },
  {
    id: "mobile-app",
    title: "Mobile Application Development",
    description:
      "For iOS and Android native or cross-platform builds (e.g. App Store & Google Play deployments).",
    info: "Milestone Model (30/30/40): 30% upfront for Strategy & Infrastructure, 30% tied directly to verifiable Core Engineering Sprints, and 40% prior to App Store Deployment.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "For user flows, wireframes, and high-fidelity visual interfaces.",
    info: "Progression Model (40/40/20): 40% upfront for UX Research & Wireframing, 40% for High-Fidelity Visual Design, and 20% prior to final Developer Handoff and asset delivery.",
  },
  {
    id: "brand",
    title: "Brand Designing",
    description:
      "For visual identities, logos, and comprehensive brand strategy.",
    info: "Creative Lock (50/50): 50% upfront to initiate Creative Exploration and strategy, and 50% upon Finalization & Asset Delivery.",
  },
];

const extraPreferencesQuestion = {
  id: "extra_prefs",
  title: "Extra Preferences",
  description:
    "Do you have any extra preferences? (e.g. specific features, constraints, or anything else we should know)",
  type: "textarea",
  required: false,
  maxLength: 500,
};

export const QUESTIONNAIRES: Record<string, any[]> = {
  "web-app": [
    {
      id: "q1",
      title: "The Big Picture",
      description:
        "In simple terms, what do you want this app to do for your business?",
      type: "textarea",
      required: true,
      minLength: 20,
    },
    {
      id: "q2",
      title: "The Inspiration",
      description:
        'Are there any existing apps or websites that do something similar to what you want? (e.g., "Like Uber, but for dog walking")',
      type: "textarea",
      required: false,
    },
    {
      id: "q3",
      title: "The Users",
      description: "Who will be using this application?",
      type: "checkbox",
      required: true,
      options: [
        "Everyday Customers / Public Users",
        "Internal Staff / Employees",
        "Business Partners / Vendors",
        "Other (We can discuss this on our call)",
      ],
    },
    {
      id: "q4",
      title: "The 'Must-Haves'",
      description:
        "What are the top 3 essential features this app absolutely needs on day one?",
      type: "textarea",
      required: true,
    },
    {
      id: "q5",
      title: "The Content & Actions",
      description:
        "What kind of actions will users primarily take inside the app?",
      type: "checkbox",
      required: false,
      options: [
        "Booking / Scheduling Appointments",
        "Processing Payments / Subscriptions",
        "Uploading / Viewing Documents & Photos",
        "Viewing Data Dashboards / Reports",
        "Messaging / Internal Communication",
        "I'm not entirely sure yet",
      ],
    },
    {
      id: "q6",
      title: "The Connections",
      description:
        "Does this app need to connect with any other tools you already use?",
      type: "checkbox",
      required: false,
      options: [
        "Payment Gateways (Stripe, PayPal, etc.)",
        "Email Marketing (Mailchimp, ActiveCampaign, etc.)",
        "Accounting / CRM (QuickBooks, Salesforce, etc.)",
        "Social Media Logins (Sign in with Google, Apple, etc.)",
        "No, it will be a completely standalone app",
      ],
    },
    {
      id: "q7",
      title: "The Timeline",
      description: "What is your ideal launch timeline?",
      type: "radio",
      required: true,
      options: [
        "As soon as possible (Urgent)",
        "1 - 3 months",
        "3 - 6 months",
        "No rush, just exploring my options right now",
      ],
    },
    {
      id: "q8",
      title: "The Budget",
      description:
        "What is your allocated budget range for the initial launch (MVP)?",
      type: "select",
      required: true,
      options: [
        "Under $3,000 (We might need to scale back features)",
        "$3,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000+",
      ],
    },
    extraPreferencesQuestion,
  ],
  "web-design": [
    {
      id: "q1",
      title: "The Primary Goal",
      description: "What is the main purpose of your new website?",
      type: "radio",
      required: true,
      options: [
        "Establish my business presence and build trust (Digital Business Card)",
        "Generate leads and get customers to contact me",
        "Sell products, services, or bookings online",
        "Showcase my portfolio, gallery, or menu",
      ],
    },
    {
      id: "q2",
      title: "The Current Situation",
      description: "Do you currently have a website?",
      type: "radio",
      required: true,
      options: [
        "No, I am starting completely from scratch",
        "Yes, but it needs a complete redesign",
        "Yes, but it just needs minor updates or better performance",
      ],
    },
    {
      id: "q3",
      title: "The Design Aesthetic",
      description:
        "How would you describe the ideal look and feel for your new website?",
      type: "checkbox",
      required: false,
      options: [
        "Clean & Minimalist",
        "Bold Typography & Modern",
        "Corporate & Professional",
        "Creative & Interactive (e.g., smooth scroll animations)",
        "Warm & Welcoming",
      ],
    },
    {
      id: "q4",
      title: "The Size of the Website",
      description:
        "Roughly how many pages do you think your website will need?",
      type: "radio",
      required: true,
      options: [
        "1 - 5 pages (Basic Presence)",
        "Up to 10 pages (Standard Business)",
        "10 - 15+ pages (Premium Custom)",
      ],
    },
    {
      id: "q5",
      title: "The Features",
      description:
        "What specific features do you know you need on the website?",
      type: "checkbox",
      required: false,
      options: [
        "Contact Forms & Lead Capture Systems",
        "WhatsApp Integration",
        "Content Management System (CMS) to edit my own posts",
        "Advanced Custom Animations & Transitions",
        "Multilingual Support",
      ],
    },
    {
      id: "q6",
      title: "The Content Readiness",
      description: "Do you have your website content ready to go?",
      type: "radio",
      required: true,
      options: [
        "Yes, everything is ready",
        "I have some content, but need help writing or gathering the rest",
        "No, I will need complete copywriting and branding assistance",
      ],
    },
    {
      id: "q7",
      title: "The Timeline",
      description: "When do you need the website to be fully launched?",
      type: "radio",
      required: true,
      options: [
        "As soon as possible (Urgent)",
        "Within 2 - 4 weeks",
        "Within 1 - 2 months",
        "I'm flexible",
      ],
    },
    {
      id: "q8",
      title: "The Budget Setup",
      description:
        "What is your estimated budget for the initial design and setup fee?",
      type: "select",
      required: true,
      options: [
        "$150 - $350 (Basic Plan)",
        "$350 - $600 (Standard Plan)",
        "$600 - $900+ (Premium Plan)",
      ],
    },
    extraPreferencesQuestion,
  ],
  "mobile-app": [
    {
      id: "q1",
      title: "The Core Purpose",
      description:
        "What is the main problem this mobile app will solve for your users?",
      type: "textarea",
      required: true,
      minLength: 20,
    },
    {
      id: "q2",
      title: "The Platform Target",
      description: "Which devices do you want this app to be available on?",
      type: "radio",
      required: true,
      options: [
        "Both iOS (Apple) and Android (Google Play)",
        "Only iOS (Apple App Store)",
        "Only Android (Google Play Store)",
        "I'm not sure yet, let's discuss",
      ],
    },
    {
      id: "q3",
      title: "The Hardware Features",
      description:
        "Will the app need to access any native smartphone features?",
      type: "checkbox",
      required: false,
      options: [
        "Camera / Photo Library",
        "GPS / Real-time Location Tracking",
        "Push Notifications",
        "Bluetooth / Connecting to external devices",
        "Offline Mode (Needs to work without internet)",
      ],
    },
    {
      id: "q4",
      title: "The Accounts & Security",
      description: "How will users log in and manage their profiles?",
      type: "checkbox",
      required: false,
      options: [
        "Standard Email & Password",
        "Social Login (Continue with Google, Apple, Facebook)",
        "Phone Number / OTP (One-Time Password)",
        "No login required (Open access to everyone)",
      ],
    },
    {
      id: "q5",
      title: "The Existing Infrastructure",
      description:
        "Do you already have an existing website or database this app needs to connect to?",
      type: "radio",
      required: true,
      options: [
        "No, we are building everything completely from scratch",
        "Yes, I have an existing website/database we need to connect to",
        "I have some systems, but I'm not sure if they can connect",
      ],
    },
    {
      id: "q6",
      title: "The Monetization Strategy",
      description: "How do you plan to make money with this app?",
      type: "radio",
      required: true,
      options: [
        "It will be a 100% free app",
        "In-App Purchases (e.g., buying coins or digital items)",
        "Recurring Subscriptions (e.g., $9.99/month for premium)",
        "E-commerce (Selling physical goods or real-world services)",
      ],
    },
    {
      id: "q7",
      title: "The Timeline",
      description: "When do you ideally want this app live in the App Stores?",
      type: "radio",
      required: true,
      options: [
        "As soon as possible (Urgent)",
        "2 - 4 months",
        "4 - 6 months",
        "No rush, just gathering information",
      ],
    },
    {
      id: "q8",
      title: "The Budget",
      description:
        "What is your allocated budget for designing and developing the initial version of this app?",
      type: "select",
      required: true,
      options: [
        "Under $4,000",
        "$4,000 - $8,000",
        "$8,000 - $15,000",
        "$15,000+",
      ],
    },
    extraPreferencesQuestion,
  ],
  "ui-ux": [
    {
      id: "q1",
      title: "The Project Type",
      description: "What type of digital product are we designing?",
      type: "radio",
      required: true,
      options: [
        "Web Application / Software Dashboard",
        "Mobile App (iOS / Android)",
        "Marketing Website / Landing Page",
        "E-commerce Store",
      ],
    },
    {
      id: "q2",
      title: "The Current State",
      description: "What stage is your project currently in?",
      type: "radio",
      required: true,
      options: [
        "Just an idea (Starting from scratch)",
        "We have rough wireframes, sketches, or a documented plan",
        "We have an existing product that needs a complete UI/UX overhaul",
        "We have an existing product that just needs minor UI polishing",
      ],
    },
    {
      id: "q3",
      title: "The Scope of Design",
      description: "Which aspects of the design process do you need help with?",
      type: "checkbox",
      required: false,
      options: [
        "User Research & Mapping out the user journey (UX)",
        "Wireframing (The structural blueprint)",
        "High-Fidelity Visual Design (The final polished UI)",
        "Interactive Clickable Prototypes (For testing or pitching to investors)",
        "Creating a cohesive Design System / UI Kit for your developers",
      ],
    },
    {
      id: "q4",
      title: "The Target Audience",
      description:
        "Who is the primary user of this interface, and what is their main goal?",
      type: "textarea",
      required: true,
      minLength: 15,
    },
    {
      id: "q5",
      title: "The Inspiration & Competitors",
      description:
        "Are there any apps or websites with a user experience or visual aesthetic you admire?",
      type: "textarea",
      required: false,
    },
    {
      id: "q6",
      title: "The Final Deliverables",
      description:
        "What do you expect to receive at the end of this design phase?",
      type: "checkbox",
      required: true,
      options: [
        "Source Design Files (Figma)",
        "Clickable Prototype Link",
        "Exported Visual Assets (Icons, Images, Logos)",
        "Developer Handoff Documentation (CSS/Spacing guidelines)",
      ],
    },
    {
      id: "q7",
      title: "The Timeline",
      description: "When do you need the final designs handed over?",
      type: "radio",
      required: true,
      options: [
        "As soon as possible (Urgent)",
        "Within 2 - 4 weeks",
        "Within 1 - 2 months",
        "I'm flexible, quality is the priority",
      ],
    },
    {
      id: "q8",
      title: "The Budget",
      description: "What is your budget for the UI/UX design phase?",
      type: "select",
      required: true,
      options: [
        "Under $1,000 (We can cover core screens and basic UI)",
        "$1,000 - $2,500 (Full UI/UX for a standard app/site)",
        "$2,500 - $5,000 (Complex flows + Prototypes)",
        "$5,000+ (Enterprise-level design systems)",
      ],
    },
    extraPreferencesQuestion,
  ],
  brand: [
    {
      id: "q1",
      title: "The Core Identity",
      description:
        "What is the name of your business, and what exactly do you do?",
      type: "textarea",
      required: true,
      minLength: 15,
    },
    {
      id: "q2",
      title: "The Current State",
      description:
        "Are we creating a brand from scratch, or rebranding an existing business?",
      type: "radio",
      required: true,
      options: [
        "Starting completely from scratch (New Business)",
        "Rebranding an existing business (Complete overhaul)",
        "Brand Refresh (Just polishing and updating what we currently have)",
      ],
    },
    {
      id: "q3",
      title: "The Brand Vibe & Keywords",
      description:
        "Provide 3 to 5 keywords that perfectly capture the vibe, purpose, and energy of your brand.",
      type: "textarea",
      required: true,
    },
    {
      id: "q4",
      title: "The Brand Personality",
      description:
        "If your brand were a person, how would you describe their personality?",
      type: "checkbox",
      required: false,
      options: [
        "Modern & Minimalist",
        "Bold & Energetic",
        "Corporate & Trustworthy",
        "Luxurious & High-End",
        "Playful & Approachable",
        "Rugged & Outdoorsy",
      ],
    },
    {
      id: "q5",
      title: "The Target Audience",
      description: "Who is your ideal customer?",
      type: "textarea",
      required: true,
    },
    {
      id: "q6",
      title: "The Scope of Work (Deliverables)",
      description: "What specific branding assets do you need us to deliver?",
      type: "checkbox",
      required: true,
      options: [
        "Primary & Secondary Logos",
        "Color Palette & Typography Selection",
        "Complete Brand Guidelines (The 'Brand Book')",
        "Business Cards & Stationery Design",
        "Social Media Profile Kits (Banners, Post Templates)",
        "Packaging Design",
      ],
    },
    {
      id: "q7",
      title: "The Inspiration",
      description:
        "Are there any existing brands whose visual identity you admire?",
      type: "textarea",
      required: false,
    },
    {
      id: "q8",
      title: "The Timeline",
      description: "When do you need the final branding assets delivered?",
      type: "radio",
      required: true,
      options: [
        "As soon as possible (Urgent)",
        "Within 2 - 3 weeks",
        "Within 1 month",
        "I'm flexible",
      ],
    },
    {
      id: "q9",
      title: "The Budget",
      description:
        "What is your allocated budget for this brand identity project?",
      type: "select",
      required: true,
      options: [
        "Under $500 (Basic Logo & Colors)",
        "$500 - $1,200 (Standard Brand Identity)",
        "$1,200 - $2,500 (Comprehensive Brand System)",
        "$2,500+ (Enterprise Level)",
      ],
    },
    extraPreferencesQuestion,
  ],
};
