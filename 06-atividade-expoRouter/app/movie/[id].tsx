import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

const FILMES = [
  { id: '0', nome: 'Interestelar' },
  { id: '1', nome: 'A Origem' },
  { id: '2', nome: 'Batman: O Cavaleiro das Trevas' },
  { id: '3', nome: 'Pulp Fiction' },
  { id: '4', nome: 'O Poderoso Chefão' },
  { id: '5', nome: 'Matrix' },
  { id: '6', nome: 'Clube da Luta' },
  { id: '7', nome: 'O Senhor dos Anéis' },
  { id: '8', nome: 'Forrest Gump' },
  { id: '9', nome: 'Gladiador' },
];

export default function MovieDetailsScreen() {
  const { id } = useLocalSearchParams();

  const filmeEncontrado = FILMES.find((filme) => filme.id === id);
  const nomeDoFilme = filmeEncontrado ? filmeEncontrado.nome : 'Filme não encontrado';

  return (
    <View style={styles.container}>
      <Text style={styles.movieText}>
        Exibindo detalhes do filme: {nomeDoFilme}
      </Text>

      <Pressable style={styles.homeButton} onPress={() => router.back()}>
        <Text style={styles.homeButtonText}>Voltar para o Menu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#141414' },
  movieText: { fontSize: 22, textAlign: 'center', marginBottom: 30, color: '#fff', fontWeight: 'bold' },
  homeButton: { backgroundColor: '#e50914', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center' },
  homeButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});