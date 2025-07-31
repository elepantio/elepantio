"use client";

import { motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

interface HeroSectionProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export default function HeroSection({ opacity, scale }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scrollToCollaboration = () => {
    const section = document.getElementById("collaboration");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      style={{ opacity, scale }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-white"
    >
      <div className="absolute inset-0 z-0">
        {/* Gradient background with blur effect */}
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]"></div>
      </div>

      {/* <div className="container relative z-10 mx-auto grid gap-12 px-4 md:grid-cols-1"> */}
      <div className="container relative z-10 mx-auto grid gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col w-100"
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-light tracking-widest text-purple-600 dark:text-purple-300">
            Software Developer
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">{t("hero.title")} </span>
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              {t("hero.name")}
            </span>
          </h1>

          <p className="mb-10 max-w-2xl text-xl text-gray-700 dark:text-gray-300">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700"
            >
              <a href="#projects">
                <span className="relative z-10">{t("hero.explore")}</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-purple-600 hover:bg-purple-500/10 dark:text-purple-300"
            >
              <a href="#contact">{t("hero.contact")}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-2 flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-xs font-medium text-gray-500">
                developer.js
              </div>
            </div>
            <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-300">
              <code>
                {`
const developer = {
  name: 'Harun Al Rosyid',
  skills: ['React', 'React Native', 'TypeScript'],
  passion: 'Building beautiful interfaces'
};


function createAmazingProjects() {
  return developer.skills.map(skill => {
    return \`\${skill} + creativity = magic\`;
  });
}`}
              </code>
            </pre>
          </div>

          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-3xl" />
        </motion.div>
      </div>
    </motion.section>
  );
}
