"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Zap, Users, Rocket, Layers, Workflow, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesOfferingSection() {
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

  const services = [
    {
      title: t("services.web.title"),
      description: t("services.web.description"),
      icon: <Code className="h-10 w-10" />,
      color: "from-blue-500 to-blue-600",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    },
    {
      title: t("services.mobile.title"),
      description: t("services.mobile.description"),
      icon: <Smartphone className="h-10 w-10" />,
      color: "from-purple-500 to-purple-600",
      technologies: ["React Native", "Expo", "Redux", "Native Modules", "Firebase"],
    },
    {
      title: t("services.fullstack.title"),
      description: t("services.fullstack.description"),
      icon: <Layers className="h-10 w-10" />,
      color: "from-cyan-500 to-cyan-600",
      technologies: ["Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      title: t("services.consulting.title"),
      description: t("services.consulting.description"),
      icon: <Users className="h-10 w-10" />,
      color: "from-green-500 to-green-600",
      technologies: [
        "Code Reviews",
        "Architecture Design",
        "Team Training",
        "Best Practices",
        "Performance Optimization",
      ],
    },
  ]

  const collaborationTypes = [
    {
      title: t("services.collaboration.freelance.title"),
      description: t("services.collaboration.freelance.description"),
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      title: t("services.collaboration.contract.title"),
      description: t("services.collaboration.contract.description"),
      icon: <GitBranch className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: t("services.collaboration.employee.title"),
      description: t("services.collaboration.employee.description"),
      icon: <Workflow className="h-6 w-6" />,
      color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    },
  ]

  return (
    <section id="services-offering" className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900 sm:py-32">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl dark:bg-blue-900/30"></div>
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-100 opacity-30 blur-3xl dark:bg-purple-900/30"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 dark:bg-blue-900/50 dark:text-blue-300"
          >
            <Zap className="mr-2 h-4 w-4" />
            {t("services.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            {t("services.heading")
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
            {t("services.subtitle")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gray-50 opacity-80 dark:bg-gray-700/50"></div>
              <div className={`relative mb-6 inline-flex rounded-xl bg-gradient-to-r ${service.color} p-3 text-white`}>
                {service.icon}
              </div>
              <h3 className="relative mb-4 text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="relative mb-6 text-gray-600 dark:text-gray-400">{service.description}</p>
              <div className="relative flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-20 max-w-4xl rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
            {t("services.collaboration.heading")}
          </h3>
          <p className="mb-8 text-center text-gray-700 dark:text-gray-300">{t("services.collaboration.subtitle")}</p>

          <div className="grid gap-6 md:grid-cols-3">
            {collaborationTypes.map((type, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/50"
              >
                <div className={`mb-4 inline-flex rounded-full ${type.color} p-3`}>{type.icon}</div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{type.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {t("services.cta")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{t("services.approach.heading")}</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">{t("services.approach.description")}</p>
        </motion.div>
      </div>
    </section>
  )
}
