import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect, Component} from 'react';
import { StyleSheet, Text, View,Button, TextInput, ImageBackground, Image, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import { AntDesign, Entypo, Ionicons, Feather, EvilIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import * as Services  from '../services/services_hendler';
import { useToast } from 'react-native-fast-toast'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [result, setResult] = useState(null);
  const toast = useToast();

const onLogin = ()=>{
    console.log("param", email,password);

  const params = {
    userName: email,
    password: password
  }
  if(email!="" && password!=""){
    Services.getLoginApi(params).then(data => {
      setResult(data);
      toast.show(data.message, { type: "success", icon: <AntDesign name="check" color='#fff' size={20} />  });
      console.log('resultdata', data);
      // setLoding(false);
    },[])
  }else{
    toast.show("Please enter a value", { type: "danger", dangerColor: "red", icon: <AntDesign name="close" color='#fff' size={20} />  });
  }    
  }

    return (
      <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/image/logo.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn} onPress={()=> onLogin()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    width:"40%",
    height:"40%",
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  forgot_button: {
    height: 30,
    marginTop:10,
    marginBottom: 5,
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "transparent",
    borderColor: '#FF1493',
    borderWidth:1
  },
});


export default  Login;