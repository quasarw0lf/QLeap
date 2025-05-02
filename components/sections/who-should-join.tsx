import Image from "next/image"

const WhoShouldJoin = () => {
  const profiles = [
    {
      title: "Aspiring Leaders",
      description: "Professionals looking to advance into leadership roles and develop essential management skills.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Technical Professionals",
      description:
        "Engineers, developers, and technical specialists seeking to enhance their expertise and stay current.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Executives",
      description:
        "Senior leaders aiming to refine their strategic thinking and organizational leadership capabilities.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      title: "Career Changers",
      description: "Individuals transitioning to new roles or industries who need to develop relevant skills quickly.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section id="who-should-join" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Who Should <span className="gradient-text">Join</span>?
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Our programs are designed for professionals at various career stages who are committed to continuous growth
            and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden card-hover reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <Image src={profile.image || "/placeholder.svg"} alt={profile.title} fill className="object-cover" />
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold z-20">{profile.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300">{profile.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900/10 rounded-2xl p-8 md:p-12 border border-blue-900/20 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Not sure if our programs are right for you?</h3>
              <p className="text-gray-300 mb-6">
                Schedule a free consultation with our career advisors to discuss your professional goals and find the
                perfect training path for your needs.
              </p>
              <a href="#contact-us" className="btn-primary inline-block">
                Book a Consultation
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Personalized Assessment</h4>
                  <p className="text-gray-400 text-sm">Evaluate your current skills and identify areas for growth</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Career Path Planning</h4>
                  <p className="text-gray-400 text-sm">Map out your professional journey with expert guidance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Program Recommendations</h4>
                  <p className="text-gray-400 text-sm">Get tailored suggestions based on your goals and background</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoShouldJoin
