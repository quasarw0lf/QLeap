import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo-footer.png"
              alt="QLeap Education by Quasar CyberTech"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-gray-400 mt-4">
              Empowering cybersecurity professionals through innovative training and development programs by Quasar
              CyberTech.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#why-qleap" className="text-gray-400 hover:text-primary transition-colors">
                  Why QLeap?
                </Link>
              </li>
              <li>
                <Link href="#trainings" className="text-gray-400 hover:text-primary transition-colors">
                  Cybersecurity Trainings
                </Link>
              </li>
              <li>
                <Link href="#who-should-join" className="text-gray-400 hover:text-primary transition-colors">
                  Who Should Join
                </Link>
              </li>
              <li>
                <Link href="#our-difference" className="text-gray-400 hover:text-primary transition-colors">
                  Our Difference
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Offensive Security Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Defensive Security Skills
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Security Certifications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Security Operations Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Incident Response
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Corporate Security Training
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-primary h-5 w-5 mt-0.5" />
                <span className="text-gray-400">
                  123 Cybersecurity Avenue, Suite 200
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-primary h-5 w-5" />
                <Link href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">
                  (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-primary h-5 w-5" />
                <Link
                  href="mailto:info@quasarcybertech.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@quasarcybertech.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Quasar CyberTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
