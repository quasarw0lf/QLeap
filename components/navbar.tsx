"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="#top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="QLeap Education by Quasar CyberTech"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#why-qleap"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("why-qleap")
            }}
            className="text-white/80 hover:text-primary transition-colors"
          >
            Why QLeap?
          </Link>
          <Link
            href="#trainings"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("trainings")
            }}
            className="text-white/80 hover:text-primary transition-colors"
          >
            Trainings
          </Link>
          <Link
            href="#who-should-join"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("who-should-join")
            }}
            className="text-white/80 hover:text-primary transition-colors"
          >
            Who Should Join
          </Link>
          <Link
            href="#our-difference"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("our-difference")
            }}
            className="text-white/80 hover:text-primary transition-colors"
          >
            Our Difference
          </Link>
          <Link
            href="#testimonials"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("testimonials")
            }}
            className="text-white/80 hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#events"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("events")
            }}
            className="text-white/80 hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Link
            href="#contact-us"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact-us")
            }}
            className="btn-primary"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 right-0 border-t border-gray-800">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="#why-qleap"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("why-qleap")
              }}
              className="text-white/80 hover:text-primary transition-colors py-2"
            >
              Why QLeap?
            </Link>
            <Link
              href="#trainings"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("trainings")
              }}
              className="text-white/80 hover:text-primary transition-colors py-2"
            >
              Trainings
            </Link>
            <Link
              href="#who-should-join"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("who-should-join")
              }}
              className="text-white/80 hover:text-primary transition-colors py-2"
            >
              Who Should Join
            </Link>
            <Link
              href="#our-difference"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("our-difference")
              }}
              className="text-white/80 hover:text-primary transition-colors py-2"
            >
              Our Difference
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("testimonials")
              }}
              className="text-white/80 hover:text-primary transition-colors py-2"
            >
              Testimonials
            </Link>
            <Link
              href="#events"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("events")
              }}
              className="text-white/80 hover:text-primary transition-colors py-2"
            >
              Events
            </Link>
            <Link
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact-us")
              }}
              className="btn-primary inline-block text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
