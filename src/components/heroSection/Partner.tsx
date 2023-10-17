import PartnerCard from "./PartnerCard"

const TrustedPartnersSection: React.FC = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl text-partner font-normal font-poppins leading-normal">
        Our Trusted Partners
      </h2>
      <div className="flex justify-around mt-8 ">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </div>
  )
}

export default TrustedPartnersSection
