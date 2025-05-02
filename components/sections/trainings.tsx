import { Code, LineChart, Briefcase, Cpu, Brain, Users } from "lucide-react"
import Link from "next/link"

const Trainings = () => {
  const trainingCategories = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Technical Skills",
      description:
        "Master cutting-edge technologies and programming languages essential for today's digital landscape.",
      courses: ["Web Development", "Data Science", "Cloud Computing", "DevOps"],
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Business Strategy",
      description: "Develop strategic thinking and business acumen to drive organizational growth and innovation.",
      courses: ["Strategic Planning", "Business Analytics", "Market Research", "Innovation Management"],
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Leadership",
      description: "Enhance your leadership capabilities to effectively guide teams and drive organizational success.",
      courses: ["Executive Leadership", "Team Management", "Change Management", "Conflict Resolution"],
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape and lead successful transformation initiatives in your organization.",
      courses: ["Digital Strategy", "AI Implementation", "Process Automation", "Digital Marketing"],
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Personal Development",
      description: "Cultivate essential soft skills and personal attributes that enhance professional effectiveness.",
      courses: ["Emotional Intelligence", "Time Management", "Public Speaking", "Negotiation Skills"],
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Building",
      description: "Foster collaboration, communication, and cohesion within teams to maximize collective performance.",
      courses: ["Team Dynamics", "Collaborative Problem Solving", "Remote Team Management", "Team Culture"],
    },
  ]

  return (
    <section id="trainings" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Our <span className="gradient-text">Training</span> Programs
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Comprehensive training solutions designed to address the evolving needs of professionals and organizations
            in today's dynamic business environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden card-hover reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-8">
                <div className="mb-6">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                      <span className="text-gray-300">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-800 p-4 bg-gray-900/50">
                <Link
                  href="#contact-us"
                  className="text-primary hover:text-primary/80 font-medium flex items-center justify-center"
                >
                  Learn More
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
                    className="ml-2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <Link href="#contact-us" className="btn-primary inline-flex items-center">
            View All Programs
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
              className="ml-2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Trainings
