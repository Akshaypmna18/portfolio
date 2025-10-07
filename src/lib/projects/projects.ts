import portfolio from "@/assets/projects/portfolio.png";
import features from "@/assets/projects/features.png";
import admini from "@/assets/projects/admini.png";
import crudMern from "@/assets/projects/crud-mern.png";
import { ProjectData } from "../types";

const projectsData: ProjectData[] = [
  {
    title: "Admini",
    description:
      "Business management tool for small companies. Includes HR, sales tracking, and reports. Built with 15+ modules and 5 user roles.",
    tags: [
      "React",
      "Zustand",
      "React Router",
      "Axios",
      "React Testing Library",
    ],
    imageUrl: admini,
    demoLink: "https://admini.co.in/",
    codeLink: "",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my journey and expertise as a front-end developer. Explore my projects, skills, and experience in one central hub.",
    tags: [
      "Next.js",
      "Context API",
      "Framer-motion",
      "ShadcnUI",
      "Tailwind CSS",
    ],
    imageUrl: portfolio,
    demoLink: "",
    codeLink: "https://github.com/Akshaypmna18/portfolio",
  },
  {
    title: "Features",
    description:
      "A Storybook playground for experimenting with diverse frontend features and designs from various projects and open source contributions.",
    tags: ["Tanstack", "Cloudflare", "AI", "React", "Storybook"],
    imageUrl: features,
    demoLink: "https://aks-storybook-react.vercel.app/",
    codeLink: "",
  },
  {
    title: "Products App",
    description:
      "Production-ready MERN stack application with CRUD operations, input validation, error handling, logging, testing, and documentation.",
    tags: ["Node.js", "Next.js", "MongoDB", "Express", "Vitest"],
    imageUrl: crudMern,
    demoLink: "https://aks-crud-mern.vercel.app/",
    codeLink: "https://github.com/Akshaypmna18/crud-mern",
  },
] as const;

export default projectsData;
