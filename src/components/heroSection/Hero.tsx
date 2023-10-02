// components/Hero.js
import React from "react"

import ActionButton from "./ActionButton"

import "../../styles/globals.css"

import Image from "next/image"

import TrustedPartnersSection from "./Partner"

const Hero: React.FC = () => {
  return (
    <section className="dark:bg-white dark:text-black">
      <div className="container flex flex-col justify-center mx-auto sm:pt-3 lg:pt-3 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <div className=" text-3xl md:text-4xl [text-wrap:balance] bg-clip-text  bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
            We&apos;re{" "}
            <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
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
          <h1 className="text-5xl font-bold sm:text-6xl herosection-heading-text">
            E-COMMERCE AND DIGITAL
          </h1>
          <p className="mt-6 text-3xl font-semibold sm:mb-3">
            Solution Company
          </p>
          <div className="">
            <ActionButton />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image src="/hero.gif" alt="" width={600} height={400} />
        </div>
      </div>
      <div className="mt-10">
        <TrustedPartnersSection />
      </div>
    </section>
  )
}

export default Hero
