
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeSwitcher from '@/components/theme-switcher'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/openings', label: 'Openings' },
  { href: '/strategies', label: 'Strategies' },
  { href: '/checkmates', label: 'Checkmates' },
  { href: '/playing-styles', label: 'Playing Styles' },
  { href: '/masters', label: 'Chess Masters' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-crimson text-chess-accent">
              ChessMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems?.map((item) => (
              <Link
                key={item?.href}
                href={item?.href || '/'}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item?.href
                    ? 'bg-chess-wood-dark/20 text-chess-accent shadow-sm'
                    : 'text-foreground/80 hover:bg-chess-wood-light/20 hover:text-chess-accent'
                }`}
              >
                {item?.label || 'Menu Item'}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border/50">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {navItems?.map((item) => (
                  <Link
                    key={item?.href}
                    href={item?.href || '/'}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      pathname === item?.href
                        ? 'bg-chess-wood-dark/20 text-chess-accent'
                        : 'text-foreground/80 hover:bg-chess-wood-light/20 hover:text-chess-accent'
                    }`}
                  >
                    {item?.label || 'Menu Item'}
                  </Link>
                ))}
                <div className="px-4 py-2 border-t border-border/50 mt-4 pt-4">
                  <ThemeSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
