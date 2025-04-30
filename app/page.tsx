'use client'
import { ArrowRight, CheckCircle, ChevronDown, Globe, Users, Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import FeatureCard from "@/components/feature-card"
import TrainingCard from "@/components/training-card"
import AudienceCard from "@/components/audience-card"
import TestimonialSlider from "@/components/testimonial-slider"
import EventCard from "@/components/event-card"
import DifferentiatorItem from "@/components/differentiator-item"
import AnimatedSection from "@/components/animated-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="QLeap Logo" width={120} height={40} className="h-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="#why" className="text-sm font-medium transition-colors hover:text-accent">
              Why QLeap?
            </Link>
            <Link href="#trainings" className="text-sm font-medium transition-colors hover:text-accent">
              Trainings
            </Link>
            <Link href="#audience" className="text-sm font-medium transition-colors hover:text-accent">
              Who Should Join
            </Link>
            <Link href="#difference" className="text-sm font-medium transition-colors hover:text-accent">
              Our Difference
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-accent">
              Testimonials
            </Link>
            <Link href="#events" className="text-sm font-medium transition-colors hover:text-accent">
              Events
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              className="hidden sm:inline-flex" 
              onClick={() => window.open('https://quasarcybertech.com/', '_blank')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in">
                Unlock Your Cybersecurity Potential with QLeap
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed animate-fade-in animation-delay-200">
                  Hands-on training in VAPT, SOC, GRC, Red Teaming, and more — designed for students and professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
                  <Button size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md">
                    Explore Courses <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 transition-all duration-300 hover:bg-accent/10 hover:border-accent"
                  >
                    Join Our Next Cohort <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden animate-fade-in animation-delay-400 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Cybersecurity professionals working"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why QLeap Section */}
        <AnimatedSection id="why" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why QLeap?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our approach to cybersecurity training is different. We focus on practical skills that employers need.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-accent" />}
                title="Real-World Focused"
                description="Simulate enterprise-level environments to be job-ready from day one."
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10 text-accent" />}
                title="Career Oriented"
                description="Bridge between knowledge and opportunity with direct industry connections."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-accent" />}
                title="Industry Experts"
                description="Learn from professionals currently working at top cybersecurity firms."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-accent" />}
                title="Community Driven"
                description="Join a thriving peer and alumni network for continuous growth."
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Trainings Offered Section */}
        <AnimatedSection id="trainings" className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Trainings Offered</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive cybersecurity programs designed to build expertise across critical domains.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <TrainingCard
                title="VAPT"
                description="Discover, exploit, report vulnerabilities. Covers network, web, and mobile application security testing."
                image="/placeholder.svg?height=400&width=600"
              />
              <TrainingCard
                title="SOC"
                description="Master threat detection, SIEM tools including Splunk, QRadar, and Elastic Stack for security operations."
                image="/placeholder.svg?height=400&width=600"
              />
              <TrainingCard
                title="GRC"
                description="ISO 27001, NIST, GDPR frameworks. Risk management, compliance, and security audit procedures."
                image="/placeholder.svg?height=400&width=600"
              />
              <TrainingCard
                title="Red Teaming"
                description="Adversary simulation, social engineering techniques, and purple teaming methodologies."
                image="/placeholder.svg?height=400&width=600"
              />
            </div>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Additional Courses</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-background p-3 rounded text-center text-sm">Cloud Security (AWS, Azure)</div>
                <div className="bg-background p-3 rounded text-center text-sm">Digital Forensics</div>
                <div className="bg-background p-3 rounded text-center text-sm">Threat Hunting</div>
                <div className="bg-background p-3 rounded text-center text-sm">Incident Response</div>
                <div className="bg-background p-3 rounded text-center text-sm">Secure Coding</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Live Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Case Studies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Resume + Interview Prep</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Who Should Join Section */}
        <AnimatedSection id="audience" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Who Should Join?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our programs are tailored for different career stages and organizational needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <AudienceCard
                title="Students"
                description="Gain internship-ready skills that complement your academic knowledge and stand out to employers."
                icon={<Users className="h-12 w-12 text-accent" />}
              />
              <AudienceCard
                title="Working Professionals"
                description="Upskill or switch domains with practical training designed to fit around your work schedule."
                icon={<Zap className="h-12 w-12 text-accent" />}
              />
              <AudienceCard
                title="Colleges & Institutions"
                description="Partner with us for seminars, bootcamps, and certification programs for your students."
                icon={<Globe className="h-12 w-12 text-accent" />}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* What Makes Us Different Section */}
        <AnimatedSection id="difference" className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our approach focuses on practical skills and real-world applications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <DifferentiatorItem
                title="Hands-on > Theory"
                description="We emphasize practical labs, CTFs, and real-world scenarios over theoretical knowledge."
                icon={<Zap className="h-8 w-8 text-accent" />}
              />
              <DifferentiatorItem
                title="Outcome-Based Learning"
                description="Every course culminates in capstone projects that demonstrate your skills to employers."
                icon={<CheckCircle className="h-8 w-8 text-accent" />}
              />
              <DifferentiatorItem
                title="1:1 Mentorship"
                description="Get personalized guidance from senior professionals working in the industry."
                icon={<Users className="h-8 w-8 text-accent" />}
              />
              <DifferentiatorItem
                title="Placement Support"
                description="Connect with our hiring partners and get support throughout your job search."
                icon={<ArrowRight className="h-8 w-8 text-accent" />}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection id="testimonials" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hear from professionals who transformed their careers with QLeap.
              </p>
            </div>
            <TestimonialSlider />
          </div>
        </AnimatedSection>

        {/* Upcoming Batches & Events Section */}
        <AnimatedSection id="events" className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Upcoming Batches & Events</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join our next cohort or attend one of our special events.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <EventCard
                title="VAPT Bootcamp"
                date="May 2025"
                description="Intensive 4-week program covering all aspects of vulnerability assessment and penetration testing."
              />
              <EventCard
                title="Cloud Security Weekend Workshop"
                date="June 2025"
                description="Two-day deep dive into securing AWS and Azure environments against common threats."
              />
              <EventCard
                title="Career Q&A Session with CISOs"
                date="July 2025"
                description="Panel discussion with Chief Information Security Officers from leading companies."
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2">
                Register Now <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                Join Mailing List <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-20 bg-gradient-to-r from-primary/90 to-primary/80 text-primary-foreground">
          <div className="container">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Accelerate Your Cybersecurity Career?</h2>
              <p className="text-xl opacity-90">
                Join QLeap today and gain the skills, connections, and confidence to excel in cybersecurity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  Download Brochure <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-white hover:bg-white/10 transition-all duration-300"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Image src="/logo.png" alt="QLeap Logo" width={150} height={50} className="h-auto" />
              <p className="text-sm text-muted-foreground">Empowering Talent. Enabling Enterprises.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Trainings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">Subscribe to get updates on new courses and events.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                />
                <Button type="submit" size="sm" className="transition-all duration-300 hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} QLeap Cybersecurity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
