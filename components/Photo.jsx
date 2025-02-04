"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.5, ease: "easeIn" } }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.5, ease: "easeIn" } }} className="ml-1 w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] xl:ml-2 absolute">
                    <Image src="/assets/photo.png" priority quality={100} fill alt="" className="object-contain"/>
                </motion.div>

                <motion.svg className="w-[304px] xl:w-[508px] h-[304px] xl:h-[508px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg" >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{ 
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, repeatType:"reverse", ease: "linear" }}
                    />
                </motion.svg>

            </motion.div>


        </div>
    )
}

export default Photo