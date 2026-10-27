


export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  year: string;
  stack: string[];
  gradient: string;
  image: string;
  images?: string[];
  liveUrl: string;
  githubUrl: string;
  behanceUrl?: string;
  highlights: string[];
};


export const projects: Project[] = [
  {
    slug: "bazar-dor",
    number: "01",
    title: "Bazar Dor",
    category: "Full-stack Web App",
    summary:
      "A market-price browsing experience for everyday essentials.",
    description:
      "A Next.js application for browsing everyday product categories, exploring product details, and comparing market prices through a responsive interface.",
    year: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
    ],
    gradient: "peach",
    image: "/projects/bazar-dor.svg",
    images: [
      "/projects/fitlog/fitlog-home.png",
      "/projects/fitlog/workout-library.png",
      "/projects/fitlog/my-plan.png",
      "/projects/fitlog/activity-details.png",
    ],
    liveUrl: "https://assignment-7-seven-alpha.vercel.app/",
    githubUrl: "https://github.com/fahiyahedayet/assignment-7",
    highlights: [
      "Category-based product browsing",
      "Product details and price comparisons",
      "Authentication and profile flows",
      "Responsive mobile and desktop layouts",
    ],
  },
  {
    slug: "fitlog",
    number: "02",
    title: "FitLog",
    category: "Fitness Web App",
    summary:
      "A fitness activity library and personal workout plan.",
    description:
      "A responsive fitness application for discovering activities, saving workouts, and organizing a personal plan.",
    year: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    gradient: "lime",
    image: "/projects/fitlog.svg",
    images: [
      "/projects/fitlog/fitlog-home.png",
      "/projects/fitlog/workout-library.png",
      "/projects/fitlog/my-plan.png",
      "/projects/fitlog/activity-details.png",
    ],
    liveUrl: "https://assignment-6-one-pi.vercel.app/",
    githubUrl: "https://github.com/fahiyahedayet/assignment-6",
    highlights: [
      "Activity library powered by an API",
      "Saved activities and personal plan",
      "Loading and empty states",
      "Responsive dark theme",
    ],
  },
  {
    slug: "ui-ux-case-study",
    number: "03",
    title: "Fintech Website",
    category: "UI/UX Case Study",
    summary: "A fintech loan platform designed to simplify loan discovery and comparison through a modern, user-friendly interface.",
    description: "A UI/UX case study focused on designing a bold, intuitive fintech experience that helps users explore loan options, compare rates, and make informed financial decisions.",
    year: "2026",
    stack: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    gradient: "violet",
    image: "/projects/ui-ux-case-study.svg",
    images: [
      "/projects/fitlog/fitlog-home.png",
      "/projects/fitlog/workout-library.png",
      "/projects/fitlog/my-plan.png",
      "/projects/fitlog/activity-details.png",
    ],
    liveUrl: "",
    githubUrl: "",
    highlights: [
      "Designed a modern fintech loan platform",
      "Simplified loan discovery and comparison",
      "Focused on usability, clarity, and user trust",
      "Created UI designs and prototypes in Figma"
    ],
  },

];