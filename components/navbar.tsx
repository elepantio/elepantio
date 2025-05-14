"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"
import LanguageToggle from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()
  const { scrollY } = useScroll()
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(10px)"])
  const { t } = useLanguage()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { name: t("nav.home"), id: "hero" },
    { name: t("nav.about"), id: "collaboration" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.skills"), id: "features" },
    // { name: t("nav.techStack"), id: "tech-stack" },
    // { name: t("nav.clients"), id: "clients" },
    { name: t("nav.services"), id: "services-offering" },
    { name: t("nav.creator"), id: "creator" },
    { name: t("nav.experience"), id: "process" },
    { name: t("nav.contact"), id: "contact" },
  ]

  return (
    <>
      <motion.header
        style={{
          backdropFilter: backdropBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/0 px-6 py-4 transition-colors duration-300 dark:bg-black/0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Elephantio
            </span>
          </motion.div>

          {!isMobile ? (
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.id)}
                  className="font-medium text-gray-700 transition-colors hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex items-center space-x-4">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </nav>
          ) : (
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-gray-700 dark:text-gray-300"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
      </motion.header>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed inset-0 z-50 bg-white/95 pt-20 backdrop-blur-lg dark:bg-black/95"
        >
          <div className="absolute top-4 right-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Close menu"
              className="text-gray-700 dark:text-gray-300"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center space-y-8 p-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-xl font-medium text-gray-700 dark:text-gray-300"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  )
}
