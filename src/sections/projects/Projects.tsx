"use client";
import projectsData from "@/lib/projects/projects";
import { Fragment } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <h2 className="section-heading">Projects</h2>
      <div className="space-y-4">
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
      {/* <Button asChild variant={"link"}>
        <Link
          href="/small-projects"
          prefetch={true}
          target="_blank"
          className="hover:text-primaryColor mt-6 text-xl"
        >
          More
        </Link>
      </Button> */}
    </motion.section>
  );
}

export default Projects;
