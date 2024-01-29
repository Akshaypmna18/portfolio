"use client";

import SectionHeading from "@/components/SectionHeading";
import React from "react";
import Skill from "./Skill";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";
import { motion } from "framer-motion";

function Skills() {
  const ref = useIsVisible("Skills");
  return (
    <motion.section
      id="skills"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      ref={ref}
      className="scroll-mt-28"
    >
      <SectionHeading>Skills</SectionHeading>
      <Skill />
    </motion.section>
  );
}

export default Skills;
