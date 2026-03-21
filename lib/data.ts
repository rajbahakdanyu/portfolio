import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiDocker,
  SiGit,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
} from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";

export const NAV_LINKS = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

export interface ExperienceItem {
  title: string;
  company: string;
  type?: string;
  period: string;
  location?: string;
  bullets?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Full Stack Engineer",
    company: "Flight Centre Travel Group",
    type: "Full-time",
    period: "Nov 2024 – Present",
    location: "Brisbane, Australia · Hybrid",
    bullets: [
      "Building and maintaining full-stack features across internal travel booking platforms using React, TypeScript, and AWS Lambda.",
      "Collaborating in an agile cross-functional team to deliver scalable, cloud-native solutions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "DLTx Labs",
    type: "Full-time",
    period: "Nov 2023 – Oct 2024",
    location: "Brisbane, Australia · Hybrid",
    bullets: [
      "Developed and deployed containerised microservices using Docker; conducted load testing to ensure system reliability at scale.",
      "Contributed across the full stack — from React frontends to Node.js APIs and cloud infrastructure.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Code Himalaya",
    type: "Full-time",
    period: "Aug 2021 – Jun 2022",
    location: "Kathmandu, Nepal · On-site",
    bullets: [
      "Built cross-platform mobile applications with Flutter, integrating NoSQL databases and RESTful APIs via Postman.",
    ],
  },
  {
    title: "Django Developer",
    company: "4 Space Technology",
    type: "Internship",
    period: "Nov 2020 – Feb 2021",
    location: "Kathmandu, Nepal · Remote",
    bullets: [
      "Developed back-end web features using Django and jQuery, helping deliver client-facing projects during a 4-month internship.",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Freelance",
    type: "Freelance",
    period: "Jun 2019 – Oct 2019",
    bullets: [
      "Delivered freelance web projects using Laravel, building custom back-end solutions for clients.",
    ],
  },
];

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const SKILLS: Skill[] = [
  // Languages & Frameworks
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  // Styling
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  // Cloud & Infrastructure
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  // Testing
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Playwright", icon: TbTestPipe, color: "#2EAD33" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  gradient: string;
  number: string;
}

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, Stripe payments, and a rich admin dashboard built with Next.js and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-violet-600 to-indigo-600",
    number: "01",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time conversational AI app powered by OpenAI's API with streaming responses, persistent conversation history, and beautiful markdown rendering.",
    tags: ["React", "Node.js", "OpenAI API", "WebSockets"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-pink-600 to-rose-600",
    number: "02",
  },
  {
    title: "Developer Analytics Dashboard",
    description:
      "An analytics platform that aggregates GitHub activity, code metrics, and productivity insights into a rich interactive visualisation dashboard.",
    tags: ["Next.js", "TypeScript", "D3.js", "MongoDB"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-emerald-600 to-teal-600",
    number: "03",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop boards, real-time multi-user updates, and a clean, minimal interface that keeps teams in sync.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/rajbahakdanyu",
    live: "#",
    gradient: "from-amber-600 to-orange-600",
    number: "04",
  },
];

export interface ConnectItem {
  icon: IconType;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

export const CONNECT: ConnectItem[] = [
  {
    icon: FiMail,
    title: "Email",
    description: "rajbahakdanyu@gmail.com",
    href: "mailto:rajbahakdanyu@gmail.com",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    description: "Connect professionally",
    href: "https://linkedin.com/in/danyu-rajbahak",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FiGithub,
    title: "GitHub",
    description: "Check out my code",
    href: "https://github.com/rajbahakdanyu",
    gradient: "from-gray-400 to-slate-500",
  },
];
