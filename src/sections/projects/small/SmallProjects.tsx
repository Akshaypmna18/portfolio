"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/projects/smallProjects";
import { useState } from "react";
import { ProjectData } from "@/lib/types";

type ToggleType = ProjectData["category"] | "All";

/** Small Projects */
function SmallProjects() {
  const [toggle, setToggle] = useState<ToggleType>("All");
  const toggleBtn = "font-bold tracking-wider hover:bg-primary underline";
  const categories: ToggleType[] = [
    "All",
    "Interactive",
    "Designs",
    "UI/UX",
    "Mobile App",
  ];

  return (
    <section className="p-4 pt-12 2xl:max-w-[80vw] 2xl:mx-auto relative">
      <div className="flex flex-wrap gap-4 justify-center ">
        {categories.map((category) => {
          return (
            <Button
              key={category}
              onClick={() => setToggle(category)}
              className={`btn-hover hover:text-primary ${
                toggle === category ? toggleBtn : ""
              }`}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-8 justify-center">
        {toggle === "All" &&
          projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        {toggle !== "All" &&
          toggle !== "Mobile App" &&
          projectsData
            .filter((project) => project.category === toggle)
            .map((project, index) => <ProjectCard key={index} {...project} />)}
        {toggle === "Mobile App" && (
          <p className="text-xl font-bold">Coming soon...</p>
        )}
      </div>
    </section>
  );
}

export default SmallProjects;
