import React,{useState} from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {title: 'A', rating: 5, body: 'Ljhsfjs', key:'1'},
    {title: 'B', rating: 4, body: 'bxcnmz', key:'2'},
    {title: 'C', rating: 3, body: 'wouiqoqw', key:'3'},
  ])

  return(
    <View style={globalStyles.container}>
      <FlatList
      data={reviews}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}