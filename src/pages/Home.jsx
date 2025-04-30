"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Lock, Server, Users, Database, Cloud, Search, FileCode, AlertTriangle } from "lucide-react"
import AnimatedSection from "../components/AnimatedSection"
import CourseCard from "../components/CourseCard"
import TestimonialSlider from "../components/TestimonialSlider"
import EventCard from "../components/EventCard"

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Real-World Focused",
      description: "We simulate enterprise-level environments to ensure you're job-ready.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Career Oriented",
      description:
        "Whether you're a student or working professional, we provide the bridge between knowledge and opportunity.",
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Industry Experts",
      description: "Learn from experienced professionals working in top security firms.",
    },
    {
      icon: <Server className="h-6 w-6 text-blue-600" />,
      title: "Community Driven",
      description: "Join a thriving network of peers, mentors, and alumni.",
    },
  ]

  const courses = [
    {
      icon: Search,
      title: "VAPT",
      description:
        "Learn how to discover, exploit, and report vulnerabilities. Includes network, web app, and mobile testing.",
    },
    {
      icon: AlertTriangle,
      title: "SOC",
      description: "Master monitoring, threat detection, and SIEM tools like Splunk, QRadar, and Elastic Stack.",
    },
    {
      icon: FileCode,
      title: "GRC",
      description: "Understand frameworks like ISO 27001, NIST, and GDPR. Learn risk management and audit techniques.",
    },
    {
      icon: Shield,
      title: "Red Teaming",
      description:
        "Get inside the mind of an attacker. Focused on adversary simulation, social engineering, and purple teaming practices.",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description:
        "Secure cloud environments in AWS, Azure, and GCP. Learn cloud-native security tools and best practices.",
    },
    {
      icon: Database,
      title: "Digital Forensics",
      description: "Investigate digital evidence, perform memory analysis, and learn incident response techniques.",
    },
  ]

  const events = [
    {
      title: "VAPT Bootcamp",
      date: "May 2025",
      type: "Intensive 2-week training",
    },
    {
      title: "Cloud Security Weekend Workshop",
      date: "June 2025",
      type: "Weekend workshop",
    },
    {
      title: "Career Q&A Session with CISOs",
      date: "July 2025",
      type: "Online webinar",
    },
    {
      title: "Threat Hunting Masterclass",
      date: "August 2025",
      type: "Advanced training",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                <span className="gradient-text">Unlock Your Cybersecurity Potential</span> with QLeap
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 mb-8"
              >
                Hands-on training in VAPT, SOC, GRC, Red Teaming, and more — designed for students and professionals.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/trainings" className="btn-primary text-center">
                  Explore Courses
                </Link>
                <Link href="/contact" className="btn-secondary text-center">
                  Join Our Next Cohort
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20 transform -rotate-6"></div>
                <img
                  src="/placeholder.svg"
                  alt="Cybersecurity Training"
                  className="relative z-10 rounded-3xl shadow-xl w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why QLeap Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Why QLeap?</h2>
            <p className="section-subtitle">
              Our approach to cybersecurity training is different. We focus on practical skills that employers actually
              need.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="card">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-100 rounded-full">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Our Trainings</h2>
            <p className="section-subtitle">
              Comprehensive cybersecurity courses designed to build practical skills and advance your career.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                icon={course.icon}
                delay={0.1 * index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/trainings" className="btn-primary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedSection>
                <h2 className="section-title">Who Should Join?</h2>
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Students</h3>
                      <p className="text-gray-600">
                        Build a career in cybersecurity from the ground up. Get internship-ready skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Lock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Working Professionals</h3>
                      <p className="text-gray-600">
                        Upskill or switch domains. Our advanced labs mimic real-world attacks and defenses.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                      <Server className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Colleges & Institutions</h3>
                      <p className="text-gray-600">
                        Partner with us for seminars, bootcamps, and certification programs.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20 transform rotate-3"></div>
                  <img
                    src="/placeholder.svg"
                    alt="Cybersecurity Students"
                    className="relative z-10 rounded-3xl shadow-xl w-full"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">What Makes Us Different?</h2>
            <p className="section-subtitle">
              Our unique approach to cybersecurity training sets us apart from traditional education.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection className="card">
              <h3 className="text-xl font-bold mb-4">Hands-on {">"} Theory</h3>
              <p className="text-gray-600 mb-4">
                We believe in learning by doing. Our courses are 70% hands-on labs and exercises, with only 30% theory.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Focused labs that simulate real-world scenarios
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Capture The Flag (CTF) competitions
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Real-world attack and defense scenarios
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.2}>
              <h3 className="text-xl font-bold mb-4">Outcome-Based Learning</h3>
              <p className="text-gray-600 mb-4">
                Every module is designed with a specific career outcome in mind. We focus on skills that employers need.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Job-oriented modules with capstone projects
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Industry-recognized certifications
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Portfolio-building opportunities
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.3}>
              <h3 className="text-xl font-bold mb-4">1:1 Mentorship</h3>
              <p className="text-gray-600 mb-4">
                Every student gets paired with an industry mentor who provides guidance throughout the course.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Guidance from seasoned cybersecurity professionals
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Regular 1:1 sessions to track progress
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Career advice and industry insights
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.4}>
              <h3 className="text-xl font-bold mb-4">Placement Support</h3>
              <p className="text-gray-600 mb-4">
                We don't just train you; we help you land your dream job in cybersecurity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Internship & job assistance via our hiring partners
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Resume and LinkedIn profile optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Mock interviews and technical preparation
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">What Our Students Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Hear from our students who have transformed their careers.
            </p>
          </AnimatedSection>

          <TestimonialSlider />
        </div>
      </section>

      {/* Upcoming Batches Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Upcoming Batches & Events</h2>
            <p className="section-subtitle">
              Join our upcoming training batches and events to kickstart your cybersecurity journey.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <EventCard title={event.title} date={event.date} type={event.type} />
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary mr-4">
              Register Now
            </Link>
            <Link href="/contact" className="btn-secondary">
              Join Mailing List
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Cybersecurity Career?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join QLeap today and take the first step towards becoming a cybersecurity professional.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/trainings" className="bg-white text-blue-600 hover:bg-blue-50 btn-primary">
                  Explore Courses
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-blue-700 btn-primary">
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

export default Home
