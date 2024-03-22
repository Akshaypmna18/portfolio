import qryptell from "@/assets/projects/qryptell.png";
import portfolio from "@/assets/projects/portfolio.png";
import hotelierPro from "@/assets/projects/hotelier-pro/landing-page.png";
import vehicleFleet from "@/assets/projects/car-rental/vehicle-fleet-section.png";
import { ProjectData } from "../types";

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
    title: "Qryptell",
    description:
      "A cutting-edge Discord clone and social media platform, offering seamless communication and engaging experiences.",
    tags: ["Next.js", "Typescript", "Zustand", "ShadcnUI", "Tailwind CSS"],
    imageUrl: qryptell,
    demoLink: "https://aks-dev.vercel.app/qryptell",
    codeLink: "https://github.com/qryptell",
  },
] as const;

export default projectsData;
