"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/projects/smallProjects";
import { useState, useEffect } from "react";
import { ProjectData } from "@/lib/types";

type ToggleType = ProjectData["category"] | "All";

/** Small Projects */
function SmallProjects() {
  const [toggle, setToggle] = useState<ToggleType>("All");
  const [isLoading, setIsLoading] = useState(true);
  const toggleBtn = "font-bold tracking-wider hover:bg-primary underline";
  const categories: ToggleType[] = [
    "All",
    "Interactive",
    "Designs",
    "UI/UX",
    "Mobile Apps",
  ];
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section className="p-4 pt-12 2xl:max-w-[80vw] 2xl:mx-auto relative">
      <header className="flex flex-wrap gap-4 justify-center fixed left-0 top-0 p-2 pt-4 min-[520px]:pt-10 sm:pt-12 pb-2 w-full bg-background z-[60]">
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
      </header>
      {isLoading ? (
        <p className="mt-[8rem] min-[310px]:mt-20 min-[520px]:mt-12 sm:mt-16 text-center text-xl font-bold">
          Loading...
        </p>
      ) : (
        <main className="mt-[8rem] min-[310px]:mt-20 min-[520px]:mt-12 sm:mt-16 flex flex-wrap gap-x-6 gap-y-8 xl:gap-x-8 xl:gap-y-12 justify-center items-center">
          {toggle === "All" &&
            projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          {toggle !== "All" &&
            toggle !== "Mobile Apps" &&
            projectsData
              .filter((project) => project.category === toggle)
              .map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
          {toggle === "Mobile Apps" && (
            <p className="text-xl font-bold">Coming soon...</p>
          )}
        </main>
      )}
    </section>
  );
}

export default SmallProjects;
