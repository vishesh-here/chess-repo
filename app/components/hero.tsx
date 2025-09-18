
'use client'

import { motion } from 'framer-motion'
import { Crown, BookOpen, Target, Users, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const stats = [
  { label: 'Chess Openings', value: '8+', icon: BookOpen },
  { label: 'Checkmate Patterns', value: '7+', icon: Target },
  { label: 'Famous Masters', value: '10+', icon: Users },
]

const chessIcons = ['♔', '♕', '♖', '♗', '♘', '♙']

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Chess Background */}
      <div className="absolute inset-0 chess-hero-bg">
        <div className="absolute inset-0 chess-board-pattern-large opacity-10 animate-checkerboard-slide"></div>
      </div>

      {/* Floating chess pieces with enhanced animations */}
      <div className="absolute inset-0 pointer-events-none">
        {chessIcons.map((piece, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl md:text-6xl opacity-10 text-chess-black dark:text-chess-white"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            {piece}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 chess-card rounded-full px-6 py-3 shadow-lg hover-chess-lift"
            >
              <Crown className="w-6 h-6 text-chess-gold animate-pulse-chess" />
              <span className="text-sm font-medium text-foreground">Master the Royal Game</span>
              <Sparkles className="w-4 h-4 text-chess-gold" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-crimson text-shadow-chess"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn Chess From
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-chess-gold to-chess-accent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                Beginner to Master
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover the art of chess through comprehensive guides on openings, strategies, 
              checkmate patterns, and learn from the greatest masters in chess history.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="chess-square-dark text-chess-white hover:chess-square-light hover:text-chess-black transition-all duration-300 hover-chess-lift px-8 py-3 text-lg font-semibold shadow-lg"
            >
              <Link href="/openings">
                Start Learning ♔
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="chess-square-light border-2 border-chess-dark-square hover:chess-square-dark hover:text-chess-white transition-all duration-300 hover-chess-lift px-8 py-3 text-lg font-semibold"
            >
              <Link href="/masters">
                Meet the Masters ♛
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="chess-card p-6 rounded-xl shadow-lg hover-chess-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 chess-square-dark rounded-full">
                    <stat.icon className="w-6 h-6 text-chess-gold" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-chess-gold font-crimson">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative chess pieces at corners */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 text-chess-gold animate-chess-float">♔</div>
      <div className="absolute top-10 right-10 text-6xl opacity-20 text-chess-gold animate-chess-float" style={{ animationDelay: '1s' }}>♛</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-20 text-chess-gold animate-chess-float" style={{ animationDelay: '2s' }}>♜</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 text-chess-gold animate-chess-float" style={{ animationDelay: '0.5s' }}>♝</div>
    </div>
  )
}
