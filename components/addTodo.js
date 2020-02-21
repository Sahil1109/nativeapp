import React,{useState} from 'react';
import { StyleSheet, View, Text,Button, TextInput} from 'react-native';

export default function AddTodo({submitHandler}){

    const [text, setText]=useState('');
    const changeHandler=(val)=>{
        setText(val)
    }

    return(
            <View>
                <Text style={styles.title}>Enter task</Text>
                <TextInput 
                placeholder='new task'
                onChangeText={changeHandler} 
                style={styles.inputTodo}
                />
                <Button 
                onPress={()=>submitHandler(text)} title={'Add todo'} color='black' />
            </View>
    )
}
const styles = StyleSheet.create({
    title:{
        marginTop: 30,
        marginHorizontal: 30
    },
    inputTodo:{
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#ddd'
    }
  });