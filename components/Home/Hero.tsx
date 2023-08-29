import React from "react";
import { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { getAuthorData } from "@content/user";


const Hero = () => {
    const { image, name, words} = getAuthorData();
    const [text] = useTypewriter({
        words,
        // words: heroData.typewriter,
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 100,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            {/*animated background*/}
            <BackgroundCircles />

            <motion.section
                initial={{
                    scale: 0,
                }}
                whileInView={{
                    scale: [0, 1.2, 1],
                }}
                transition={{
                    type: "spring",
                    duration: 2,
                    delay: 2,
                }}
                viewport={{ once: true }}
                className="z-20 flex flex-col space-y-4"
            >
                <Image
                    src={image}
                    width={400}
                    height={400}
                    priority={true}
                    alt={`${name}'s Pic`}
                    className="relative rounded-full h-40 w-40 mx-auto object-cover z-20 border-4"
                />
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-20 cursor-default ">
                    {name}
                </h2>
                <div className="z-20">
                    <h1 className=" text-3xl md:text-5xl lg:text-6xl font-semibold px-10 h-20">
                        <span className="hover:text-[#F7AB0A]/70 transition ease-out duration-200 cursor-default  ">
                            {text}
                            <Cursor cursorColor="#F7AB0A" cursorStyle="|" />
                        </span>
                    </h1>
                </div>
            </motion.section>
            <Link
                href="https:bit.ly/j471nCV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 transition-transform border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-white dark:hover:bg-neutral-800 active:scale-95 z-10"
            >
                <FiDownload />
                <p>Resume</p>
            </Link>
        </div>
    );
};

export default Hero;