"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  )
}

