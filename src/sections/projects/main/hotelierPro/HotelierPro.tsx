import React from "react";
import img1 from "@/assets/projects/hotelier-pro/bookingpage.png";
import img3 from "@/assets/projects/hotelier-pro/features-section.png";
import img4 from "@/assets/projects/hotelier-pro/footer.png";
import img5 from "@/assets/projects/hotelier-pro/forms.png";
import img6 from "@/assets/projects/hotelier-pro/homepage.png";
import img8 from "@/assets/projects/hotelier-pro/landing-page.png";
import img9 from "@/assets/projects/hotelier-pro/pricing-section.png";
import ProjectImage from "@/components/ProjectImage";

const images = [img1, img3, img4, img5, img6, img8, img9];

function HotelierPro() {
  return (
    <main className="project-main">
      <h1 className="project-h1">Hotelier Pro</h1>
      <p>
        I played a crucial role in the{" "}
        <span className="project-span">HotelierPro</span> project as part of the
        <span className="project-span"> Woxware</span> team, contributing
        significantly to the development of a user-friendly platform that
        streamlines hotel operations and management tasks.
        <br />
        <br /> With a focus on{" "}
        <span className="project-span">front end development</span>, I
        implemented <span className="project-span">Storybook</span> for
        systematic UI component testing, enhancing code stability. Additionally,
        I utilized <span className="project-span">Vitest</span> and{" "}
        <span className="project-span">React Testing Library</span> to ensure
        the reliability of functions and components. Employing technologies such
        as React Hook Forms, React Table, React Scheduler, and Zod schemas, I
        designed components like forms and tables, improving user interaction
        and optimizing dashboard functionality. <br />
        <br />
        Due to various reasons, I am unable to share the code, and the website
        has not been hosted yet. Below are some pages, figma designs,
        stories[storybook files] related to the project.
      </p>
      <div className="project-div">
        {images.map((img, key) => (
          <ProjectImage key={key} src={img} />
        ))}
      </div>
    </main>
  );
}

export default HotelierPro;
