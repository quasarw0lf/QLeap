"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The leadership program at QLeap transformed my approach to team management. The practical strategies and personalized coaching helped me navigate a major organizational change with confidence.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Senior Developer, InnovateSoft",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a technical professional, I was skeptical about soft skills training, but QLeap's program was exactly what I needed to advance my career. The technical leadership module was particularly valuable.",
    rating: 5,
  },
  {
    name: "Jessica Williams",
    position: "HR Manager, Global Retail Inc.",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "QLeap's training programs have become an integral part of our talent development strategy. The customized approach and measurable outcomes have made a significant impact on our team's performance.",
    rating: 4,
  },
  {
    name: "David Rodriguez",
    position: "Operations Director, Logistics Plus",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The strategic thinking workshop exceeded my expectations. The facilitators were exceptional, and the frameworks we learned have already helped us optimize several key business processes.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    position: "Project Manager, BuildWell Construction",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "QLeap's project management certification program was comprehensive and immediately applicable. I implemented the techniques I learned and saw a 30% improvement in team efficiency within weeks.",
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-300 text-lg reveal reveal-delay-1">
            Hear from professionals who have experienced the transformative impact of our training programs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          <div
            ref={testimonialRef}
            className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800 transition-opacity duration-500"
            style={{ opacity: isAnimating ? 0.5 : 1 }}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="flex mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-400" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl italic mb-6">"{testimonials[currentIndex].content}"</p>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-6" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal">
          <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-gray-400">Client Companies</p>
          </div>
          <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <p className="text-gray-400">Professionals Trained</p>
          </div>
          <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
          <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-gray-400">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
