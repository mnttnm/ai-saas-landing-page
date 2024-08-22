'use client';

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  const translateXValue = useMotionValue(0);

  const translateX = useMotionTemplate`${translateXValue}%`;

  useEffect(() => {
    animate(translateXValue, [0, -50], {
      duration: 45,
      ease: "linear",
      repeat: Infinity,
    });
  }, [translateXValue]);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <header>
          <h1 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Beyond Expectations.
          </h1>
          <p className="text-center mt-5 text-white/70 max-w-sm mx-auto text-lg md:text-xl tracking-tight">
            Our revolutionary AI SEO tools have transformed our
            clients' strategies.
          </p>
        </header>
        <div
          className="flex mt-10 overflow-hidden 
        [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        >
          <motion.div className="flex flex-none gap-5 pr-5" style={{ translateX }}>
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                className="max-w-xs md:max-w-md md:p-10 flex-none border border-white/15 rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgba(140,69,255,.3),black)]"
                key={index}
              >
                <h2 className="text-lg md:text-2xl tracking-tight">
                  {item.text}
                </h2>
                <div className="flex mt-10 items-center gap-3">
                  {/* give image the filter to show it as with purple tint */}
                  <div
                    className="relative after:content-[''] after:absolute after:inset-0 after:rounded-lg after:bg-[#8C45FF] after:mix-blend-soft-light before:absolute 
                before:inset-0 before:border before:border-white/30 before:rounded-lg before:z-10"
                  >
                    <Image
                      src={item.avatarImg}
                      className="w-11 h-11 rounded-lg grayscale"
                      alt={`avatar for ${item.name}`}
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-[16px]">
                      {item.name}
                    </p>
                    <p className="text-white/70 text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
