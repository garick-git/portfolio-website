import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import wegoImg from "@/public/wegoImg.png";
import { LuCode, LuUsers} from "react-icons/lu";
import pokemonImg from "@/public/pokemonImg.png";
import worklinkImg from "@/public/worklinkImg.png";
import hooplogicImg from "@/public/hooplogicImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Pokémon Gallery",
    description:
      "A responsive Pokémon gallery built with Next.js, TypeScript, and Tailwind CSS on top of the PokéAPI. Uses a two-step fetch that loads all requests in parallel, interfaces modeled on the real API response, and explicit loading and error states. WCAG Accessible with ARIA live regions, alert roles, and alt text.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    imageUrl: pokemonImg,
    href: "https://github.com/garick-git/pokemon-gallery",
  },
  {
    title: "HoopLogic",
    description:
      "A full-stack basketball analytics app. I cut stat load times by 14 seconds across 7,000+ players, synced 90,000+ games of data weekly from a third-party REST API into MySQL through a CI/CD pipeline, and built interactive D3.js charts for player metrics.",
    tags: ["React", "Python", "Flask", "MySQL", "D3.js", "REST API"],
    imageUrl: hooplogicImg,
    href: "https://github.com/garick-git/hooplogic",
  },
  {
    title: "WeGo",
    description:
      "A Transportation-as-a-Service simulation modeling autonomous vaccine delivery to a hospital with real-time order tracking. I built the entire front end, helped shape the API responses it consumed, and worked in 8 Scrum sprints on a 7-person team.",
    tags: ["JavaScript", "Python", "Mapbox", "NoSQL"],
    imageUrl: wegoImg,
    href: "https://github.com/garick-git/wego",
  },
  {
    title: "WorkLink",
    description:
      "A task-delegation ERP app, where managers create organizations, assign work, and track progress, with a separate employee view for updating assignments. I built both interfaces.",
    tags: ["React", "JavaScript", "HTML5", "CSS3"],
    imageUrl: worklinkImg,
    href: "https://github.com/garick-git/worklink",
  },
] as const;

// Ordered by category: languages, front end, back end, testing, infra/tools, other
export const skillsData = [
  "Next.js",
  "TypeScript",
  "Django",
  "Python",
  "SQL",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "GraphQL",
  "D3.js",
  "Flask",
  "REST APIs",
  "PostgreSQL",
  "WebSockets",
  "Stripe",
  "Vitest",
  "pytest",
  "Docker",
  "AWS",
  "Git",
  "Figma",
  "Jira",
  "SAP S/4HANA",
  "English/Spanish",
] as const;

// Newest first
export const experiencesData = [
  {
    title: "Back-End Intern",
    location: "Austin, TX",
    description:
      "At Hunt Safe Technologies, I'm expanding into backend engineering after two years of leading front-end work. I designed and ran a security audit of HuntSync's 152-endpoint Django/PostgreSQL REST API, confirming defects in 68 endpoints, including 19 high-risk payment and safety flows, and grew the pytest suite by 547 tests covering Stripe payments, billing, and SMS webhooks.",
    icon: React.createElement(LuCode),
    date: "2026 - Now",
  },
  {
    title: "Front-End Developer",
    location: "Austin, TX",
    description:
      "As the sole front-end developer at Jeff Martin Auctioneers, I led the replacement of a legacy ERP with a Dockerized Next.js and TypeScript system, building 176 React components across 83 pages and working with 3 backend engineers on REST API design for 8 services. I interviewed staff and leadership to shape Figma designs, owned 2 WCAG accessibility epics, maintained a 50+ test Vitest suite, and built a WebSocket-powered live auction display with Dolby livestreaming.",
    icon: React.createElement(LuCode),
    date: "2024 - 2026",
  },
  {
    title: "Lead Guest Relations Agent",
    location: "Austin, TX",
    description:
      "At St. Edward's University, I was promoted to Lead Guest Relations Agent within a year, training 6+ new student staff and running scheduling and project planning for a team of 4. I coordinated directly with the Assistant Director of Events on 15+ third-party arrivals across 25+ event spaces and 200+ setups, resolved issues on call in English and Spanish, and contributed to $400K+ in conference revenue and 500+ events over two years.",
    icon: React.createElement(LuUsers),
    date: "2022 - 2024",
  },
  {
    title: "Front-End Intern",
    location: "Austin, TX",
    description:
      "At Cooledtured, an e-commerce company, I refactored a legacy front end into a modern React, TypeScript, GraphQL, and Tailwind UI on a Shopify Hydrogen headless storefront, building new components and pages, resolving 9 tickets, and reviewing code across 15 pull requests alongside senior engineers and designers.",
    icon: React.createElement(LuCode),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Intern",
    location: "Austin, TX",
    description:
      "At Renzoe Box, an Austin beauty-tech startup, I supported CRUD work in a React, Flask, and SQL stack and AWS infrastructure (Amplify, S3, Lambda) under senior engineers, and cut post-release defects by 50% through linting, Git-based code reviews, and documentation across 8 sprints.",
    icon: React.createElement(LuCode),
    date: "2022 - 2023",
  },
  {
    title: "SAP Intern I & II",
    location: "Santiago, Chile",
    description:
      "At ERP Chile, I configured SAP S/4HANA HR and payroll modules for an international company, designing organizational structures, managing personnel and payroll data, running payroll, and writing ABAP queries to make reporting faster.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;