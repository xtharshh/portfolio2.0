"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Space_Grotesk, Orbitron } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'] })

export default function KrishnaQuote() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 1,
        staggerChildren: 0.3 
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div className="relative min-h-screen w-full py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-[#1a1625] dark:to-[#1a1625] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl mx-auto"
      >
        <motion.div 
          className={`relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-[#2a2438] 
                     hover:shadow-[0_20px_50px_rgba(255,77,141,0.3)] dark:hover:shadow-[0_20px_50px_rgba(255,77,141,0.2)]
                     transition-all duration-500 transform hover:scale-[1.01] backdrop-blur-sm
                     border border-white/10 dark:border-gray-700/30
                     hover:border-white/20 dark:hover:border-gray-700/50
                     ${spaceGrotesk.className}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          {/* Video Background */}
          <div className="relative h-[80vh]">
            <video 
              ref={videoRef} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-[30s]"
            >
              <source src="https://res.cloudinary.com/djcbdfehg/video/upload/v1738443505/varuoj5udt12uewcwkrw.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/95 
                         dark:from-[#1a1625]/95 dark:via-[#1a1625]/80 dark:to-[#1a1625]/95 
                         backdrop-blur-sm" />

            {/* Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative h-full z-10 flex flex-col items-center justify-center text-center px-4 space-y-8 animate-fade-in"
            >
              {/* Sanskrit Text with enhanced typography */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight
                            hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff]
                            transition-all duration-300 ${orbitron.className}`}>
                  <span className="block mb-4 animate-slide-up group">
                    <span className="group-hover:text-[#ff4d8d] transition-colors duration-300
                                 [text-shadow:_0_0_30px_rgba(255,77,141,0.3)]">
                      Karmanye vadhikaraste ma phaleshu kadachana,
                    </span>
                  </span>
                  <span className="block animate-slide-up [animation-delay:200ms] group">
                    <span className="group-hover:text-[#40c9ff] transition-colors duration-300
                                 [text-shadow:_0_0_30px_rgba(64,201,255,0.3)]">
                      Ma karma phala hetur bhur ma te sango&apos;stvakarmani.
                    </span>
                  </span>
                </h1>
              </motion.div>

              {/* English Translation with modern container */}
              <motion.div 
                variants={itemVariants}
                className="relative group max-w-4xl"
              >
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 rounded-xl blur-xl 
                             group-hover:bg-white/10 transition-all duration-500" />
                <p className="relative text-lg sm:text-xl md:text-2xl text-gray-200 mx-auto leading-relaxed 
                          p-8 rounded-xl backdrop-blur-sm
                          border border-transparent hover:border-white/10
                          transition-all duration-300 group
                          bg-gradient-to-r from-black/20 via-black/10 to-black/20
                          hover:from-black/30 hover:via-black/20 hover:to-black/30
                          dark:from-white/5 dark:via-white/10 dark:to-white/5
                          dark:hover:from-white/10 dark:hover:via-white/15 dark:hover:to-white/10">
                  <span className="group-hover:text-white transition-colors duration-300
                               [text-shadow:_0_0_30px_rgba(255,255,255,0.2)]">
                    You have a right to perform your duties, but you are not entitled to the fruits of your actions. Do not let
                    the fruits of action be your motive, nor let your attachment be to inaction
                  </span>
                </p>
              </motion.div>

              {/* Citation with enhanced styling */}
              <motion.div variants={itemVariants} className="space-y-3">
                <p className={`text-xl md:text-2xl font-bold group-hover:text-[#ff4d8d] transition-colors duration-300
                            bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff]
                            ${orbitron.className}`}>
                  - Bhagavad Gita 2.47
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <span className="text-sm text-gray-300 bg-white/5 dark:bg-white/5 
                               px-6 py-2 rounded-full backdrop-blur-sm
                               border border-white/10 dark:border-gray-700/30
                               hover:border-white/20 dark:hover:border-gray-700/50 
                               transition-all duration-500
                               hover:bg-gradient-to-r hover:from-[#ff4d8d]/10 hover:to-[#40c9ff]/10">
                    Bhagavad Gita, Chapter 2, Verse 47
                  </span>
                  <span className="text-sm text-gray-400 hover:text-[#ff4d8d] transition-colors duration-300">
                    Video Art by ANANDKISHOR 74
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent 
                           dark:from-[#1a1625]/50 group-hover:from-black/60 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent 
                           dark:from-[#1a1625]/50 group-hover:from-black/60 transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

