"use client"

import { motion } from "framer-motion"
import {
    SiInfosys,       
    SiAmazon,     
    SiUdemy,        
  } from 'react-icons/si';
  
  
import { Card, CardContent } from "@/components/ui/card"
import { Flame, GraduationCap, School } from "lucide-react";
const certifications = [
    {
      icon: SiInfosys,
      title: "Infosys Certification - C++ Programming",
      date: "June 2024",
      description:
        "Awarded by Infosys for completing the Java Programming Essentials course with distinction.",
      link: "https://example.com/infosys-java-cert",
    },
    {
      icon: SiInfosys,
      title: "Infosys Certification - Software Engineering",
      date: "August 2024",
      description:
        "Recognized by Infosys for excellence in mastering Data Structures and Algorithms.",
      link: "https://example.com/infosys-dsa-cert",
    },
    {
      icon:  GraduationCap, // Use GraduationCap if icon not available
      title: "Physics Wallah - Git & Version Control",
      date: "May 2025",
      description:
        "Completed an intensive bootcamp covering MERN stack development with hands-on projects.",
      link: "https://example.com/pw-fullstack-cert",
    },
    {
      icon: School, // Use School if icon not available
      title: "NPTEL Certification - Database Management Systems",
      date: "December 2024",
      description:
        "Successfully completed the NPTEL course on Database Management Systems with a top score.",
      link: "https://nptel.ac.in/courses/106/105/106105175/",
    },
    {
      icon: SiAmazon,
      title: "AWS Certified Cloud Foundations",
      date: "March 2023",
      description:
        "Achieved AWS Solutions Architect Associate certification, showcasing expertise in AWS cloud services.",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    },
    {
      icon: Flame, // Use Flame icon for Phoenix if no specific icon is available
      title: "Phoenix Club - Technical Head",
      date: "January 2022",
      description:
        "Earned the Phoenix certification after completing Advanced React Development, focusing on hooks and performance optimization.",
      link: "https://example.com/phoenix-react-cert",
    },
    {
      icon: SiUdemy,
      title: "Udemy - The Complete Web Development Bootcamp",
      date: "April 2022",
      description:
        "Completed Udemy's comprehensive web development course covering HTML, CSS, JavaScript, Node.js, React, and more.",
      link: "https://www.udemy.com/certificate/UC-XXXXXXXX/",
    },
  ];
  

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Certifications() {
  return (
    <div className="min-h-screen bg-gradient-to-b to-white from-gray-100 dark:from-[#1A1625] dark:to-[#1A1625]/90 text-black dark:text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <span className="block text-2xl text-gray-600 dark:text-gray-400 text-center font-mono font-bold mb-4 animate-fade-in">
          Explore
        </span>
        
        <header className="mb-12">
          <h1 className="title animate-slide-up">Certificates</h1>
        </header>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/80 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <cert.icon className="w-12 h-12 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

