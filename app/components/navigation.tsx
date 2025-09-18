
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

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
      scrolled 
        ? 'chess-nav shadow-lg border-b-2 border-chess-dark-square/20' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              className="p-2 chess-square-dark rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 hover-chess-lift"
              whileHover={{ rotate: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Crown className="w-6 h-6 text-chess-gold" />
            </motion.div>
            <span className="text-xl font-bold font-crimson text-chess-black dark:text-chess-white">
              ChessMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems?.map((item, index) => (
              <motion.div
                key={item?.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item?.href || '/'}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-chess-lift ${
                    pathname === item?.href
                      ? 'chess-square-dark text-chess-white shadow-md'
                      : 'text-foreground/80 hover:chess-square-light hover:text-chess-black dark:hover:text-chess-white'
                  }`}
                >
                  {item?.label || 'Menu Item'}
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="chess-square-light hover:chess-square-dark hover:text-chess-white transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t border-border/50 chess-nav"
            >
              <div className="py-4 space-y-2 chess-board-pattern-small">
                {navItems?.map((item, index) => (
                  <motion.div
                    key={item?.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item?.href || '/'}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover-chess-lift ${
                        pathname === item?.href
                          ? 'chess-square-dark text-chess-white shadow-md'
                          : 'text-foreground/80 hover:chess-square-light hover:text-chess-black dark:hover:text-chess-white'
                      }`}
                    >
                      {item?.label || 'Menu Item'}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
