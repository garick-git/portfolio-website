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
      "I was a SAP intern learning ERP and ABAP to provide efficient and reliable HR services for an international company.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022"
  },
  {
    title: "Full-Stack Intern",
    location: "Austin, TX",
    description:
      "I worked as a full-stack developer at Renzoe Box where I learned React and agile scrum practices from experienced software developers.",
    icon: React.createElement(CgWorkAlt),
    date: "2022"
  },
  {
    title: "Web Developer",
    location: "Remote",
    description:
      "I'm now a web developer at Cooledtured, an e-commerce where I am enhancing the user experience by developing their new website working with seasoned UI/UX designers and front-end engineers",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present"
  },
  {
    title: "Graduating College",
    location: "Austin, TX",
    description:
      "In May, I will be graduating St. Edward's University after 4 years with a BS in Computer Science and a minor in Business.",
    icon: React.createElement(LuGraduationCap),
    date: "2024"
  },
] as const;

export const projectsData = [
  {
    title: "WorkLink",
    description:
      "Dashboard that allows managers to create organizations and delegate tasks. I engineered and developed both supply and demand sides.",
    tags: ["React", "HTML", "CSS", "JSON"],
    imageUrl: worklinkImg,
  },
  {
    title: "WeGo",
    description:
      "Transportation-as-a-Service dashboard. Both supply and demand sides can track real-time deliveries using Mapbox.",
    tags: ["HTML", "CSS", "NoSQL", "Flask", "Nginx", "Gunicorn"],
    imageUrl: wegoImg,
  },
  {
    title: "HoopLogic",
    description:
      "A web app tailored for prop bettors to make informed decision when betting by presenting user-friendly graphics.",
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
  "Remix",
  "GraphQL",
  "Python",
  "Framer Motion",
  "D3.js",
  "Git",
  "npm",
  "ABAP",
  'SAP S4/HANA',
  "Bilingual"
] as const;