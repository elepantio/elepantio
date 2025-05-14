"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, Palette, Globe, BarChart, Zap } from "lucide-react"

export default function ServicesSection() {
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

  const services = [
    {
      title: "Web Development",
      description: "Building responsive, fast, and user-friendly websites using modern technologies.",
      icon: <Code className="h-10 w-10" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Mobile App Development",
      description: "Creating native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless user experiences.",
      icon: <Palette className="h-10 w-10" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "E-commerce Solutions",
      description: "Building online stores with secure payment gateways and inventory management.",
      icon: <Globe className="h-10 w-10" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "SEO Optimization",
      description: "Improving website visibility and ranking on search engines.",
      icon: <BarChart className="h-10 w-10" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Performance Optimization",
      description: "Enhancing website speed and performance for better user experience.",
      icon: <Zap className="h-10 w-10" />,
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
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
            My Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            What I Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            I provide comprehensive solutions tailored to meet your specific needs and help your business grow in the
            digital landscape.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gray-50 opacity-80"></div>
              <div className={`relative mb-6 inline-flex rounded-xl bg-gradient-to-r ${service.color} p-3 text-white`}>
                {service.icon}
              </div>
              <h3 className="relative mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="relative text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
