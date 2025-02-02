"use client"

import { Sun, Moon } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"


export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#1a1625] dark:to-[#1a1625] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-gray-100 dark:bg-[#2a2438] hover:bg-gray-200 dark:hover:bg-[#3a3448] transition-colors duration-300"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Top text */}
      <div className="absolute top-8 sm:top-16 left-1/2 -translate-x-1/2 text-center w-full px-4">
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base md:text-lg">
          Jai Shree Krishna, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[160px] font-bold tracking-wider bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text">
          HARSH KUMAR
        </h1>
      </div>

      {/* Center Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-full 
                    max-w-[380px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[680px] xl:max-w-[780px] 
                    aspect-[4/5]">
        <div
          className="relative w-full h-full transform hover:scale-105 transition-transform duration-500"
          style={{
            filter: "brightness(0.95) contrast(1.1)",
          }}
        >
          <Image
            src="https://res.cloudinary.com/djcbdfehg/image/upload/v1738419067/harsh_xitv6i.png"
            alt="Profile"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 380px, 
                   (max-width: 768px) 480px, 
                   (max-width: 1024px) 580px, 
                   (max-width: 1280px) 680px, 
                   780px"
            priority
          />
        </div>
      </div>

      {/* Welcome Text */}
      <div className="absolute bottom-32 sm:bottom-40 md:bottom-48 lg:bottom-56 
                    left-4 sm:left-8 md:left-16 lg:left-32">
        <h2 className="text-[#ff4d8d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
          WELCOME
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
          TO MY
          <br />
          <span className="text-[#ff4d8d]">PORTFOLIO</span>
        </p>
      </div>

      {/* Call Me Text */}
      <div className="absolute bottom-32 sm:bottom-40 md:bottom-48 lg:bottom-56 
                    right-4 sm:right-8 md:right-16 lg:right-32 text-right">
        <p className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl md:text-3xl mb-2">
          CALL ME
        </p>
        <h2 className="text-[#ff4d8d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          HARSH <span className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl md:text-3xl">KUMAR</span>
        </h2>
      </div>

      {/* Navigation Menu */}
      <div
        className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white/50 dark:bg-[#2a2438]/50 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-4 rounded-full transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className="flex gap-4 sm:gap-8">
          {[
            { icon: Home, label: "Home", href: "/" },
            { icon: Info, label: "About", href: "/about" },
            { icon: Folder, label: "Work", href: "/work" },
            { icon: Star, label: "Favorites", href: "/favorites" },
            { icon: Mail, label: "Contact", href: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:bg-[#ff4d8d]/20"
            >
              <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400 group-hover:text-[#ff4d8d] transition-colors duration-300" />
              {isHovered && (
                <span className="absolute -top-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </div> */}
      </div>
    </main>
  )
}

