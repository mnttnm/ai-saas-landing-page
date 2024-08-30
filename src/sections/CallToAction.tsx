'use client';

import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useTransform,
  useScroll,
} from "framer-motion";
import { Button } from "@/components/Button";
import starBG from "@/assets/stars.png";
import gridLinesBG from "@/assets/grid-lines.png";
import {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const useMousePositionRelative = (to: RefObject<HTMLDivElement>) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      if (!to.current) return;
      const { top, left } = to.current?.getBoundingClientRect();
      x.set(event.clientX - left);
      y.set(event.clientY - top);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [to, x, y]);

  console.log(x, y);

  return [x, y];
};


export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaBoxRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );


  const [x, y] = useMousePositionRelative(ctaBoxRef);
  
  console.log(x, y);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${x}px ${y}px, black, transparent)`;

  const [isMouseInside, setIsMouseInside] = useState(false);

  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={ctaBoxRef}
          className="py-24 border border-white/20 rounded-lg overflow-hidden relative"
          style={{
            backgroundImage: `url(${starBG.src})`,
            backgroundPositionY,
          }}
          onMouseEnter={() => setIsMouseInside(true)}
          onMouseLeave={() => setIsMouseInside(false)}
        >
          {isMouseInside ? (
            <motion.div
              className="absolute inset-0 bg-[#4A208A] bg-blend-overlay"
              style={{
                maskImage,
                backgroundImage: `url(${gridLinesBG.src})`,
              }}
            ></motion.div>
          ) : (
            <div
              className="absolute inset-0 bg-[#4A208A] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
              style={{
                backgroundImage: `url(${gridLinesBG.src})`,
              }}
            ></div>
          )}

          <div className="flex flex-col items-center gap-5 relative">
            <h2 className="text-center text-5xl max-w-sm mx-auto md:text-6xl tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl px-4 text-white/60 mt-5 tracking-tight max-w-xs mx-auto">
              Achieve clear, impactful results without the complexity.
            </p>
            <Button label="Join waitlist" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
