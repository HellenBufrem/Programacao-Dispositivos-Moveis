import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const userName = 'Hellen';
  const dataList = [
    { name: 'Pudim', price: 15.50, category: 'Sobremesa', onSale: false },
    { name: 'Bolo de Chocolate', price: 22.00, category: 'Sobremesa', onSale: true },
    { name: 'Sorvete de Morango', price: 12.00, category: 'Sobremesa', onSale: true }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {userName}!</Text>
      
      {dataList.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name} ({item.category})</Text>
          <View style={styles.priceRow}>
            <Text style={[styles.itemPrice, { color: item.onSale ? 'green' : 'gray' }]}>
              R$ {item.price.toFixed(2)}
            </Text>
            {item.onSale && <Text style={styles.badge}>OFERTA</Text>}
          </View>
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  badge: {
    backgroundColor: '#ff3b30',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
  }
});
