import { createElement } from "react";
import { GearIcon, CodeIcon, BoxIcon } from "@radix-ui/react-icons";

export const experiencesData = [
  {
    title: "Junior Front-End Developer (Part-time)",
    location: "Woxware | Abu Dhabi, UAE (Remote)",
    // description:
    //   "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: createElement(BoxIcon),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Junior Front-End Developer (Part-time)",
    location: "Dexa IT Pvt. Ltd. | Tamil Nadu, India (Remote)",
    // description:
    //   "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: createElement(GearIcon),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Front-End Developer (Full-time)",
    location: "Dexa IT Pvt. Ltd. | Tamil Nadu, India (Remote)",
    // description:
    //   "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: createElement(CodeIcon),
    date: "Jan 2024 - present",
  },
] as const;
