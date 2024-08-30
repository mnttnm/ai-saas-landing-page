'use client';

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import quantumLogo from "@/assets/logo-quantum.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import {motion} from "framer-motion"
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center gap-5">
        <h2 className="flex-1 md:flex-none">
          Trusted by top innovative teams
        </h2>
        <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex flex-none gap-14 pr-14"
          >
            {[
              acmeLogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
              acmeLogo,
              apexLogo,
              celestialLogo,
              quantumLogo,
              pulseLogo,
              echoLogo,
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt="logo"
                className="h-6 w-auto"
                width={logo.width}
                height={logo.height}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
