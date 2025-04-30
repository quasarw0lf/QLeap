import Navbar from "../../src/components/Navbar"
import Footer from "../../src/components/Footer"
import Blog from "../../src/pages/Blog"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Blog />
      <Footer />
    </div>
  )
}
