
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
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-crimson text-chess-accent netflix-theme:text-red-400 mb-4">
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
              <Card className={`h-full hover-lift border-0 shadow-lg ${feature?.bgPattern || ''} bg-gradient-to-br from-white to-chess-wood-light/10 netflix-card`}>
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature?.color || 'from-amber-600 to-amber-800'} netflix-theme:from-red-600 netflix-theme:to-red-700 rounded-2xl mb-4 mx-auto shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-crimson text-chess-accent netflix-theme:text-red-400">
                    {feature?.title || 'Feature'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature?.description || 'Feature description'}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full border-chess-wood-dark/20 hover:bg-chess-wood-light/20 netflix-theme:border-red-600/30 netflix-theme:hover:bg-red-600/10 netflix-theme:text-red-400 netflix-theme:hover:text-red-300 netflix-button">
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
