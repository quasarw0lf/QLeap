"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const CourseCard = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card group hover:border-blue-500 border-2 border-transparent"
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t border-gray-100 pt-4 mt-4">
        <ul className="space-y-2">
          <li className="flex items-center text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            <span>Live Projects</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            <span>Case Studies</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            <span>Certification</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-500 mr-2" />
            <span>Mentorship</span>
          </li>
        </ul>
      </div>
      <button className="mt-6 w-full btn-primary">Learn More</button>
    </motion.div>
  )
}

export default CourseCard
