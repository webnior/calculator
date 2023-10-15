import React from "react"
import Image from "next/image"

function ExperienceCard() {
  return (
    <div className="exp-card flex flex-col items-center justify-center text-center">
      <Image src="/trust.gif" alt="technovita_partner" width={80} height={80} />
      <p className="text-gray-400">10+ year legacy</p>
    </div>
  )
}

export default ExperienceCard
