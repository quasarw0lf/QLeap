import { Lightbulb, Target, Users, Award } from "lucide-react"

const WhyQLeap = () => {
  return (
    <section id="why-qleap" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-30"></div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Why <span className="gradient-text">QLeap</span>?
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            We're dedicated to transforming professionals through innovative training methodologies and cutting-edge
            curriculum designed for today's dynamic workplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-1">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovative Approach</h3>
            <p className="text-gray-400">
              Our training programs combine cutting-edge methodologies with practical applications to ensure maximum
              knowledge retention and skill development.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-2">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Industry-Focused</h3>
            <p className="text-gray-400">
              Programs tailored to specific industry needs, ensuring you gain relevant skills that directly apply to
              your professional environment.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-3">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
            <p className="text-gray-400">
              Learn from industry leaders and subject matter experts with extensive real-world experience and proven
              teaching excellence.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-hover reveal reveal-delay-4">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-6">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
            <p className="text-gray-400">
              Our training programs have a demonstrated track record of career advancement, with 87% of participants
              reporting significant professional growth.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-black p-8 md:p-12 rounded-2xl border border-blue-900/30 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your career?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of professionals who have accelerated their career growth through our specialized
                training programs. Take the leap today and unlock your full potential.
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
