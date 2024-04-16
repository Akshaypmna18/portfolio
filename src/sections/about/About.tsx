"use client";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";

function About() {
  const ref = useIsVisible("About");
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, stiffness: 250 }}
      viewport={{
        once: true,
      }}
      id="about"
      className="scroll-mt-36"
      ref={ref}
    >
      <h2 className="section-heading">About me</h2>
      <p>
        I'm from Perinthalmanna, Kerala, India. After earning my bachelor's
        degree in
        <span className="font-medium text-primaryColor">
          {" "}
          Computer Applications 
        </span>{" "}
        in 2023, I decided to pursue my passion for programming. I am a self-taught
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
        <span className="font-medium text-primaryColor">Redux Toolkit</span>.
      </p>
      <br />
      <p>
        Collaborating with different teams of great developers on both{" "}
        <span className="font-medium text-primaryColor"> open source </span> and{" "}
        <span className="font-medium text-primaryColor"> private </span>{" "}
        projects has increased my confidence and improved my{" "}
        <span className="font-medium text-primaryColor"> technical </span>
        and{" "}
        <span className="font-medium text-primaryColor">
          {" "}
          collaborative{" "}
        </span>{" "}
        skills. Currently, I am actively seeking
        <span className="font-medium text-primaryColor">
          {" "}
          frontend roles{" "}
        </span>{" "}
        where I can contribute my skills and expertise. Outside of coding, I
        enjoy <span className="italic">watching movies and series</span>,{" "}
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
