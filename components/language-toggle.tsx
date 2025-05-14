"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs font-medium ${
          language === "en"
            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
            : "text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
        }`}
      >
        EN
      </Button>
      <span className="text-gray-400">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage("id")}
        className={`px-2 py-1 text-xs font-medium ${
          language === "id"
            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400"
            : "text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
        }`}
      >
        ID
      </Button>
    </div>
  )
}
