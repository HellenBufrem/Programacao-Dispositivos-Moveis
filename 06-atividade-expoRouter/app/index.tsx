import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, router } from 'expo-router';

export default function IndexScreen() {
  const handleRandomMovie = () => {
    const randomId = Math.floor(Math.random() * 10);
    router.push(`/movie/${randomId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clube de Cinema</Text>

      <Link href="/home" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Entrar como Convidado</Text>
        </Pressable>
      </Link>

      <Pressable 
        style={styles.button} 
        onPress={() => router.push('/home?user=Hellen')}
      >
        <Text style={styles.buttonText}>Entrar como Usuária Logada</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleRandomMovie}>
        <Text style={styles.buttonText}>Ver um Filme Aleatório</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40, color: '#333' },
  button: { backgroundColor: '#e50914', padding: 15, borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 15 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});