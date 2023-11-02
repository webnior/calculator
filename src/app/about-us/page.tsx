"use client"

import "@/styles/globals.css"

import InfoWideget from "@/components/Info/InfoWideget"

export default function AboutUs() {
  return (
    <>
      <section className="contact-page-sec">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1">
              <InfoWideget
                title="Address"
                imgUrl="https://embed.lottiefiles.com/animation/12587"
                line1="D-41, C Block, Sector 59, "
                line2="Noida, Uttar Pradesh 201301"
              />
            </div>
            <div className="md:col-span-1">
              <InfoWideget
                title="E-Mail"
                imgUrl="https://embed.lottiefiles.com/animation/72126"
                line1="info@technovitasolution.com"
                line2="technovitasolution@gmail.com"
              />
            </div>
            <div className="md:col-span-1">
              <InfoWideget
                title="Office Time"
                imgUrl="https://embed.lottiefiles.com/animation/60071"
                line1="Mon - Thu 10:00 am - 6.00 pm "
                line2="Thu - Mon 10.00 am - 6.00 pm"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-section">
        <div className="about-container">
          <div className="aboutus-title">
            <h1>About Us</h1>
          </div>
          <div className="our-mission">
            <img
              className="quote-icon"
              src="/quote-icon.png"
              alt="technovita solution"
            />
            <p>
              Technovita Solution helps you GET ENDLESS TRAFFIC TO YOUR
              E-Commerce Portals…
            </p>
          </div>
          <div className="about-description">
            <p>
              Technovita Solution, is an online-medium where we build, create
              and nurture your idea in a genre of preferred brands!
            </p>
            <p>
              We are a team of passionate content writers, Digital marketers,
              business brains, designers, Ctalogue Creation, Account Creation
              and advertising experts who relentlessly strive to give the best
              possible results.
            </p>
            <p>
              We drive awareness, engagement, and conversions for our clients.
            </p>
            <p>
              Technovita Solution is a fully integrated company into Catalogue
              Creation, Account Management Services, Account Creation Services,
              content writing and digital Marketing involved in providing
              original website content writing, blog writing and strategies for
              various marketing needs across different industry verticals.
            </p>
            <p>
              <strong>
                We also have specialised team for following services:
              </strong>
            </p>
            <p>
              <ul>
                <li>Catalogue Creation</li>
                <li>Account Management Services</li>
                <li>Account Creation Services</li>
                <li>Sales Boost Services</li>
                <li>Content Writing</li>
                <li>Branding</li>
                <li>Website Designing</li>
                <li>Website Development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Marketing (SMM)</li>
                <li>Search Engine Marketing</li>
                <li>Online Reputation Management (ORM)</li>
                <li>Social Media Promotion (SMO)</li>
              </ul>
            </p>
            <p>
              <strong> Our Mission</strong>
            </p>
            <p>
              To enrich client&apos;s business with relevant strategies, giving
              them the most compelling value experience.
            </p>
            <p>
              <strong> Vision</strong>
            </p>
            <p>
              Unceasingly build enduring ideas by using deep analysis of the
              target customers and with brilliant insight of the contemporary
              culture and requirements to help seamlessly transform clients
              businesses
            </p>
            <p>
              <strong>Core Values</strong>
            </p>
            <p>
              Continous Improvement,Will to win and Quality Consciousness are
              our core Values
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
