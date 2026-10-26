import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function HomeScreen() {
  const { user } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {!user ? (
        <Text style={styles.message}>
          Bem-vindo ao Clube de Cinema! Ingresso R$20,00.
        </Text>
      ) : (
        <Text style={styles.message}>
          Bem-vindo, {user}! Hoje tem promoção para sócios! Ingresso R$10,00.
        </Text>
      )}

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Voltar para o Início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  message: { fontSize: 20, textAlign: 'center', marginBottom: 30, color: '#333', fontWeight: '500' },
  backButton: { backgroundColor: '#333', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});