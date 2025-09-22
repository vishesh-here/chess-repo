
'use client'

import { motion } from 'framer-motion'
import { Crown, BookOpen, Target, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useChessTheme } from '@/components/theme-provider'
import { 
  MedievalCrown, 
  MedievalScroll, 
  MedievalSword, 
  MedievalShield,
  MedievalKing,
  MedievalQueen,
  MedievalRook,
  MedievalBishop
} from '@/components/medieval-icons'
import Link from 'next/link'

const stats = [
  { 
    label: 'Chess Openings', 
    value: '8+', 
    icon: BookOpen,
    medievalIcon: MedievalScroll
  },
  { 
    label: 'Checkmate Patterns', 
    value: '7+', 
    icon: Target,
    medievalIcon: MedievalSword
  },
  { 
    label: 'Famous Masters', 
    value: '10+', 
    icon: Users,
    medievalIcon: MedievalShield
  },
]

export default function Hero() {
  const { chessTheme } = useChessTheme()
  const isMedieval = chessTheme === 'medieval'

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden chess-hero">
      {/* Floating chess pieces animation */}
      <div className="absolute inset-0 opacity-5">
        {isMedieval ? (
          <>
            <motion.div 
              className="animate-float absolute top-20 left-10"
              style={{ animationDelay: '0s' }}
            >
              <MedievalKing className="w-16 h-16 text-medieval-gold" />
            </motion.div>
            <motion.div 
              className="animate-float absolute top-40 right-20"
              style={{ animationDelay: '1s' }}
            >
              <MedievalQueen className="w-12 h-12 text-medieval-bronze" />
            </motion.div>
            <motion.div 
              className="animate-float absolute bottom-40 left-20"
              style={{ animationDelay: '2s' }}
            >
              <MedievalRook className="w-14 h-14 text-medieval-gold" />
            </motion.div>
            <motion.div 
              className="animate-float absolute bottom-20 right-10"
              style={{ animationDelay: '0.5s' }}
            >
              <MedievalBishop className="w-12 h-12 text-medieval-bronze" />
            </motion.div>
          </>
        ) : (
          <>
            <div className="animate-float absolute top-20 left-10 text-6xl">♔</div>
            <div className="animate-float absolute top-40 right-20 text-4xl" style={{ animationDelay: '1s' }}>♛</div>
            <div className="animate-float absolute bottom-40 left-20 text-5xl" style={{ animationDelay: '2s' }}>♜</div>
            <div className="animate-float absolute bottom-20 right-10 text-4xl" style={{ animationDelay: '0.5s' }}>♝</div>
          </>
        )}
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
              className={`inline-flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 border ${
                isMedieval 
                  ? 'bg-medieval-leather/20 border-medieval-gold/30 medieval-glow' 
                  : 'bg-white/10 border-white/20'
              }`}
            >
              {isMedieval ? (
                <MedievalCrown className="w-6 h-6 text-medieval-gold" />
              ) : (
                <Crown className="w-6 h-6 text-amber-400" />
              )}
              <span className={`text-sm font-medium ${
                isMedieval ? 'medieval-text-gold' : 'text-foreground'
              }`}>
                Master the Royal Game
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-crimson text-shadow-warm">
              Learn Chess From
              <span className={`block text-transparent bg-clip-text ${
                isMedieval 
                  ? 'bg-gradient-to-r from-medieval-gold to-medieval-bronze' 
                  : 'bg-gradient-to-r from-amber-600 to-amber-800'
              }`}>
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
            <Button asChild size="lg" className={`shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 ${
              isMedieval 
                ? 'bg-gradient-to-r from-medieval-gold to-medieval-bronze hover:from-medieval-gold/90 hover:to-medieval-bronze/90 text-medieval-leather medieval-glow' 
                : 'bg-gradient-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-900 text-white'
            }`}>
              <Link href="/openings">
                {isMedieval ? (
                  <MedievalScroll className="w-5 h-5 mr-2" />
                ) : (
                  <BookOpen className="w-5 h-5 mr-2" />
                )}
                Start Learning
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className={`border-2 px-8 py-3 ${
              isMedieval 
                ? 'border-medieval-gold/30 hover:bg-medieval-gold/10 text-medieval-gold hover:text-medieval-gold' 
                : 'border-amber-600/20 hover:bg-amber-600/10'
            }`}>
              <Link href="/masters">
                {isMedieval ? (
                  <MedievalCrown className="w-5 h-5 mr-2" />
                ) : (
                  <Crown className="w-5 h-5 mr-2" />
                )}
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
              const MedievalIcon = stat?.medievalIcon || MedievalScroll
              return (
                <div key={index} className="text-center group hover-lift">
                  <div className={`backdrop-blur-sm rounded-2xl p-6 border shadow-lg ${
                    isMedieval 
                      ? 'bg-medieval-leather/20 border-medieval-gold/30 medieval-scroll' 
                      : 'bg-white/10 border-white/20'
                  }`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      isMedieval 
                        ? 'bg-gradient-to-br from-medieval-gold to-medieval-bronze medieval-glow' 
                        : 'bg-gradient-to-br from-amber-600 to-amber-800'
                    }`}>
                      {isMedieval ? (
                        <MedievalIcon className="w-6 h-6 text-medieval-leather" />
                      ) : (
                        <Icon className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className={`text-3xl font-bold font-crimson mb-2 animate-count-up ${
                      isMedieval ? 'medieval-text-gold' : 'text-amber-600'
                    }`}>
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
