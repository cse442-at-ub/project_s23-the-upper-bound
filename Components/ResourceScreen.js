import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';


export default function ResourceScreen({navigation}){
    return (
        <View style={styles.container}>
        <ImageBackground
				source={require("../assets/BlueTri.png")}
				style={styles.welcomeUp}
		></ImageBackground>
        <Text style={styles.userTxt}>Important Resources</Text> 
        <Pressable
            style={styles.MHbuttons}
            title="Mental Health"
            onPress={() => Linking.openURL('https://www.buffalo.edu/studentlife/life-on-campus/health/mental-well-being/counseling.html')}>
            <Text style={styles.buttonTXT}>Mental Health</Text>
            </Pressable>

            <Pressable
            style={styles.Mbuttons}
            title="MEDICAL"
            onPress={() => Linking.openURL('https://www.buffalo.edu/studentlife/life-on-campus/health/medical-care.html')}>
            <Text style={styles.buttonTXT}>Medical</Text>
            </Pressable>

            <Pressable
            style={styles.CLbuttons}
            title="MEDICAL"
            onPress={() => Linking.openURL('https://www.buffalo.edu/campusliving.html')}>
            <Text style={styles.buttonTXT}>Campus Living</Text>
            </Pressable>







        </View>





    );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
  },
  userTxt: {
    color: "#FFFFFF",
    marginLeft: 10,
    fontSize: 40,
    top: -120,
  },
  welcomeUp: {
    height: 200,
		width: 300,
		marginLeft: -100,
        justifyContent:"center",
        transform: [{ scaleX: -1 }]
  },
  MHbuttons: {
    height:100,
    width: 100,
    justifyContent: 'center',
    alignItems:'center',
    top: -30,
    left:-80,
    backgroundColor: "#3265CB",
    borderRadius:30,
  },
  Mbuttons: {
    height:100,
    width: 100,
    justifyContent: 'center',
    alignItems:'center',
    top: -130,
    left:80,
    backgroundColor: "#3265CB",
    borderRadius:30,
  },
  CLbuttons: {
    height:100,
    width: 100,
    justifyContent: 'center',
    alignItems:'center',
    top: -100,
    left:-80,
    backgroundColor: "#3265CB",
    borderRadius:30,
  },
  buttonTXT: {
    fontSize: 20,
    color:"white",
    borderRadius:10,
  },
});