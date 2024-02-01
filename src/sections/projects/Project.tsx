"use client";

import { Badge } from "@/components/ui/badge";
import projectsData from "@/lib/projects";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { CodeIcon } from "@radix-ui/react-icons";

type Props = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  demoLink,
  codeLink,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      transition={{ delay: 0.15 }}
      className="group mx-auto rounded bg-secondary border border-black/10 max-w-[40rem] p-4 space-y-4 text-start overflow-hidden relative flex flex-wrap"
    >
      <div className="max-w-[50%] group-even:ml-[50%] space-y-2">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <a
            href={demoLink}
            target={demoLink === "#" ? "" : "_blank"}
            className="hover:underline"
          >
            {title}
          </a>
          <a
            href={codeLink}
            target="_blank"
            className="hover:text-primaryColor"
          >
            <CodeIcon className="h-6 w-6" />
          </a>
        </h3>
        <p>{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li key={index}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute bottom-0 -right-40 group-even:right-[initial] group-even:-left-40 rounded shadow transition max-w-[25rem] group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
      />
    </motion.section>
  );
}

export default Project;
