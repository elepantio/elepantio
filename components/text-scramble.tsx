"use client"

import { useState, useEffect, useRef } from "react"

interface TextScrambleProps {
  text: string
  className?: string
}

export default function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [output, setOutput] = useState("")
  const [isScrambling, setIsScrambling] = useState(false)
  const frameRequest = useRef<number | null>(null)
  const frame = useRef(0)
  const chars = "!<>-_\\/[]{}—=+*^?#________"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrambling) {
            setIsScrambling(true)
          }
        })
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById(`scramble-${text.substring(0, 10).replace(/\s+/g, "-")}`)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
      if (frameRequest.current) cancelAnimationFrame(frameRequest.current)
    }
  }, [text, isScrambling])

  useEffect(() => {
    if (!isScrambling) return

    let queue: { from: string; to: string; start: number; end: number; char?: string }[] = []
    let frameCount = 0
    const resolve = () => {
      setIsScrambling(false)
      if (frameRequest.current) cancelAnimationFrame(frameRequest.current)
    }

    const setText = (newText: string) => {
      const oldText = output
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise<void>((resolve) => {
        queue = []
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || ""
          const to = newText[i] || ""
          const start = Math.floor(Math.random() * 40)
          const end = start + Math.floor(Math.random() * 40)
          queue.push({ from, to, start, end })
        }
        frameCount = 0
        frame.current = requestAnimationFrame(update)
      })
      return promise
    }

    const update = () => {
      let complete = 0
      let output = ""
      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i]
        if (frameCount >= end) {
          complete++
          output += to
        } else if (frameCount >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)]
            queue[i].char = char
          }
          output += `<span class="text-purple-500">${char}</span>`
        } else {
          output += from
        }
      }
      setOutput(output)
      if (complete === queue.length) {
        resolve()
      } else {
        frameCount++
        frame.current = requestAnimationFrame(update)
      }
    }

    setText(text)

    return () => {
      if (frameRequest.current) cancelAnimationFrame(frameRequest.current)
    }
  }, [isScrambling, text, output])

  return (
    <span
      id={`scramble-${text.substring(0, 10).replace(/\s+/g, "-")}`}
      className={className}
      dangerouslySetInnerHTML={{ __html: output || text }}
    />
  )
}
