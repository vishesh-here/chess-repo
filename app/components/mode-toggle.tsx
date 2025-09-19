
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useMedievalTheme } from '@/contexts/MedievalThemeContext'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const { isMedievalTheme } = useMedievalTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`
        transition-all duration-300
        ${isMedievalTheme 
          ? 'border-medieval-bronze text-medieval-bronze hover:bg-medieval-bronze/10 hover:text-medieval-gold' 
          : ''
        }
      `}
    >
      <Sun className={`
        h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0
        ${isMedievalTheme ? 'text-medieval-gold' : ''}
      `} />
      <Moon className={`
        absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100
        ${isMedievalTheme ? 'text-medieval-bronze' : ''}
      `} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
