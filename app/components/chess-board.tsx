
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCcw, Play, Pause } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useChessTheme } from '@/components/theme-provider'
import { MedievalSword, MedievalShield } from '@/components/medieval-icons'

// Simple chess piece representations
const initialBoard = [
  ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
  ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'],
]

// Scholar's Mate demonstration moves
const scholarsMate = [
  { from: [6, 4], to: [4, 4], piece: '♙' }, // e4
  { from: [1, 4], to: [3, 4], piece: '♟' }, // e5
  { from: [7, 5], to: [4, 2], piece: '♗' }, // Bc4
  { from: [0, 1], to: [2, 2], piece: '♞' }, // Nc6
  { from: [7, 3], to: [3, 7], piece: '♕' }, // Qh5
  { from: [0, 6], to: [2, 5], piece: '♞' }, // Nf6
  { from: [3, 7], to: [1, 5], piece: '♕' }, // Qxf7# (Checkmate)
]

export default function ChessBoard() {
  const [board, setBoard] = useState(initialBoard)
  const [currentMove, setCurrentMove] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { chessTheme } = useChessTheme()
  const isMedieval = chessTheme === 'medieval'

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isPlaying && currentMove < scholarsMate?.length) {
      interval = setInterval(() => {
        setCurrentMove(prev => {
          if (prev >= (scholarsMate?.length || 0) - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, 1500)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, currentMove])

  useEffect(() => {
    const newBoard = JSON.parse(JSON.stringify(initialBoard))
    
    for (let i = 0; i <= currentMove && i < (scholarsMate?.length || 0); i++) {
      const move = scholarsMate?.[i]
      if (move) {
        const { from, to, piece } = move
        if (from && to) {
          newBoard[from[0]][from[1]] = null
          newBoard[to[0]][to[1]] = piece
        }
      }
    }
    
    setBoard(newBoard)
  }, [currentMove])

  const resetDemo = () => {
    setCurrentMove(0)
    setIsPlaying(false)
    setBoard(initialBoard)
  }

  const togglePlay = () => {
    if (currentMove >= (scholarsMate?.length || 0) - 1) {
      resetDemo()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold font-crimson mb-4 ${
            isMedieval ? 'medieval-text-gold' : 'text-chess-accent'
          }`}>
            Interactive Chess Demonstrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch and learn from classic chess patterns. This demonstrates the Scholar's Mate - a quick checkmate for beginners to recognize.
          </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className={`overflow-hidden shadow-2xl border-0 ${
          isMedieval 
            ? 'bg-gradient-to-br from-medieval-parchment to-medieval-stone/10 medieval-border' 
            : 'bg-gradient-to-br from-white to-chess-wood-light/10'
        }`}>
          <CardHeader className={`text-center ${
            isMedieval ? 'bg-gradient-to-r from-medieval-gold to-medieval-bronze' : 'bg-gradient-wooden'
          }`}>
            <CardTitle className={`text-2xl font-crimson text-shadow-warm ${
              isMedieval ? 'text-medieval-leather' : 'text-white'
            }`}>
              Scholar's Mate Demonstration
            </CardTitle>
            <p className={`text-sm ${
              isMedieval ? 'text-medieval-leather/80' : 'text-white/80'
            }`}>
              Move {currentMove + 1} of {scholarsMate?.length || 0} • {currentMove >= (scholarsMate?.length || 0) - 1 ? 'Checkmate!' : 'In Progress'}
            </p>
          </CardHeader>
          <CardContent className="p-8">
            {/* Chess Board */}
            <div className="max-w-md mx-auto mb-8">
              <div className="grid grid-cols-8 gap-0 border-4 border-chess-wood-dark rounded-lg overflow-hidden shadow-lg">
                {board?.map((row, rowIndex) =>
                  row?.map((piece, colIndex) => {
                    const isLight = (rowIndex + colIndex) % 2 === 0
                    const isLastMove = currentMove > 0 && scholarsMate?.[currentMove - 1] && 
                      ((scholarsMate[currentMove - 1]?.to?.[0] === rowIndex && scholarsMate[currentMove - 1]?.to?.[1] === colIndex) ||
                       (scholarsMate[currentMove - 1]?.from?.[0] === rowIndex && scholarsMate[currentMove - 1]?.from?.[1] === colIndex))
                    
                    return (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        className={`
                          aspect-square flex items-center justify-center text-2xl font-bold cursor-pointer
                          ${isLight ? 'chess-square-light' : 'chess-square-dark'}
                          ${isLastMove ? 'ring-2 ring-amber-500 ring-inset' : ''}
                          hover:brightness-110 transition-all duration-200
                        `}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="drop-shadow-sm">
                          {piece || ''}
                        </span>
                      </motion.div>
                    )
                  }) || []
                ) || []}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                onClick={togglePlay}
                size="lg"
                className={`text-white ${
                  isMedieval 
                    ? 'bg-gradient-to-r from-medieval-gold to-medieval-bronze hover:from-medieval-gold/90 hover:to-medieval-bronze/90 medieval-glow' 
                    : 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900'
                }`}
              >
                {isPlaying ? (
                  <>
                    {isMedieval ? (
                      <MedievalShield className="w-5 h-5 mr-2" />
                    ) : (
                      <Pause className="w-5 h-5 mr-2" />
                    )}
                    Pause
                  </>
                ) : (
                  <>
                    {isMedieval ? (
                      <MedievalSword className="w-5 h-5 mr-2" />
                    ) : (
                      <Play className="w-5 h-5 mr-2" />
                    )}
                    {currentMove >= (scholarsMate?.length || 0) - 1 ? 'Restart' : 'Play'}
                  </>
                )}
              </Button>
              
              <Button
                onClick={resetDemo}
                variant="outline"
                size="lg"
                className={`${
                  isMedieval 
                    ? 'border-medieval-gold/30 hover:bg-medieval-gold/10 text-medieval-gold' 
                    : 'border-chess-wood-dark/20 hover:bg-chess-wood-light/20'
                }`}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>

            {/* Move Description */}
            <div className="mt-6 text-center">
              <div className={`rounded-lg p-4 max-w-lg mx-auto ${
                isMedieval 
                  ? 'bg-medieval-parchment/20 medieval-scroll' 
                  : 'bg-chess-wood-light/10'
              }`}>
                <p className={`text-sm font-medium ${
                  isMedieval ? 'medieval-text-gold' : 'text-chess-accent'
                }`}>
                  {currentMove === 0 && 'Ready to start the Scholar\'s Mate demonstration'}
                  {currentMove === 1 && 'White opens with e4, controlling the center'}
                  {currentMove === 2 && 'Black responds with e5, mirroring the center control'}
                  {currentMove === 3 && 'White develops the bishop to c4, targeting f7'}
                  {currentMove === 4 && 'Black develops the knight to c6'}
                  {currentMove === 5 && 'White brings the queen to h5, threatening mate'}
                  {currentMove === 6 && 'Black defends with Nf6'}
                  {currentMove >= 7 && 'Checkmate! The queen captures on f7 with mate!'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
