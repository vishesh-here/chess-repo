
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Brain, Crown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    title: 'Chess Openings',
    description: 'Master popular openings like Sicilian Defense, Queen\'s Gambit, and Ruy Lopez with detailed explanations and key variations.',
    icon: BookOpen,
    href: '/openings',
    chessIcon: '♔',
    bgPattern: 'chess-square-light'
  },
  {
    title: 'Strategies & Tactics',
    description: 'Learn essential chess strategies for beginners and intermediates, including tactical patterns and positional play.',
    icon: Brain,
    href: '/strategies',
    chessIcon: '♕',
    bgPattern: 'chess-square-dark'
  },
  {
    title: 'Checkmate Patterns',
    description: 'Discover common checkmate patterns including Back Rank Mate, Scholar\'s Mate, and advanced mating techniques.',
    icon: Target,
    href: '/checkmates',
    chessIcon: '♖',
    bgPattern: 'chess-square-light'
  },
  {
    title: 'Chess Masters',
    description: 'Study the playing styles and achievements of legendary chess players from Kasparov to Carlsen.',
    icon: Crown,
    href: '/masters',
    chessIcon: '♗',
    bgPattern: 'chess-square-dark'
  },
]

export default function FeaturedContent() {
  return (
    <section className="py-20 relative">
      {/* Background chess pattern */}
      <div className="absolute inset-0 chess-board-pattern-small opacity-5 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-crimson text-chess-black dark:text-chess-white mb-4 text-shadow-chess">
              Master Every Aspect of Chess
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From fundamental openings to advanced strategies, our comprehensive guides will transform your chess understanding.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features?.map((feature, index) => {
            const Icon = feature?.icon || BookOpen
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className={`h-full chess-card shadow-xl border-2 transition-all duration-300 ${
                  isEven ? 'chess-square-light' : 'chess-square-dark'
                } ${isEven ? 'text-chess-black' : 'text-chess-white'}`}>
                  <CardHeader className="text-center relative">
                    {/* Chess piece decoration */}
                    <div className="absolute top-2 right-2 text-2xl opacity-20">
                      {feature?.chessIcon}
                    </div>
                    
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto shadow-lg ${
                        isEven ? 'chess-square-dark' : 'chess-square-light'
                      }`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className={`w-8 h-8 ${isEven ? 'text-chess-gold' : 'text-chess-black'}`} />
                    </motion.div>
                    
                    <CardTitle className={`text-xl font-crimson ${
                      isEven ? 'text-chess-black' : 'text-chess-white'
                    }`}>
                      {feature?.title || 'Feature'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className={`text-sm leading-relaxed ${
                      isEven ? 'text-chess-black/70' : 'text-chess-white/70'
                    }`}>
                      {feature?.description || 'Feature description'}
                    </CardDescription>
                    <Button 
                      asChild 
                      variant="outline" 
                      className={`w-full transition-all duration-300 hover-chess-lift ${
                        isEven 
                          ? 'border-chess-dark-square hover:chess-square-dark hover:text-chess-white' 
                          : 'border-chess-light-square hover:chess-square-light hover:text-chess-black'
                      }`}
                    >
                      <Link href={feature?.href || '/'}>
                        Learn More {feature?.chessIcon}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
