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
    <div className={`relative z-30 min-h-screen bg-white dark:bg-[#1A1625] py-20 px-4 ${spaceGrotesk.className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="block text-2xl text-gray-800 dark:text-gray-200 text-center font-mono font-bold mb-8
                   [text-shadow:_0_0_30px_rgba(255,77,141,0.3)]"
        >
          Say Hi!
        </motion.span>
        
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl sm:text-7xl text-center font-bold bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text
                     hover:from-[#40c9ff] hover:via-[#b666d2] hover:to-[#ff4d8d] transition-all duration-500"
          >
            Contacts
          </motion.h1>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/80 dark:bg-[#2a2438]/80 backdrop-blur-md rounded-3xl p-10 
                   shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
                   hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                   transition-all duration-500
                   border border-gray-200/50 dark:border-gray-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  scale: 1.05, 
                  y: -5,
                  boxShadow: `0 10px 30px ${link.color}33`
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-6 p-8 rounded-2xl 
                         bg-white dark:bg-[#1a1625]/50 
                         backdrop-blur-sm
                         transition-all duration-300 ease-out
                         border border-gray-200 dark:border-gray-700
                         hover:border-[#ff4d8d] dark:hover:border-[#ff4d8d]
                         overflow-hidden
                         shadow-lg hover:shadow-2xl dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                             bg-gradient-to-r from-white/5 via-white/10 to-white/5 
                             dark:from-white/0 dark:via-white/5 dark:to-white/0
                             transition-opacity duration-300" />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                             bg-[#ff4d8d] blur-3xl -z-10 
                             transition-opacity duration-300" 
                     style={{ opacity: 0.05 }} />

                <div className="relative z-10 flex items-center justify-center gap-6 w-full">
                  <div className={`relative group-hover:animate-bounce ${link.network === 'email' ? 'scale-150' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <SocialIcon
                      url={link.url}
                      network={link.network}
                      className={`!h-${link.size} !w-${link.size} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                             relative z-10`}
                      bgColor="transparent"
                      fgColor={`var(--social-icon-color, ${link.lightColor})`}
                      style={{
                        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                      }}
                    />
                  </div>
                  <span className="font-mono text-xl text-gray-800 dark:text-gray-200 
                               group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] 
                               transition-all duration-300 font-medium
                               group-hover:translate-x-2
                               text-center
                               [text-shadow:_0_0_30px_rgba(255,77,141,0.3)]">
                    {link.name}
                  </span>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                             bg-gradient-to-r from-transparent via-white to-transparent 
                             -skew-x-45 -translate-x-full group-hover:translate-x-full 
                             transition-all duration-1000" 
                     style={{ mixBlendMode: 'overlay' }} />
              </motion.a>
            ))}

            {/* Email button with same styling as others but spans 2 columns */}
            <motion.a
              key={emailLink.id}
              href={emailLink.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: `0 10px 30px ${emailLink.color}33`
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center gap-6 p-8 rounded-2xl 
                       bg-white dark:bg-[#1a1625]/50 
                       backdrop-blur-sm
                       transition-all duration-300 ease-out
                       border border-gray-200 dark:border-gray-700
                       hover:border-[#ff4d8d] dark:hover:border-[#ff4d8d]
                       overflow-hidden
                       shadow-lg hover:shadow-2xl dark:shadow-none dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                       md:col-span-2" // Only change is this line to make it span 2 columns
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                           bg-gradient-to-r from-white/5 via-white/10 to-white/5 
                           dark:from-white/0 dark:via-white/5 dark:to-white/0
                           transition-opacity duration-300" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                           bg-[#ff4d8d] blur-3xl -z-10 
                           transition-opacity duration-300" 
                   style={{ opacity: 0.05 }} />

              <div className="relative z-10 flex items-center justify-center gap-6 w-full">
                <div className="relative group-hover:animate-bounce">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <SocialIcon
                    url={emailLink.url}
                    network={emailLink.network}
                    className="!h-16 !w-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                           relative z-10"
                    bgColor="transparent"
                    fgColor={`var(--social-icon-color, ${emailLink.lightColor})`}
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))',
                    }}
                  />
                </div>
                <span className="font-mono text-2xl md:text-3xl text-gray-800 dark:text-gray-200 
                             group-hover:text-[#ff4d8d] dark:group-hover:text-[#ff4d8d] 
                             transition-all duration-300 font-medium
                             group-hover:translate-x-2
                             text-center
                             [text-shadow:_0_0_30px_rgba(255,77,141,0.3)]">
                  {emailLink.name}
                </span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                           bg-gradient-to-r from-transparent via-white to-transparent 
                           -skew-x-45 -translate-x-full group-hover:translate-x-full 
                           transition-all duration-1000" 
                   style={{ mixBlendMode: 'overlay' }} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
