
'use client';

import React from 'react';
import { useMedievalTheme } from '@/contexts/MedievalThemeContext';
import { Button } from '@/components/ui/button';
import { Crown, Castle } from 'lucide-react';

export function MedievalThemeToggle() {
  const { isMedievalTheme, toggleMedievalTheme } = useMedievalTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleMedievalTheme}
      className={`
        relative overflow-hidden transition-all duration-300
        ${isMedievalTheme 
          ? 'bg-medieval-gold text-medieval-stone border-medieval-bronze hover:bg-medieval-gold-light shadow-gold-glow' 
          : 'hover:bg-accent hover:text-accent-foreground'
        }
      `}
    >
      <div className="flex items-center gap-2">
        {isMedievalTheme ? (
          <>
            <Castle className="h-4 w-4" />
            <span className="font-medieval text-sm">Medieval</span>
          </>
        ) : (
          <>
            <Crown className="h-4 w-4" />
            <span className="text-sm">Modern</span>
          </>
        )}
      </div>
      
      {isMedievalTheme && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-medieval-gold-light to-transparent opacity-30 animate-pulse" />
      )}
    </Button>
  );
}
