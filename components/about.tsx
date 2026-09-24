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
      I've been building software since 2021, starting with SAP internships for ERP Chile in Santiago, Chile. After graduating from St. Edward's University in
      May 2024 with a degree in <span className="font-medium">computer science</span> and
      a minor in <span className="font-medium">business</span>, I spent two years as the
      sole front-end developer at Jeff Martin Auctioneers, where I helped replace a
      legacy ERP with an intuitive system that staff of every technical level can use to run day-to-day operations.
    </p>

    <p className="mb-3">
      Now I'm going deeper on the backend by auditing, testing, and optimizing Django REST APIs at
      Hunt Safe Technologies. The business side shows up in how I work, I like talking
      with the people who will use what I build, presenting progress and new ideas to
      them, and making sure it actually makes their job easier.
    </p>

    <p>
      Outside of code, I compose and produce my own music, watch soccer, and explore
      Austin's concerts and food scene with my wife. I'm also fully bilingual in{" "}
      <span className="font-medium">English</span> and{" "}
      <span className="font-medium">Spanish</span>.
    </p>
    </motion.section>
  );
}