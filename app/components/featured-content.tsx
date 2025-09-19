
'use client'

import { motion } from 'framer-motion'
import { BookOpen, Target, Brain, Crown } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTheme } from '@/components/theme-provider'

const features = [
  {
    title: 'Chess Openings',
    description: 'Master popular openings like Sicilian Defense, Queen\'s Gambit, and Ruy Lopez with detailed explanations and key variations.',
    icon: BookOpen,
    href: '/openings',
    color: 'from-blue-600 to-blue-800',
    bgPattern: 'chess-square-light'
  },
  {
    title: 'Strategies & Tactics',
    description: 'Learn essential chess strategies for beginners and intermediates, including tactical patterns and positional play.',
    icon: Brain,
    href: '/strategies',
    color: 'from-green-600 to-green-800',
    bgPattern: 'chess-square-dark'
  },
  {
    title: 'Checkmate Patterns',
    description: 'Discover common checkmate patterns including Back Rank Mate, Scholar\'s Mate, and advanced mating techniques.',
    icon: Target,
    href: '/checkmates',
    color: 'from-red-600 to-red-800',
    bgPattern: 'chess-square-light'
  },
  {
    title: 'Chess Masters',
    description: 'Study the playing styles and achievements of legendary chess players from Kasparov to Carlsen.',
    icon: Crown,
    href: '/masters',
    color: 'from-purple-600 to-purple-800',
    bgPattern: 'chess-square-dark'
  },
]

export default function FeaturedContent() {
  const { theme } = useTheme()
  
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-crimson text-chess-accent mb-4">
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
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={`h-full ${theme === 'netflix' ? 'netflix-card netflix-hover-lift' : `hover-lift border-0 shadow-lg ${feature?.bgPattern || ''} bg-gradient-to-br from-white to-chess-wood-light/10`}`}>
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${theme === 'netflix' ? 'from-red-600 to-red-800' : feature?.color || 'from-amber-600 to-amber-800'} rounded-2xl mb-4 mx-auto shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className={`text-xl font-crimson ${theme === 'netflix' ? 'text-red-500' : 'text-chess-accent'}`}>
                    {feature?.title || 'Feature'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature?.description || 'Feature description'}
                  </CardDescription>
                  <Button asChild variant="outline" className={`w-full ${theme === 'netflix' ? 'border-red-500/50 hover:bg-red-500/10' : 'border-chess-wood-dark/20 hover:bg-chess-wood-light/20'}`}>
                    <Link href={feature?.href || '/'}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
