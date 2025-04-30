"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "../components/AnimatedSection"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    })
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk</h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our courses or want to learn more about QLeap? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="VAPT">VAPT Training</option>
                        <option value="SOC">SOC Training</option>
                        <option value="GRC">GRC Training</option>
                        <option value="Red Teaming">Red Teaming</option>
                        <option value="Cloud Security">Cloud Security</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      ></textarea>
                    </div>

                    <div>
                      <button type="submit" className="w-full btn-primary flex items-center justify-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@qleap.com</p>
                      <p className="text-gray-600">support@qleap.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">+91 1234567890</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">
                        QLeap Cybersecurity Training Center,
                        <br />
                        Tech Park, Whitefield,
                        <br />
                        Bangalore, Karnataka 560066,
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h3 className="font-bold mb-4">Office Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Visit Us</h2>
            <p className="section-subtitle">
              Come by our training center to learn more about our courses and meet our team.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-200 rounded-2xl h-96 w-full flex items-center justify-center">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our courses and training programs.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="space-y-6">
              {[
                {
                  question: "How long are your courses?",
                  answer:
                    "Our courses range from 4-week intensive bootcamps to 12-week comprehensive programs. We also offer weekend workshops for specific topics.",
                },
                {
                  question: "Do I need prior experience in cybersecurity?",
                  answer:
                    "It depends on the course. Some of our beginner courses require only basic IT knowledge, while advanced courses may require some prior experience or knowledge in cybersecurity.",
                },
                {
                  question: "Are your courses online or in-person?",
                  answer:
                    "We offer both online and in-person training options. Our in-person training is conducted at our Bangalore training center, while online training is available globally.",
                },
                {
                  question: "Do you provide job placement assistance?",
                  answer:
                    "Yes, we provide job placement assistance through our network of hiring partners. We also help with resume building, interview preparation, and career guidance.",
                },
                {
                  question: "Are there any prerequisites for joining your courses?",
                  answer:
                    "Prerequisites vary by course. For most courses, a basic understanding of networking and operating systems is helpful. Specific prerequisites are listed on each course page.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
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
                  Explore Courses
                </Link>
                <Link href="#" className="bg-transparent border-2 border-white hover:bg-blue-700 btn-primary">
                  Join Our Next Cohort
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
