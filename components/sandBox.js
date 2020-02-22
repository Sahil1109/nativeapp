import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SandBox() {
        return (
            <View style={styles.container}>
                <Text style={styles.boxOne}>One</Text>
                <Text style={styles.boxTwo}>Two</Text>
                <Text style={styles.boxThree}>Three</Text>
                <Text style={styles.boxFour}>Four</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
container:{
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#eee',
},
boxOne:{
    flex:1,
    backgroundColor: 'violet',
    padding: 10,
    fontWeight:'bold'
},
boxTwo:{
    flex: 2,
    backgroundColor: 'coral',
    padding: 20,
    fontWeight:'bold'
},
boxThree:{
    flex: 3,
    backgroundColor: 'yellow',
    padding: 30,
    fontWeight:'bold'
},
boxFour:{
    flex: 4,
    backgroundColor: 'skyblue',
    padding: 40,
    fontWeight:'bold'
}
})
 