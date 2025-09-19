
'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Crown, BookOpen, Target, Users, Zap, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { MedievalThemeToggle } from '@/components/MedievalThemeToggle'
import { useMedievalTheme } from '@/contexts/MedievalThemeContext'

const navigationItems = [
  { name: 'Home', href: '/', icon: Crown },
  { name: 'Openings', href: '/openings', icon: BookOpen },
  { name: 'Strategies', href: '/strategies', icon: Target },
  { name: 'Checkmates', href: '/checkmates', icon: Zap },
  { name: 'Playing Styles', href: '/playing-styles', icon: Users },
  { name: 'Masters', href: '/masters', icon: Trophy },
]

export default function Navigation() {
  const pathname = usePathname()
  const { isMedievalTheme } = useMedievalTheme()

  return (
    <nav className={`
      sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300
      ${isMedievalTheme ? 'medieval-nav' : 'bg-background/95'}
    `}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Crown className={`h-6 w-6 ${isMedievalTheme ? 'text-medieval-gold' : 'text-primary'}`} />
            <span className={`
              hidden font-bold sm:inline-block transition-all duration-300
              ${isMedievalTheme ? 'medieval-heading text-lg' : 'text-lg'}
            `}>
              ChessMaster Academy
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigationItems.slice(1).map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    transition-colors hover:text-foreground/80 flex items-center space-x-1 group
                    ${isActive 
                      ? (isMedievalTheme ? 'text-medieval-gold font-semibold' : 'text-foreground') 
                      : (isMedievalTheme ? 'text-medieval-stone hover:text-medieval-gold' : 'text-foreground/60')
                    }
                    ${isMedievalTheme ? 'medieval-text' : ''}
                  `}
                >
                  <Icon className={`
                    h-4 w-4 transition-all duration-300
                    ${isActive && isMedievalTheme ? 'animate-medieval-glow' : ''}
                    ${isMedievalTheme ? 'group-hover:scale-110' : ''}
                  `} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className={`
            mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden
            ${isMedievalTheme ? 'text-medieval-gold hover:text-medieval-gold-light' : ''}
          `}
        >
          <Crown className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search could go here */}
          </div>
          <nav className="flex items-center space-x-2">
            <MedievalThemeToggle />
            <ModeToggle />
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="border-t md:hidden">
        <nav className={`
          flex items-center justify-around py-2 text-sm
          ${isMedievalTheme ? 'bg-medieval-stone/10' : ''}
        `}>
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center space-y-1 px-2 py-1 transition-colors
                  ${isActive 
                    ? (isMedievalTheme ? 'text-medieval-gold' : 'text-foreground') 
                    : (isMedievalTheme ? 'text-medieval-stone hover:text-medieval-gold' : 'text-foreground/60 hover:text-foreground')
                  }
                `}
              >
                <Icon className={`
                  h-4 w-4 transition-all duration-300
                  ${isActive && isMedievalTheme ? 'animate-medieval-glow' : ''}
                `} />
                <span className={`text-xs ${isMedievalTheme ? 'medieval-text' : ''}`}>
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
    </nav>
  )
}
