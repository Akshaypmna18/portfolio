import { createElement } from "react";
import { GearIcon, CodeIcon, BoxIcon } from "@radix-ui/react-icons";

export const experiencesData = [
  {
    title: "Junior Front-End Developer (Part-time)",
    location: "Woxware | Abu Dhabi, UAE (Remote)",
    description:
      "Created reusable UI components with Storybook and used headless libraries like Radix and Shadcn UI for accessible designs. Wrote clean code, tested components, and used GitLab for teamwork, including pull requests and branching.",
    icon: createElement(BoxIcon),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Junior Front-End Developer (Part-time)",
    location: "Dexa IT Pvt. Ltd. | Tamil Nadu, India (Remote)",
    description:
      "Developed responsive web apps by collaborating with the team and integrating complex APIs to improve features. Worked on UI designs to enhance performance and user experience across devices.",
    icon: createElement(GearIcon),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Front-End Developer (Full-time)",
    location: "Dexa IT Pvt. Ltd. | Tamil Nadu, India (Remote)",
    description:
      "Built scalable and optimized applications using advanced React features. Followed clean coding practices like SOLID and DRY. Created custom React hooks for reusable logic and better maintainability.",
    icon: createElement(CodeIcon),
    date: "Jan 2024 - present",
  },
] as const;
