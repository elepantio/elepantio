"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { User, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl">
              <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
              <User className="mr-2 h-4 w-4" />
              About Me
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Passionate Developer & Designer
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              I'm a creative developer with over 5 years of experience in building beautiful, functional websites and
              applications. My passion lies in creating digital experiences that are not only visually appealing but
              also highly functional and user-friendly.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              With expertise in modern web technologies and a keen eye for design, I bring ideas to life through clean
              code and thoughtful user interfaces. I'm constantly learning and adapting to new technologies to deliver
              cutting-edge solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
                <h3 className="text-3xl font-bold text-gray-900">5+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
            </div>

            <div className="mt-8">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
