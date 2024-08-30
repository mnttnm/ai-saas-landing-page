"use client";

import productImage from "@/assets/product-image.png";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  ValueAnimationTransition,
} from "framer-motion";
import {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const FeatureTab = (
  props: (typeof tabs)[number] & {
    selected: boolean;
  } & ComponentPropsWithoutRef<"div">
) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const handleTabHover = () => {
    if (dotLottieRef.current) {
      // required to reset the animation as it does not
      // have anything to play after the first animation
      dotLottieRef.current.seek(0);
      dotLottieRef.current.play();
    }
  };

  const xPosition = useMotionValue(0);
  const yPosition = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPosition}% ${yPosition}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPosition.set(0);
    yPosition.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;

    // for e.g. if h is 100 and w is 200
    // this defines the timings for keyframe in the animation
    // animation starts at zero
    // will reach to the top right corner after w/2(h+w)*4 sec = 1.33 sec
    // will reach to the bottom right corner after w+h/2(h+w)*4 sec = 2 sec
    // and so on...

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const animationOptions: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPosition, [0, 100, 100, 0, 0], animationOptions);
    animate(yPosition, [0, 0, 100, 100, 0], animationOptions);
  }, [props.selected, tabRef, xPosition, yPosition]);

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      onClick={props.onClick}
      key={props.title}
      className="flex lg:flex-1 border rounded-xl border-white/20 p-3 gap-3 items-center relative"
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage: maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#8C45FF]"
        ></motion.div>
      )}
      <div className="inline-flex  items-center justify-center w-12 h-12 border rounded-xl border-white/20">
        <DotLottiePlayer
          src={props.icon}
          className="h-5 w-5"
          autoplay
          ref={dotLottieRef}
        />
      </div>
      <h2 className="text-white font-medium">{props.title}</h2>
      {props.isNew && (
        <div className="bg-[#8C44FF] rounded-full px-2 py-1 text-[black] font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionXValue = useMotionValue(
    tabs[selectedTab].backgroundPositionX
  );
  const backgroundPositionYValue = useMotionValue(
    tabs[selectedTab].backgroundPositionY
  );
  const backgroundSizeXValue = useMotionValue(
    tabs[selectedTab].backgroundSizeX
  );

  const backgroundPosition = useMotionTemplate`${backgroundPositionXValue}% ${backgroundPositionYValue}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeXValue}% auto`;


  const handleTabChange = (selectedTab: number) => {
    setSelectedTab(selectedTab);

    animate(
      backgroundPositionXValue,
      [
        backgroundPositionXValue.get(),
        tabs[selectedTab].backgroundPositionX,
      ],
      {
        duration: 2,
        ease: "easeInOut",
      }
    );

    animate(
      backgroundPositionYValue,
      [
        backgroundPositionYValue.get(),
        tabs[selectedTab].backgroundPositionY,
      ],
      {
        duration: 2,
        ease: "easeInOut",
      }
    );

    animate(
      backgroundSizeXValue,
      [
        backgroundSizeXValue.get(),
        100,
        tabs[selectedTab].backgroundSizeX,
      ],
      {
        duration: 2,
        ease: "easeInOut",
      }
    );
  };

  return (
    <section className="py-20">
      <div className="container pt-10">
        <header>
          <h1 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Elevate your SEO efforts
          </h1>
          <p className="text-center mt-5 text-white/70 max-w-2xl mx-auto text-lg md:text-xl tracking-tight">
            From small startups to large enterprises, our AI-driven
            tool has revolutionized the way business approach SEO
          </p>
        </header>

        <div className="flex flex-col lg:flex-row  gap-3 mt-8">
          {tabs.map((tab, i) => (
            <FeatureTab
              key={tab.title}
              onClick={() => handleTabChange(i)}
              {...tab}
              selected={selectedTab === i}
            />
          ))}
        </div>
        <div className="border border-white/20 rounded-xl p-3 mt-3">
          <motion.div
            className="aspect-video border border-white/20 rounded-xl bg-cover"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundPosition: backgroundPosition,
              backgroundSize: backgroundSize,
            }}
          ></motion.div>
          {/* <Image
            src={productImage}
            className="border border-white/20 rounded-xl"
            alt='product image'
          /> */}
        </div>
      </div>
    </section>
  );
};
