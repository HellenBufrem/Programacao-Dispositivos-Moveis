import React, { useMemo } from 'react';
import { StyleSheet, Text, View, SectionList, StatusBar } from 'react-native';

import motorcyclesData from '../mocks/motorcycles.json';

interface Motorcycle {
  id: string;
  brand: string;
  model: string;
  year: number;
  category: string;
}

function groupMotorcyclesByCategory(data: Motorcycle[]) {
  const groups: Record<string, Motorcycle[]> = {};

  data.forEach((moto) => {
    if (!groups[moto.category]) {
      groups[moto.category] = [];
    }
    groups[moto.category].push(moto);
  });

  return Object.keys(groups).map((category) => ({
    title: category,
    data: groups[category],
  }));
}

export default function CatalogoMotosScreen() {
  const sectionsData = useMemo(() => groupMotorcyclesByCategory(motorcyclesData), []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catálogo Histórico</Text>
        <Text style={styles.headerSubtitle}>
          {motorcyclesData.length} MOTOS AGRUPADAS POR CATEGORIA
        </Text>
      </View>

      <SectionList
        sections={sectionsData}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        
        renderSectionHeader={({ section: { title, data } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
            <Text style={styles.sectionCount}>{data.length} motos</Text>
          </View>
        )}
        
        renderItem={({ item }) => {
          const codigoModelo = item.model.replace(item.brand, '').trim();

          return (
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <View style={styles.brandBadge}>
                  <Text style={styles.brandText}>{item.brand}</Text>
                </View>
                <Text style={styles.idText}>#{item.id}</Text>
              </View>

              <Text style={styles.modelText}>Modelo {codigoModelo}</Text>
              <Text style={styles.yearText}>Ano de Lançamento: {item.year}</Text>
            </View>
          );
        }}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginTop: 4,
    letterSpacing: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
    borderRadius: 8,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  sectionCount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#e0f2fe',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandBadge: {
    backgroundColor: '#334155',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  brandText: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  idText: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modelText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  yearText: {
    color: '#94a3b8',
    fontSize: 14,
  },
});