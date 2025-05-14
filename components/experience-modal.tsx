"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, CheckCircle } from "lucide-react"

interface ExperienceModalProps {
  isOpen: boolean
  onClose: () => void
  experience: {
    company: string
    title: string
    period: string
    description: string
    responsibilities: string[]
    achievements: string[]
    technologies: string[]
  } | null
}

export default function ExperienceModal({ isOpen, onClose, experience }: ExperienceModalProps) {
  if (!experience) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">{experience.title}</DialogTitle>
          <DialogDescription className="text-purple-600 dark:text-purple-400">{experience.company}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-6">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Calendar className="mr-2 h-5 w-5" />
            <span>{experience.period}</span>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Overview</h3>
            <p className="text-gray-700 dark:text-gray-300">{experience.description}</p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Key Responsibilities</h3>
            <ul className="space-y-2">
              {experience.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Key Achievements</h3>
            <ul className="space-y-2">
              {experience.achievements.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
