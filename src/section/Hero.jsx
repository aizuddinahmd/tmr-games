import React, { useRef } from "react";
import Section from "../components/Section";
import { BackgroundCircles } from "../components/design/Header";
import { useScroll, motion, useTransform } from "framer-motion";
import { Gradient } from "../components/design/Roadmap";

import { GradientLight } from "../components/design/Benefits";
import { heroBackground, mascot } from "../assets";

const Hero = () => {
  // const targetRef = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start start", "end start"],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <div className="relative" id="hero">
      <div
        // ref={targetRef}
        // style={{ opacity, scale }}
        className="container top-0 sticky flex justify-center items-center h-screen"
      >
        <div className="z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="font-sans h1 font-bold mb-6 tracking-tight">
            The Future of Gaming.
          </h1>
        </div>
      </div>
      <div className="sticky top-0">
        <img
          src={mascot}
          className="w-full h-full object-fill "
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
      <Gradient />
    </div>
  );
};

export default Hero;
