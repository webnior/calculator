// components/Hero.js
import React from "react"

import ActionButton from "./ActionButton"

import "../../styles/globals.css"

import Image from "next/image"

import TrustedPartnersSection from "./Partner"

const Hero: React.FC = () => {
  return (
    <section className="bg-rose-50 dark:text-black pt-10">
      <div className="container flex mx-auto lg:flex-row flex-col w-screen h-screen item-center ">
        <div className="flex flex-col  pl-10 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <div>
            <div className=" text-3xl md:text-4xl [text-wrap:balance] bg-clip-text  bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              We&apos;re{" "}
              <span className="text-technovitablue inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                  <li>Digital Wonders</li>
                  <li>Tech Enchantment</li>
                  <li>Online Marvels</li>
                  <li>Virtual Wizardry</li>
                  <li> Cyber Sorcery</li>
                  <li aria-hidden="true">Digital Wonders</li>
                </ul>
              </span>
            </div>
            <h1 className="font-bold  herosection-heading-text">
              E-COMMERCE AND DIGITAL
            </h1>
            <p className="mt-6 text-3xl  sm:mb-3 herosection-solution-text ">
              Solution Agency
            </p>
          </div>

          <div>
            <ActionButton />
          </div>
        </div>
        <div className="ml-20">
          <Image src="/hero.svg" alt="" width={650} height={500} />
        </div>
      </div>
      <div className="mt-10">
        <TrustedPartnersSection />
      </div>
    </section>
  )
}

export default Hero
