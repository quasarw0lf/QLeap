"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }).max(100),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000),
})

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    try {
      formSchema.parse(formState)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const formData = new FormData()
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value)
      })

      // This is the key for Netlify forms to work
      formData.append("form-name", "contact")

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was a problem submitting your form. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-us" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Have questions about our cybersecurity training programs? Ready to take the next step in your cybersecurity
            career? Get in touch with our team at Quasar CyberTech.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 reveal">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="bg-primary/20 p-4 rounded-full mb-6">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                <p className="text-gray-300 max-w-md">
                  Your message has been successfully submitted. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full bg-gray-800 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full bg-gray-800 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className={`w-full bg-gray-800 border ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    } rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={`w-full bg-gray-800 border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className={`w-full bg-gray-800 border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                {submitError && (
                  <div className="p-3 bg-red-900/30 border border-red-800 rounded-md text-red-200">{submitError}</div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8 reveal reveal-delay-2">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-gray-300">
                      123 Cybersecurity Avenue, Suite 200
                      <br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300">
                      info@quasarcybertech.com
                      <br />
                      training@qleap.education
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-300">
                      +1 (123) 456-7890
                      <br />
                      +1 (987) 654-3210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-black p-6 rounded-xl border border-blue-900/30">
              <h3 className="text-xl font-semibold mb-3">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-4">
                Our cybersecurity experts are ready to provide quick support for urgent inquiries.
              </p>
              <a href="tel:+11234567890" className="btn-primary inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
