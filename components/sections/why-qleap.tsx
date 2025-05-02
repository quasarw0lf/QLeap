import { ShieldCheck, Lock, Server, Database } from "lucide-react"

const WhyQLeap = () => {
  return (
    <section id="why-qleap" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Why <span className="gradient-text">QLeap</span> Education?
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Quasar CyberTech's QLeap Education is dedicated to transforming cybersecurity professionals through
            innovative training methodologies and cutting-edge curriculum designed for today's threat landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-1">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Industry-Leading Curriculum</h3>
            <p className="text-gray-400">
              Our cybersecurity training programs combine cutting-edge methodologies with practical applications to
              ensure maximum knowledge retention and skill development.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-2">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hands-On Security Labs</h3>
            <p className="text-gray-400">
              Programs feature realistic security scenarios in controlled environments, ensuring you gain practical
              experience with the latest threats and defense techniques.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-3">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Security Expert Instructors</h3>
            <p className="text-gray-400">
              Learn from industry leaders and cybersecurity experts with extensive real-world experience in threat
              detection, incident response, and security architecture.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-4">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Certification Preparation</h3>
            <p className="text-gray-400">
              Our training programs have a demonstrated track record of certification success, with 98% of participants
              passing industry-standard cybersecurity certifications.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-black p-8 md:p-12 rounded-2xl border border-blue-900/30 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to advance your cybersecurity career?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of security professionals who have accelerated their career growth through our
                specialized training programs. Take the leap today and become the security expert organizations need.
              </p>
              <a href="#contact-us" className="btn-primary inline-block">
                Get Started Today
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <p className="text-gray-400 text-sm">Career Advancement Rate</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">89%</div>
                <p className="text-gray-400 text-sm">Salary Increase</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">97%</div>
                <p className="text-gray-400 text-sm">Would Recommend</p>
              </div>
              <div className="bg-blue-900/20 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <p className="text-gray-400 text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyQLeap
