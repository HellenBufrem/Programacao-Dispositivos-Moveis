import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme, Colors } from '../contexts/ThemeContext';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const activeColors = Colors[theme];

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUpdate = () => {
    setFeedback(`Dados atualizados no modo ${theme.toUpperCase()}!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: activeColors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: activeColors.text }]}>
          Configurações
        </Text>
        <View style={styles.switchRow}>
          <Text style={[styles.switchLabel, { color: activeColors.text }]}>
            Modo Escuro
          </Text>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
          />
        </View>
      </View>

      <FormInput
        label="Nome de Utilizador"
        placeholder="Digite o seu utilizador"
        value={username}
        onChangeText={setUsername}
      />

      <FormInput
        label="E-mail de Acesso"
        placeholder="exemplo@dominio.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <FormButton
        title="Guardar Preferências"
        onPress={handleUpdate}
      />

      {feedback !== '' && (
        <Text style={[styles.feedbackText, { color: activeColors.text }]}>
          {feedback}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  feedbackText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});