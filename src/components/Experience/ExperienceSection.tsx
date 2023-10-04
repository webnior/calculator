import React from "react"

import "../../styles/globals.css"

import ExperienceCard from "./ExperienceCard"

function ExperienceSection() {
  return (
    <div className="">
      <h2 className="exp-heading">Experience Technovita Solution</h2>
      <div className="grid grid-cols-6 gap-6">
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
