"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "theme1" | "theme2" | "theme3" | "theme4" | "theme5"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("theme1")

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.className = savedTheme
    }
  }, [])

  const toggleTheme = () => {
    const themes: Theme[] = ["theme1", "theme2", "theme3", "theme4", "theme5"]
    const currentIndex = themes.indexOf(theme)
    const nextTheme = themes[(currentIndex + 1) % themes.length]

    setTheme(nextTheme)
    document.body.className = nextTheme
    localStorage.setItem("selectedTheme", nextTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
