"use client";

import { motion, useInView } from 'framer-motion';
import { Briefcase, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

import ExperienceModal from './experience-modal';

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
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

  const experienceData = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Frontend Developer",
      company: "PT Bank Rakyat Indonesia",
      period: "Jan 2024 - Present",
      description:
        "Working as a Frontend Developer in the DIVISION APP – SENYUM SQUAD, building and improving features for the SENYUM Mobile App and Web App using React Native, React TypeScript, and Next.js.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      responsibilities: [
        "Built and improved features for the SENYUM Mobile App (React Native) and Web App (React TypeScript and Next.js), including UI integration and bug fixes.",
        "Conducted code reviews, managed task distribution, and supported junior developers in daily development.",
        "Ensured team coordination and clear communication to meet project milestones.",
        "Developed features for Transaction History SimpedesUMi.",
        "Integrated location merchant services to display nearby BRILink Agents and BRI ATMs.",
      ],
      achievements: [
        "Enhanced user convenience through self-service access, location merchant BRILink agents, BRI ATMs, and improved support response flow.",
        "Contributed to increased user satisfaction and operational efficiency.",
        "Successfully implemented push notification handling using Firebase Cloud Messaging (FCM).",
        "Developed the customer complaint handling feature, allowing users to submit and track complaint tickets directly via the app.",
      ],
      technologies: [
        "TypeScript",
        "React Native",
        "React.js",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Firebase",
        "SWR",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Frontend Developer",
      company: "PT Paramadaksa Teknologi Nusantara",
      period: "Sep 2021 - Dec 2023",
      description:
        "Worked as a Frontend Developer in the PAAS TEAM, building and improving features for Web Development using React JS Library, including UI integration and bug fixes.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      responsibilities: [
        "Built and improved features for Web Development using React JS Library, including UI integration and bug fixes.",
        "Built and maintained a React JS component UI library.",
        "Developed dashboard features for customer data mapping, role-based access control, and customer whitelist management.",
        "Improved UI consistency using Ant Design and custom layout components.",
        "Collaborated with backend developers to ensure secure data flow and accurate role handling.",
      ],
      achievements: [
        "Enabled administrators to efficiently manage user access and streamline loan processing operations for B2B clients.",
        "Provided a reliable and intuitive cloud storage interface for users to manage digital assets within a secure enterprise environment.",
        "Accelerated frontend development across teams by centralizing reusable UI components, improving consistency and reducing code duplication.",
        "Improved data reliability and accessibility across Nexsoft applications through a structured, centralized data management interface.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Redux Toolkit",
        "Ant Design",
        "Axios",
        "NPM",
        "Bitbucket",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "QA, WordPress Developer and SEO",
      company: "OPUS IT Services Pte Ltd",
      period: "Jul 2019 - Sep 2021",
      description:
        "Worked as QA, WordPress Developer and SEO specialist, conducting system analysis, performing integration and quality assurance testing, and managing SEO strategies.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
      responsibilities: [
        "Conducted comprehensive system testing across HRMS features, including leave requests, payslip generation, admin roles, and reimbursement workflows.",
        "Designed test scenarios based on business requirements and executed manual testing to ensure functionality and usability.",
        "Created reverse-engineered system diagrams, use case documentation, and user guides for internal and end-user references.",
        "Packaged application versions and collaborated with developers for version control and release management.",
        "Executed comprehensive on-page and off-page SEO strategies, including metadata optimization, technical audits, and link building.",
      ],
      achievements: [
        "Enhanced system documentation and usability, ensuring accurate alignment between business requirements and development output.",
        "Enabled seamless synchronization of job listings, improving candidate experience and reducing administrative overhead.",
        "Improved system flexibility and backward compatibility for multiple PHP-based web applications.",
        "Increased organic traffic and improved search engine visibility for client-built websites using the OPUS platform.",
        "Improved domain authority and search ranking in targeted regions, increasing lead generation via organic search.",
      ],
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "JavaScript",
        "CSS",
        "HTML",
        "SEO",
        "Google Analytics",
        "Search Console",
      ],
    },
  ];

  const openExperienceModal = (experience: any) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial dimensions
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isShow = windowDimensions.width > 768;

  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-600 dark:text-blue-300"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            {t("experience.title")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t("experience.heading")
              .split(" ")
              .map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
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
            className="text-lg"
          >
            {t("experience.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6"
          >
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              onClick={() => window.open("cv/Harun Al Rosyid-resume -2025 -July.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> {t("experience.download")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mt-16"
        >
          {/* Process line */}
          {isShow && (
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 opacity-20"></div>
          )}

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {isShow && <div className="flex-1"></div>}
              {/* Process dot */}

              {isShow && (
                <div className="absolute left-1/2 top-0 -mt-2 -translate-x-1/2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${experience.bgColor} ${experience.borderColor} border-2 ring-4 ring-white dark:ring-black`}
                  >
                    <span className={experience.color}>{index + 1}</span>
                  </div>
                </div>
              )}

              <div className="flex-1">
                <div
                  className={`mx-8 cursor-pointer rounded-2xl border ${
                    experience.borderColor
                  } ${
                    experience.bgColor
                  } p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                  onClick={() => openExperienceModal(experience)}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${experience.bgColor} ${experience.color}`}
                  >
                    {experience.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{experience.title}</h3>
                  <p className="mt-1 font-medium text-purple-600 dark:text-purple-400">
                    {experience.company}
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {experience.period}
                  </p>
                  <p className="mt-2 line-clamp-2">{experience.description}</p>
                  <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {t("experience.viewDetails")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        experience={selectedExperience}
      />
    </section>
  );
}
