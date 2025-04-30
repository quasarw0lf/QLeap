"use client"

import { motion } from "framer-motion"
import { Award, Target, BookOpen } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "../components/AnimatedSection"

const About = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Instructor",
      bio: "15+ years in cybersecurity, former CISO at a Fortune 500 company.",
      image: "/placeholder.svg",
    },
    {
      name: "Priya Sharma",
      role: "SOC Instructor",
      bio: "Security analyst with expertise in SIEM tools and threat detection.",
      image: "/placeholder.svg",
    },
    {
      name: "Vikram Singh",
      role: "VAPT Instructor",
      bio: "Certified ethical hacker with 10+ years of penetration testing experience.",
      image: "/placeholder.svg",
    },
    {
      name: "Ananya Patel",
      role: "GRC Specialist",
      bio: "Compliance expert with deep knowledge of ISO 27001 and NIST frameworks.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About QLeap</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to bridge the cybersecurity skills gap through practical, hands-on training.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <AnimatedSection>
                <h2 className="section-title">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  QLeap was founded in 2022 by a team of cybersecurity professionals who were frustrated with the gap
                  between traditional education and the skills needed in the industry.
                </p>
                <p className="text-gray-600 mb-6">
                  We noticed that many cybersecurity courses focused too much on theory and not enough on practical,
                  hands-on skills. Graduates were entering the workforce unprepared for the challenges they would face.
                </p>
                <p className="text-gray-600">
                  That's why we created QLeap — a training program that prioritizes real-world experience, mentorship,
                  and career outcomes. Our goal is to produce job-ready cybersecurity professionals who can make an
                  immediate impact.
                </p>
              </AnimatedSection>
            </div>

            <div className="lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20 transform rotate-3"></div>
                  <img src="/placeholder.svg" alt="Our Story" className="relative z-10 rounded-3xl shadow-xl w-full" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">
              To create the next generation of cybersecurity professionals through practical, hands-on training and
              mentorship.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="card">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bridge the Skills Gap</h3>
                <p className="text-gray-600">
                  We aim to close the gap between traditional education and industry needs by focusing on practical
                  skills.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Democratize Learning</h3>
                <p className="text-gray-600">
                  Make quality cybersecurity education accessible to students and professionals from all backgrounds.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Foster Excellence</h3>
                <p className="text-gray-600">
                  Cultivate a community of cybersecurity professionals who uphold the highest standards of excellence
                  and ethics.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our instructors are industry professionals with years of experience in cybersecurity.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={0.1 * index} className="card">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle">
              We collaborate with leading companies and institutions to provide the best opportunities for our students.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <AnimatedSection key={index} delay={0.05 * index} className="flex justify-center">
                <img src="/placeholder-logo.svg" alt={`Partner ${index + 1}`} className="h-12 md:h-16 object-contain" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8 text-blue-100">
                Become part of a growing network of cybersecurity professionals and enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#" className="bg-white text-blue-600 hover:bg-blue-50 btn-primary">
                  Join Our Next Cohort
                </Link>
                <Link href="#" className="bg-transparent border-2 border-white hover:bg-blue-700 btn-primary">
                  Partner With Us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
