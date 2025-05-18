"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  tech: string[]
  link?: string
  github?: string
  date: string
  category: string
  features: string[]
  challenges: string[]
  solutions: string[]
  gradient: string
}

export default function ProjectDetails() {
  const router = useRouter()
  const params = useParams()
  const { id } = params
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For this example, we'll use mock data
    const mockProjects: Record<string, Project> = {
      "senyum-mobile": {
        id: "senyum-mobile",
        title: "Senyum Mobile",
        subtitle: "Self Service Mobile Application",
        description:
          "A mobile application designed for ultra-micro customers (UMi) to independently access digital financial services.",
        fullDescription:
          "Senyum Mobile is a comprehensive mobile application designed for ultra-micro customers (UMi) to independently access digital financial services including account information, location merchant services, and customer support. The app serves as a central hub for BRI's digital financial ecosystem, providing users with a seamless and intuitive interface to manage their financial needs.",
        image: "/placeholder.svg?height=600&width=800",
        tech: [
          "TypeScript",
          "React Native",
          "Redux",
          "Firebase",
          "Kotlin (Native Module)",
          "Notifee",
          "SWR",
          "React UseForm",
          "Custom Hooks",
        ],
        link: "https://play.google.com/store/apps/details?id=com.senyum&hl=id",
        date: "January 2024 - Present",
        category: "Mobile Application",
        features: [
          "Transaction History for SimpedesUMi accounts",
          "Location services for nearby BRILink Agents and BRI ATMs",
          "LinkUMKM integration for SME-related services",
          "Push notification system using Firebase Cloud Messaging",
          "Customer complaint handling with ticket tracking",
          "Secure authentication and account management",
        ],
        challenges: [
          "Integrating multiple backend services from different BRI divisions",
          "Ensuring consistent performance across various Android devices",
          "Implementing secure authentication while maintaining user experience",
          "Optimizing app size and performance for users with limited data plans",
        ],
        solutions: [
          "Developed a modular architecture to handle different service integrations",
          "Implemented extensive device testing and responsive design principles",
          "Created a streamlined authentication flow with secure token management",
          "Optimized assets and implemented code splitting to reduce app size",
        ],
        gradient: "from-purple-600 to-blue-600",
      },
       "grorex-dashboard": {
        id: "senyum-mobile",
        title: "Senyum Mobile",
        subtitle: "Self Service Mobile Application",
        description:
          "A mobile application designed for ultra-micro customers (UMi) to independently access digital financial services.",
        fullDescription:
          "Senyum Mobile is a comprehensive mobile application designed for ultra-micro customers (UMi) to independently access digital financial services including account information, location merchant services, and customer support. The app serves as a central hub for BRI's digital financial ecosystem, providing users with a seamless and intuitive interface to manage their financial needs.",
        image: "/placeholder.svg?height=600&width=800",
        tech: [
          "TypeScript",
          "React Native",
          "Redux",
          "Firebase",
          "Kotlin (Native Module)",
          "Notifee",
          "SWR",
          "React UseForm",
          "Custom Hooks",
        ],
        link: "https://play.google.com/store/apps/details?id=com.senyum&hl=id",
        date: "January 2024 - Present",
        category: "Mobile Application",
        features: [
          "Transaction History for SimpedesUMi accounts",
          "Location services for nearby BRILink Agents and BRI ATMs",
          "LinkUMKM integration for SME-related services",
          "Push notification system using Firebase Cloud Messaging",
          "Customer complaint handling with ticket tracking",
          "Secure authentication and account management",
        ],
        challenges: [
          "Integrating multiple backend services from different BRI divisions",
          "Ensuring consistent performance across various Android devices",
          "Implementing secure authentication while maintaining user experience",
          "Optimizing app size and performance for users with limited data plans",
        ],
        solutions: [
          "Developed a modular architecture to handle different service integrations",
          "Implemented extensive device testing and responsive design principles",
          "Created a streamlined authentication flow with secure token management",
          "Optimized assets and implemented code splitting to reduce app size",
        ],
        gradient: "from-purple-600 to-blue-600",
      },
      // Add more projects as needed
    }

    // Simulate API fetch
    setTimeout(() => {
      if (typeof id === "string" && mockProjects[id]) {
        setProject(mockProjects[id])
      }
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Project not found</h1>
        <Button onClick={() => router.push("/")} className="bg-purple-600 hover:bg-purple-700">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-16 dark:bg-black">
      {/* Hero Section */}
      <div className={`relative h-[50vh] w-full overflow-hidden bg-gradient-to-r ${project.gradient}`}>
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/90"
          >
            {project.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => router.push("/")}
          variant="ghost"
          className="mb-8 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Button>

        {/* Project Content */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Sidebar */}
          <div className="space-y-8 md:col-span-1">
            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Project Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="mr-3 mt-1 h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Timeline</p>
                    <p className="text-gray-900 dark:text-white">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Tag className="mr-3 mt-1 h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</p>
                    <p className="text-gray-900 dark:text-white">{project.category}</p>
                  </div>
                </div>

                {project.link && (
                  <Button
                    className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                  </Button>
                )}

                {project.github && (
                  <Button
                    variant="outline"
                    className="mt-2 w-full border-purple-500/50"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </Button>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Project Overview</h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{project.fullDescription}</p>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600"></span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Challenges</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-600"></span>
                    <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Solutions</h3>
              <ul className="space-y-2">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-600"></span>
                    <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Want to work together?</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you're interested in collaborating on a project or have any questions about my work, feel free to
                reach out!
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600" onClick={() => router.push("/#contact")}>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
