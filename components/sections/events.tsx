import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

const Events = () => {
  const upcomingEvents = [
    {
      title: "Cybersecurity Summit 2025",
      date: "June 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      image: "/summit.png",
      description:
        "Join security leaders for three days of intensive workshops, keynotes, and networking focused on emerging cyber threats and defense strategies.",
    },
    {
      title: "Threat Intelligence Conference",
      date: "July 8, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Virtual Event",
      image: "/Threat-int-connf.png",
      description:
        "Explore the latest threat intelligence techniques and technologies for proactive security monitoring and incident response.",
    },
    {
      title: "Security Operations Bootcamp",
      date: "August 3-7, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Chicago, IL",
      image: "/SOC-bootcamp.png",
      description:
        "An intensive five-day program covering essential SOC skills, threat hunting, and incident response techniques.",
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
            Join Quasar CyberTech's QLeap Education for transformative cybersecurity learning experiences, networking
            opportunities, and professional growth.
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
                <Image
                  src={event.image || "/QLeap-main.png"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Future Security Events</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive notifications about upcoming cybersecurity events, workshops, and
                exclusive training opportunities from Quasar CyberTech.
              </p>
              <form className="flex flex-col sm:flex-row gap-3" name="newsletter" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="newsletter" />
                <input
                  type="email"
                  name="email"
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
              <Image
                src="/quasar-chip.png"
                alt="Quasar CyberTech security technology"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-semibold">Join our community of security professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
