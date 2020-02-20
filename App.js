import React,{useState} from 'react';
import { StyleSheet, View,Text, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople]=useState([
    {name: 'A', key:'1'},
    {name: 'B', key:'2'},
    {name: 'C', key:'3'},
    {name: 'D', key:'4'},
    {name: 'E', key:'5'},
    {name: 'F', key:'6'},
    {name: 'G', key:'7'},
    {name: 'H', key:'8'},
  ]);

  const pressHandler =(key)=>{
    console.log(key);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person =>person.key!=key)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList 
      numColumns={2}
      data={people}
      renderItem={({ item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 20,
  },
});
