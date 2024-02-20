import React from "react";
import img1 from "@/assets/projects/qryptell/chat-page.png";
import ProjectImage from "@/components/ProjectImage";

const images = [img1];

function CarRental() {
  return (
    <main className="project-main">
      <h1 className="project-h1">Qryptell</h1>
      <p>
        Played a significant role in a{" "}
        <span className="project-span"> Qryptell </span> project, a social media
        app inspired by Discord. Collaborated on the{" "}
        <span className="project-span"> frontend development, </span>
        contributing to an open-source Discord clone. Designed and developed
        interactive components, seamlessly integrating APIs for a user-friendly
        experience.
        <br />
        <br />
        Utilized technologies such as{" "}
        <span className="project-span"> Next.js, </span>
        <span className="project-span"> Typescript, </span>
        <span className="project-span"> Zustand, </span> and
        <span className="project-span"> Shadcn UI </span>
        to enhance the app's functionalities. Employed Shadcn UI to create
        reusable components, optimizing development efficiency and scalability
        without specifying metrics.Emphasized writing clean and straightforward
        code for efficient management, updates, and operations, ensuring clarity
        without relying on specific metrics. You are politely invited to
        collaborate on this project.
        <br />
        <br />
        <a
          href="https://lunarloom.vercel.app/"
          className="underline hover:text-blue-600"
        >
          Demo Link
        </a>
        <br />
        <br />
        The server has not been hosted yet. Below are some pages/designs from
        the project.
      </p>
      <div className="project-div">
        {images.map((img, key) => (
          <ProjectImage key={key} src={img} />
        ))}
      </div>
    </main>
  );
}

export default CarRental;
