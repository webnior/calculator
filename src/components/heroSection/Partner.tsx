import React, { FC, useEffect, useRef, useState } from "react"
import Image from "next/image"

interface TrustedPartnerProps {
  icon: React.ReactNode // You can adjust this type based on your icon component or image type
  tagline: string
  description: string
}

const TrustedPartner: React.FC<TrustedPartnerProps> = ({
  icon,
  tagline,
  description,
}) => {
  return (
    <div className="flex items-center rounded-full bg-blue-100 px-5 py-2">
      <Image
        src="/technovita-amazon-partner.png"
        width={70}
        height={70}
        alt="technovita-amazon-partner"
        loading="lazy"
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

const CardAnimation: FC = () => {
  const currentCardRef = useRef<HTMLDivElement | null>(null)
  const cardContent = ["Card 1 Content", "Card 2 Content", "Card 3 Content"]
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to replace the current card with a new card
  const replaceCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardContent.length)
  }

  // Use useEffect to add and remove the animation class
  useEffect(() => {
    const cardElement = currentCardRef.current

    const animationIterationHandler = () => {
      cardElement?.classList.remove("card-animation")
      replaceCard()
      // Adding a slight delay before re-triggering the animation
      setTimeout(() => {
        cardElement?.classList.add("card-animation")
      }, 100)
    }

    cardElement?.addEventListener(
      "animationiteration",
      animationIterationHandler
    )

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      cardElement?.removeEventListener(
        "animationiteration",
        animationIterationHandler
      )
    }
  }, [])

  return (
    <div id="card-container">
      <div ref={currentCardRef} className="card card-animation">
        {cardContent[currentIndex]}
      </div>
    </div>
  )
}

const TrustedPartnersSection: React.FC = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl text-partner font-normal font-poppins leading-normal">
        Our Trusted Partners
      </h2>
      <div className="flex justify-around mt-8">
        <TrustedPartner
          icon="Icon1"
          tagline="Partner 1"
          description="Description for Partner"
        />
        <TrustedPartner
          icon="Icon2"
          tagline="Partner 2"
          description="Description for Partner"
        />
        <TrustedPartner
          icon="Icon3"
          tagline="Partner 3"
          description="Description for Partner"
        />
      </div>
    </div>
  )
}

export default TrustedPartnersSection
