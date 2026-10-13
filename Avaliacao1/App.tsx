import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Switch,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { FormInput } from './src/components/FormInput';
import { FormButton } from './src/components/FormButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [plantName, setPlantName] = useState('');
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');

  const [waterReminder, setWaterReminder] = useState(false);

  const [plantNameError, setPlantNameError] = useState('');
  const [speciesError, setSpeciesError] = useState('');
  const [locationError, setLocationError] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log('Sistema Carregado...');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let valid = true;

    if (plantName.length > 0 && plantName.trim().length < 3) {
      setPlantNameError('O nome deve ter pelo menos 3 caracteres.');
      valid = false;
    } else {
      setPlantNameError('');
      if (plantName.trim().length === 0) valid = false;
    }

    if (species.length > 0 && species.trim().length < 3) {
      setSpeciesError('Informe uma espécie válida.');
      valid = false;
    } else {
      setSpeciesError('');
      if (species.trim().length === 0) valid = false;
    }

    if (location.length > 0 && location.trim().length < 2) {
      setLocationError('O local precisa ter pelo menos 2 caracteres.');
      valid = false;
    } else {
      setLocationError('');
      if (location.trim().length === 0) valid = false;
    }

    setIsFormValid(valid);
  }, [plantName, species, location]);

  const handleSubmit = () => {
    const formData = {
      plantName,
      species,
      location,
      waterReminder,
      submittedAt: new Date().toISOString(),
    };

    console.log('[LOG] Formulário Submetido com Sucesso!', JSON.stringify(formData, null, 2));
    alert('Planta cadastrada com sucesso!');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#588157" />
        <Text style={styles.loadingText}>Carregando Jardim...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80' }}
            style={styles.logo}
          />
          <Text style={styles.title}>Diário de Plantinhas</Text>
          <Text style={styles.subtitle}>Cadastre sua companheira verde</Text>
        </View>

        <FormInput
          label="Nome carinhoso da planta"
          placeholder="Ex: Jorge, Filó, Clóvis"
          value={plantName}
          onChangeText={setPlantName}
          error={plantNameError}
        />

        <FormInput
          label="Espécie / Tipo"
          placeholder="Ex: Suculenta, Costela-de-adão, Jiboia"
          value={species}
          onChangeText={setSpecies}
          error={speciesError}
        />

        <FormInput
          label="Ambiente da casa"
          placeholder="Ex: Varanda, Sala, Mesa de trabalho"
          value={location}
          onChangeText={setLocation}
          error={locationError}
        />

        <View style={styles.switchContainer}>
          <View style={styles.switchTextContainer}>
            <Text style={styles.switchLabel}>Lembretes de rega</Text>
            <Text style={styles.switchSubLabel}>Receber avisos quando o solo secar</Text>
          </View>
          <Switch
            value={waterReminder}
            onValueChange={setWaterReminder}
            trackColor={{ false: '#DAD7CD', true: '#A3B18A' }}
            thumbColor={waterReminder ? '#344E41' : '#f4f3f4'}
          />
        </View>

        <FormButton
          title="Cadastrar Plantinha"
          disabled={!isFormValid}
          onPress={handleSubmit}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F6F2',
  },
  scrollContainer: {
    padding: 24,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F6F2',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#344E41',
    fontWeight: '500',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#344E41',
  },
  subtitle: {
    fontSize: 14,
    color: '#588157',
    marginTop: 4,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#EAE7DC',
    padding: 16,
    borderRadius: 12,
    marginVertical: 12,
  },
  switchTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  switchLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#344E41',
  },
  switchSubLabel: {
    fontSize: 12,
    color: '#588157',
    marginTop: 2,
  },
});