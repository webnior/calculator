import React from "react"

import "../../styles/globals.css"

import ExperienceCard from "./ExperienceCard"

function ExperienceSection() {
  return (
    <div className="mx-20 mt-10">
      <h2 className="text-2xl font-bold">Experience Technovita Solution</h2>
      <div className="grid lg:grid-cols-6 lg:gap-6 sm:grid-cols-3 sm:gap-3 ml-7 mt-5 justify-items-center">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  )
}

export default ExperienceSection
