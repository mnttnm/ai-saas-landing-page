'use client';

import { Button } from "@/components/Button";
import starBG from "@/assets/stars.png";
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // prints the tracked value
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  })


  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  useEffect(() => {
    console.log(backgroundPositionY.get());
  }, [backgroundPositionY]);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        backgroundImage: `url(${starBG.src})`,
        backgroundPositionY: backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starBG.width, // should cover the whole width of image
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
      className="container relative flex justify-center items-center h-[492px] md:h-[800px] overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={
          {
            background: `linear-gradient(180deg, #000 0%, rgba(0,0,0,0.00) 10%, rgba(0, 0, 0, 0.00) 90%, #000 100%), radial-gradient(70.71% 70.71% at 50% 50%, rgba(140, 69, 255, 0.50) 14.61%, rgba(14, 0, 36, 0.50) 78.12%, rgba(0, 0, 0, 0.00) 100%)`,
          }
        }
      ></div>
      {/* Planet */}
      <div
        className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border border-white/20
      bg-[radial-gradient(54%_54%_at_21%_18%,_white_0%,_rgba(184,148,255,1)_38%,_rgba(24,0,66,1)_100%)]
      shadow-[-20px_-20px_80px_0px_rgba(255,255,255,0.10)_inset,-20px_-20px_50px_0px_rgba(255,255,255,0.50),0px_0px_50px_0px_#8C45FF]"
      />

      {/* First Ring */}
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full border border-white opacity-10"
      >
        <div className="w-5 h-5 absolute top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full border border-white">
          <div className="w-2 h-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border border-white"></div>
        </div>
        <div className="w-5 h-5 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rounded-full border border-white">
          <div className="w-2 h-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border border-white"></div>
        </div>
        <div className="w-2 h-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border border-white"></div>
        <div className="w-2 h-2 absolute bottom-0 left-1/2  -translate-x-1/2 translate-y-1/2 bg-white rounded-full border border-white"></div>
      </motion.div>

      {/* Second Dashed Ring */}
      <motion.div
        animate={{ rotate: "-1turn" }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-dashed border-white opacity-10"
      ></motion.div>
      {/* Third Ring */}
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border  border-white opacity-10"
      >
        <div className="w-2 h-2 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border border-white"></div>
        <div className="w-2 h-2 absolute bottom-0 left-1/2  -translate-x-1/2 translate-y-1/2 bg-white rounded-full border border-white"></div>
      </motion.div>
      {/* Text Container */}
      <div className="flex flex-col gap-5 items-center relative mt-16">
        <h1
          className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white
      bg-[radial-gradient(100%_100%_at_0%_0%,_white_0%,_white_50%,_rgba(74,32,138,0.5)_100%)] bg-clip-text text-transparent"
        >
          AI SEO
        </h1>
        <p className="text-center text-lg md:text-xl max-w-xl mx-auto text-white/70">
          {`Elevate your site's visibility effortlessly with AI, where
        smart technology meets user-friendly SEO tools.`}
        </p>
        <Button label="Join waitlist" />
      </div>
    </motion.section>
  );
};
