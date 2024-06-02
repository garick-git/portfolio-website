"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          I always liked to spend my time learning and creating, which helped me find my passion for software development. In May 2024, I graduated St. Edward's University with a major in computer science and a minor in business, and am now pursuing my passion full-time. My favorite part of programming is bringing ideas to life and collectively solving problems.
      </p>

      <p>
          My core stack includes {" "}
          <span className="italic font-medium">
              React, Next.js, Node.js, TypeScript, </span><span>and</span> <span className="italic font-medium">Tailwind CSS. </span>
            I also work with development tools such as<span className="italic font-medium"> npm</span> and <span className="italic font-medium">Git</span>.
             I enjoy composing and producing my own music, watch and play soccer, and explore the city of Austin, TX. I like to go to concerts around town and try the many foods this city has to offer.
      </p>
    </motion.section>
  );
}