import React, { useEffect, useRef, useState } from "react"
import { Anton, Oswald, Poppins } from "next/font/google"
import Image from "next/image"

// Define props for the ImageCard component
interface ImageCardProps {
  title: string
  imageUrl: string
}

// Define reusable image card component
const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl }) => (
  <div className="w-full md:w-1/2 p-4">
    <div className="bg-white rounded-lg shadow-md">
      <Image
        height={300}
        width={400}
        src={imageUrl}
        alt={title}
        className="w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {/* Add content for card */}
      </div>
    </div>
  </div>
)

const Services: React.FC = () => {
  const scrollRef = useRef<number>(0)
  const [activeSection, setActiveSection] = useState<number>(1)

  const sectionIds = ["section1", "section2", "section3"]

  const scrollToSection = (sectionNumber: number) => {
    const section = document.getElementById(`section${sectionNumber}`)
    if (section) {
      section.scrollIntoView({ behavior: "auto" })
    }
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  const handleSectionClick = (sectionNumber: number) => {
    setActiveSection(sectionNumber)
    scrollToSection(sectionNumber)
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY
      const scrollY = scrollRef.current
      const { innerHeight } = window

      for (let i = 0; i < sectionIds.length; i++) {
        const currentSection = document.getElementById(sectionIds[i])
        const nextSection = document.getElementById(sectionIds[i + 1])

        if (
          (i === sectionIds.length - 1 ||
            (nextSection && scrollY < nextSection.offsetTop)) &&
          currentSection &&
          scrollY >= currentSection.offsetTop
        ) {
          setActiveSection(i + 1)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="bg-technovitablue">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="w-3/12 h-screen sticky top-0 hidden lg:block">
          <div className="p-4">
            <div className="text-left mb-16">
              <h1 className="text-6xl font-extrabold font-Impact tracking-tighter hover:tracking-tight duration-500 text-[#0F3C5F]">
                Services
              </h1>
              <p className="text-[#0F3C5F] text-2xl font-bold mt-4 tracking-widest">
                that we provide
              </p>
            </div>
            {sectionIds.map((sectionId, index) => (
              <button
                key={index}
                className={`block w-full py-2 my-4 rounded-full text-2xl shadow-md ${
                  activeSection === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => handleSectionClick(index + 1)}
              >
                {`Section ${index + 1}`}
              </button>
            ))}
          </div>
        </div>
        <div className="w-9/12 overflow-y-auto">
          {/* Section 1 */}
          <div className="p-4 " id="section1">
            <h1 className="text-center text-5xl mb-7">Ecommerce Services</h1>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="service-section1-card1 ">
                <h3 className="bottom-text">Account Management</h3>
              </div>
              <div className="service-section1-card1 ">
                <h3 className="bottom-text">Sales Boost</h3>
              </div>
              <div className="service-section1-card2 row-span-2 sm:row-span-1 mt-8">
                <h3 className="bottom-text">Seller Onboarding</h3>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="p-4" id="section2">
            <h1 className="text-center text-5xl mb-7">
              Software Development Zone
            </h1>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              <div className="service-section1-card1 row-span-2 sm:row-span-1">
                <h3 className="bottom-text">Website Development</h3>
              </div>
              <div className="service-section1-card1 ">
                <h3 className="bottom-text">App Development</h3>
              </div>
              <div className="service-section1-card1 ">
                <h3 className="bottom-text">Search Engine Optimization</h3>
              </div>
              <div className="service-section1-card1 row-span-2 sm:row-span-1">
                <h3 className="bottom-text">Graphic Designing </h3>
              </div>
              <div className="service-section1-card1 row-span-2 sm:row-span-1 ">
                <h3 className="bottom-text">Digital Marketing</h3>
              </div>
              <div className="service-section1-card1 ">
                <h3 className="bottom-text">Sales Boost</h3>
              </div>
            </div>
          </div>
          {/* Section 3 */}
          <div className="p-4 relative mt-10 pt-5" id="section3">
            <h1 className="text-center text-5xl mb-7">Technovita Studio</h1>
            <Image
              src="/serviceStudio.svg"
              alt="Technovita Photoshoot Studio"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
