"use client"

import React,{useState,createContext} from 'react'
import type {SectionName} from "@/lib/types"

type Props={children:React.ReactNode}

type ActiveSectionContextType={
    activeSection:SectionName,
    setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick:number,
    setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>
}

 export const ActiveSectionContext=createContext<ActiveSectionContextType | null>(null)

function ActiveSectionContextProvider({children}:Props) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); //  keep track of this to disable the observer temporarily when user clicks on a link
  return <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick, setTimeOfLastClick}}>{children}</ActiveSectionContext.Provider>
}

export default ActiveSectionContextProvider