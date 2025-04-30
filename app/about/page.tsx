import Navbar from "../../src/components/Navbar"
import Footer from "../../src/components/Footer"
import About from "../../src/pages/About"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}
