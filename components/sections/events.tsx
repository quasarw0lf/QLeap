import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

const Events = () => {
  const upcomingEvents = [
    {
      title: "Leadership Summit 2025",
      date: "June 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Join industry leaders for three days of intensive workshops, keynotes, and networking focused on transformative leadership.",
    },
    {
      title: "Digital Transformation Conference",
      date: "July 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Explore the latest strategies and technologies driving successful digital transformation initiatives.",
    },
    {
      title: "Technical Skills Bootcamp",
      date: "August 3-7, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=300&width=500",
      description: "An intensive five-day program covering essential technical skills for the modern workplace.",
    },
  ]

  return (
    <section id="events" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Join us for transformative learning experiences, networking opportunities, and professional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 card-hover reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 text-primary mr-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Link href="#contact-us" className="btn-primary w-full block text-center">
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-black p-8 md:p-12 rounded-2xl border border-blue-900/30 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Future Events</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive notifications about upcoming events, workshops, and exclusive
                training opportunities.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Events collage" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-semibold">Join our community of professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
