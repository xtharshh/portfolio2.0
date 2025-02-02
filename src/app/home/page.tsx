"use client";

import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import MorphingText from "@/components/ui/morphing-text";

const developerTitles = [
  "FRONTEND DEV",
  "DEVELOPER",
  "UI/UX DESIGNER",
  "REACT DEVELOPER",
  "WEB CREATOR",
  "NEXT.JS DEV",
  "REACT NATIVE DEVELOPER",
];

export default function Hero() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#1a1625] dark:to-[#1a1625] text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Theme Toggle */}
      <div
        className="absolute w-full flex justify-center sm:justify-end sm:w-auto 
                    top-16 sm:top-8 sm:right-8"
      >
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-100 dark:bg-[#2a2438] 
                   hover:bg-gray-200 dark:hover:bg-[#3a3448] 
                   transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Top text */}
      <div className="absolute top-28 sm:top-16 left-1/2 -translate-x-1/2 text-center w-full px-4">
        <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base md:text-lg">
          Jai Shree Krishna, I&apos;m
        </p>
        <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-[160px] font-bold tracking-wider bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text">
          HARSH
          <br className="sm:hidden" />
          KUMAR
        </h1>
      </div>

      {/* Center Image */}
      <div
        className="absolute left-1/2 top-[55%] sm:top-1/2 -translate-x-1/2 -translate-y-1/3 w-full 
                    max-w-[448px] sm:max-w-[530px] md:max-w-[630px] lg:max-w-[730px] xl:max-w-[830px] 
                    h-[748px] sm:h-auto sm:aspect-[4/5]"
      >
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
            className="object-cover object-top px-0 sm:px-0"
            sizes="(max-width: 448px) 448px,
                   (max-width: 768px) 530px, 
                   (max-width: 1024px) 630px, 
                   (max-width: 1280px) 730px, 
                   830px"
            priority
          />
        </div>
      </div>

      {/* Mobile Greeting - Added for mobile layout */}
      <div className="absolute left-4 top-[65%] sm:hidden z-10">
        <h2 className="text-[#ff4d8d] text-4xl font-bold drop-shadow-lg">
          Hey
          <br />
          <span className="bg-gradient-to-r from-[#ff4d8d] to-[#40c9ff] text-transparent bg-clip-text">
            Folks!
          </span>
        </h2>
        <div className="text-xl text-gray-600 dark:text-gray-400 mt-2 drop-shadow-lg">
          <div>
            I&apos;M A
            <br />
            <span className="text-[#ff4d8d]">
              <MorphingText
                words={developerTitles}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] tracking-wider"
                duration={500} // Changes text every 500ms
              />
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Greeting */}
      <div
        className="absolute bottom-32 sm:bottom-40 md:bottom-48 lg:bottom-56 
                    left-4 sm:left-8 md:left-16 lg:left-32
                    hidden sm:block"
      >
        <h2 className="text-[#ff4d8d] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
          Hey Folks!
        </h2>
        <div className="text-xl text-gray-600 dark:text-gray-400 mt-2 drop-shadow-lg">
          <div>
            I&apos;M A
            <br />
            <span className="text-[#ff4d8d]">
              <MorphingText
                words={developerTitles}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] tracking-wider"
                duration={500} // Changes text every 500ms
              />
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div
        className="absolute sm:bottom-32 sm:right-8 md:right-16 lg:right-32
                    w-full sm:w-auto px-8 sm:px-0
                    flex flex-row sm:flex-col gap-4
                    bottom-8 sm:left-auto
                    items-center sm:items-end
                    justify-center sm:justify-end"
      >
        <button
          className="px-6 py-2.5 bg-[#ff4d8d] hover:bg-[#ff3a7d] text-white rounded-full 
                     text-lg font-semibold transition-all duration-300 
                     transform hover:scale-105 hover:shadow-lg
                     flex items-center justify-center gap-2
                     w-auto"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          <span>Resume</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </button>

        <button
          className="px-6 py-2.5 bg-transparent border-2 border-[#ff4d8d] hover:bg-[#ff4d8d]/10 
                     text-[#ff4d8d] rounded-full text-lg font-semibold 
                     transition-all duration-300 transform hover:scale-105 
                     flex items-center justify-center gap-2
                     w-auto"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <span>Contact</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      {/* <div
        className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white/50 dark:bg-[#2a2438]/50 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-4 rounded-full transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      > */}
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
      {/* </div> */}
    </main>
  );
}
