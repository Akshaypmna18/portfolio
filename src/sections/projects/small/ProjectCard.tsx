"use client";

import React from "react";
import Image from "next/image";
import { CodeIcon } from "@radix-ui/react-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { ProjectData } from "@/lib/types";

function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  codeLink,
}: ProjectData) {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger>
        <div className="min-[400px]:w-[clamp(10rem,40vw,18rem)] min-[400px]:h-[8rem] sm:h-auto max-w-[15rem] min-[650px]:max-w-[18rem] min-[775px]:w-[clamp(12rem,25vw,18rem)] min-[775px]:h-[8rem] lg:w-[18rem] 2xl:w-[20rem] 2xl:max-w-[20rem] min-[2000px]:w-[25rem] min-[2000px]:max-w-[25rem] lg:h-[10rem] lg:max-h-[10rem] min-[2000px]:h-[12.5rem] min-[2000px]:max-h-[12.5rem] relative group">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="mini"
            className="rounded-lg opacity-80 min-[400px]:h-[8rem] min-[550px]:max-h-[7.75rem] sm:h-auto min-[775px]:h-[9rem] lg:h-[10rem] lg:max-h-[10rem] min-[2000px]:h-[12.5rem] min-[2000px]:max-h-[12.5rem] group-hover:opacity-100 object-cover"
          />
          <div className="flex items-center text-white gap-2 absolute bg-gradient-to-b from-gray-900/70 to-gray-900 bottom-0 w-full rounded-b-lg p-2 font-bold">
            <a
              href={demoLink}
              target="_blank"
              className="underline hover:text-primaryColor cursor-pointer tracking-wider"
            >
              {title}
            </a>
            <a
              href={codeLink}
              target="_blank"
              className={`${codeLink ? "hover:text-primaryColor" : "hidden"}`}
            >
              <CodeIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col gap-2 max-w-[15rem]">
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li key={index}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
}

export default ProjectCard;
