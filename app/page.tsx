"use client"

import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

import BackgroundPattern from '@/components/background-pattern';
import CollaborationSection from '@/components/collaboration-section';
import ContactSection from '@/components/contact-section';
import EducationSection from '@/components/education-section';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/navbar';
import PortfolioCarousel from '@/components/portfolio-carousel';
import ProcessSection from '@/components/process-section';
import ServicesOfferingSection from '@/components/services-offering-section';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  useEffect(() => {
    if (window.location.hash === '#experience') {
      const el = document.getElementById('experience');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <BackgroundPattern />
      <Navbar />

      <main className="relative">
        <HeroSection opacity={opacity} scale={scale} />
        <CollaborationSection />
        <PortfolioCarousel />
        <FeatureSection />
        <ServicesOfferingSection />
        <ProcessSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
