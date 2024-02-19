import notes from "@/assets/projects/notes.jpg";
import portfolio from "@/assets/projects/portfolio.jpg";

const projectsData = [
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
    title: "Aks Notes",
    description:
      "A user-friendly notes app that allows you to write, edit, and organize your notes easily. The notes are stored in Firebase Cloud for convenient access.",
    tags: ["React JS", "Zustand", "Firebase", "ShadcnUI", "Tailwind CSS"],
    imageUrl: notes,
    demoLink: "https://aks-notes-app.vercel.app/",
    codeLink: "https://github.com/Akshaypmna18/notes-app",
  },
] as const;

export default projectsData;
