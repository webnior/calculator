"use client"

import Image from "next/image"

import Card from "@/components/aboutusCard/mission"

export default function aboutUs() {
  return (
    <>
    <section>

      <div className=" container text-left mt-20 ml-20 flex">
        <div className="container text-left mt-20 ml-20 text-allign pt-20">
          <h1 className="text-3xl font-semibold mb-6 text-left">
            Technovita Solution - Level Up Your E-Commerce
          </h1>

          <p className="text-gray-700 text-lg">
            Technovita Solution, is an online-medium where we build, create and
            nurture your idea in a genre of preferred brands! .
          </p>

          <p className="text-gray-700 text-lg mt-2 ">
            We are a team of passionate Web/App Developers, Software Engineers,
            content writers, Digital marketers, business brains, designers,
            Catalogue Creation, Account Creation and advertising experts who
            relentlessly strive to give the best possible results.
          </p>

          <p className="text-gray-700 text-lg text-center font-bold mt-5">
            Build mind-blowing things with Technovita Solution, faster!
          </p>
        </div>
        <div className="pt-20">
          <Image
            src="/group.webp"
            alt="technovita_partner"
            width={1100}
            height={1500}
          />
        </div>
      </div>
      <div >
        <h1 className="text-3xl font-semibold mb-6 text-center pt-30">
          Our Phyllosophy
        </h1>
        <div className="flex justify-between">
        <div className=" flex flex-col justify-between">
          <Card
            image="/mission.svg"
            title="Mission"
            description="To enrich client's business with relevant strategies, provide valuable inputs"
          />
          <Card
            image="/values.svg"
            title=" Values"
            description="Dream Bold, Achieve Bigger. Relentlessly Pursue Perfection."
          />
          <Card
            image="/Vision.svg"
            title="Vision"
            description="Empowering Visionaries and Innovators to Unleash Their Ultimate Potential."
          />
          
        </div>
        <div>

            <p className="text-gray-700 text-justify">
              We are a team of passionate Web/App Developers, Software
              Engineers, content writers, Digital marketers, business brains,
              designers, Catalogue Creation, Account Creation and advertising
              experts who relentlessly strive to give the best possible results.
            </p>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
