import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import skills from "@/lib/skillsdata";

function Skill() {
  return (
    <div className="flex flex-wrap justify-center">
      <AnimatedTooltip items={skills} />
    </div>
  );
}

export default Skill;
