"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Server, Users, Database, Cloud, Search, FileCode, AlertTriangle } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "../components/AnimatedSection"
import CourseCard from "../components/CourseCard"

const Trainings = () => {
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
    {
      icon: AlertTriangle,
      title: "Threat Hunting",
      description: "Proactively search for threats that evade existing security solutions using advanced techniques.",
    },
    {
      icon: Server,
      title: "Incident Response",
      description: "Learn to effectively respond to security incidents, from detection to containment and recovery.",
    },
    {
      icon: Lock,
      title: "Secure Coding",
      description: "Develop applications with security in mind. Learn to identify and fix common vulnerabilities.",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Cybersecurity Trainings</h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive, hands-on courses designed to build practical skills and advance your career in
              cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">What's Included in Every Course</h2>
            <p className="section-subtitle">
              Our comprehensive approach ensures you get the most out of your training experience.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection className="card">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hands-on Labs</h3>
                <p className="text-gray-600">
                  Practice in realistic environments with guided labs that simulate real-world scenarios.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <FileCode className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Case Studies</h3>
                <p className="text-gray-600">
                  Analyze real security incidents and learn how professionals handled them.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certification</h3>
                <p className="text-gray-600">
                  Earn an industry-recognized certificate upon successful completion of the course.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                <p className="text-gray-600">Get guidance from experienced professionals who work in the field.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Resume Building</h3>
                <p className="text-gray-600">
                  Get help optimizing your resume and LinkedIn profile for cybersecurity roles.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="card" delay={0.5}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interview Prep</h3>
                <p className="text-gray-600">
                  Practice with mock interviews and technical questions specific to your target role.
                </p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Cybersecurity Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Enroll in one of our courses today and take the first step towards a rewarding career.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="#" className="bg-white text-blue-600 hover:bg-blue-50 btn-primary">
                  Enroll Now
                </Link>
                <Link href="#" className="bg-transparent border-2 border-white hover:bg-blue-700 btn-primary">
                  Request Syllabus
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Trainings
