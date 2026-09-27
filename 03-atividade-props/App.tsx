import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import UserProfileCard from './src/components/UserProfileCard';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      { }
      <UserProfileCard
        name="Fulaninho 1"
        role="Product Designer"
        avatarUrl="https://i.pinimg.com/736x/69/d4/0b/69d40b985b37a4f31fcb0296f37809e8.jpg"
        bio="Passionate about creating intuitive and visually stunning user experiences. Specializes in mobile app design and design systems."
        status="online"
        onPressFollow={() => Alert.alert("Sucesso", "Você agora está seguindo Sarah Chen!")}
      />

      { }
      <UserProfileCard
        name="Fulaninho 2"
        role="Desenvolvedor Backend"
        avatarUrl="https://i.pinimg.com/736x/c2/2f/dd/c22fddb5fc540b0d525af870e00c39f9.jpg"
        status="offline"
      />

      { }
      <UserProfileCard
        name="Fulaninha 3"
        role="Marketing Manager"
        avatarUrl="https://i.pinimg.com/736x/73/2d/42/732d4262a073a628290b1a9b21b4c11e.jpg"
        bio="Focada em estratégias de crescimento e branding digital. Mãe de dois gatos."
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
});