"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  impact?: string;
  company?: string;
  duration?: string;
  description: string;
  image?: string;
  tech: string;
  link?: string;
  path?: string;
  github?: string;
  gradient: string;
  key: Array<string>;
}

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: "senyum-mobile",
      title: "Senyum Mobile",
      subtitle: "Self Service - Mobile Application",
      company: "PT Bank Rakyat Indonesia (BRI)",
      duration: "Jan 2024 - Present",
      link: "https://play.google.com/store/apps/details?id=com.senyum&hl=id",
      description:
        "A mobile application designed for ultra-micro customers (UMi) to independently access digital financial services including account information, location merchant services, and customer support.",
      tech: "TypeScript, React Native, Redux, Firebase, Kotlin (Native Module), Notifee, SWR, React UseForm, Custom Hooks.",
      key: [
        "Developed features for Transaction History SimpedesUMi.",
        "Integrated location merchant services (BRILink Agents and BRI ATMs).",
        "Implemented LinkUMKM integration for SME content.",
        "Built push notification handling with FCM.",
        "Developed customer complaint handling and ticket tracking features.",
      ],
      impact:
        "Enhanced user convenience through self-service access, location merchant BRILink agents, BRI ATMs, and improved support response flow—contributing to increased user satisfaction and operational efficiency",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: "senyum-mobile-tenaga-pemasar",
      title: "Senyum Mobile",
      subtitle: "Tenaga Pemasar - Web Application",
      company: "PT Bank Rakyat Indonesia (BRI)",
      duration: "Jan 2024 - Present",
      description:
        "A web-based cross-selling service for PNM, Pengadaian and BRI products used by BRILink marketing agents to help promote and manage financial products and services offered through the Senyum platform.",
      tech: "TypeScript, React.js, Redux Toolkit, Tailwind, SWR, React UseForm, Custom Hooks.",
      key: [
        "Refactored legacy code using feature-based architecture.",
        "Developed key features including : ",
        "Gold instalment transactions, integrated with Pegadaian services.",
        "QRIS merchant registration, integrated with BRI’s merchant onboarding service.",
        "Product Summary (RIPLAY), a feature that helps agents clearly present and explain available financial products to potential customers.",
      ],
      impact:
        "Empowered BRILink agents to effectively offer new services from Pegadaian and BRI, while improving overall product understanding and sales conversion through structured product summaries.",
      gradient: "from-red-600 to-orange-600",
    },
    {
      id: "senyum-dashboard",
      title: "Senyum Dashboard",
      subtitle: "Web Admin Panel",
      company: "PT Bank Rakyat Indonesia (BRI)",
      duration: "Jan 2024 - Present",
      description:
        "A web-based admin panel designed to manage operational workflows for the Senyum platform, enabling backend processes such as unit pairing, identity validation, and customer data management across BRI, PNM, and Pegadaian.",
      tech: "TypeScript, React.js, Next.js, Redux Toolkit, Tailwind, SWR, React UseForm, Custom Hooks.",
      key: [
        "Developed unit pairing functionality between BRI branches and PNM/Pegadaian merchant units to support accurate data mapping.",
        "Built a manual identity verification system for handling KTP and selfie validation when automatic KYC fails.",
        "Implemented admin tools for updating customer data in response to complaints or change requests.",
      ],
      impact:
        "Empowered BRILink agents to effectively offer new services from Pegadaian and BRI, while improving overall product understanding and sales conversion through structured product summaries.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: "grorex-dashboard-admin",
      title: "Grorex",
      subtitle: "Dashboard Admin",
      company: "PT Paramadaksa Teknologi Nusantara (Nexsoft)",
      duration: "Mar 2023 - Des 2023",
      description:
        "An internal web application for managing a B2B lending service, providing tools for customer data administration, user access control, and loan processing workflows",
      tech: "React.js, JavaScript, Redux Toolkit, Ant Design, Axios.",
      key: [
        "•	Developed dashboard features for customer data mapping, role-based access control, and customer whitelist management.",
        "•	Improved UI consistency using Ant Design and custom layout components.",
        "•	Collaborated with backend developers to ensure secure data flow and accurate role handling.",
      ],
      impact:
        "Enabled administrators to efficiently manage user access and streamline loan processing operations for B2B clients.",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: "nex-drive-online-storage-service",
      title: "Nex Drive",
      subtitle: "Online Storage Service",
      company: "PT Paramadaksa Teknologi Nusantara (Nexsoft)",
      duration: "Aug 2022 - Mar 2023",
      description:
        "A web-based online storage platform similar to Google Drive or OneDrive, tailored for enterprise service from Nexsoft.",
      tech: "React.js, JavaScript, Redux Toolkit, Axios, NexComponent UI.",
      key: [
        "•	Build core file operations including file upload/download, folder creation, and file/folder sharing. ",
        "•	Ensure a smooth user experience with efficient state management and responsive design. ",
        "•	Integrated UI with backend APIs for secure and high-performance storage operations",
      ],
      gradient: "from-purple-600 to-blue-600",
      impact:
        "Provides a reliable and intuitive cloud storage interface for users to manage digital assets within a secure enterprise environment.",
    },
    {
      id: "nex-component-ui",
      title: "Nex Component UI",
      subtitle: "Reusable UI Library",
      company: "PT Paramadaksa Teknologi Nusantara (Nexsoft)",
      duration: "Jan 2022 - Aug 2022",
      description:
        "An internal React UI component library developed for use across multiple Nexsoft products to ensure design consistency and reusability.",
      tech: "React.js, JavaScript, Bitbucket, NPM.",
      key: [
        "Initiated the project architecture from scratch, applying scalable design principles.",
        "•	Designed and developed reusable UI components including forms, modals, tables, and inputs.",
        "•	Published the package to a private Bitbucket-linked NPM registry for internal developer use.",
      ],
      gradient: "from-pink-600 to-red-600",
    },
    {
      id: "nex-hub-mapping-data-resource",
      title: "Nex Hub",
      subtitle: "Mapping Data Resource",
      company: "PT Paramadaksa Teknologi Nusantara (Nexsoft)",
      duration: "Jan 2022 - Aug 2022",
      description:
        "A data mapping platform that centralizes customer, principal, and resource data for use across Nexsoft’s suite of applications.",
      tech: "React.js, JavaScript, Redux Toolkit, Axios, NexComponent UI.",
      key: [
        "•	Built UI interfaces for data source mapping, allowing flexible data relationships and resource tracking.",
        "•	Integrated dynamic table views and data filters for large datasets.",
        "•	Ensured maintainability by adhering to component-based architecture and UI consistency using NexComponent UI.",
      ],
      gradient: "from-blue-600 to-cyan-600",
      impact:
        "Improved data reliability and accessibility across Nexsoft applications through a structured, centralized data management interface.",
    },

    {
      id: "recruitment-hub-asia",
      title: "Recruitment Hub Asia",
      subtitle: "Job Portal",
      company: "OPUS IT Services Pte Ltd",
      duration: "Jan 2021 - Mar 2021",
      link: "https://www.recruitmenthubasia.com",
      description:
        "A company profile and job portal site built on WordPress with custom database triggers for job listing integration.",
      tech: "WordPress, PHP, MySQL, HTML, CSS, JavaScript.",
      key: [
        "•	Developed and deployed the website using WordPress and custom plugins.",
        "•	Integrated external job listings from OPUS HRMS via stored procedures and database triggers.",
        "•	Customized frontend components to display dynamic job listings from multiple sources.",
      ],
      gradient: "from-red-600 to-orange-600",
      impact:
        "Enabled seamless synchronization of job listings, improving candidate experience and reducing administrative overhead.",
    },
    {
      id: "customization-engine-server",
      title: "Customization Engine",
      subtitle: "Multi-PHP Apache Server",
      company: "OPUS IT Services Pte Ltd",
      duration: "Feb 2021 - Mar 2021",
      link: "https://github.com/jeevva/httpd-customize-multi-php",
      description:
        "A customized Apache server setup capable of running multiple PHP versions concurrently to support legacy and modern systems.",
      tech: "",
      key: [
        "•	Researched and implemented a multi-PHP Apache environment suitable for varied web application requirements.",
        "•	Deployed and configured the solution on OPUS servers for internal project use.",
        "•	Documented the configuration process for future scalability. ",
      ],
      gradient: "from-pink-600 to-red-600",
      impact:
        "Improved system flexibility and backward compatibility for multiple PHP-based web applications.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate visible projects (current, previous, next)
  const visibleProjects = () => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [prev, currentIndex, next];
  };

  const [prevIndex, currIndex, nextIndex] = visibleProjects();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-32"
    >
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-600 dark:text-purple-300"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {t("portfolio.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            {t("portfolio.heading")
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
            {t("portfolio.subtitle")}
          </motion.p>
        </div>

        <div className="relative mt-16">
          {/* Carousel navigation */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border-purple-500/20 bg-white/80 text-gray-900 backdrop-blur-sm hover:bg-white/90 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border-purple-500/20 bg-white/80 text-gray-900 backdrop-blur-sm hover:bg-white/90 dark:bg-black/50 dark:text-white dark:hover:bg-black/70"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="relative mx-auto h-[500px] max-w-5xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: visibleProjects().includes(index) ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                    x:
                      index === prevIndex
                        ? "-60%"
                        : index === nextIndex
                        ? "60%"
                        : index === currentIndex
                        ? "0%"
                        : "100%",
                    zIndex: index === currentIndex ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "absolute h-full w-3/4 cursor-pointer rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900/80",
                    index === currentIndex ? "opacity-100" : "opacity-50"
                  )}
                >
                  <div
                    onClick={() => openProjectDetails(project)}
                    className="flex h-full flex-col"
                  >
                    <div className="relative mb-4 h-[250px] overflow-hidden rounded-xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-sm transition-all duration-500`}
                      ></div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                      {project.subtitle}
                    </p>
                    <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <div className="rounded-lg bg-gray-100 p-2 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        Tech: {project.tech}
                      </div>
                      {index === currentIndex && (
                        // <Link href={project.path ?? ""}>
                        <div className="mt-4 text-center">
                          <span className="text-sm text-purple-600 dark:text-purple-400">
                            Click to view details
                          </span>
                        </div>
                        // </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex
                    ? "bg-purple-600"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto bg-white p-0 dark:bg-gray-900">
          {selectedProject && (
            <div>
              <div
                className={`relative h-[200px] w-full overflow-hidden bg-gradient-to-r ${selectedProject.gradient}`}
              >
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-purple-600 dark:text-purple-400">
                    {selectedProject.subtitle}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Project Overview
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Technology Stack
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProject.tech.split(", ").map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Features
                    </h3>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                      <li>Responsive design for all device sizes</li>
                      <li>Intuitive user interface with modern aesthetics</li>
                      <li>Optimized performance and loading times</li>
                      <li>Secure authenbatication and data handling</li>
                      <li>Comprehensive error handling and user feedback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Impact
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {selectedProject.link && (
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button
                        variant="outline"
                        className="border-purple-500/50"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
