import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>To-do List</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 38,
        backgroundColor:'black', 
    },
    title:{
        color: 'white',
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
    }
  });