"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      heroRef.current.style.setProperty("--mouse-x", `${x}`)
      heroRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(
          circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
          rgba(59, 130, 246, 0.15), 
          transparent 40%
        ), black`,
      }}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 reveal">
            Elevate Your <span className="gradient-text">Professional</span> Journey
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto reveal reveal-delay-1">
            Transformative training programs designed to accelerate your career growth and unlock your full potential.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-2">
            <Link
              href="#trainings"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("trainings")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="btn-primary flex items-center gap-2 group"
            >
              Explore Our Programs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="btn-outline"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal reveal-delay-3">
          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-400">Training Programs</p>
          </div>

          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <p className="text-gray-400">Professionals Trained</p>
          </div>

          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>

          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-400">Industry Partners</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#why-qleap"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById("why-qleap")?.scrollIntoView({ behavior: "smooth" })
          }}
          aria-label="Scroll down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
