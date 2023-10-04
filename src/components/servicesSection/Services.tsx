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
  const scrollRef = useRef<number>(0) // Initialize with 0
  const [activeSection, setActiveSection] = useState<number>(1)

  // Function to scroll to a section
  const scrollToSection = (sectionNumber: number) => {
    const section = document.getElementById(`section${sectionNumber}`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY // Update the scroll position
      const sections = [1, 2, 3].map((section) =>
        document.getElementById(`section${section}`)
      )

      const scrollY = scrollRef.current // Use the scroll position from the ref

      for (let i = 0; i < sections.length - 1; i++) {
        if (
          sections[i] &&
          sections[i + 1] &&
          scrollY >= sections[i].offsetTop &&
          scrollY < sections[i + 1].offsetTop
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
    <section className="bg-white">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="w-3/12 h-screen sticky top-0 hidden lg:block">
          {/* Buttons for selecting the section */}
          <div className="p-4">
            <div className="text-left mb-16">
              <h1 className="text-6xl font-extrabold font-Impact tracking-tighter hover:tracking-tight duration-500 text-[#0F3C5F]">
                Services
              </h1>
              <p className="text-[#0F3C5F] text-2xl font-bold mt-4 tracking-widest">
                that we provide
              </p>
            </div>
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                className={`block w-full py-2 my-4 rounded-full text-2xl shadow-md ${
                  activeSection === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => {
                  setActiveSection(index + 1)
                  scrollToSection(index + 1) // Scroll to the selected section
                }}
              >
                Section {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="w-9/12 overflow-y-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="p-4" key={index} id={`section${index + 1}`}>
              <h1 className="text-xl font-semibold">
                Section {index + 1} Content
              </h1>
              <div className="flex flex-wrap">
                <ImageCard title="Card Title 1" imageUrl="/team.jpg" />
                <ImageCard title="Card Title 2" imageUrl="/team.jpg" />
                <ImageCard title="Card Title 3" imageUrl="/team.jpg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
