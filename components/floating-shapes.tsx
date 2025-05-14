"use client"

import { motion } from "framer-motion"

export default function FloatingShapes() {
  const shapes = [
    {
      type: "circle",
      size: 80,
      x: "10%",
      y: "20%",
      duration: 20,
      color: "bg-purple-500/10 dark:bg-purple-500/5",
      delay: 0,
    },
    {
      type: "square",
      size: 60,
      x: "85%",
      y: "15%",
      duration: 25,
      color: "bg-cyan-500/10 dark:bg-cyan-500/5",
      delay: 2,
    },
    {
      type: "triangle",
      size: 70,
      x: "75%",
      y: "60%",
      duration: 18,
      color: "bg-blue-500/10 dark:bg-blue-500/5",
      delay: 1,
    },
    {
      type: "donut",
      size: 90,
      x: "20%",
      y: "70%",
      duration: 22,
      color: "bg-pink-500/10 dark:bg-pink-500/5",
      delay: 3,
    },
    {
      type: "plus",
      size: 50,
      x: "50%",
      y: "30%",
      duration: 15,
      color: "bg-yellow-500/10 dark:bg-yellow-500/5",
      delay: 2.5,
    },
  ]

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.color} backdrop-blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : shape.type === "square" ? "15%" : "0%",
            clipPath:
              shape.type === "triangle"
                ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                : shape.type === "donut"
                  ? "circle(50% at 50% 50%)"
                  : shape.type === "plus"
                    ? "polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%)"
                    : "none",
          }}
          animate={{
            x: [20, -20, 20],
            y: [10, -10, 10],
            rotate: [0, shape.type === "square" ? 45 : 0, 0],
          }}
          transition={{
            duration: shape.duration,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}
