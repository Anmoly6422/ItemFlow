import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Item } from './HomeScreen';

type Props = {
  data: Item[];
};

const AllItems = ({ data }: Props) => {
  return (
    <View>
      <View style={styles.headingCon}>
        <Text style={styles.headingSty}>Items</Text>
        <Text style={styles.headingSty}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.row , {backgroundColor:item.stock<10 ? '#FFCCCC' : '#D7F6BFFF'}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>
              {item.stock} {item.unit}
            </Text>
          </View>
        )}
        contentContainerStyle={{gap:7}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical:10,
    marginBottom: 10,
  },
  headingSty: {
    fontWeight: '600',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius:5,
  },
  itemText:{
    fontWeight:"400",
    fontSize:15,
  }
});