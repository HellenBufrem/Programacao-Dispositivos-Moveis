import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTheme, Colors } from '../contexts/ThemeContext';

interface FormButtonProps {
  title: string;
  onPress: () => void;
}

export default function FormButton({ title, onPress }: FormButtonProps) {
  const { theme } = useTheme();
  const activeColors = Colors[theme];

  return (
    <Pressable
      style={[styles.button, { backgroundColor: activeColors.buttonBg }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: activeColors.buttonText }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});