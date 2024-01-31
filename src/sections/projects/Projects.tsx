"use client";
import SectionHeading from "@/components/SectionHeading";
import projectsData from "@/lib/projects";
import React, { Fragment } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";

function Projects() {
  const ref = useIsVisible("Projects", 0.5);
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      id="projects"
      className="scroll-mt-28"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-4">
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
