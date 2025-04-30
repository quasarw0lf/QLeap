import Link from "next/link"
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">QLeap</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Cybersecurity training that accelerates your future. Hands-on training in VAPT, SOC, GRC, Red Teaming, and
              more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  Trainings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About QLeap
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  VAPT
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  SOC
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  GRC
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/trainings" className="text-gray-400 hover:text-white transition-colors">
                  Digital Forensics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400">info@qleap.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400">+91 1234567890</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-400 mt-0.5" />
                <span className="text-gray-400">QLeap Cybersecurity, Tech Park, Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} QLeap Cybersecurity. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
