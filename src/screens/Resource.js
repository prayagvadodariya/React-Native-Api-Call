import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useRef, Component} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import * as Services  from '../services/services_hendler';
import Loader from '../component/Loader';
import { useToast } from 'react-native-fast-toast'

const  Resource= (props) => {
const [params, setParams] = useState(1);
const [result, setResult] = useState(null);
const [loading, setLoding] = useState(true); 
const toast = useToast();

useEffect (() => {
    Services.getunknownApi().then(data => {
      setResult(data);
      setLoding(false);
      toast.show("Fetch successfully", { type: "normal" });
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

            <View style={{backgroundColor: item.color, padding: 10, marginVertical: 8, marginHorizontal: 16, borderRadius: 7}}>
               <Text style={styles.title}>{item.name}</Text>
            </View>    
            )}/> 
       </View> 
    )
  }


const styles = StyleSheet.create({
   content: {
     flex:1
   },
   title: {
    fontSize: 25,
   }, 
});


export default  Resource;