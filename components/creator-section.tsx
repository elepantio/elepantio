"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import creatorImg from "./assets/harun.png";
import Image from "next/image";

export default function CreatorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const achievements = [
    {
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      title: t("creator.achievement1.title"),
      description: t("creator.achievement1.desc"),
    },
    {
      icon: <Award className="h-5 w-5 text-blue-500" />,
      title: t("creator.achievement2.title"),
      description: t("creator.achievement2.desc"),
    },
    {
      icon: <User className="h-5 w-5 text-green-500" />,
      title: t("creator.achievement3.title"),
      description: t("creator.achievement3.desc"),
    },
  ];

  return (
    <section id="creator" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-600 dark:text-purple-300"
          >
            <User className="mr-2 h-4 w-4" />
            {t("creator.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("creator.heading")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent"
                  >
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t("creator.subtitle")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-12 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-cyan-50 p-2 shadow-xl dark:from-purple-900/20 dark:to-cyan-900/20">
              <div className="h-full w-full overflow-hidden rounded-xl">
                <Image
                  height={0}
                  width={0}
                  src={creatorImg}
                  alt="Harun Al Rosyid"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 blur-3xl"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              {t("creator.role")}
            </h3>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("creator.bio1")}
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("creator.bio2")}
            </p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start rounded-lg border border-gray-200 bg-white/50 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
                >
                  <div className="mr-4 rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("creator.connect")}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
