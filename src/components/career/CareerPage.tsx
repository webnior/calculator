import Image from "next/image"

import Card from "@/components/career/Card"

import Tabs from "./tab"

export default function CareerPage() {
  return (
    <>
      <div className="w-screen  flex flex-col  items-center">
        <div className="w-[800px] h-[400px] flex justify-center items-center">
          <Image
            src="/team.jpg"
            alt="our_team"
            width={800}
            height={400}
            className="object-contain"
          />
        </div>

        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold">Explore Job at Technovita</h1>
          <br />
          <div className="m-8">
            <p>
              Technovita Solution, is an online-medium where we build, create
              and nurture your idea in a genre of preferred brands! We are a
              team of passionate content writers, Digital marketers, business
              brains, designers, Ctalogue Creation, Account Creation and
              advertising experts who relentlessly strive to give the best
              possible results. We drive awareness, engagement, and conversions
              for our clients. Technovita Solution is a fully integrated company
              into Catalogue Creation, Account Management Services, Account
              Creation Services, content writing and digital Marketing involved
              in providing original website content writing, blog writing and
              strategies for various marketing needs across different industry
              verticals.
            </p> 
          </div>
          <div className="text-left max-w-md mx-auto bg-white p-6 ">
                <h1 className="text-2xl font-semibold mb-4">
                  Our Specialized Services
                </h1>
                <ul className="list-disc ml-6 text-left">
                  <li className="mb-2">Catalogue Creation</li>
                  <li className="mb-2">Account Management Services</li>
                  <li className="mb-2">Account Creation Services</li>
                  <li className="mb-2">Sales Boost Services</li>
                  <li className="mb-2">Content Writing</li>
                  <li className="mb-2">Branding</li>
                  <li className="mb-2">Website Designing</li>
                  <li className="mb-2">Website Development</li>
                  <li className="mb-2">Search Engine Optimization (SEO)</li>
                  <li className="mb-2">Social Media Marketing (SMM)</li>
                  <li className="mb-2">Search Engine Marketing</li>
                  <li className="mb-2">Online Reputation Management (ORM)</li>
                  <li className="mb-2">Social Media Promotion (SMO)</li>
                </ul>
              </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <h1 className="text-center text-3xl font-semibold">Join Us</h1>
        <p className="text-center text-gray-400 font-bold mb-20">
          WE ARE HIRING
        </p>

        <Tabs />
      </div>
    </>
  )
}
