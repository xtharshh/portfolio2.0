"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  sampleImages?: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "ADVO-KIDS",
    description:
      "ADVO-KIDS is a gamified platform designed to educate children about legal laws. Through interactive games and engaging content, it empowers kids to learn about their rights and responsibilities in a fun and accessible way.",
    imageUrl: "https://res.cloudinary.com/djcbdfehg/image/upload/v1738519166/advokids.png", // Ensure 'advokids' is properly imported or replace with a string URL
    liveUrl: "https://advo-kids.vercel.app",
    sampleImages: ["/placeholder.svg", "/placeholder.svg"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "KWICK",
    description:
      "KWICK is a React Native platform designed to connect maids and customers seamlessly. It provides an intuitive interface for customers to find and book reliable maid services, and for maids to offer their services, manage schedules, and communicate with clients.",
    imageUrl: "https://res.cloudinary.com/djcbdfehg/image/upload/v1711614254/samples/people/kitchen-bar.jpg",
    liveUrl: "https://xtmaids.vercel.com",
    sampleImages: ["/placeholder.svg", "/placeholder.svg"],
    technologies: ["React Native", "Expo/Cli", "Firebase", "TypeScript"],
  },
  {
    title: "Koolnotes",
    description:
      "Koolnotes is an interactive note-taking website developed using Next.js and MongoDB. It offers a seamless platform for users to create, edit, and organize their notes efficiently. With features like real-time collaboration, rich text formatting, and secure cloud storage, Koolnotes transforms the way you manage information and boosts your productivity.",
    imageUrl: "https://res.cloudinary.com/djcbdfehg/image/upload/v1735581531/koolnotes.png",
    liveUrl: "https://koolnotes.vercel.app/",
    sampleImages: ["/images/koolnotes1.png", "/images/koolnotes2.png"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Secrets Project",
    description:
      "The Secrets Project is a web application built with EJS templates, Google OAuth for authentication, MongoDB for data storage, and JSON Web Tokens (JWT) for secure session handling. It allows users to anonymously share and store their secrets in a safe environment. Users can register or sign in with their Google accounts, ensuring a seamless and secure login experience.",
    imageUrl: "https://res.cloudinary.com/djcbdfehg/image/upload/v1711614282/samples/cup-on-a-table.jpg",
    liveUrl: "https://xtsecrets.vercel.app",
    sampleImages: ["/images/secrets1.png", "/images/secrets2.png"],
    technologies: ["EJS", "JavaScript", "CSS"],
  },
];


export default function Projects() {
  return (
    <div className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
      <span className="block text-2xl text-gray-600 dark:text-gray-400 text-center font-mono font-bold mb-4 animate-fade-in">
          Explore
        </span>
        
        <header className="mb-12">
          <h1 className="title animate-slide-up">My Skills</h1>
        </header>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? 200 : -200, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
      }}
      className="mb-16"
    >
      <div className="relative max-w-5xl mx-auto">
        <motion.div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl">
          <div className="h-96 relative overflow-hidden">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative p-4 text-gray-700 dark:text-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
