import { useEffect, useState } from "react"
import { Anton, Oswald, Poppins } from "next/font/google"
import Image from "next/image"

// Define props for the ImageCard component
interface ImageCardProps {
  title: string
  imageUrl: string
}

// Define reusable image card component
const ImageCard: React.FC<ImageCardProps> = ({ title, imageUrl }) => (
  <div
    className={`w-full md:w-${
      title === "Card Title 3" ? "full" : "1/2"
    } p-4 relative`}
  >
    <div className="bg-white rounded-lg shadow-md relative overflow-hidden">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-auto"
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-white opacity-50"></div>
      </div>
      <div className="p-4 absolute inset-0 flex flex-col justify-end">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {/* Add content for card */}
      </div>
    </div>
  </div>
)

const Services: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position relative to each section
      const sections = [1, 2, 3].map((section) =>
        document.getElementById(`section${section}`)
      )

      const scrollY = window.scrollY

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
                onClick={() => setActiveSection(index + 1)}
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
