"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, BookOpen, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()

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
    <section id="education" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-600 dark:text-purple-300"
          >
            <GraduationCap className="mr-2 h-4 w-4" />
            {t("education.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("education.heading")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            {t("education.subtitle")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-purple-500/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-black/5"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/5 to-white/0 opacity-50"></div>
            <div className="relative mb-6 inline-flex rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 p-3 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="relative mb-2 text-xl font-bold">Pradita University</h3>
            <p className="relative mb-2 text-sm font-medium text-purple-600 dark:text-purple-400">
              Bachelor's degree in Information Technology
            </p>
            <p className="relative mb-4 text-sm">Aug 2017 - Dec 2021</p>
            <p className="relative mb-4">
              Completed my Bachelor's degree in Information Technology with a GPA of 3.79/4.00, focusing on programming,
              database management, web development, and software engineering.
            </p>
            <div className="mt-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-yellow-500" />
              <span className="font-medium">GPA: 3.79/4.00</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-black/5"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/5 to-white/0 opacity-50"></div>
            <div className="relative mb-6 inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 p-3 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="relative mb-2 text-xl font-bold">Key Coursework</h3>
            <p className="relative mb-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Specialized Technical Training
            </p>
            <p className="relative mb-4 text-sm">During University</p>
            <ul className="relative mb-4 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                <span>Advanced Programming Techniques</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                <span>Database Systems & Management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                <span>Web Development & Design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                <span>Software Engineering Principles</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                <span>Mobile Application Development</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-blue-500/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-black/5"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/5 to-white/0 opacity-50"></div>
            <div className="relative mb-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-white">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="relative mb-2 text-xl font-bold">Skills Developed</h3>
            <p className="relative mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
              Technical & Professional Competencies
            </p>
            <p className="relative mb-4 text-sm">Throughout Education</p>
            <ul className="relative mb-4 space-y-2">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                <span>Programming Languages (Java, Python, C++)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                <span>Web Technologies (HTML, CSS, JavaScript)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                <span>Database Management (SQL)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                <span>Data Structures & Algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                <span>Problem-Solving & Analytical Thinking</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
