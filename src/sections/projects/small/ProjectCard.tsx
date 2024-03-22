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
    <HoverCard>
      <HoverCardTrigger>
        <div className="max-w-[18rem] relative group">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            alt="mini"
            className="rounded-lg opacity-80 group-hover:opacity-100"
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
