import React from "react";
import img1 from "@/assets/projects/car-rental/articles-section.png";
import img2 from "@/assets/projects/car-rental/footer.png";
import img3 from "@/assets/projects/car-rental/services-section.png";
import img4 from "@/assets/projects/car-rental/vehicle-fleet-section.png";
import ProjectImage from "@/components/ProjectImage";

const images = [img1, img3, img4, img2];

function CarRental() {
  return (
    <main className="project-main">
      <h1 className="project-h1">Car Rental Web App</h1>
      <p>
        I played a key role in creating an{" "}
        <span className="project-span"> online Car Rental Website </span> with
        the <span className="project-span"> Woxare </span> team, taking
        inspiration from the stylish LuxeDrive QodeInteractive design. Working
        closely with other developers, I focused on making a user-friendly
        interface using React and Bootstrap 5. <br />
        <br />
        My main goal was to make sure users enjoy using the website, and I aimed
        to reduce the number of people leaving the site after visiting. In the
        development part, I followed some{" "}
        <span className="project-span"> best practices </span> for writing code
        in React, making it easier to understand and work with. This not only
        made the code more scalable but also helped the team work more
        efficiently. In the project, I also worked on connecting the website
        with external services (API integration) and making it look good. I
        collaborated with the team to make sure everything fits well together,
        meeting the goals we set for the project.
        <br />
        <br />
        Due to various reasons, I am unable to share the code, and the website
        has not been hosted yet.. Below are some pages/designs from the project.
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
