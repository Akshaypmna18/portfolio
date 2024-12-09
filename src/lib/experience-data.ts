import { createElement } from "react";
import { GearIcon, CodeIcon, BoxIcon } from "@radix-ui/react-icons";

export const experiencesData = [
  {
    title: "Junior Front-End Developer (Part-time)",
    location: "Woxware | Abu Dhabi, UAE (Remote)",
    company_link: "https://www.woxware.com",
    description:
      "Created reusable UI components with Storybook and used headless libraries like Radix and Shadcn UI for accessible designs. Wrote clean code and tested components.",
    icon: createElement(BoxIcon),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Junior Front-End Developer (Part-time)",
    location: "Dexa IT Pvt. Solutions Ltd. | Tamil Nadu, India (Remote)",
    company_link: "https://www.dexa.co.in",
    description:
      "Developed responsive web apps by collaborating with the team and integrating complex APIs to improve features.",
    icon: createElement(GearIcon),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Front-End Developer",
    location: "Dexa IT Pvt. Solutions Ltd. | Tamil Nadu, India (Remote)",
    company_link: "https://www.dexa.co.in",
    description:
      "Built scalable and optimized applications using advanced React features. Followed clean coding practices like SOLID and DRY.",
    icon: createElement(CodeIcon),
    date: "Jan 2024 - present",
  },
] as const;
