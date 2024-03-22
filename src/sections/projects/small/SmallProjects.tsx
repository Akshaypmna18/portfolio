import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/smallProjects";
import { Fragment } from "react";

/** Small Projects */
function SmallProjects() {
  return (
    <section className="p-4 pt-12">
      {/* <div className="flex flex-wrap gap-4 justify-center">
        <Button className="btn-hover hover:text-primary font-bold tracking-wider hover:bg-primary">
          All
        </Button>
        <Button className="btn-hover hover:text-primary">Web Apps</Button>
        <Button className="btn-hover hover:text-primary">HTML & CSS</Button>
        <Button className="btn-hover hover:text-primary">JS & jQuery</Button>
        <Button className="btn-hover hover:text-primary">UI/UX</Button>
        <Button className="btn-hover hover:text-primary">Mobile Apps</Button>
      </div> */}
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-8 justify-center">
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default SmallProjects;
