"use client"

import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { toggleTheme } = useTheme()

  return (
    <button className="change-theme" id="theme-toggle" onClick={toggleTheme}>
      <i className="fa-solid fa-palette"></i>
    </button>
  )
}
