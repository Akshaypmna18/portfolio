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
        I'm from Perinthalmanna, Kerala, India. After completing my bachelor's
        degree in
        <span className="font-medium text-primaryColor">
          {" "}
          Computer Applications{" "}
        </span>
        in 2023, I started my journey as a developer. Over time, I have grown
        into a
        <span className="font-medium text-primaryColor">
          {" "}
          full-stack developer{" "}
        </span>
        who enjoys{" "}
        <span className="italic text-primaryColor">problem-solving</span>,
        <span className="italic text-primaryColor"> design</span>, and
        <span className="italic text-primaryColor"> debugging</span>. My core
        stack includes
        <span className="font-medium text-primaryColor"> React</span> and its
        frameworks, along with{" "}
        <span className="font-medium text-primaryColor">Zustand</span> and
        <span className="font-medium text-primaryColor"> Tailwind CSS</span>.
        Recently, my main focus has been exploring and building with{" "}
        <span className="underline text-primaryColor">AI agents</span>.
      </p>
      <br />
      <p>
        Working with product startups and collaborating with talented engineers
        on both{" "}
        <span className="font-medium text-primaryColor">open source</span> and
        <span className="font-medium text-primaryColor"> private</span> projects
        has sharpened my{" "}
        <span className="font-medium text-primaryColor">technical </span>
        and <span className="font-medium text-primaryColor">
          collaborative
        </span>{" "}
        skills. I’m now looking to take on
        <span className="font-medium text-primaryColor">
        {" "}new challenges
        </span>{" "}
        that push me beyond my comfort zone and help me grow as a developer.
        Outside of coding, I enjoy <span className="italic">movies</span>,
        <span className="italic"> gaming</span>, and spending time with
        <span className="italic"> friends and family</span>. I stay curious
        about the
        <span className="font-medium"> latest technologies </span>
        and love exploring <span className="italic">new possibilities</span>.
      </p>
    </motion.section>
  );
}

export default About;
