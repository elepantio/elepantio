"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "Senyum Mobile",
      subtitle: "Self Service Mobile Application",
      description:
        "A mobile application designed for ultra-micro customers (UMi) to independently access digital financial services including account information, location merchant services, and customer support.",
      image: "/placeholder.svg?height=600&width=800",
      gradient: "from-purple-600 to-blue-600",
      tech: "TypeScript, React Native, Redux, Firebase, Kotlin (Native Module)",
    },
    {
      title: "Grorex Dashboard",
      subtitle: "B2B Lending Service Admin",
      description:
        "An internal web application for managing a B2B lending service, providing tools for customer data administration, user access control, and loan processing workflows.",
      image: "/placeholder.svg?height=600&width=800",
      gradient: "from-cyan-600 to-blue-600",
      tech: "React.js, JavaScript, Redux Toolkit, Ant Design, Axios",
    },
    {
      title: "Nex Drive",
      subtitle: "Online Storage Services",
      description:
        "A web-based online storage platform similar to Google Drive or OneDrive, tailored for enterprise service from Nexsoft with core file operations and sharing capabilities.",
      image: "/placeholder.svg?height=600&width=800",
      gradient: "from-blue-600 to-purple-600",
      tech: "React.js, JavaScript, Redux Toolkit, Axios, NexComponent UI",
    },
  ]

  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300"
          >
            <Code className="mr-2 h-4 w-4" />
            {t("projects.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("projects.heading")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
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
            {t("projects.subtitle")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12`}
            >
              <div className="flex-1">
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-sm transition-all duration-500 group-hover:opacity-30 group-hover:blur-md`}
                  ></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
                <p className="mb-4 text-xl font-light text-purple-600 dark:text-purple-300">{project.subtitle}</p>
                <p className="mb-4 text-gray-700 dark:text-gray-400">{project.description}</p>
                <div className="mb-6 rounded-lg bg-gray-100 p-3 dark:bg-gray-800/50">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack: {project.tech}</p>
                </div>
                <Button className={`w-fit bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`} size="sm">
                  <span>{t("projects.viewDetails")}</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
