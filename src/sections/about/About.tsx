"use client";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";

function About() {
  const ref = useIsVisible("About");
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
      id="about"
      className="scroll-mt-36"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        After earning my bachelor's degree in
        <span className="font-medium text-primaryColor">
          {" "}
          Computer Applications
        </span>
        , I decided to pursue my passion for programming. I am a self-taught
        front-end developer with a love for{" "}
        <span className="italic text-primaryColor"> problem-solving</span>,{" "}
        <span className="italic text-primaryColor">design</span>, and{" "}
        <span className="italic text-primaryColor">debugging</span>, with a core
        stack that includes{" "}
        <span className="font-medium text-primaryColor">React</span>,{" "}
        <span className="font-medium text-primaryColor">Next.js</span>,{" "}
        <span className="font-medium text-primaryColor">Zustand</span>, and{" "}
        <span className="font-medium text-primaryColor">Tailwind CSS</span>. I'm
        also familiar with{" "}
        <span className="font-medium text-primaryColor">TypeScript</span> and{" "}
        <span className="font-medium text-primaryColor">Redux</span>.
      </p>
      <br />
      <p>
        Currently, I am actively seeking frontend roles where I can contribute
        my skills and expertise. Outside of coding, I enjoy{" "}
        <span className="italic">watching movies and series</span>,{" "}
        <span className="italic">playing games</span>, and spending quality time
        with <span className="italic">friends and family</span>. I'm always
        attracted to the{" "}
        <span className="font-medium">latest technologies</span> and stay
        updated to explore <span className="italic">new possibilities</span>.
      </p>
    </motion.section>
  );
}

export default About;
