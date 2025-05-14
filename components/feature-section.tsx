"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Shield, Smartphone, Palette, Cpu, Code, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function FeatureSection() {
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

  const features = [
    {
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces with React, React Native, and modern JavaScript",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Mobile Development",
      description: "Creating native-like mobile experiences with React Native for iOS and Android platforms",
      icon: <Smartphone className="h-6 w-6" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Quality Assurance",
      description: "Ensuring software reliability through comprehensive testing and quality control processes",
      icon: <Shield className="h-6 w-6" />,
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces and seamless user experiences with attention to detail",
      icon: <Palette className="h-6 w-6" />,
      gradient: "from-purple-500 to-blue-600",
    },
    {
      title: "State Management",
      description: "Implementing efficient state management with Redux, Context API, and modern React patterns",
      icon: <Cpu className="h-6 w-6" />,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Team Collaboration",
      description: "Leading teams, managing workflows, and collaborating effectively with cross-functional teams",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-600",
    },
  ]

  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-600 dark:text-cyan-300"
          >
            <Zap className="mr-2 h-4 w-4" />
            {t("skills.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("skills.heading")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
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
            {t("skills.subtitle")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/80"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-gray-100 to-white/0 opacity-50 dark:from-gray-800 dark:to-gray-900/0"></div>
              <div
                className={`relative mb-6 inline-flex rounded-xl bg-gradient-to-r ${feature.gradient} p-3 text-white`}
              >
                {feature.icon}
              </div>
              <h3 className="relative mb-4 text-xl font-bold">{feature.title}</h3>
              <p className="relative text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
