// import Image from "next/image"

import "../../styles/globals.css"

// interface TrustedPartnerProps {
//   icon: React.ReactNode // You can adjust this type based on your icon component or image type
//   tagline: string
//   description: string
// }

const PartnerpartnerCard = () => {
  return (
    <div className="partnerCardWrapper">
      <div className="outer">
        <div
          className="partnerCard"
          style={{ "--delay": -1 } as React.CSSProperties}
        >
          <div className="content">
            <div className="img">
              <img src="./technovita-amazon-partner.png" alt="" />
            </div>
            <div className="details">
              <span className="PartnerName">Amazon Seller Services</span>
              <p className="partnerDescription">Onboarding , Management</p>
            </div>
          </div>
          <a href="#">Explore</a>
        </div>
        <div
          className="partnerCard"
          style={{ "--delay": 0 } as React.CSSProperties}
        >
          <div className="content">
            <div className="img">
              <img src="./technovita-amazon-partner.png" alt="" />
            </div>
            <div className="details">
              <span className="PartnerName">Flipkart Seller Services</span>
              <p>Onboarding & Management</p>
            </div>
          </div>
          <a href="#">Explore</a>
        </div>
        <div
          className="partnerCard"
          style={{ "--delay": 1 } as React.CSSProperties}
        >
          <div className="content">
            <div className="img">
              <img src="./technovita-amazon-partner.png" alt="" />
            </div>
            <div className="details">
              <span className="PartnerName">Myntra Seller Services</span>
              <p>Onboarding & Management</p>
            </div>
          </div>
          <a href="#">Explore</a>
        </div>
        <div
          className="partnerCard"
          style={{ "--delay": 2 } as React.CSSProperties}
        >
          <div className="content">
            <div className="img">
              <img src="./technovita-amazon-partner.png" alt="" />
            </div>
            <div className="details">
              <span className="PartnerName">Ajo Seller Services</span>
              <p>Onboarding & Management</p>
            </div>
          </div>
          <a href="#">Explore</a>
        </div>
        <div
          className="partnerCard"
          style={{ "--delay": 2 } as React.CSSProperties}
        >
          <div className="content">
            <div className="img">
              <img src="./vercel.svg" alt="" />
            </div>
            <div className="details">
              <span className="PartnerName">Ebay Seller Services</span>
              <p>Onboarding & Management</p>
            </div>
          </div>
          <a href="#">Explore</a>
        </div>
      </div>
    </div>
  )
}

export default PartnerpartnerCard
