"use client"

import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import BackgroundPattern from '@/components/background-pattern';
import ClientShowcase from '@/components/client-showcase';
import CollaborationSection from '@/components/collaboration-section';
import ContactSection from '@/components/contact-section';
import CreatorSection from '@/components/creator-section';
import EducationSection from '@/components/education-section';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import PortfolioCarousel from '@/components/portfolio-carousel';
import ProcessSection from '@/components/process-section';
import ProjectsSection from '@/components/projects-section';
import ServicesOfferingSection from '@/components/services-offering-section';
import TechStackMarquee from '@/components/tech-stack-marquee';

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
        {/* <PortfolioCarousel /> */}
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
