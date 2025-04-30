"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Trainings", path: "/trainings" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">QLeap</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === link.path ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link href="/contact" className="btn-primary">
              Join Our Next Cohort
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-5 bg-gray-900 ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-5 bg-gray-900 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`transform transition-all duration-300 absolute h-0.5 w-5 bg-gray-900 ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-base font-medium transition-colors hover:text-blue-600 ${
                    pathname === link.path ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-center mt-4">
                Join Our Next Cohort
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Navbar
