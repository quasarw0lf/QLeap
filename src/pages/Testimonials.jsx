"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "../components/AnimatedSection"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Riya Sharma",
      role: "Cybersecurity Intern",
      company: "TechDefend Solutions",
      content:
        "QLeap helped me land my first SOC analyst job straight out of college. The hands-on labs and mentorship were invaluable in building my skills and confidence.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Siddharth Mehra",
      role: "Security Consultant",
      company: "SecureWorks",
      content:
        "Our red teaming module felt like a live operation — highly recommended. The instructors brought real-world experience that made all the difference in my learning.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Network Security Engineer",
      company: "CyberShield Inc.",
      content:
        "The hands-on labs were incredibly practical. I use the skills I learned every day in my job. QLeap's approach to teaching cybersecurity is refreshingly practical.",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Rahul Verma",
      role: "VAPT Specialist",
      company: "SecureTech",
      content:
        "The mentorship I received was invaluable. My mentor still checks in with me occasionally. The QLeap community continues to be a resource even after completing the program.",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Priya Malhotra",
      role: "SOC Team Lead",
      company: "Infosec Solutions",
      content:
        "I was a working professional looking to specialize in SOC operations. QLeap's weekend program was perfect for my schedule, and the skills I gained helped me secure a promotion.",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Arjun Singh",
      role: "Cloud Security Architect",
      company: "CloudGuard",
      content:
        "The cloud security course was comprehensive and up-to-date with the latest AWS and Azure security features. It helped me transition from a general IT role to a specialized security position.",
      image: "/placeholder.svg",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student & Partner Voices</h1>
            <p className="text-xl text-gray-600 mb-8">
              Hear from our students and partners about their experience with QLeap Cybersecurity Training.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={0.1 * index} className="card relative">
                <Quote className="absolute top-4 right-4 text-blue-100 h-12 w-12" />
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <p className="text-gray-700 italic relative z-10">"{testimonial.content}"</p>
                  </div>
                  <div className="mt-auto flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Video Testimonials</h2>
            <p className="section-subtitle">Watch our students share their experiences and success stories.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="card overflow-hidden">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                  <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Student Success Story {index + 1}</h3>
                <p className="text-gray-600">
                  Watch how QLeap helped this student transform their career and land their dream job in cybersecurity.
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">What Our Partners Say</h2>
            <p className="section-subtitle">Hear from the companies and institutions that work with QLeap.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="card relative">
              <Quote className="absolute top-4 right-4 text-blue-100 h-12 w-12" />
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <p className="text-gray-700 italic relative z-10">
                    "QLeap graduates consistently demonstrate strong practical skills and a solid understanding of
                    cybersecurity principles. They're able to contribute to our team from day one."
                  </p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                    <img src="/placeholder-logo.svg" alt="Company Logo" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold">Vikram Mehta</h3>
                    <p className="text-sm text-gray-600">CISO, TechSecure Solutions</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card relative" delay={0.1}>
              <Quote className="absolute top-4 right-4 text-blue-100 h-12 w-12" />
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <p className="text-gray-700 italic relative z-10">
                    "Our partnership with QLeap has been invaluable for our cybersecurity talent pipeline. Their
                    curriculum aligns perfectly with the skills we look for in new hires."
                  </p>
                </div>
                <div className="mt-auto flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                    <img src="/placeholder-logo.svg" alt="Company Logo" className="w-8 h-8 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold">Neha Gupta</h3>
                    <p className="text-sm text-gray-600">HR Director, CyberDefend Inc.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join QLeap today and take the first step towards a successful career in cybersecurity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#" className="bg-white text-blue-600 hover:bg-blue-50 btn-primary">
                  Explore Courses
                </Link>
                <Link href="#" className="bg-transparent border-2 border-white hover:bg-blue-700 btn-primary">
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Testimonials
