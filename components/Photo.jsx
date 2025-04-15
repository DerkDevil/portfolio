"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Photo = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className="relative w-[298px] h-[298px] xl:w-[373px] xl:h-[373px]"
    >
      <Image
        src="/assets/photo.webp"
        alt="Foto de Dereck"
        width={373}
        height={373}
        priority
        quality={85}
        className="object-contain rounded-full w-full h-full"
      />

      {inView && (
        <motion.svg
          className="absolute top-0 left-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            strokeDasharray="15 120 25 25"
          />
        </motion.svg>
      )}
    </div>
  );
};

export default Photo;
