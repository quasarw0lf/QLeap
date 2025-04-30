import Navbar from "../../src/components/Navbar"
import Footer from "../../src/components/Footer"
import Testimonials from "../../src/pages/Testimonials"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Testimonials />
      <Footer />
    </div>
  )
}
