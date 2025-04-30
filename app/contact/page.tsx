import Navbar from "../../src/components/Navbar"
import Footer from "../../src/components/Footer"
import Contact from "../../src/pages/Contact"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}
