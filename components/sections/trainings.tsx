import { ShieldAlert, ShieldCheck, Network, Server, Database, Lock } from "lucide-react"
import Link from "next/link"

const Trainings = () => {
  const trainingCategories = [
    {
      icon: <ShieldAlert className="h-10 w-10 text-primary" />,
      title: "Offensive Security",
      description:
        "Master ethical hacking, penetration testing, and vulnerability assessment techniques to identify and exploit security weaknesses.",
      courses: ["Ethical Hacking", "Penetration Testing", "Red Team Operations", "Vulnerability Assessment"],
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Defensive Security",
      description:
        "Develop skills in threat detection, incident response, and security monitoring to protect organizations from cyber attacks.",
      courses: ["Security Operations", "Incident Response", "Digital Forensics", "Threat Hunting"],
    },
    {
      icon: <Network className="h-10 w-10 text-primary" />,
      title: "Network Security",
      description:
        "Learn to secure network infrastructure, implement secure architectures, and defend against network-based attacks.",
      courses: ["Network Defense", "Secure Architecture", "Cloud Security", "Zero Trust Implementation"],
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Cloud Security",
      description:
        "Gain expertise in securing cloud environments across major platforms and implementing cloud-native security controls.",
      courses: ["AWS Security", "Azure Security", "GCP Security", "Multi-Cloud Security"],
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Security Compliance",
      description:
        "Understand regulatory requirements and implement governance frameworks to ensure security compliance.",
      courses: ["GDPR Compliance", "HIPAA Security", "PCI DSS Implementation", "ISO 27001 Certification"],
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Application Security",
      description:
        "Learn to build secure applications, perform code reviews, and implement secure development practices.",
      courses: ["Secure Coding", "OWASP Top 10", "DevSecOps", "API Security"],
    },
  ]

  return (
    <section id="trainings" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Our <span className="gradient-text">Cybersecurity</span> Programs
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Comprehensive security training solutions designed by Quasar CyberTech to address the evolving threat
            landscape and security challenges organizations face today.
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
