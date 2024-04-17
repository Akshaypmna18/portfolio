"use client";

import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/projects/smallProjects";
import { useState, useEffect } from "react";
import { ProjectData } from "@/lib/types";
import Footer from '@/sections/footer'
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type ToggleType = ProjectData["category"] | "All";

  const categories: ToggleType[] = [
    "All",
    "Interactive",
    "Designs",
    "UI/UX",
    "Mobile Apps",
  ];

/** Small Projects */
function SmallProjects() {
  const searchParams=useSearchParams()
  const toggle=searchParams.get('category') || "All"
  const [isLoading, setIsLoading] = useState(true);
  const toggleBtn = "font-bold tracking-wider hover:bg-primary underline";
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
            asChild
              key={category}
              className={`btn-hover hover:text-primary ${
                toggle === category ? toggleBtn : ""
              }`}
            >    
              <Link replace href={`/small-projects?category=${category}`}>
            {category}
          </Link>    
            </Button>
          );
        })}
      </header>
      {isLoading ? (
        <p className="mt-[8rem] min-[310px]:mt-20 min-[520px]:mt-12 sm:mt-16 text-center text-xl font-bold">
          Loading...
        </p>
      ) : (<>
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
        <div className={`${toggle === "UI/UX" || toggle==="Mobile Apps" ? "fixed bottom-0 left-[50%] translate-x-[-50%]": ""}`}><Footer /></div>
       </>
      )}
    </section>
  );
}

export default SmallProjects;
