import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] =useState('Sahil');
  const [age, setAge] = useState(49)
  const nameHandler =(value)=>{
    setName(value)
  }

  const ageHandler =(value)=>{
    setAge(value)
  }
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput style={styles.input}
      placeholder='e.g. John doe' 
      onChangeText ={nameHandler}
      />
      <Text>Enter age:</Text>
      <TextInput style={styles.input}
      placeholder='e.g. 18' 
      onChangeText ={ageHandler}
      />
      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: 'white'
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding:10,
    marginTop: 10,
    width: 200
  }

});
