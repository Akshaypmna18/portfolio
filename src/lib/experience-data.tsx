import {
  CodeIcon,
  LayersIcon,
  LaptopIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export const experiencesData = [
  {
    title: "Junior Frontend Developer",
    location: "Woxware | Abu Dhabi, UAE (Remote)",
    company_link: "https://www.woxware.io",
    description:
      "Created reusable UI components, documented with Storybook/VitePress, and followed best practices with senior engineers.",
    icon: <LaptopIcon />, // 💻 entry-level frontend work
    date: "Oct 2023 – Dec 2023",
  },
  {
    title: "Junior Frontend Developer",
    location: "Dexa IT Solutions Pvt Ltd | Tamil Nadu, India (Remote)",
    company_link: "https://www.dexa.co.in",
    description:
      "Contributed to responsive web apps and API integrations, collaborating with the team to improve features.",
    icon: <LayersIcon />, // 🗂️ working with features & integrations
    date: "Oct 2023 – Dec 2023",
  },
  {
    title: "Frontend Developer",
    location: "Dexa IT Solutions Pvt Ltd | Tamil Nadu, India (Remote)",
    company_link: "https://www.dexa.co.in",
    description:
      "Led frontend architecture, built reusable components, and optimized performance with caching and state management.",
    icon: <CodeIcon />, // 👨‍💻 stronger dev role, architecture
    date: "Jan 2024 – Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Woxware | Abu Dhabi, UAE (Remote)",
    company_link: "https://www.woxware.io",
    description:
      "Worked on multiple projects, applying clean architecture (DDD, SOLID) and writing reliable tests with Vitest + RTL.",
    icon: <RocketIcon />, // 🚀 represents growth & full-stack ownership
    date: "Jul 2024 – Present",
  },
] as const;
