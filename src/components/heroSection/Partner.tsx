import React from "react"

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
    <div className="flex items-center rounded-full bg-blue-100 px-8 py-4 animate-text-slide-2 ">
      <img
        className="w-10 h-10 "
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">{description}</p>
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
          description="Description for Partner 1."
        />
        <TrustedPartner
          icon="Icon2"
          tagline="Partner 2"
          description="Description for Partner 2."
        />
        <TrustedPartner
          icon="Icon3"
          tagline="Partner 3"
          description="Description for Partner 3."
        />
      </div>
    </div>
  )
}

export default TrustedPartnersSection
