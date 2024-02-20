import notes from "@/assets/projects/notes.jpg";
import portfolio from "@/assets/projects/portfolio.jpg";
import hotelierPro from "@/assets/projects/hotelier-pro/landing-page.png";
import vehicleFleet from "@/assets/projects/car-rental/vehicle-fleet-section.png";
import { StaticImageData } from "next/image";

type ProjectData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  demoLink: string;
  codeLink?: string;
};

const projectsData: ProjectData[] = [
  {
    title: "HotelierPro",
    description:
      "Revolutionizing hotel management. Easy setup in 10 minutes, user-friendly operation. Simplify, streamline, expand effortlessly.",
    tags: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Storybook",
      "Vitest",
      "React Testing Library",
    ],
    imageUrl: hotelierPro,
    demoLink: "https://aks-dev.vercel.app/hotelier-pro",
  },
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
    title: "Car Rental Web App",
    description:
      "Drive into freedom: Rent your perfect car in minutes. Seamless booking, diverse fleet, hassle-free experience.",
    tags: ["React JS", "Axios", "Zustand", "Bootstrap 5"],
    imageUrl: vehicleFleet,
    demoLink: "https://aks-dev.vercel.app/car-rental",
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
