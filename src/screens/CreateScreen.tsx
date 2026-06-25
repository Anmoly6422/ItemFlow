import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Item } from './HomeScreen';

type Props = {
  data: Item[];
   setdata: React.Dispatch<React.SetStateAction<Item[]>>;
};
const CreateScreen = ({ data,setdata}: Props) => {

  const editItemHandler =(item:Item)=>{
    setisEdit(true)
    setitemName(item.name);
    seteditItemId(item.id );
    


  }

 const  deleteItemHandler =(id :number)=>{
  setdata(data.filter((item)=> item.id !==id))

 }
  const handlerAddItem = () => {
    if (!itemName.trim() || !stockAmt.trim()) {
  Alert.alert('Error', 'Please fill all fields');
  return;
}
  const newItem = {
    id: Date.now(),
    name: itemName,
    stock: Number(stockAmt),
    unit: 'kg',
  };

  setdata([...data, newItem]);

  setitemName('');
  setstockAmt('');
  seteditItemId(null);
  setisEdit(false);
  
};

const updateItemHandler = () => {
  setdata(
    data.map((item) =>
      item.id === editItemId
        ? { ...item, name: itemName, stock: Number(stockAmt) }
        : item
    )
  );

  setitemName('');
  setstockAmt('');
  seteditItemId(null);
  setisEdit(false);
};
 const [isEdit, setisEdit] = useState(false)
  const [itemName, setitemName] = useState('')
  const [stockAmt, setstockAmt] = useState('')
  const [editItemId, seteditItemId] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Enter an item name....'
      placeholderTextColor='#999'
      style={styles.input}
      value={itemName}
      onChangeText={(item)=> setitemName(item)}
      >

      </TextInput>
       <TextInput
      placeholder='Enter stockAmt amount....'
      placeholderTextColor='#999'
      style={styles.input}
      value={stockAmt}
      onChangeText={(item)=> setstockAmt(item)}
      >

      </TextInput>
     <Pressable
  onPress={()=>isEdit ? updateItemHandler():handlerAddItem()}
  style={({ pressed }) => [
    styles.button,
    pressed && { backgroundColor: '#B8A9E8' },
  ]}
>
        <Text style={styles.btnText}>
         {isEdit? ' EDIT ITEM IN STOCK':' ADD ITEM IN STOCK'}
        </Text>
      </Pressable>

      <View style={{marginTop:5}}>
            
              <Text style={styles.headingSty}>All Items In The Stock</Text>
             
            
      
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={[styles.row , {backgroundColor:item.stock<10 ? '#FFCCCC' : '#D7F6BFFF'}]}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  
                  <View style={{flexDirection:'row', gap:20 }}>
                    <Text style={styles.itemText}>
                    {item.stock} {item.unit}
                  </Text>
                   <Pressable onPress={()=> editItemHandler(item)}>
                      <Text style={styles.itemText}>Edit</Text>
                   </Pressable>
                      <Pressable onPress={()=>deleteItemHandler(item.id)}>
                        <Text style={styles.itemText}>Delete</Text>
                      </Pressable>

                    </View>
                </View>
              )}
              contentContainerStyle={{gap:7}}
            />
          </View>
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  container:{
    paddingVertical:"4%",
    gap:10,

  },
  input:{
    borderWidth:1.5,
    borderColor:'#D7F6BFFF',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7
  },
  button:{
   backgroundColor:"#CABFEEFF",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center'

  },
  btnText:{
    color:'white',
    fontWeight:'600',
    fontSize:15
  },
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
    marginVertical:10
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
})