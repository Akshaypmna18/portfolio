"use client";

import { Badge } from "@/components/ui/badge";
import projectsData from "@/lib/project";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type Props = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: Props) {
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
      className="group rounded border border-black/10 max-w-[40rem] p-4 space-y-2 overflow-hidden relative flex flex-wrap"
    >
      <div className="max-w-[50%] group-even:ml-[50%]">
        <h3 className="text-2xl font-semibold">{title}</h3>
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
        alt="Projects I worked on"
        quality={95}
        width={500}
        height={500}
        className="absolute top-3 -right-40 group-even:right-[initial] group-even:-left-40 rounded w-[25rem] h-[25rem] shadow transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
      />
    </motion.section>
  );
}

export default Project;
