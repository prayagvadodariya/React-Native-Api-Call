import { StatusBar } from 'expo-status-bar';
import React, {useState, Component, useEffect} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import * as Services  from '../services/services_hendler';
import Loader from '../component/Loader';

const Home = (props) => {
const [params, setParams] = useState(1);
const [result, setResult] = useState(null);
const [loading, setLoding] = useState(true);

  useEffect (() => {
    Services.getuserApi(params).then(data => {
      setResult(data);
      setLoding(false);
      console.log('resultdata', data);
    })
  },[])

   
  if(loading && !result){
    return(
     <Loader />
    )
  }
    return (
      <View>
          <FlatList
            horizontal={false}
            data={result.data}
            keyExtractor={(item, index) => String(index)} 
            renderItem = {({ item, index }) => (

              <View style={styles.contenar}>
                <TouchableOpacity>
                    <Avatar.Image size={60} source={{uri: item.avatar}} />
                </TouchableOpacity>
                <View style={styles.layout}>
                   <Text>{item.first_name}  {item.last_name}</Text>
                   <Text>{item.email}</Text>
                </View>
              </View>
        )}/> 
      </View>
    )
  }


const styles = StyleSheet.create({
 contenar: {
  flexDirection:'row',
  marginTop:15,
  marginLeft:15,
  marginRight:15,
  alignItems:'center'
 },
 layout: {
  flexDirection:'column',
  marginLeft:15
 }
});


export default  Home;