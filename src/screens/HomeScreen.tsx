import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AllItems from './Allitems';
import CreateScreen from './CreateScreen';

export type Item = {
  id: number;
  name: string;
  stock: number;
  unit: string;
};



const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setdata] = useState([
    { id: 1, name: 'Wheat', stock: 5, unit: 'kg' },
  { id: 2, name: 'Rice', stock: 15, unit: 'kg' },
  { id: 3, name: 'Pulse', stock: 20, unit: 'kg' },
  { id: 4, name: 'Corn', stock: 8, unit: 'kg' },
  { id: 5, name: 'Basmati Rice', stock: 10, unit: 'kg' },

  ])

  const lowStockItems = data.filter(item => item.stock < 10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 && { backgroundColor: '#72C37AFF' },
          ]}
          onPress={() => setView(0)}>
          <Text
            style={[
              styles.btnText,
              view === 0 && { color: 'white' },
            ]}>
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 && { backgroundColor: '#72C37AFF' },
          ]}
          onPress={() => setView(1)}>
          <Text
            style={[
              styles.btnText,
              view === 1 && { color: 'white' },
            ]}>
            Low Stock
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 2 && { backgroundColor: '#72C37AFF' },
          ]}
          onPress={() => setView(2)}>
          <Text
            style={[
              styles.btnText,
              view === 2 && { color: 'white' },
            ]}>
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={lowStockItems} />}
      {view === 2 && <CreateScreen data={data} setdata={setdata}/>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#72C37AFF',
  },
  btnText: {
    color: '#72C37AFF',
    fontSize: 12,
  },
});