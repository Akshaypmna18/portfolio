"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/assets/projects/hotelier-pro/bookingpage.png";
import img3 from "@/assets/projects/hotelier-pro/features-section.png";
import img4 from "@/assets/projects/hotelier-pro/footer.png";
import img5 from "@/assets/projects/hotelier-pro/forms.png";
import img6 from "@/assets/projects/hotelier-pro/homepage.png";
import img8 from "@/assets/projects/hotelier-pro/landing-page.png";
import img9 from "@/assets/projects/hotelier-pro/pricing-section.png";

const images = [img1, img3, img4, img5, img6, img8, img9];

function HotelierPro() {
  const [loaded, setLoaded] = useState(false);
  return (
    <main className="xl:px-[20svh] min-h-[100svh] pt-12 pb-4 px-4 space-y-4">
      <h1 className="text-3xl font-bold text-center">Hotelier Pro</h1>
      <p>
        I played a crucial role in the{" "}
        <span className="font-semibold tracking-wider">HotelierPro</span>{" "}
        project as part of the
        <span className="font-semibold tracking-wider"> Woxware</span> team,
        contributing significantly to the development of a user-friendly
        platform that streamlines hotel operations and management tasks.
        <br />
        <br /> With a focus on{" "}
        <span className="font-semibold tracking-wider">
          front end development
        </span>
        , I implemented{" "}
        <span className="font-semibold tracking-wider">Storybook</span> for
        systematic UI component testing, enhancing code stability. Additionally,
        I utilized <span className="font-semibold tracking-wider">Vitest</span>{" "}
        and{" "}
        <span className="font-semibold tracking-wider">
          React Testing Library
        </span>{" "}
        to ensure the reliability of functions and components. Employing
        technologies such as React Hook Forms, React Table, React Scheduler, and
        Zod schemas, I designed components like forms and tables, improving user
        interaction and optimizing dashboard functionality. <br />
        <br />
        Below are some pages, figma designs, stories[storybook files] related to
        the project.
      </p>
      <div className="flex flex-wrap gap-4 justify-center py-3">
        {images.map((img, key) => (
          <Image
            key={key}
            src={img}
            alt={"sampleImage"}
            width={1300}
            height={800}
            onLoad={() => setLoaded(true)}
            quality={100}
            className={`cursor-pointer ${loaded ? "blur-none" : "blur-sm"}`}
          />
        ))}
      </div>
    </main>
  );
}

export default HotelierPro;
