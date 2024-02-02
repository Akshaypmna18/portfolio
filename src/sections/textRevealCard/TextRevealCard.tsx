import React from "react";
import {
  TextRevealCard as TextReveal,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

function TextRevealCard() {
  return (
    <section className="place-items-center hidden lg:grid">
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
