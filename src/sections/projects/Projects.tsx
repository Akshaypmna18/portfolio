import SectionHeading from "@/components/SectionHeading";
import projectsData from "@/constants/project";
import React, { Fragment } from "react";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-4">
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
