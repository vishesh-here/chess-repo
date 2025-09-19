
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface MedievalThemeContextType {
  isMedievalTheme: boolean;
  toggleMedievalTheme: () => void;
}

const MedievalThemeContext = createContext<MedievalThemeContextType | undefined>(undefined);

export function MedievalThemeProvider({ children }: { children: React.ReactNode }) {
  const [isMedievalTheme, setIsMedievalTheme] = useState(false);

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('medieval-theme');
    if (savedTheme === 'true') {
      setIsMedievalTheme(true);
      document.documentElement.setAttribute('data-medieval-theme', 'true');
    }
  }, []);

  const toggleMedievalTheme = () => {
    const newTheme = !isMedievalTheme;
    setIsMedievalTheme(newTheme);
    localStorage.setItem('medieval-theme', newTheme.toString());
    
    if (newTheme) {
      document.documentElement.setAttribute('data-medieval-theme', 'true');
    } else {
      document.documentElement.removeAttribute('data-medieval-theme');
    }
  };

  return (
    <MedievalThemeContext.Provider value={{ isMedievalTheme, toggleMedievalTheme }}>
      {children}
    </MedievalThemeContext.Provider>
  );
}

export function useMedievalTheme() {
  const context = useContext(MedievalThemeContext);
  if (context === undefined) {
    throw new Error('useMedievalTheme must be used within a MedievalThemeProvider');
  }
  return context;
}
