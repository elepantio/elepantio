"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the development of modern web applications using React and Next.js. Implemented responsive designs and optimized performance for better user experience.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites using JavaScript frameworks. Collaborated with designers to implement pixel-perfect UI components.",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      period: "2016 - 2018",
      description:
        "Created wireframes, prototypes, and high-fidelity designs for web and mobile applications. Conducted user research and usability testing.",
    },
  ]

  return (
    <section id="experience" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            My professional journey has equipped me with diverse skills and experiences in creating exceptional digital
            products.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mt-16"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="flex-1"></div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 top-0 -mt-2 -translate-x-1/2">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 ring-4 ring-white"></div>
              </div>

              <div className="flex-1">
                <div
                  className={`mx-8 rounded-2xl bg-white p-6 shadow-lg ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <span className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-medium text-white">
                    {exp.period}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="mb-4 text-sm font-medium text-blue-600">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
