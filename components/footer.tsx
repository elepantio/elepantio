"use client"

import { motion } from "framer-motion"
import { ArrowUp, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Tooltip from "./tooltip"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  ]

  return (
    <footer className="relative overflow-hidden py-16">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-900/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-900/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-4 text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Elephantio
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6 text-gray-600 dark:text-gray-400"
            >
              A Web Development showcase built by Harun Al Rosyid, featuring beautiful, functional, and user-friendly
              applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 transition-colors hover:border-purple-500 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-400 dark:hover:border-purple-500 dark:hover:bg-purple-900/30 dark:hover:text-purple-400"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {t("nav.skills")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-lg font-semibold">{t("footer.getInTouch")}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{t("footer.getInTouch.desc")}</p>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {t("footer.contactMe")}
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start text-sm"
          >
            <span className="text-gray-500">
              © {currentYear} Elephantio. {t("footer.rights")}
            </span>
            <Tooltip content="Look at the hero section subtitle carefully!">
              <span className="mt-1 text-xs italic text-gray-400 hover:text-purple-500 transition-colors duration-300 cursor-default">
                Spotted a missing 'h'? You found our hidden message: h for human touch.
              </span>
            </Tooltip>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-gray-500"
          >
            <span className="flex items-center">
              {t("footer.madeWith")} <span className="mx-1 text-red-500">❤</span> {t("footer.in")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-purple-500/20 bg-white/50 text-gray-700 hover:bg-purple-500/10 dark:bg-black/50 dark:text-white dark:hover:bg-purple-500/10"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
