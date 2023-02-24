import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
        <ImageBackground source={require("./assets/path_icon.png")} style={styles.logo}>
        <ImageBackground source={require("./assets/BlueTri.png")} style={styles.welcomeUp}></ImageBackground>
        <Pressable style={styles.loginBtn} title='LOGIN' onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttons}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.signupBtn} title='SIGNUP' onPress={() => navigation.navigate('signup')}>
          <Text style={styles.buttons}>SIGNUP</Text>
        </Pressable>  
        <ImageBackground source={require("./assets/WelBot.png")} style={styles.welcomeDown}></ImageBackground> 
        </ImageBackground> 
        </View>
    
  )
};

function LoginScreen({navigation}){
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  
  return (
  <View style = {styles.container}>
    <Text style={styles.welbak}>
      {'Welcome\n'}
      {'    Back\n'}
    </Text>
    <View style={styles.usrPass}>
      <TextInput style={styles.userTxt}
      placeholder='Username'
      placeholderTextColor='white'
      onChangeText={(user)=>setUser(user)}
      ></TextInput>   
    </View>
    <View style= {styles.usrPass}>
    <TextInput style={styles.userTxt}
      placeholder='Password'
      placeholderTextColor='white'
      onChangeText={(password)=>setPassword(password)}
      ></TextInput>
    </View>
    <Pressable style={styles.loginBtn} title='ENTER' onPress={(navigation.navigate('login'))}>
    <Text style={styles.buttons}>Login</Text>
    </Pressable>
    
    
  </View>
  )
};

function SignupScreen({navigation}){
  return(
  <View style = {styles.container}
  


  ></View>
  );
};
const Stack = createNativeStackNavigator();

function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name ='Welcome' component={HomeScreen}>
        </Stack.Screen>
        <Stack.Screen name= 'login' component ={LoginScreen}>
        </Stack.Screen>
        <Stack.Screen name= 'signup' component ={SignupScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>

  );

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems:'center'
    
  },
  logo:{
    width:300, 
    height:300,
    marginBottom: 500,
    alignItems:'center'
  },
  
  loginBtn: {
    width: "70%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#393939",
    paddingHorizontal: 0,
    marginTop: 100
  },

  signupBtn: {
    width: "70%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3265CB",
    elevation: 3,
    marginTop:20
  },
  buttons:{
    fontSize:20,
    color: 'white',
  },
  welcomeUp:{   
    height:200,
      width:150,
    marginLeft:250,
  },
  welcomeDown:{
    marginTop:30,
    height:400,
    width:400,
  },
  userTxt:{
    color: '#FFFFFF',
    marginLeft:10,
    fontSize:20,
  },
  usrPass:{
    backgroundColor:'#1E1E1E',
    borderBottomColor: '#393939',
    borderBottomWidth:2,
    borderRadius:5,
    width:"70%",
    height:50,
    marginBottom:30,
    alignContent:'center',
    justifyContent:'center',

  },
  welbak:{
    fontSize:36,
    color: 'white',
    marginTop: 200,
    justifyContent:'center'
    
  },



});
export default App;
