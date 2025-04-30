"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Cybersecurity Intern",
    content: "QLeap helped me land my first SOC analyst job straight out of college.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Siddharth Mehra",
    role: "Security Consultant",
    content: "Our red teaming module felt like a live operation — highly recommended.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Network Security Engineer",
    content: "The hands-on labs were incredibly practical. I use the skills I learned every day in my job.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "VAPT Specialist",
    content: "The mentorship I received was invaluable. My mentor still checks in with me occasionally.",
    image: "/placeholder.svg",
  },
]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative overflow-hidden py-12">
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-full opacity-50 -translate-x-10 -translate-y-10" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-100 rounded-full opacity-50 translate-x-10 translate-y-10" />

      <div className="max-w-4xl mx-auto px-4 relative">
        <Quote className="text-blue-100 w-20 h-20 absolute -top-6 -left-6 z-0" />

        <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 text-lg md:text-xl italic mb-6">"{testimonials[current].content}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-blue-600">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
