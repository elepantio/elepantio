"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ClientShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { t } = useLanguage()

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

  // Client/company data
  const clients = [
    {
      name: "Bank Rakyat Indonesia",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Developed mobile applications for financial services",
    },
    {
      name: "Paramadaksa Teknologi",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Built web dashboards and admin panels",
    },
    {
      name: "OPUS IT Services",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Implemented WordPress solutions and SEO strategies",
    },
    {
      name: "Nexsoft",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Created component libraries and enterprise applications",
    },
    {
      name: "Recruitment Hub Asia",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Developed job portal and company profile",
    },
    {
      name: "Tech Innovations Inc.",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Led frontend development for web applications",
    },
  ]

  // Featured projects
  const featuredProjects = [
    {
      name: "Senyum Mobile",
      client: "Bank Rakyat Indonesia",
      logo: "/placeholder.svg?height=60&width=60",
      description: "Self-service mobile application for ultra-micro customers",
      color: "bg-purple-100 dark:bg-purple-900/20",
      textColor: "text-purple-800 dark:text-purple-300",
    },
    {
      name: "Grorex Dashboard",
      client: "Paramadaksa Teknologi",
      logo: "/placeholder.svg?height=60&width=60",
      description: "B2B lending service admin panel",
      color: "bg-blue-100 dark:bg-blue-900/20",
      textColor: "text-blue-800 dark:text-blue-300",
    },
    {
      name: "Nex Drive",
      client: "Nexsoft",
      logo: "/placeholder.svg?height=60&width=60",
      description: "Enterprise online storage platform",
      color: "bg-cyan-100 dark:bg-cyan-900/20",
      textColor: "text-cyan-800 dark:text-cyan-300",
    },
  ]

  return (
    <section id="clients" className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900 sm:py-32">
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-600 dark:text-purple-300"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            {t("clients.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            {t("clients.heading")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
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
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t("clients.subtitle")}
          </motion.p>
        </div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {t("clients.featuredProjects")}
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center">
                  <div className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${project.color}`}>
                    <img src={project.logo || "/placeholder.svg"} alt={project.client} className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{project.name}</h4>
                    <p className={`text-sm ${project.textColor}`}>{project.client}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {t("clients.trustedBy")}
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center rounded-xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/80"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="mb-4 h-12 object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
                <h4 className="mb-2 text-center text-lg font-semibold text-gray-900 dark:text-white">{client.name}</h4>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-20 max-w-4xl rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-16 rounded-full bg-white p-2 shadow-md dark:bg-gray-800">
              <img src="/placeholder.svg?height=60&width=60" alt="Testimonial" className="h-full w-full rounded-full" />
            </div>
            <blockquote className="mb-6 text-xl italic text-gray-700 dark:text-gray-300">
              "{t("clients.testimonial")}"
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">John Smith</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">CTO, Tech Innovations Inc.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
