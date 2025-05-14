"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Code } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function TechStackMarquee() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const { t } = useLanguage()

  // Tech stack data with logos, names, and categories
  const techStack = [
    {
      name: "React",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Frontend",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "React Native",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Mobile",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Frontend",
      color: "from-gray-800 to-gray-900",
    },
    {
      name: "TypeScript",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Language",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "JavaScript",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Language",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "Tailwind CSS",
      icon: "/placeholder.svg?height=80&width=80",
      category: "CSS",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "Redux",
      icon: "/placeholder.svg?height=80&width=80",
      category: "State Management",
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Node.js",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Backend",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Express",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Backend",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "MongoDB",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Database",
      color: "from-green-600 to-green-700",
    },
    {
      name: "PostgreSQL",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Database",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "Firebase",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Backend",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Git",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Tool",
      color: "from-orange-600 to-orange-700",
    },
    {
      name: "Docker",
      icon: "/placeholder.svg?height=80&width=80",
      category: "DevOps",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Figma",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Design",
      color: "from-purple-500 to-pink-500",
    },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="tech-stack" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300"
          >
            <Code className="mr-2 h-4 w-4" />
            {t("techStack.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("techStack.heading")
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
            {t("techStack.subtitle")}
          </motion.p>
        </div>

        <div ref={ref} className="mt-16">
          {/* First Marquee - Left to Right */}
          <div className="relative flex overflow-x-hidden">
            {/* Gradient fade on left */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-black"></div>
            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-black"></div>

            {/* First copy of the marquee */}
            <div className="animate-marquee whitespace-nowrap py-8">
              {techStack.map((tech, index) => (
                <div key={`first-${index}`} className="mx-4 inline-block">
                  <div className="group flex flex-col items-center w-40">
                    <div
                      className={`mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r ${tech.color} p-4 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second copy of the marquee */}
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-8">
              {techStack.map((tech, index) => (
                <div key={`second-${index}`} className="mx-4 inline-block">
                  <div className="group flex flex-col items-center w-40">
                    <div
                      className={`mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r ${tech.color} p-4 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Marquee - Right to Left (Reverse) */}
          <div className="relative flex overflow-x-hidden mt-8">
            {/* Gradient fade on left */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-black"></div>
            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-black"></div>

            {/* First copy of the reverse marquee */}
            <div className="animate-marquee-reverse whitespace-nowrap py-8">
              {[...techStack].reverse().map((tech, index) => (
                <div key={`reverse-first-${index}`} className="mx-4 inline-block">
                  <div className="group flex flex-col items-center w-40">
                    <div
                      className={`mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r ${tech.color} p-4 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second copy of the reverse marquee */}
            <div className="absolute top-0 animate-marquee2-reverse whitespace-nowrap py-8">
              {[...techStack].reverse().map((tech, index) => (
                <div key={`reverse-second-${index}`} className="mx-4 inline-block">
                  <div className="group flex flex-col items-center w-40">
                    <div
                      className={`mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-r ${tech.color} p-4 text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tech.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {["Frontend", "Backend", "Mobile", "Database", "DevOps"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center rounded-lg border border-gray-200 bg-white/80 px-4 py-3 shadow-sm dark:border-gray-800 dark:bg-gray-900/80"
            >
              <span className="text-sm font-medium">{category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
