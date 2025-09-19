
'use client'

import React, { useState } from 'react'
import { useMedievalTheme } from '@/contexts/MedievalThemeContext'

interface ChessPiece {
  type: 'king' | 'queen' | 'rook' | 'bishop' | 'knight' | 'pawn'
  color: 'white' | 'black'
}

interface Square {
  piece?: ChessPiece
  isLight: boolean
}

const initialBoard: Square[][] = [
  [
    { piece: { type: 'rook', color: 'black' }, isLight: false },
    { piece: { type: 'knight', color: 'black' }, isLight: true },
    { piece: { type: 'bishop', color: 'black' }, isLight: false },
    { piece: { type: 'queen', color: 'black' }, isLight: true },
    { piece: { type: 'king', color: 'black' }, isLight: false },
    { piece: { type: 'bishop', color: 'black' }, isLight: true },
    { piece: { type: 'knight', color: 'black' }, isLight: false },
    { piece: { type: 'rook', color: 'black' }, isLight: true },
  ],
  Array(8).fill(null).map((_, i) => ({ 
    piece: { type: 'pawn', color: 'black' }, 
    isLight: i % 2 === 1 
  })),
  ...Array(4).fill(null).map((_, row) => 
    Array(8).fill(null).map((_, col) => ({ 
      isLight: (row + col) % 2 === 0 
    }))
  ),
  Array(8).fill(null).map((_, i) => ({ 
    piece: { type: 'pawn', color: 'white' }, 
    isLight: i % 2 === 0 
  })),
  [
    { piece: { type: 'rook', color: 'white' }, isLight: true },
    { piece: { type: 'knight', color: 'white' }, isLight: false },
    { piece: { type: 'bishop', color: 'white' }, isLight: true },
    { piece: { type: 'queen', color: 'white' }, isLight: false },
    { piece: { type: 'king', color: 'white' }, isLight: true },
    { piece: { type: 'bishop', color: 'white' }, isLight: false },
    { piece: { type: 'knight', color: 'white' }, isLight: true },
    { piece: { type: 'rook', color: 'white' }, isLight: false },
  ],
]

const pieceSymbols = {
  white: {
    king: '♔',
    queen: '♕',
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙',
  },
  black: {
    king: '♚',
    queen: '♛',
    rook: '♜',
    bishop: '♝',
    knight: '♞',
    pawn: '♟',
  },
}

const medievalPieceSymbols = {
  white: {
    king: '👑',
    queen: '👸',
    rook: '🏰',
    bishop: '⛪',
    knight: '🐎',
    pawn: '🛡️',
  },
  black: {
    king: '🖤👑',
    queen: '🖤👸',
    rook: '🖤🏰',
    bishop: '🖤⛪',
    knight: '🖤🐎',
    pawn: '🖤🛡️',
  },
}

export default function ChessBoard() {
  const [board, setBoard] = useState<Square[][]>(initialBoard)
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null)
  const { isMedievalTheme } = useMedievalTheme()

  const handleSquareClick = (row: number, col: number) => {
    if (selectedSquare) {
      const [selectedRow, selectedCol] = selectedSquare
      if (selectedRow === row && selectedCol === col) {
        setSelectedSquare(null)
        return
      }

      // Move piece
      const newBoard = [...board]
      const piece = newBoard[selectedRow][selectedCol].piece
      newBoard[row][col].piece = piece
      newBoard[selectedRow][selectedCol].piece = undefined
      setBoard(newBoard)
      setSelectedSquare(null)
    } else if (board[row][col].piece) {
      setSelectedSquare([row, col])
    }
  }

  const isSelected = (row: number, col: number) => {
    return selectedSquare && selectedSquare[0] === row && selectedSquare[1] === col
  }

  return (
    <div className={`
      inline-block p-4 rounded-lg transition-all duration-300
      ${isMedievalTheme 
        ? 'medieval-card shadow-medieval-xl' 
        : 'bg-card shadow-lg'
      }
    `}>
      <div className={`
        grid grid-cols-8 gap-0 border-2 rounded-lg overflow-hidden transition-all duration-300
        ${isMedievalTheme 
          ? 'border-medieval-bronze shadow-gold-glow' 
          : 'border-border'
        }
      `}>
        {board.map((row, rowIndex) =>
          row.map((square, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`
                aspect-square w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl font-bold
                transition-all duration-200 hover:scale-105 relative group
                ${square.isLight 
                  ? (isMedievalTheme ? 'chess-square-light' : 'chess-square-light') 
                  : (isMedievalTheme ? 'chess-square-dark' : 'chess-square-dark')
                }
                ${isSelected(rowIndex, colIndex) 
                  ? (isMedievalTheme ? 'ring-2 ring-medieval-gold shadow-gold-glow' : 'ring-2 ring-primary') 
                  : ''
                }
                ${square.piece 
                  ? 'hover:bg-opacity-80 cursor-pointer' 
                  : 'hover:bg-opacity-60'
                }
              `}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {square.piece && (
                <span className={`
                  transition-all duration-200 group-hover:scale-110
                  ${isMedievalTheme 
                    ? 'filter drop-shadow-lg' 
                    : square.piece.color === 'white' ? 'text-white drop-shadow-md' : 'text-gray-800'
                  }
                `}>
                  {isMedievalTheme 
                    ? medievalPieceSymbols[square.piece.color][square.piece.type]
                    : pieceSymbols[square.piece.color][square.piece.type]
                  }
                </span>
              )}
              
              {/* Coordinate labels for medieval theme */}
              {isMedievalTheme && (
                <>
                  {colIndex === 0 && (
                    <span className="absolute left-1 top-1 text-xs text-medieval-bronze opacity-60 font-medieval">
                      {8 - rowIndex}
                    </span>
                  )}
                  {rowIndex === 7 && (
                    <span className="absolute right-1 bottom-1 text-xs text-medieval-bronze opacity-60 font-medieval">
                      {String.fromCharCode(97 + colIndex)}
                    </span>
                  )}
                </>
              )}
              
              {/* Selection indicator */}
              {isSelected(rowIndex, colIndex) && (
                <div className={`
                  absolute inset-0 rounded-sm transition-all duration-200
                  ${isMedievalTheme 
                    ? 'bg-medieval-gold/20 animate-medieval-pulse' 
                    : 'bg-primary/20 animate-pulse'
                  }
                `} />
              )}
            </button>
          ))
        )}
      </div>
      
      {/* Board legend for medieval theme */}
      {isMedievalTheme && (
        <div className="mt-4 text-center">
          <p className="medieval-text text-sm text-medieval-stone">
            Click a piece to select, then click a destination to move
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs medieval-text text-medieval-bronze">
            <span>🏰 Castle (Rook)</span>
            <span>🐎 Knight</span>
            <span>⛪ Bishop</span>
            <span>👑 King</span>
            <span>👸 Queen</span>
            <span>🛡️ Pawn</span>
          </div>
        </div>
      )}
    </div>
  )
}
