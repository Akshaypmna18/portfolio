import React, { useContext } from 'react'
import { ActiveSectionContext } from "@/features/scrollHandlers/ActiveSectionContext";

function useActiveSection() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error(
          "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
      }
  return context;
}

export default useActiveSection