'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Crown, Play } from 'lucide-react'

export default function ThemeSwitcher() {
  const [isNetflixTheme, setIsNetflixTheme] = useState(false)

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('chess-theme')
    if (savedTheme === 'netflix') {
      setIsNetflixTheme(true)
      document.documentElement.classList.add('netflix-theme')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isNetflixTheme
    setIsNetflixTheme(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('netflix-theme')
      localStorage.setItem('chess-theme', 'netflix')
    } else {
      document.documentElement.classList.remove('netflix-theme')
      localStorage.setItem('chess-theme', 'original')
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      className={`flex items-center space-x-2 transition-all duration-300 ${
        isNetflixTheme 
          ? 'bg-red-600/20 text-red-400 hover:bg-red-600/30 hover:text-red-300' 
          : 'bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 hover:text-amber-500'
      }`}
      title={`Switch to ${isNetflixTheme ? 'Original' : 'Netflix'} Theme`}
    >
      {isNetflixTheme ? (
        <>
          <Crown className="w-4 h-4" />
          <span className="hidden sm:inline">Original</span>
        </>
      ) : (
        <>
          <Play className="w-4 h-4" />
          <span className="hidden sm:inline">Netflix</span>
        </>
      )}
    </Button>
  )
}
