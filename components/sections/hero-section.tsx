"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-black/50"></div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal">
              Secure Your Future with <span className="gradient-text">QLeap</span> Education
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 reveal reveal-delay-1">
              Transformative cybersecurity training programs by Quasar CyberTech designed to defend against tomorrow's
              threats today.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 reveal reveal-delay-2">
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

            <div className="mt-12 grid grid-cols-2 gap-6 reveal reveal-delay-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">ISO Certified Training</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-gray-300">Industry Recognized</span>
              </div>
            </div>
          </div>

          <div className="relative reveal reveal-delay-2">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/cybersecurity-analyst.png"
                alt="Cybersecurity professional at Quasar CyberTech"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-4 rounded-lg rotate-6 z-10 shadow-xl">
              <p className="text-lg font-bold">Trusted by Fortune 500</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal reveal-delay-3">
          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-400">Cybersecurity Programs</p>
          </div>

          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <p className="text-gray-400">Security Professionals Trained</p>
          </div>

          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-400">Certification Success Rate</p>
          </div>

          <div className="p-4">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-400">Enterprise Partners</p>
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
