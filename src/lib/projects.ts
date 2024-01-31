import notes from "@/assets/projects/notes.png";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my journey and expertise as a front-end developer. Explore my projects, skills, and experience in one central hub.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer-motion",
      "ShadcnUI",
      "Tailwind",
    ],
    imageUrl: notes,
  },
  {
    title: "Aks Notes",
    description:
      "A user-friendly notes app that allows you to write, edit, and organize your notes easily. The notes are stored in Firebase Cloud for convenient access.",
    tags: [
      "React",
      "JavaScript",
      "Firebase",
      "Zustand",
      "ShadcnUI",
      "Tailwind",
    ],
    imageUrl: notes,
  },
] as const;

export default projectsData;
