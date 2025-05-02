import { CheckCircle } from "lucide-react"
import Image from "next/image"

const OurDifference = () => {
  const differentiators = [
    {
      title: "Real-World Security Scenarios",
      description:
        "Our training goes beyond theory with hands-on exercises in realistic security environments that simulate actual cyber attacks and defense scenarios.",
    },
    {
      title: "Personalized Learning Paths",
      description:
        "Customized cybersecurity training journeys tailored to individual needs, learning styles, and career objectives for maximum impact.",
    },
    {
      title: "Active Security Professionals",
      description:
        "Learn from accomplished cybersecurity practitioners with extensive experience who bring real-world insights from the security frontlines.",
    },
    {
      title: "Continuous Support",
      description:
        "Access to mentorship, security resources, and community support even after program completion to ensure ongoing growth.",
    },
    {
      title: "Cutting-Edge Security Curriculum",
      description:
        "Regularly updated content that reflects the latest cyber threats, defense techniques, and security best practices.",
    },
    {
      title: "Flexible Learning Options",
      description:
        "Choose from in-person, virtual, or hybrid formats to accommodate your schedule and preferred learning environment.",
    },
  ]

  return (
    <section id="our-difference" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Our <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            What sets QLeap Education by Quasar CyberTech apart is our commitment to excellence, innovation, and
            measurable results in cybersecurity training.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid gap-6">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-gray-900/30 p-6 rounded-xl border border-gray-800 card-hover reveal"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 reveal">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/QLeap-main.png"
                alt="Quasar CyberTech server room"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Results-Driven Security Training</h3>
                  </div>
                  <p className="text-gray-300">
                    Our programs are designed with clear cybersecurity objectives and measurable outcomes, ensuring that
                    every participant achieves tangible professional growth in their security career.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-blue-500 text-white p-4 rounded-lg rotate-6 z-10 shadow-xl">
              <p className="text-lg font-bold">97% Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurDifference
