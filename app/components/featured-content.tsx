
'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Target, Zap, Users, Trophy, ArrowRight, Scroll, Sword, Shield, Crown } from 'lucide-react'
import { useMedievalTheme } from '@/contexts/MedievalThemeContext'

const featuredContent = [
  {
    title: 'Chess Openings',
    description: 'Master the most important opening principles and popular opening systems.',
    icon: BookOpen,
    href: '/openings',
    color: 'text-blue-600',
    medievalTitle: 'Ancient Strategies',
    medievalDescription: 'Learn the time-honored battle formations that have decided the fate of kingdoms.',
    medievalIcon: Scroll,
    medievalColor: 'text-medieval-gold'
  },
  {
    title: 'Strategic Concepts',
    description: 'Learn fundamental strategic principles that separate good players from great ones.',
    icon: Target,
    href: '/strategies',
    color: 'text-green-600',
    medievalTitle: 'Art of War',
    medievalDescription: 'Master the tactical wisdom that transforms peasants into noble warriors.',
    medievalIcon: Sword,
    medievalColor: 'text-medieval-crimson'
  },
  {
    title: 'Checkmate Patterns',
    description: 'Study essential checkmate patterns to finish your games with confidence.',
    icon: Zap,
    href: '/checkmates',
    color: 'text-yellow-600',
    medievalTitle: 'Victory Patterns',
    medievalDescription: 'Discover the decisive strikes that bring swift victory to your campaigns.',
    medievalIcon: Crown,
    medievalColor: 'text-medieval-gold'
  },
  {
    title: 'Playing Styles',
    description: 'Discover different playing styles and find the one that suits you best.',
    icon: Users,
    href: '/playing-styles',
    color: 'text-purple-600',
    medievalTitle: 'Noble Houses',
    medievalDescription: 'Explore the distinct fighting styles of the great chess dynasties.',
    medievalIcon: Shield,
    medievalColor: 'text-medieval-bronze'
  },
  {
    title: 'Chess Masters',
    description: 'Learn from the greatest players in chess history and their legendary games.',
    icon: Trophy,
    href: '/masters',
    color: 'text-red-600',
    medievalTitle: 'Legendary Champions',
    medievalDescription: 'Study the heroic deeds of chess legends who conquered the royal game.',
    medievalIcon: Trophy,
    medievalColor: 'text-medieval-gold'
  },
]

export default function FeaturedContent() {
  const { isMedievalTheme } = useMedievalTheme()

  return (
    <section className={`
      py-24 transition-all duration-500
      ${isMedievalTheme ? 'bg-medieval-pattern' : ''}
    `}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className={`
            text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-all duration-300
            ${isMedievalTheme ? 'medieval-heading text-medieval-bronze' : 'text-shadow-warm'}
          `}>
            {isMedievalTheme ? 'Embark on Your Noble Quest' : 'Featured Learning Paths'}
          </h2>
          <p className={`
            mx-auto max-w-2xl text-lg transition-all duration-300
            ${isMedievalTheme 
              ? 'medieval-text text-medieval-stone' 
              : 'text-muted-foreground'
            }
          `}>
            {isMedievalTheme 
              ? 'Choose your path to chess mastery. Each journey offers unique challenges and rewards for the dedicated student of the royal game.'
              : 'Explore our comprehensive chess curriculum designed to take you from beginner to advanced player.'
            }
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredContent.map((item, index) => {
            const Icon = isMedievalTheme ? item.medievalIcon : item.icon
            const title = isMedievalTheme ? item.medievalTitle : item.title
            const description = isMedievalTheme ? item.medievalDescription : item.description
            const iconColor = isMedievalTheme ? item.medievalColor : item.color

            return (
              <Card 
                key={item.href} 
                className={`
                  group hover-lift transition-all duration-300 border-0
                  ${isMedievalTheme 
                    ? 'medieval-card animate-castle-rise' 
                    : 'hover:shadow-lg'
                  }
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`
                    mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300
                    ${isMedievalTheme 
                      ? 'bg-medieval-gold/20 group-hover:bg-medieval-gold/30 group-hover:scale-110' 
                      : 'bg-muted group-hover:bg-muted/80'
                    }
                  `}>
                    <Icon className={`h-6 w-6 ${iconColor} transition-all duration-300`} />
                  </div>
                  <CardTitle className={`
                    transition-all duration-300
                    ${isMedievalTheme ? 'medieval-heading text-medieval-bronze' : ''}
                  `}>
                    {title}
                  </CardTitle>
                  <CardDescription className={`
                    transition-all duration-300
                    ${isMedievalTheme ? 'medieval-text text-medieval-stone' : ''}
                  `}>
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className={`
                      group/btn w-full justify-between transition-all duration-300
                      ${isMedievalTheme 
                        ? 'hover:bg-medieval-gold/10 hover:text-medieval-bronze border border-medieval-gold/30' 
                        : ''
                      }
                    `}
                  >
                    <Link href={item.href}>
                      <span className={isMedievalTheme ? 'medieval-text' : ''}>
                        {isMedievalTheme ? 'Begin Journey' : 'Learn More'}
                      </span>
                      <ArrowRight className={`
                        h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1
                        ${isMedievalTheme ? 'text-medieval-gold' : ''}
                      `} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to action */}
        <div className={`
          mt-16 text-center p-8 rounded-lg transition-all duration-300
          ${isMedievalTheme 
            ? 'medieval-card border-2 border-medieval-gold/30' 
            : 'bg-muted'
          }
        `}>
          <h3 className={`
            text-2xl font-bold mb-4 transition-all duration-300
            ${isMedievalTheme ? 'medieval-heading text-medieval-bronze' : ''}
          `}>
            {isMedievalTheme ? 'Ready to Claim Your Crown?' : 'Ready to Start Your Chess Journey?'}
          </h3>
          <p className={`
            mb-6 text-lg transition-all duration-300
            ${isMedievalTheme 
              ? 'medieval-text text-medieval-stone' 
              : 'text-muted-foreground'
            }
          `}>
            {isMedievalTheme 
              ? 'Join the ranks of chess nobility and begin your quest for mastery today.'
              : 'Join thousands of players who have improved their chess skills with our comprehensive guides.'
            }
          </p>
          <Button 
            asChild 
            size="lg"
            className={`
              transition-all duration-300
              ${isMedievalTheme 
                ? 'medieval-button text-lg px-8 py-6 hover:scale-105' 
                : 'hover-lift'
              }
            `}
          >
            <Link href="/openings">
              {isMedievalTheme ? (
                <>
                  <Crown className="mr-2 h-5 w-5" />
                  Begin Your Quest
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
