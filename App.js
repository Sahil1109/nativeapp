import React,{useState} from 'react';
import { StyleSheet, View, FlatList, Text,} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
export default function App() {
  const [todos, setTodos]=useState([
    {text: 'ASD', key:'1'},
    {text: 'ZXC', key:'2'},
    {text: 'QWE', key:'3'}
  ]);

  const pressHandler =(key)=>{
    setTodos((prevTodo)=>{
      return prevTodo.filter(todo => todo.key!= key)
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* To form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
            )}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop: 20,
  },
});
