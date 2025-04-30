import Navbar from "../../src/components/Navbar"
import Footer from "../../src/components/Footer"
import Trainings from "../../src/pages/Trainings"

export default function TrainingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Trainings />
      <Footer />
    </div>
  )
}
