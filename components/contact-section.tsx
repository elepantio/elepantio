"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the mailto URL with form data
    const subject = encodeURIComponent(formState.subject);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    // Open the default email client with pre-filled information
    window.location.href = `mailto:harun24896@gmail.com?subject=${subject}&body=${body}`;

    // Reset the form after opening email client
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "harun24896@gmail.com",
      link: "mailto:harun24896@gmail.com",
      color:
        "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "WhatsApp",
      value: "085774133886",
      link: "https://wa.me/6285774133886", // Added country code 62 for Indonesia
      color:
        "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20", // Changed to WhatsApp green
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-600 dark:text-purple-300"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            {t("contact.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("contact.heading")
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
            {t("contact.subtitle")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
          >
            {t("contact.form.description")}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-12 lg:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center rounded-xl border ${
                    info.color.split(" ")[2]
                  } ${
                    info.color.split(" ")[0]
                  } p-6 text-center backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-md`}
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${info.color}`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{info.title}</h3>
                  <p className={info.color.split(" ")[1]}>{info.value}</p>
                </a>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-bold">
                {t("contact.collaborate")}
              </h3>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {t("contact.collaborate.desc")}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/elepantio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-700 dark:text-white hover:bg-purple-500/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/jeevva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-700 dark:text-white hover:bg-purple-500/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>  
                <a
                  href="https://www.linkedin.com/in/harun-al-rosyid-bb5ba2161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-700 dark:text-white hover:bg-blue-500/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80"
            >
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t("contact.placeholder.name")}
                    required
                    className="border-gray-300 bg-white/50 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800/50 dark:placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t("contact.placeholder.email")}
                    required
                    className="border-gray-300 bg-white/50 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800/50 dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  {t("contact.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder={t("contact.placeholder.subject")}
                  required
                  className="border-gray-300 bg-white/50 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800/50 dark:placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("contact.placeholder.message")}
                  rows={6}
                  required
                  className="border-gray-300 bg-white/50 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800/50 dark:placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90"
              >
                <Send className="mr-2 h-4 w-4" /> {t("contact.send")}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
