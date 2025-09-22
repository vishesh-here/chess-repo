'use client'

import { useState, useEffect } from 'react'
import { Crown, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [isMedieval, setIsMedieval] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('chess-theme')
    if (savedTheme === 'medieval') {
      setIsMedieval(true)
      document.documentElement.classList.add('theme-medieval')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isMedieval
    setIsMedieval(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('theme-medieval')
      localStorage.setItem('chess-theme', 'medieval')
    } else {
      document.documentElement.classList.remove('theme-medieval')
      localStorage.setItem('chess-theme', 'original')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg p-2"
      >
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="sm"
          className={`relative overflow-hidden transition-all duration-300 ${
            isMedieval 
              ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900' 
              : 'hover:bg-accent'
          }`}
        >
          <AnimatePresence mode="wait">
            {isMedieval ? (
              <motion.div
                key="medieval"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-2"
              >
                <Crown className="w-4 h-4" />
                <span className="text-xs font-medium">Medieval</span>
              </motion.div>
            ) : (
              <motion.div
                key="original"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-2"
              >
                <Palette className="w-4 h-4" />
                <span className="text-xs font-medium">Original</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
        
        <div className="text-xs text-muted-foreground text-center mt-1 px-2">
          Theme
        </div>
      </motion.div>
    </div>
  )
}
