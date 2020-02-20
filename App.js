import React,{useState} from 'react';
import { StyleSheet, View, Text, PickerIOSComponent, ScrollView} from 'react-native';

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

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item)=>{
        return(
          <View key={item.key} >
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
