import  useActiveSectionContext from "@/features/scrollHandlers/useActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type {SectionName} from "@/lib/types"

export default function useIsVisible(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return ref
}