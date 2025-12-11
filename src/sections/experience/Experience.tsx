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
import { useInView } from "react-intersection-observer";

function Experience() {
  const ref = useIsVisible("Experience", 0.2);
  const { resolvedTheme } = useTheme();

  const [isLarge, setIsLarge] = useState(false);

  // Create refs for each experience item
  const ref0 = useInView({ threshold: 0.2, triggerOnce: true });
  const ref1 = useInView({ threshold: 0.2, triggerOnce: true });
  const ref2 = useInView({ threshold: 0.2, triggerOnce: true });
  const ref3 = useInView({ threshold: 0.2, triggerOnce: true });
  const ref4 = useInView({ threshold: 0.2, triggerOnce: true });

  const timelineRefs = [ref0, ref1, ref2, ref3, ref4];

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
          <div
            ref={timelineRefs[index].ref}
            key={index}
            className="mb-6 xl:mb-0"
          >
            <VerticalTimelineElement
              position={index % 2 === 0 ? "left" : "right"}
              visible={timelineRefs[index].inView}
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
          </div>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}

export default Experience;
