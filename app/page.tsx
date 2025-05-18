"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CollaborationSection from "@/components/collaboration-section"
import ProjectsSection from "@/components/projects-section"
import PortfolioCarousel from "@/components/portfolio-carousel"
import FeatureSection from "@/components/feature-section"
import ProcessSection from "@/components/process-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import CreatorSection from "@/components/creator-section"
import ServicesOfferingSection from "@/components/services-offering-section"
import ClientShowcase from "@/components/client-showcase"
import Footer from "@/components/footer"
import BackgroundPattern from "@/components/background-pattern"
import TechStackMarquee from "@/components/tech-stack-marquee"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div ref={containerRef} className="relative">
      <BackgroundPattern />
      <Navbar />

      <main className="relative">
        <HeroSection opacity={opacity} scale={scale} />
        {/* <CollaborationSection /> */}
        {/* <ProjectsSection /> */}
        <PortfolioCarousel />
        {/* <TechStackMarquee />
        <ClientShowcase /> */}
        <FeatureSection />
        <ServicesOfferingSection />
        {/* <CreatorSection /> */}
        <ProcessSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
