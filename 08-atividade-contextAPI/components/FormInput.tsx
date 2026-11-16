import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme, Colors } from '../contexts/ThemeContext';

interface FormInputProps extends TextInputProps {
  label: string;
}

export default function FormInput({ label, ...rest }: FormInputProps) {
  const { theme } = useTheme();
  const activeColors = Colors[theme];

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: activeColors.text }]}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          {
            color: activeColors.text,
            borderColor: activeColors.border,
            backgroundColor: activeColors.inputBg,
          },
        ]}
        placeholderTextColor={activeColors.placeholder}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
});