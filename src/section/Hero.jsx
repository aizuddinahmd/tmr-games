import React, { useRef } from "react";
import Section from "../components/Section";
import { BackgroundCircles } from "../components/design/Header";
import { useScroll, motion, useTransform } from "framer-motion";

import { GradientLight } from "../components/design/Benefits";
import { heroBackground, mascot } from "../assets";

const Hero = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="pt-[12rem] -mt-[5.25] relative" id="hero">
      <div
        ref={targetRef}
        style={{ opacity, scale }}
        className="container sticky top-0 h-screen z-10"
      >
        <div className="pt-[12rem] z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="font-sans h1 font-bold mb-6 tracking-tight">
            The Future of Gaming.
          </h1>

          {/* <GradientLight /> */}
          {/* gradient start */}
          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-10 from-purple-500" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 from-yellow-400" /> */}
          {/* gradient end */}
        </div>
      </div>
      {/* <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
        <img src={mascot} className="h-full" alt="AI" />
      </div> */}
      <div className="sticky top-0">
        <img
          src={mascot}
          className="w-full h-full object-fill "
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
