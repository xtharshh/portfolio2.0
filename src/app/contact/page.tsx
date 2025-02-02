"use client"

import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const socialLinks = [
  {
    id: 1,
    url: "https://www.discord.com/xt.harshh",
    name: "xt.harshh",
    network: "discord",
    color: "#5865F2",
    darkColor: "#7289DA",
    lightColor: "#5865F2",
    size: "12"
  },
  {
    id: 3,
    url: "https://www.instagram.com/xt.harshh",
    name: "xt.harshh",
    network: "instagram",
    color: "#E4405F",
    darkColor: "#FD1D1D",
    lightColor: "#E4405F",
    size: "12"
  },
  {
    id: 4,
    url: "https://www.linkedin.com/in/xtharshh",
    name: "xtharshh",
    network: "linkedin",
    color: "#0A66C2",
    darkColor: "#0077B5",
    lightColor: "#0A66C2",
    size: "12"
  },
  {
    id: 6,
    url: "https://www.github.com/xtharshh",
    name: "xtharshh",
    network: "github",
    color: "#181717",
    darkColor: "#ffffff",
    lightColor: "#181717",
    size: "12"
  },
]

// Update emailLink to match other links' styling
const emailLink = {
  id: 5,
  url: "mailto:xtharshh@gmail.com",
  name: "xtharshh@gmail.com",
  network: "email",
  color: "#EA4335",
  darkColor: "#D93025",
  lightColor: "#EA4335",
  size: "12" // Same size as others
}

export default function Contact() {
  return (
    <div id="contact" className={`relative z-20 min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#1A1625] dark:to-[#1A1625] py-12 sm:py-20 px-3 sm:px-4 ${spaceGrotesk.className}`}>
      <div className="max-w-[98%] sm:max-w-6xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block text-xl sm:text-2xl text-gray-800 dark:text-gray-200 text-center font-mono font-bold mb-6 sm:mb-8
                   [text-shadow:_0_0_30px_rgba(255,77,141,0.3)]"
        >
          Say Hi!
        </motion.span>
        
        <header className="mb-8 sm:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl text-center font-bold bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text
                     hover:from-[#40c9ff] hover:via-[#b666d2] hover:to-[#ff4d8d] transition-all duration-500"
          >
            Contacts
          </motion.h1>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 dark:bg-[#2a2438]/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 
                   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
                   hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                   transition-all duration-500
                   border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {/* Regular social links */}
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-4 sm:gap-6 p-5 sm:p-8 rounded-xl sm:rounded-2xl 
                         bg-white dark:bg-[#1a1625]/50 
                         backdrop-blur-sm
                         transition-all duration-300 ease-out
                         border border-gray-200 dark:border-gray-700
                         hover:border-[#ff4d8d] dark:hover:border-[#ff4d8d]
                         overflow-hidden
                         shadow-md hover:shadow-lg dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]"
              >
                <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 w-full">
                  <div className="relative group-hover:animate-bounce">
                    <SocialIcon
                      url={link.url}
                      network={link.network}
                      className="!h-10 !w-10 sm:!h-12 sm:!w-12 transition-transform duration-300 group-hover:scale-110"
                      bgColor="transparent"
                      fgColor={`var(--social-icon-color, ${link.lightColor})`}
                    />
                  </div>
                  <span className="font-mono text-base sm:text-xl text-gray-800 dark:text-gray-200 
                               group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] 
                               transition-all duration-300">
                    {link.name}
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Email link */}
            <motion.a
              href={emailLink.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative flex items-center justify-center gap-4 sm:gap-6 p-5 sm:p-8 rounded-xl sm:rounded-2xl 
                       bg-white dark:bg-[#1a1625]/50 
                       backdrop-blur-sm
                       transition-all duration-300 ease-out
                       border border-gray-200 dark:border-gray-700
                       hover:border-[#ff4d8d] dark:hover:border-[#ff4d8d]
                       overflow-hidden
                       shadow-md hover:shadow-lg dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                       md:col-span-2"
            >
              <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 w-full">
                <div className="relative group-hover:animate-bounce">
                  <SocialIcon
                    url={emailLink.url}
                    network={emailLink.network}
                    className="!h-12 !w-12 sm:!h-16 sm:!w-16 transition-transform duration-300 group-hover:scale-110"
                    bgColor="transparent"
                    fgColor={`var(--social-icon-color, ${emailLink.lightColor})`}
                  />
                </div>
                <span className="font-mono text-lg sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-200 
                             group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] 
                             transition-all duration-300">
                  {emailLink.name}
                </span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
