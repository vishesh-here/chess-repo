
'use client'

import { motion } from 'framer-motion'
import { Crown, BookOpen, Target, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from '@/components/theme-provider'

const stats = [
  { label: 'Chess Openings', value: '8+', icon: BookOpen },
  { label: 'Checkmate Patterns', value: '7+', icon: Target },
  { label: 'Famous Masters', value: '10+', icon: Users },
]

export default function Hero() {
  const { theme } = useTheme()
  
  const getHeroClass = () => {
    if (theme === 'netflix') {
      return 'relative min-h-screen flex items-center justify-center overflow-hidden netflix-hero'
    }
    return 'relative min-h-screen flex items-center justify-center overflow-hidden chess-hero'
  }

  const getTextShadowClass = () => {
    if (theme === 'netflix') {
      return 'netflix-text-shadow'
    }
    return 'text-shadow-warm'
  }

  const getButtonClass = () => {
    if (theme === 'netflix') {
      return 'netflix-button shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3'
    }
    return 'bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3'
  }

  const getGradientTextClass = () => {
    if (theme === 'netflix') {
      return 'block netflix-gradient-text'
    }
    return 'block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800'
  }

  return (
    <div className={getHeroClass()}>
      {/* Floating chess pieces animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="animate-float absolute top-20 left-10 text-6xl">♔</div>
        <div className="animate-float absolute top-40 right-20 text-4xl" style={{ animationDelay: '1s' }}>♛</div>
        <div className="animate-float absolute bottom-40 left-20 text-5xl" style={{ animationDelay: '2s' }}>♜</div>
        <div className="animate-float absolute bottom-20 right-10 text-4xl" style={{ animationDelay: '0.5s' }}>♝</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
            >
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="text-sm font-medium text-foreground">Master the Royal Game</span>
            </motion.div>
            
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold font-crimson ${getTextShadowClass()}`}>
              Learn Chess From
              <span className={getGradientTextClass()}>
                Beginner to Master
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides on chess openings, strategies, checkmate patterns, and legendary players. 
              Perfect for beginners and intermediate players looking to elevate their game.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className={getButtonClass()}>
              <Link href="/openings">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className={theme === 'netflix' ? 'border-2 border-red-500/50 hover:bg-red-500/10 px-8 py-3' : 'border-2 border-amber-600/20 hover:bg-amber-600/10 px-8 py-3'}>
              <Link href="/masters">
                <Crown className="w-5 h-5 mr-2" />
                Meet the Masters
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
          >
            {stats?.map((stat, index) => {
              const Icon = stat?.icon || BookOpen
              const cardClass = theme === 'netflix' ? 'netflix-card p-6 shadow-lg' : 'bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg'
              const iconBgClass = theme === 'netflix' ? 'bg-gradient-to-br from-red-600 to-red-800' : 'bg-gradient-to-br from-amber-600 to-amber-800'
              const textColorClass = theme === 'netflix' ? 'text-red-500' : 'text-amber-600'
              const hoverClass = theme === 'netflix' ? 'netflix-hover-lift' : 'hover-lift'
              
              return (
                <div key={index} className={`text-center group ${hoverClass}`}>
                  <div className={cardClass}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${iconBgClass} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl font-bold font-crimson ${textColorClass} mb-2 animate-count-up`}>
                      {stat?.value || '0'}
                    </div>
                    <div className="text-sm text-foreground/70 font-medium">
                      {stat?.label || 'Feature'}
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
