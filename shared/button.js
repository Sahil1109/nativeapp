import React from 'react'
import {StyleSheet,TouchableOpacity, View, Text} from 'react-native'

export default function FlatButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingHorizontal:10,
        paddingVertical: 14,
        backgroundColor: 'rgb(49,0,72)'
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})