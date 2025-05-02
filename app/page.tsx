"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import WhyQLeap from "@/components/sections/why-qleap"
import Trainings from "@/components/sections/trainings"
import WhoShouldJoin from "@/components/sections/who-should-join"
import OurDifference from "@/components/sections/our-difference"
import Testimonials from "@/components/sections/testimonials"
import Events from "@/components/sections/events"
import ContactUs from "@/components/sections/contact-us"

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhyQLeap />
        <Trainings />
        <WhoShouldJoin />
        <OurDifference />
        <Testimonials />
        <Events />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
