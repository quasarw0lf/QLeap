"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "../components/AnimatedSection"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Get Into Cybersecurity: A Complete Guide for Beginners",
      excerpt:
        "Interested in starting a career in cybersecurity? This comprehensive guide covers everything you need to know to get started.",
      date: "May 15, 2025",
      author: "Rajesh Kumar",
      category: "Career Advice",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Red Teaming vs Penetration Testing: Understanding the Differences",
      excerpt:
        "Many people use these terms interchangeably, but there are significant differences between red teaming and penetration testing.",
      date: "May 10, 2025",
      author: "Vikram Singh",
      category: "Technical",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Top 10 Cybersecurity Tools Every Professional Should Know",
      excerpt:
        "From vulnerability scanners to SIEM solutions, these are the essential tools that every cybersecurity professional should be familiar with.",
      date: "May 5, 2025",
      author: "Priya Sharma",
      category: "Tools",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Understanding the MITRE ATT&CK Framework",
      excerpt:
        "A deep dive into the MITRE ATT&CK framework and how it can be used to improve your organization's security posture.",
      date: "April 28, 2025",
      author: "Ananya Patel",
      category: "Frameworks",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      title: "The Rise of Cloud Security: Challenges and Solutions",
      excerpt:
        "As more organizations move to the cloud, new security challenges emerge. Learn about the latest cloud security threats and how to mitigate them.",
      date: "April 20, 2025",
      author: "Rahul Verma",
      category: "Cloud",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Cybersecurity Career Paths: Finding Your Niche",
      excerpt:
        "From SOC analyst to CISO, explore the various career paths in cybersecurity and find the one that's right for you.",
      date: "April 15, 2025",
      author: "Rajesh Kumar",
      category: "Career Advice",
      image: "/placeholder.svg",
    },
  ]

  const categories = ["All", "Career Advice", "Technical", "Tools", "Frameworks", "Cloud", "Best Practices"]

  const sanitizeTitle = (title) => {
    return title.replace(">", "{'>'}")
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">QLeap Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, tutorials, and career advice from our cybersecurity experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {sanitizeTitle("The Future of Cybersecurity: Trends to Watch in 2025")}
                </h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">June 1, 2025</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>Rajesh Kumar</span>
                </div>
                <p className="text-gray-600 mb-6">
                  From AI-powered threats to quantum computing challenges, the cybersecurity landscape is evolving
                  rapidly. In this article, we explore the emerging trends that will shape the future of cybersecurity
                  and how professionals can prepare for them.
                </p>
                <Link href="#" className="btn-primary inline-flex items-center">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img src="/placeholder.svg" alt="Featured Article" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle">
              Stay up-to-date with the latest trends, tutorials, and insights in cybersecurity.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                delay={0.1 * index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{sanitizeTitle(post.title)}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <Link href="#" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get the latest cybersecurity insights, tutorials, and career advice delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog
