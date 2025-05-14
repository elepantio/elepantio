"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Zap, Palette, Globe, Database, Server } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      items: ["Node.js", "Express", "Python", "Java", "RESTful APIs"],
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      items: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping"],
      color: "from-pink-500 to-pink-600",
    },
    {
      category: "Database",
      icon: <Database className="h-6 w-6" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
      color: "from-green-500 to-green-600",
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      items: ["Progressive Web Apps", "SEO", "Web Performance", "Accessibility"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      category: "Tools & Others",
      icon: <Zap className="h-6 w-6" />,
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel"],
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="skills" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600"
          >
            <Zap className="mr-2 h-4 w-4" />
            My Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            I've honed my skills across various technologies and domains to deliver comprehensive solutions for modern
            web applications.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-r ${skill.color} p-3 text-white`}>
                {skill.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
