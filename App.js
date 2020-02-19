import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] =useState('Sahil');
  const [person, setPerson] = useState({name:'mario', age:49})
  const clickHandler = ()=>{
    setName('John');
    setPerson({
      name: 'Johny',
      age: 20
    })
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
  <Text>His name is {person.name} & he is {person.age} years old</Text>
      <View style={styles.buttonContainer}> 
        <Button title='Update name'onPress={clickHandler}/>
      </View>
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
  buttonContainer:{
    marginTop: 20,

  }
});
