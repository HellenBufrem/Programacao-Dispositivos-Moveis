import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

// Dica de Organização: Objeto de constantes para as cores de cada tema
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

// 1. Shared Props: Define o tipo Theme e as propriedades do contexto
export type Theme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// 2. createContext: Inicia o contexto vazio (undefined)
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// 3. Provider: Implementa o estado para alternar entre 'light' e 'dark'
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

// 4. Consumer Hook: Cria o hook useTheme com validação de segurança
export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeContextProvider!');
  }

  return context;
}