"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// Chess Theme Context
interface ChessThemeContextType {
  chessTheme: 'original' | 'medieval'
  toggleChessTheme: () => void
}

const ChessThemeContext = React.createContext<ChessThemeContextType | undefined>(undefined)

export function useChessTheme() {
  const context = React.useContext(ChessThemeContext)
  if (context === undefined) {
    throw new Error('useChessTheme must be used within a ChessThemeProvider')
  }
  return context
}

export function ChessThemeProvider({ children }: { children: React.ReactNode }) {
  const [chessTheme, setChessTheme] = React.useState<'original' | 'medieval'>('original')

  React.useEffect(() => {
    const saved = localStorage.getItem('chess-theme')
    if (saved === 'medieval' || saved === 'original') {
      setChessTheme(saved)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('chess-theme', chessTheme)
    document.documentElement.setAttribute('data-chess-theme', chessTheme)
  }, [chessTheme])

  const toggleChessTheme = React.useCallback(() => {
    setChessTheme(prev => prev === 'original' ? 'medieval' : 'original')
  }, [])

  return (
    <ChessThemeContext.Provider value={{ chessTheme, toggleChessTheme }}>
      {children}
    </ChessThemeContext.Provider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ChessThemeProvider>
        {children}
      </ChessThemeProvider>
    </NextThemesProvider>
  )
}
