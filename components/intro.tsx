"use client";

import React from 'react'
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
                        alt="Garick portrait"
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
                className='absolute text-4xl bottom-0 right-0'>👋</motion.span>
            </div>
        </div>
        
        <motion.h1 className='mb-10 mt-4 font-medium px-4 text-2xl leading-[1.5]'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        >
            <span className="font-bold">
                Hello, I'm Garick Mendez.
            </span> I'm a{" "}
            <span className="font-bold">
                Software Developer
            </span> with{" "}
            <span className="font-bold">
                3 years
            </span> of experience. I enjoy
            building  
            <span className="italic">
                {" "}reactive</span> <span>and</span> <span className="italic"> rich {" "}
            </span>sites & apps with a focus in business. My main stack is{" "}
            <span className="underline">
                React, TypeScript, Tailwind CSS,
            </span>
            and
            <span className="underline">
                {" "} AWS.
            </span>.
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

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' href='/CV.pdf' download>
                Download CV <HiDownload className='group-hover:translate-y-1 transition opacity-60'/>{" "}
            </a>
            
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus-scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark: bg-white/10 dark:text-white/60' href="https://www.linkedin.com/in/garick-mendez" target='_blank'>
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus-scale-[1.15] hover:scale-[1.15] hover:text-gray-950 text-[1.35rem] focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark: bg-white/10 dark:text-white/60' href="https://github.com/garick-git" target='_blank'>
                <FaGithubSquare />
            </a>
        </motion.div>
    </section>
  )
}