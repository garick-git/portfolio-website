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
          During these last four years, I've spent my time learning and creating, which helped me find my passion in Front-End development. Graduating in May 2024, I am looking forward to starting a career in <span className="font-medium">software development.</span> My favorite part of programming is bringing a solution to life. My core stack includes {" "}
          <span className="italic font-medium">
            React, Next.js, Node.js, TypeScript, </span><span>and</span> <span className="italic font-medium">Tailwind CSS. </span>
          I also work with development tools such as<span className="italic font-medium"> npm</span> and <span className="italic font-medium">Git</span>. I am currently working on a teacher dashboard to display data in a user-friendly way. 
          Besides coding, I am a musician and a soccer fanatic who likes to explore the city of Austin, TX. I like to go to concerts around town and try the many foods this city has to offer.
      </p>
    </motion.section>
  );
}