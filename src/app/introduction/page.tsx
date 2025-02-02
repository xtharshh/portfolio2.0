"use client"

import "../../styles/intro.css"
import { Button } from "@mui/material"
import { BrainCircuit, Rocket, Code2, Database, Terminal } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

function Introduction() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const contentClass = `${isLoaded ? 'text-visible' : ''} content-wrapper`

  const gradientText = "bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] text-transparent bg-clip-text"
  const cardStyle = `
    rounded-2xl 
    bg-white dark:bg-[#2a2438]/80 
    backdrop-blur-md
    border border-gray-100 dark:border-gray-700/50 
    shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
    hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
    transition-all duration-300
  `

  return (
    <div className="intro min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-[#1A1625] dark:to-[#1A1625]/90 py-10 px-4">
      <div className={contentClass}>
        {/* Main Card Container */}
        <div className="relative max-w-8xl mx-auto rounded-[2rem] overflow-hidden
                     bg-white/80 dark:bg-[#2a2438]/80 backdrop-blur-lg
                     border border-gray-100 dark:border-gray-700/50 
                     shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(255,77,141,0.12)]
                     hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                     transition-all duration-500">
          
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d8d]/20 via-[#b666d2]/20 to-[#40c9ff]/20 opacity-50" />

          {/* Content Container */}
          <div className="relative z-10 bg-white/50 dark:bg-[#1A1625]/50 p-8 md:p-12">
            <header className="header-intro text-center mb-16 space-y-6">
              <h1 className={`text-6xl sm:text-7xl font-bold ${gradientText} animate-slide-up drop-shadow-lg`}>
                Fullstack
              </h1>
              <p className="text-2xl text-gray-600 dark:text-[#b666d2] max-w-2xl mx-auto animate-fade-in font-medium">
                Developer
              </p>
            </header>

            {/* Main Grid Content */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Photo Section */}
              <section className={`col-span-1 p-8 ${cardStyle} flex flex-col items-center justify-center`}>
                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
                  <Image
                    src="/harsh.png"
                    alt="Harsh Kumar"
                    fill
                    className="object-cover rounded-full border-4 border-[#ff4d8d] dark:border-[#ff4d8d]/50
                             shadow-[0_8px_30px_rgba(255,77,141,0.2)]
                             hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="text-center space-y-2">
                  <h2 className={`text-2xl font-bold ${gradientText}`}>Harsh Kumar</h2>
                  <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                </div>
              </section>

              {/* About Section */}
              <section className={`zoom box p-8 ${cardStyle}`}>
                <div className="flex items-center mb-6">
                  <BrainCircuit className="w-8 h-8 text-[#ff4d8d] mr-3 drop-shadow-glow" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff4d8d] to-[#b666d2] text-transparent bg-clip-text">
                    About Me
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-200">
                  <p className="leading-relaxed">
                    Hi, I&apos;m a passionate Full Stack Developer and 3rd Year student at{" "}
                    <span className="font-semibold text-[#ff4d8d]">
                      Chandigarh Engineering College, Mohali
                    </span>.
                  </p>
                  <blockquote className="border-l-4 border-[#ff4d8d] pl-4 italic my-6 bg-gray-50 dark:bg-[#2a2438]/50 py-4 rounded-r-lg">
                    &quot;Building seamless digital experiences through innovative code solutions.&quot;
                  </blockquote>
                  <p className="leading-relaxed">
                    With a strong foundation in{" "}
                    <span className="font-semibold text-[#b666d2]">
                      Computer Science And Engineering (2k22-2k26)
                    </span>, 
                    I bridge the gap between innovative design and robust functionality.
                  </p>
                </div>
              </section>

              {/* Code Block Section */}
              <section className={`col-span-1 md:col-span-2 p-8 ${cardStyle} bg-[#1A1625] dark:bg-[#1A1625] text-white font-mono`}>
                {/* Code Editor Header */}
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2">code.tsx</span>
                </div>

                <div className="space-y-6">
                  {/* Skills Code Block */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 mr-2">1</span>
                      <Terminal className="w-4 h-4 text-[#ff4d8d]" />
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">skills</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-yellow-400">[</span>
                    </div>
                    <div className="flex items-center gap-2 ml-8">
                      <span className="text-green-400">&apos;Next.js&apos;</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">&apos;React&apos;</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">&apos;TypeScript&apos;</span>
                    </div>
                    <div className="flex items-center gap-2 ml-8">
                      <span className="text-green-400">&apos;Node.js&apos;</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">&apos;Express&apos;</span>
                      <span className="text-gray-400">,</span>
                      <span className="text-green-400">&apos;MongoDB&apos;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 mr-2">2</span>
                      <Code2 className="w-4 h-4 text-[#b666d2]" />
                      <span className="text-yellow-400">]</span>
                    </div>
                  </div>

                  {/* Quotes Array */}
                  <div className="space-y-4 border-t border-gray-800 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 mr-2">3</span>
                      <Database className="w-4 h-4 text-[#40c9ff]" />
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">codeQuotes</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-yellow-400">[</span>
                    </div>
                    <div className="flex items-center gap-2 ml-8">
                      <span className="text-green-400">&apos;Code is poetry in motion&apos;</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="flex items-center gap-2 ml-8">
                      <span className="text-green-400">&apos;Every bug is a feature waiting to be born&apos;</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="flex items-center gap-2 ml-8">
                      <span className="text-green-400">&apos;Clean code always looks like it was written by someone who cares&apos;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 mr-2">4</span>
                      <Code2 className="w-4 h-4 text-[#b666d2]" />
                      <span className="text-yellow-400">]</span>
                    </div>
                  </div>

                  {/* Passion Statement */}
                  <div className="space-y-4 border-t border-gray-800 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 mr-2">5</span>
                      <Database className="w-4 h-4 text-[#40c9ff]" />
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">mantra</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-green-400">&apos;First solve the problem, then write the code&apos;</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 mr-2">6</span>
                      <Terminal className="w-4 h-4 text-[#ff4d8d]" />
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">passion</span>
                      <span className="text-purple-400">=</span>
                      <span className="text-green-400">&apos;Building amazing web apps&apos;</span>
                    </div>
                  </div>
                </div>

                {/* Inspirational Comment */}
                <div className="mt-6 text-gray-500 border-t border-gray-800 pt-4">
                  <span className="text-gray-500"> Remember: The only way to write good code is to write lots of bad code first</span>
                </div>
              </section>
            </main>

            {/* Projects Button Section */}
            <section className="col-span-1 md:col-span-2 flex justify-center items-center p-6 mt-8">
              <Button
                href="https://www.github.com/xtharshh"
                variant="contained"
                size="large"
                className="bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] hover:opacity-90 hover:scale-105
                         relative group overflow-hidden"
                style={{
                  fontFamily: "monospace",
                  padding: "15px 30px",
                  borderRadius: "12px",
                  fontSize: "1.1rem",
                  textTransform: "none",
                  boxShadow: "0 4px 20px rgba(255, 77, 141, 0.3)",
                  transition: "all 0.3s ease",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d8d] via-[#b666d2] to-[#40c9ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center">
                  <Rocket className="w-5 h-5 mr-2" /> Explore My Projects
                </div>
              </Button>
            </section>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-40 
                         bg-gradient-to-b from-white/10 to-transparent 
                         dark:from-[#1a1625]/10" />
            <div className="absolute bottom-0 left-0 w-full h-40 
                         bg-gradient-to-t from-white/10 to-transparent 
                         dark:from-[#1a1625]/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction

