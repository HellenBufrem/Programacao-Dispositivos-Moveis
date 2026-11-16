import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#121212',
    placeholder: '#888888',
    border: '#CCCCCC',
    inputBg: '#F5F5F5',
    buttonBg: '#0284C7',
    buttonText: '#FFFFFF',
  },
  dark: {
    background: '#121212',
    text: '#FFFFFF',
    placeholder: '#777777',
    border: '#333333',
    inputBg: '#1E1E1E',
    buttonBg: '#38BDF8',
    buttonText: '#0F172A',
  },
};

export type Theme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeContextProvider!');
  }

  return context;
}