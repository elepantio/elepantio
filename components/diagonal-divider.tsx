"use client"

import { motion } from "framer-motion"

interface DiagonalDividerProps {
  position: "top" | "bottom"
  fillColor?: string
  darkFillColor?: string
  height?: number
}

export default function DiagonalDivider({
  position,
  fillColor = "fill-white",
  darkFillColor = "dark:fill-black",
  height = 80,
}: DiagonalDividerProps) {
  return (
    <div
      className={`absolute left-0 right-0 z-10 overflow-hidden ${
        position === "top" ? "top-0 -mt-1" : "bottom-0 -mb-1"
      }`}
      style={{ height: `${height}px` }}
    >
      <motion.svg
        className="absolute h-full w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {position === "top" ? (
          <path className={`${fillColor} ${darkFillColor}`} d="M0,0 L1440,0 L1440,80 C1080,40 360,120 0,80 L0,0 Z" />
        ) : (
          <path className={`${fillColor} ${darkFillColor}`} d="M0,80 L1440,80 L1440,0 C1080,40 360,-40 0,0 L0,80 Z" />
        )}
      </motion.svg>
    </div>
  )
}
