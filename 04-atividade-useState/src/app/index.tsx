import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('');
  const [accessAuthorized, setAccessAuthorized] = useState<boolean>(false);

  const handleReset = () => {
    setAccessAuthorized(false);
    setName('');
  };

  return (
    <View style={styles.container}>

      { }
      {!accessAuthorized ? (

        <View style={styles.card}>
          <Text style={styles.title}>Identificação de Visitante</Text>

          { }
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Button
            title="Solicitar Acesso"
            disabled={name.trim() === ''}
            onPress={() => setAccessAuthorized(true)}
          />
        </View>

      ) : (

        <View style={styles.card}>
          <Text style={styles.title}>Acesso Liberado para:</Text>
          <Text style={styles.welcomeName}>{name}</Text>

          { }
          <View style={{ marginTop: 20 }}>
            <Button
              title="Sair"
              color="#d9534f"
              onPress={handleReset}
            />
          </View>
        </View>

      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  welcomeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 10,
  }
});