import { ProjectData } from "../types";
import deliveryApp from "@/assets/projects/figma/delivery-app.png";
import ott from "@/assets/projects/figma/ott-streaming.png";
import music from "@/assets/projects/figma/music-app.png";
import socialMedia from "@/assets/projects/figma/social-media.png";
import notesApp from "@/assets/projects/github/notes.jpg";
import quizApp from "@/assets/projects/github/quiz-app.png";
import todo from "@/assets/projects/github/to-do.png";
import qryptell from "@/assets/projects/qryptell.png";
import hotelierPro from "@/assets/projects/hotelier-pro/landing-page.png";
import vehicleFleet from "@/assets/projects/car-rental/vehicle-fleet-section.png";

export const projectsData: ProjectData[] = [
  {
    category: "Interactive",
    title: "Notes App",
    description: "An app to write, organize, and manage your personal notes.",
    tags: ["React JS", "Zustand", "Firebase", "Tailwind CSS", "Shadcn UI"],
    imageUrl: notesApp,
    demoLink: "https://aks-notes-app.vercel.app/",
    codeLink: "https://github.com/Akshaypmna18/notes-app",
  },
  {
    category: "Interactive",
    title: "Quiz App",
    description: "Test your knowledge with fun quizzes on various topics.",
    tags: [
      "React JS",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
      "Open Trivia API",
    ],
    imageUrl: quizApp,
    demoLink: "https://quiz-app-aks.vercel.app/",
    codeLink: "https://github.com/Akshaypmna18/quiz-app",
  },
  {
    category: "Designs",
    title: "Car Rental Web App",
    description:
      "Drive into freedom: Rent your perfect car in minutes. Seamless booking, diverse fleet, hassle-free experience.",
    tags: ["React JS", "Axios", "Zustand", "Bootstrap 5"],
    imageUrl: vehicleFleet,
    demoLink: "https://aks-dev.vercel.app/car-rental",
  },
  {
    category: "Designs",
    title: "Aim Bot Clone",
    description: "Explore replica of the popular website - Aim Bot",
    tags: ["Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/aimBotClone.png?raw=true",
    demoLink: "https://aim-bot-demo.vercel.app/",
  },
  {
    category: "Designs",
    title: "Bootstrap5 Clone",
    description: "Explore replica of the popular website - Bootstrap",
    tags: ["Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/bootstrapClone/bootstrapClone.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/design/bootstrapClone/",
  },
  {
    category: "Interactive",
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
    category: "Interactive",
    title: "Qryptell",
    description:
      "A cutting-edge Discord clone and social media platform, offering seamless communication and engaging experiences.",
    tags: ["Next.js", "Typescript", "Zustand", "ShadcnUI", "Tailwind CSS"],
    imageUrl: qryptell,
    demoLink: "https://aks-dev.vercel.app/qryptell",
    codeLink: "https://github.com/qryptell",
  },
  {
    category: "Interactive",
    title: "Notes App JS",
    description: "An app to write, organize, and manage your personal notes.",
    tags: ["JavaScript", "jQuery", "Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/notesApp/notesApp.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/javascript/notesApp/",
  },
  {
    category: "Designs",
    title: "Landing page",
    description:
      "Engaging web pages designed to convert visitors into customers.",
    tags: ["HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/vegNutrition/vegNutrition.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/design/vegNutrition/",
  },
  {
    category: "Designs",
    title: "Landing page",
    description:
      "Engaging web pages designed to convert visitors into customers.",
    tags: ["BootStrap5", "HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/freelance/cleaningServices/cleaningServices.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/freelance/cleaningServices/",
  },
  {
    category: "Designs",
    title: "Landing page",
    description:
      "Engaging web pages designed to convert visitors into customers.",
    tags: ["BootStrap5", "HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/themeChange/themeChange.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/design/themeChange/",
  },
  {
    category: "Designs",
    title: "Portfolio v1",
    description:
      "A personal portfolio showcasing my journey and expertise as a front-end developer. Explore my projects, skills, and experience in one central hub.",
    tags: ["HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/portfolio.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/design/portfolio-v1/",
  },
  {
    category: "Interactive",
    title: "Shopping Cart",
    description: "Easily add and manage items for purchases.",
    tags: ["JavaScript", "jQuery", "Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/shoppingCart/shoppingCart.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/javascript/shoppingCart/",
  },
  {
    category: "Interactive",
    title: "Quiz App JS",
    description: "Test your knowledge with fun quizzes on various topics.",
    tags: ["JavaScript", "jQuery", "Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/quizApp/quiz-app.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/javascript/quizApp/",
  },
  {
    category: "Interactive",
    title: "Calculator",
    description:
      "Perform basic arithmetic operations with ease using a simple interface",
    tags: ["JavaScript", "jQuery", "Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/calculator/calculator.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/javascript/calculator/",
  },
  {
    category: "Interactive",
    title: "Music Player",
    description:
      "Enjoy your favorite tunes with an easy-to-use music playback tool",
    tags: ["JavaScript", "jQuery", "HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/music-player/music-player.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/javascript/music-player/",
  },
  {
    category: "Interactive",
    title: "Calendar",
    description:
      "Keep track of important dates and events with a user-friendly calendar interface.",
    tags: ["JavaScript", "jQuery", "Bootstrap5"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/calendar/calendar.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/javascript/calendar/",
  },
  {
    category: "Interactive",
    title: "Temperature Converter",
    description:
      "Convert between Celsius and Fahrenheit effortlessly for weather forecasts",
    tags: ["JavaScript", "jQuery", "HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/javascript/temperature-converter/temperature-converter.png?raw=true",
    demoLink:
      "https://akshaypmna18.github.io/javascript/temperature-converter/",
  },
  {
    category: "Designs",
    title: "Google Signin Clone",
    description: "Explore replica of the popular website - Google Signin",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/googleHomepage/googleSignInpage/googleSigninpage.png?raw=true",
    demoLink:
      "https://akshaypmna18.github.io/design/googleHomepage/googleSignInpage/",
  },
  {
    category: "Designs",
    title: "Google Homepage Clone",
    description: "Explore replica of the popular website - Google Homepage",
    tags: ["JavaScript", "HTML5", "CSS3"],
    imageUrl:
      "https://github.com/Akshaypmna18/akshaypmna18.github.io/blob/main/design/googleHomepage/googleHomepage.png?raw=true",
    demoLink: "https://akshaypmna18.github.io/design/googleHomepage/",
  },
  {
    category: "Interactive",
    title: "Todo App",
    description: "Keep track of your tasks and stay organized effortlessly.",
    tags: [
      "React JS",
      "Zustand",
      "React Beautiful DND",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    imageUrl: todo,
    demoLink: "https://aks-to-do.vercel.app/",
    codeLink: "https://github.com/Akshaypmna18/to-do",
  },
  {
    category: "UI/UX",
    title: "Delivery App",
    description: "UI/UX design for Delivery App",
    tags: ["Figma"],
    imageUrl: deliveryApp,
    demoLink:
      "https://www.figma.com/proto/sVRwnzygu6XtgnVLTvjngU/My-Projects?type=design&node-id=44-83&t=pK4NydFWBJOXtAfH-0&scaling=scale-down&page-id=41%3A2&starting-point-node-id=44%3A83",
  },
  {
    category: "UI/UX",
    title: "OTT platform",
    description: "UI/UX design for OTT platform",
    tags: ["Figma"],
    imageUrl: ott,
    demoLink:
      "https://www.figma.com/proto/sVRwnzygu6XtgnVLTvjngU/My-Projects?type=design&node-id=53-2&t=pK4NydFWBJOXtAfH-0&scaling=scale-down&page-id=53%3A2&starting-point-node-id=54%3A206",
  },
  {
    category: "UI/UX",
    title: "Music App",
    description: "UI/UX design for Music App",
    tags: ["Figma"],
    imageUrl: music,
    demoLink:
      "https://www.figma.com/proto/sVRwnzygu6XtgnVLTvjngU/My-Projects?type=design&node-id=92-210&t=pK4NydFWBJOXtAfH-0&scaling=scale-down&page-id=92%3A210&starting-point-node-id=105%3A504",
  },
  {
    category: "UI/UX",
    title: "Social Media",
    description: "UI/UX design for Social Media",
    tags: ["Figma"],
    imageUrl: socialMedia,
    demoLink:
      "https://www.figma.com/file/sVRwnzygu6XtgnVLTvjngU/My-Projects?type=design&node-id=119-43&mode=design&t=pK4NydFWBJOXtAfH-0",
  },
] as const;
