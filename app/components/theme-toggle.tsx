"use client"

import { useChessTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import { Crown, Castle, Sword, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { chessTheme, toggleChessTheme } = useChessTheme()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleChessTheme}
      className="relative overflow-hidden group"
      aria-label={`Switch to ${chessTheme === 'original' ? 'medieval' : 'original'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotateY: chessTheme === 'medieval' ? 180 : 0,
          scale: chessTheme === 'medieval' ? 1.1 : 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center space-x-2"
      >
        {chessTheme === 'original' ? (
          <>
            <Castle className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Medieval</span>
          </>
        ) : (
          <>
            <Crown className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline text-sm font-medium">Original</span>
          </>
        )}
      </motion.div>
      
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: chessTheme === 'medieval' ? 1 : 0,
          scale: chessTheme === 'medieval' ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
      />
    </Button>
  )
}
