import React from "react";
import {
  TextRevealCard as TextReveal,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

function TextRevealCard() {
  return (
    <section className="grid place-items-center">
      <TextReveal
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the card to reveal the hidden text.
        </TextRevealCardDescription>
      </TextReveal>
    </section>
  );
}

export default TextRevealCard;
