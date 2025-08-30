import portfolio from "@/assets/projects/portfolio.png";
import features from "@/assets/projects/features.png";
import { ProjectData } from "../types";

const projectsData: ProjectData[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my journey and expertise as a front-end developer. Explore my projects, skills, and experience in one central hub.",
    tags: [
      "Next.js",
      "TypeScript",
      "Context API",
      "Framer-motion",
      "ShadcnUI",
      "Tailwind CSS",
    ],
    imageUrl: portfolio,
    demoLink: "#",
    codeLink: "https://github.com/Akshaypmna18/portfolio",
  },
  {
    title: "Features",
    description:
      "Showcases responsive UI design, reusable React components, and clean code practices. Highlights professional experience, technical skills, and key projects with detailed insights.",
    tags: ["React", "Storybook", "Framer-motion", "ShadcnUI"],
    imageUrl: features,
    demoLink: "https://aks-storybook-react.vercel.app/",
    codeLink: "",
  },
] as const;

export default projectsData;
