import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Home from "../src/pages/Home"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}
