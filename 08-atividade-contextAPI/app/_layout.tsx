import React from 'react';
import { Stack } from 'expo-router';
import ThemeContextProvider from '../contexts/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeContextProvider>
  );
}