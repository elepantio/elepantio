"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Sparkles, Lightbulb } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CollaborationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
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
    <section id="collaboration" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-600 dark:text-purple-300">
              <Users className="mr-2 h-4 w-4" />
              {t("about.title")}
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {t("about.heading")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
                    >
                      {word}{" "}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{t("about.paragraph1")}</p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{t("about.paragraph2")}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                <Sparkles className="mb-2 h-6 w-6 text-purple-600 dark:text-purple-400" />
                <h3 className="mb-2 text-lg font-semibold">{t("about.expertise")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("about.expertise.desc")}</p>
              </div>
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <Lightbulb className="mb-2 h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                <h3 className="mb-2 text-lg font-semibold">{t("about.industry")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t("about.industry.desc")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-1">
              <div className="h-full w-full overflow-hidden rounded-xl bg-white dark:bg-black">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Collaboration"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent dark:from-black/70"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
