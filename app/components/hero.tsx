
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Crown, BookOpen, Target, Zap, ArrowRight, Shield, Sword } from 'lucide-react'
import Link from 'next/link'
import { useMedievalTheme } from '@/contexts/MedievalThemeContext'

export default function Hero() {
  const { isMedievalTheme } = useMedievalTheme()

  const features = [
    {
      icon: BookOpen,
      title: 'Master Openings',
      description: 'Learn essential chess openings',
      medievalTitle: 'Ancient Strategies',
      medievalDescription: 'Master the time-honored battle formations'
    },
    {
      icon: Target,
      title: 'Strategic Play',
      description: 'Develop winning strategies',
      medievalTitle: 'Tactical Warfare',
      medievalDescription: 'Command the battlefield with cunning tactics'
    },
    {
      icon: Zap,
      title: 'Checkmate Patterns',
      description: 'Perfect your endgame',
      medievalTitle: 'Victory Patterns',
      medievalDescription: 'Deliver the final blow to your enemies'
    }
  ]

  return (
    <section className={`
      relative overflow-hidden py-24 sm:py-32 transition-all duration-500
      ${isMedievalTheme ? 'chess-hero medieval-border-top medieval-border-bottom' : 'chess-hero'}
    `}>
      {/* Background decorative elements for medieval theme */}
      {isMedievalTheme && (
        <>
          <div className="absolute top-10 left-10 opacity-20">
            <Shield className="h-16 w-16 text-medieval-gold animate-float" />
          </div>
          <div className="absolute top-20 right-10 opacity-20">
            <Sword className="h-12 w-12 text-medieval-bronze animate-float" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-10 left-1/4 opacity-15">
            <Crown className="h-20 w-20 text-medieval-gold animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </>
      )}

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`
            mb-8 inline-flex items-center rounded-full px-4 py-2 text-sm transition-all duration-300
            ${isMedievalTheme 
              ? 'bg-medieval-gold/20 text-medieval-bronze border border-medieval-gold/30 medieval-text' 
              : 'bg-muted text-muted-foreground'
            }
          `}>
            <Crown className={`
              mr-2 h-4 w-4 transition-all duration-300
              ${isMedievalTheme ? 'text-medieval-gold animate-medieval-glow' : ''}
            `} />
            {isMedievalTheme ? 'Royal Chess Academy' : 'Welcome to ChessMaster Academy'}
          </div>
          
          <h1 className={`
            mb-6 text-4xl font-bold tracking-tight sm:text-6xl transition-all duration-300
            ${isMedievalTheme 
              ? 'medieval-heading text-5xl sm:text-7xl animate-castle-rise' 
              : 'text-shadow-warm'
            }
          `}>
            {isMedievalTheme ? (
              <>
                Master the Royal Game of
                <span className="block text-medieval-gold animate-heraldic-shine">
                  Kings & Queens
                </span>
              </>
            ) : (
              <>
                Master Chess From
                <span className="block text-primary">
                  Beginner to Grandmaster
                </span>
              </>
            )}
          </h1>
          
          <p className={`
            mx-auto mb-10 max-w-2xl text-lg leading-8 transition-all duration-300
            ${isMedievalTheme 
              ? 'medieval-text text-medieval-stone-dark text-xl' 
              : 'text-muted-foreground'
            }
          `}>
            {isMedievalTheme 
              ? 'Embark on a noble quest to master the ancient art of chess. Learn from legendary grandmasters, study time-honored strategies, and claim your rightful place among the chess nobility.'
              : 'Comprehensive chess learning platform featuring openings, strategies, checkmate patterns, playing styles, and insights from chess masters. Perfect for players of all skill levels.'
            }
          </p>
          
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button 
              asChild 
              size="lg" 
              className={`
                group transition-all duration-300
                ${isMedievalTheme 
                  ? 'medieval-button text-lg px-8 py-6 hover:scale-105' 
                  : 'hover-lift'
                }
              `}
            >
              <Link href="/openings">
                {isMedievalTheme ? (
                  <>
                    <Shield className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Begin Your Quest
                  </>
                ) : (
                  <>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className={`
                group transition-all duration-300
                ${isMedievalTheme 
                  ? 'border-medieval-gold text-medieval-bronze hover:bg-medieval-gold/10 hover:border-medieval-gold-light text-lg px-8 py-6' 
                  : 'hover-lift'
                }
              `}
            >
              <Link href="/masters">
                {isMedievalTheme ? (
                  <>
                    <Crown className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Meet the Masters
                  </>
                ) : (
                  <>
                    Explore Masters
                    <Crown className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </>
                )}
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index} 
                  className={`
                    group rounded-lg p-6 transition-all duration-300 hover-lift
                    ${isMedievalTheme 
                      ? 'medieval-card animate-castle-rise' 
                      : 'bg-card text-card-foreground shadow-md'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`
                    mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300
                    ${isMedievalTheme 
                      ? 'bg-medieval-gold/20 text-medieval-gold group-hover:bg-medieval-gold/30 group-hover:scale-110' 
                      : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                    }
                  `}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className={`
                    mb-2 text-lg font-semibold transition-all duration-300
                    ${isMedievalTheme ? 'medieval-heading text-medieval-bronze' : ''}
                  `}>
                    {isMedievalTheme ? feature.medievalTitle : feature.title}
                  </h3>
                  
                  <p className={`
                    text-sm transition-all duration-300
                    ${isMedievalTheme 
                      ? 'medieval-text text-medieval-stone' 
                      : 'text-muted-foreground'
                    }
                  `}>
                    {isMedievalTheme ? feature.medievalDescription : feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
