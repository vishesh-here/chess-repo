"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Custom hook for theme management
export function useTheme() {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('chess-theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.className = savedTheme
  }, [])

  const toggleTheme = (newTheme: 'light' | 'dark' | 'netflix') => {
    setTheme(newTheme)
    localStorage.setItem('chess-theme', newTheme)
    document.documentElement.className = newTheme
  }

  return {
    theme,
    setTheme: toggleTheme,
    mounted
  }
}
