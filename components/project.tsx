"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {/* A real link instead of onClick: keyboard-focusable, and shows the URL on hover */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} on GitHub (opens in a new tab)`}
        className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-400"
      >
        {/*
          Changes:
          - max-w 42rem -> 48rem (wider card)
          - fixed sm:h-[20rem] -> md:min-h-[20rem], so the card grows with its text instead of clipping the badges
          - md:flex lets the text column stretch to the card's full height, so the badges still sit at the bottom
          - side-by-side layout starts at md (768px) instead of sm (640px); between 640 and 768px it was too cramped
        */}
        <section className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden relative md:flex md:min-h-[20rem] md:pr-8 md:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[55%] md:group-even:ml-auto flex flex-col">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="dark:text-white/70 leading-relaxed text-gray-700 mt-3">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 md:mt-auto md:pt-4">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            quality={95}
            className="absolute hidden md:block top-8 -right-32 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-32"
          />
        </section>
      </a>
    </motion.div>
  );
}