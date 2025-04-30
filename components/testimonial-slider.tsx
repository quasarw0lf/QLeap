"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote:
      "QLeap helped me land my first SOC analyst job straight out of college. The hands-on labs made all the difference in my interviews.",
    author: "Riya Sharma",
    role: "SOC Analyst at TechDefend",
  },
  {
    id: 2,
    quote:
      "Our red teaming module felt like a live operation — highly recommended for anyone serious about offensive security.",
    author: "Siddharth Mehra",
    role: "Security Consultant",
  },
  {
    id: 3,
    quote:
      "The GRC course gave me practical knowledge that my university studies never covered. Now I'm working with compliance teams at a Fortune 500.",
    author: "Ananya Patel",
    role: "GRC Specialist",
  },
]

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="bg-background border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-accent" />
                  <p className="text-lg italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              activeIndex === index ? "bg-accent" : "bg-muted-foreground/30",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full hidden md:flex hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full hidden md:flex hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}
