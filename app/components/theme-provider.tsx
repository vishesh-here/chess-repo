"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// Netflix Theme Context
interface NetflixThemeContextType {
  isNetflixTheme: boolean
  toggleNetflixTheme: () => void
}

const NetflixThemeContext = React.createContext<NetflixThemeContextType | undefined>(undefined)

export function useNetflixTheme() {
  const context = React.useContext(NetflixThemeContext)
  if (context === undefined) {
    throw new Error('useNetflixTheme must be used within a NetflixThemeProvider')
  }
  return context
}

interface NetflixThemeProviderProps {
  children: React.ReactNode
}

export function NetflixThemeProvider({ children }: NetflixThemeProviderProps) {
  const [isNetflixTheme, setIsNetflixTheme] = React.useState(false)

  React.useEffect(() => {
    // Load Netflix theme preference from localStorage
    const savedTheme = localStorage.getItem('netflix-theme')
    if (savedTheme === 'true') {
      setIsNetflixTheme(true)
      document.documentElement.classList.add('netflix-theme')
    }
  }, [])

  const toggleNetflixTheme = React.useCallback(() => {
    setIsNetflixTheme(prev => {
      const newValue = !prev
      localStorage.setItem('netflix-theme', newValue.toString())
      
      if (newValue) {
        document.documentElement.classList.add('netflix-theme')
      } else {
        document.documentElement.classList.remove('netflix-theme')
      }
      
      return newValue
    })
  }, [])

  const value = React.useMemo(() => ({
    isNetflixTheme,
    toggleNetflixTheme
  }), [isNetflixTheme, toggleNetflixTheme])

  return (
    <NetflixThemeContext.Provider value={value}>
      {children}
    </NetflixThemeContext.Provider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <NetflixThemeProvider>
        {children}
      </NetflixThemeProvider>
    </NextThemesProvider>
  )
}
