"use client";
import { motion } from "framer-motion";
import useIsVisible from "@/features/scrollHandlers/useIsVisible";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";
import { experiencesData } from "@/lib/experience-data";
import { useState, useEffect } from "react";

function Experience() {
  const ref = useIsVisible("Experience", 0.2);
  const { resolvedTheme } = useTheme();

  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1170);
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconStyle = {
    background:
      resolvedTheme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
    fontSize: "1.2rem",
    border: "1px solid",
    borderColor:
      resolvedTheme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
    ...(isLarge && {
      width: "2rem",
      height: "2rem",
      marginLeft: "-1rem",
      marginTop: "1rem",
    }),
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, stiffness: 250 }}
      viewport={{
        once: true,
      }}
      ref={ref}
      className="scroll-mt-28"
    >
      <h2 className="section-heading">Experience</h2>
      <VerticalTimeline
        lineColor={
          resolvedTheme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"
        }
      >
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background:
                resolvedTheme === "light"
                  ? "#f3f4f6"
                  : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "10px",
            }}
            contentArrowStyle={{
              borderRight:
                resolvedTheme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={iconStyle}
          >
            <h3 className="font-medium capitalize text-base">
              {experience.title}
            </h3>
            <a
              className="!mt-0 text-sm italic hover:text-primaryColor hover:underline"
              href={experience.company_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.location}
            </a>
            <p className="!mt-1 text-muted-foreground text-sm">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}

export default Experience;
