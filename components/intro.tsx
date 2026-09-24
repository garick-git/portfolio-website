"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const{ setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const { ref } = useSectionInView("Home", 0.5);

    return (
    <section ref={ref} id = "home" className='mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem] text-center'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                >
                    <Image
                        src= "/profilePicture.png"
                        alt="Garick Mendez"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 border-[0.35rem] border-white rounded-full w-24 object-cover shadow-xl'
                    />
                </motion.div>

                <motion.span
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay:0.1,
                    duration:0.7
                }}
                aria-hidden="true"
                className='absolute text-4xl bottom-0 right-0'>👋</motion.span>
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 font-medium px-4 text-2xl leading-[1.5]'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        >
            <span className="font-bold">Hello, I'm Garick Mendez.</span>{" "}
            I'm an Austin-based <span className="font-bold">Software Engineer</span> with{" "}
            <span className="font-bold">2+ years</span> of professional experience and internships since 2021.
            I build <span className="italic">fast</span>, <span className="italic">accessible</span> web apps
            that businesses run on, from customer platforms to internal tools. My main stack is{" "}
            <span className="underline">Next.js (TypeScript)</span>,{" "}
            <span className="underline">Django (Python)</span>, and{" "}
            <span className="underline">Tailwind CSS</span>.
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{
                delay: 0.1
            }}
        >
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
                setActiveSection("Contact")
                setTimeOfLastClick(Date.now())
            }}
            >
                Contact me here<BsArrowRight
                className='group-hover:translate-x-1 transition opacity-70'/>
            </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' href='/Garick_Mendez_Resume.pdf' download>
                Download CV <HiDownload className='group-hover:translate-y-1 transition opacity-60'/>
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                href="https://www.linkedin.com/in/garick-mendez"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
            >
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 text-[1.35rem] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                href="https://github.com/garick-git"
                target='_blank'
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
            >
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}