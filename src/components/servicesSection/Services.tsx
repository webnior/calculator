import { ReactNode, useEffect, useState } from "react"
import Image from "next/image"

import { ScrollArea } from "@/components/ui/scroll-area"

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Services() {
  const [activeSection, setActiveSection] = useState<number>(1)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position relative to each section
      const section1 = document.getElementById("section1")
      const section2 = document.getElementById("section2")
      const section3 = document.getElementById("section3")

      const scrollY = window.scrollY

      if (
        section1 &&
        section2 &&
        section3 &&
        scrollY >= section1.offsetTop &&
        scrollY < section2.offsetTop
      ) {
        setActiveSection(1)
      } else if (
        section1 &&
        section2 &&
        section3 &&
        scrollY >= section2.offsetTop &&
        scrollY < section3.offsetTop
      ) {
        setActiveSection(2)
      } else if (section3 && scrollY >= section3.offsetTop) {
        setActiveSection(3)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="w-3/12 h-screen bg-gray-200 sticky top-0">
        {/* Buttons for selecting the section */}
        <div className="p-4">
          <h1 className="text-xl font-semibold">Sections</h1>
          <button
            className={`block w-full py-2 my-2 ${
              activeSection === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveSection(1)}
          >
            Section 1
          </button>
          <button
            className={`block w-full py-2 my-2 ${
              activeSection === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveSection(2)}
          >
            Section 2
          </button>
          <button
            className={`block w-full py-2 my-2 ${
              activeSection === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveSection(3)}
          >
            Section 3
          </button>
        </div>
      </div>
      <div className="w-9/12 overflow-y-auto">
        {/* Content for the second column */}
        <div className="p-4" id="section1">
          <h1 className="text-xl font-semibold">Section 1 Content</h1>
          {arr.map((n, i) => {
            return (
              <div className="flex m-24" key={i}>
                <div className="m-32">
                  <Image
                    src={`/main.webp`}
                    width={200}
                    height={200}
                    alt="Image 1"
                    loading="lazy"
                  />
                </div>
                <div className="m-32">
                  <Image
                    src={`/main.webp`}
                    width={200}
                    height={200}
                    alt="Image 1"
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="p-4" id="section2">
          <h1 className="text-xl font-semibold">Section 2 Content</h1>
          {arr.map((n, i) => {
            return (
              <div className="flex m-24" key={i}>
                <div className="m-32">
                  <Image
                    src={`/main.webp`}
                    width={200}
                    height={200}
                    alt="Image 1"
                    loading="lazy"
                  />
                </div>
                <div className="m-32">
                  <Image
                    src={`/main.webp`}
                    width={200}
                    height={200}
                    alt="Image 1"
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </div>
        <div className="p-4" id="section3">
          <h1 className="text-xl font-semibold">Section 3 Content</h1>
          {arr.map((n, i) => {
            return (
              <div className="flex m-24" key={i}>
                <div className="m-32">
                  <Image
                    src={`/main.webp`}
                    width={200}
                    height={200}
                    alt="Image 1"
                    loading="lazy"
                  />
                </div>
                <div className="m-32">
                  <Image
                    src={`/main.webp`}
                    width={200}
                    height={200}
                    alt="Image 1"
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// const oldComp = () => {
//   return (
//     <section className="w-screen max-h-full bg-[#e2edf6] ">
//       <div className="flex flex-row ">
//         <div className="bg-blue-500 h-40 w-84">
//           <div className="">a</div>
//         </div>
//         <div className="bg-orange-300  max-w-xl ">
//           <div className="w-100 h-200">
//             <ScrollArea className=" rounded-md border p-4 overflow-clip h-[200px]">
//               <div className="flex">
//                 <div className="">
//                   <Image
//                     src={`/main.webp`}
//                     width={200}
//                     height={200}
//                     alt="Image 1"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="">
//                   <Image
//                     src={`/main.webp`}
//                     width={200}
//                     height={200}
//                     alt="Image 1"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </ScrollArea>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const atp1 = () => {
//   return (
//     <div className="flex">
//       <div className="w-3/12 h-screen bg-gray-200 sticky top-0">
//         {/* Content for the first column */}
//         <div className="p-4">
//           <h1 className="text-xl font-semibold">Column 1</h1>
//           {/* Add your content for the first column here */}
//         </div>
//       </div>
//       <div className="w-9/12 overflow-y-auto">
//         {/* Content for the second column */}
//         <div className="p-4">
//           <h1 className="text-xl font-semibold">Column 2</h1>
//           {arr.map((n, i) => {
//             return (
//               <div className="flex m-24">
//                 <div className="m-32">
//                   <Image
//                     src={`/main.webp`}
//                     width={200}
//                     height={200}
//                     alt="Image 1"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="m-32">
//                   <Image
//                     src={`/main.webp`}
//                     width={200}
//                     height={200}
//                     alt="Image 1"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }
