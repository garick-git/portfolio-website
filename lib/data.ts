import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import worklinkImg from "@/public/worklinkImg.png";
import hooplogicImg from "@/public/hooplogicImg.png";
import wegoImg from "@/public/wegoImg.png";

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

export const experiencesData = [
  {
    title: "SAP Intern I & II",
    location: "Santiago, Chile",
    description:
      "I was a SAP intern working with ERP and ABAP to provide efficient and reliable HR services for an international company.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022"
  },
  {
    title: "Full-Stack Intern",
    location: "Austin, TX",
    description:
      "I interned as a full-stack developer at Renzoe Box where I leveraged my skills in React, Python, and AWS to develop user-focused interfaces and a stable backend infrastructure for an Austin start-up.",
    icon: React.createElement(CgWorkAlt),
    date: "2022"
  },
  {
    title: "Web Developer Intern",
    location: "Austin, TX",
    description:
      "Web developer at Cooledtured, an e-commerce. Using TypeScript, React, and GraphQL, I enhanced the site by developing modern and responsive pages and components. Collaborated with experienced UI/UX and front-end engineers to shape the user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2023"
  },
  {
    title: "Graduating College",
    location: "Austin, TX",
    description:
      "In May, I will be graduating St. Edward's University with a BS in Computer Science and a minor in Business.",
    icon: React.createElement(LuGraduationCap),
    date: "2024"
  },
] as const;

export const projectsData = [
  {
    title: "WorkLink",
    description:
      "Interface that allows managers to create organizations and delegate tasks. I engineered and developed both supply and demand sides with a UT professor.",
    tags: ["React", "HTML", "CSS", "JSON"],
    imageUrl: worklinkImg,
  },
  {
    title: "WeGo",
    description:
      "Engineered the front-end for a Transportation-as-a-Service app with both supply and demand sides to track real-time deliveries.",
    tags: ["HTML", "CSS", "NoSQL", "Flask", "JavaScript"],
    imageUrl: wegoImg,
  },
  {
    title: "HoopLogic",
    description:
      "A web app tailored for prop bettors to make informed decision when betting by presenting relevant stats with user-friendly graphics.",
    tags: ["React", "Python", "MySQL", "Flask", "Nginx", "Gunicorn"],
    imageUrl: hooplogicImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "SQL",
  "AWS",
  "GraphQL",
  "Python",
  "Framer Motion",
  "D3.js",
  "Selenium",
  "ABAP",
  'SAP S4/HANA',
  "Bilingual"
] as const;