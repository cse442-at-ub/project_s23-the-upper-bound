import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Pre } from "@expo/html-elements";
import { NavigationContainer } from "@react-navigation/native";

export default function DiningInfo({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/BlueTri.png")}
        style={styles.welcomeUp}
      ></ImageBackground>
      <Text style={styles.userTxt}>Dining Information</Text>
      <View>
        <Pressable 
        style={styles.taco}
        title="tacos"
        onPress={() => navigation.navigate("mexican")}
        >
        <Text style={styles.buttonTXT}>Mexican</Text>
        </Pressable>
        <Pressable 
        style={styles.american}
        title="american"
        onPress={() => navigation.navigate("american")}
        >
        <Text style={styles.buttonTXT}>American</Text>
        </Pressable>
        <Pressable 
        style={styles.international}
        title="internat"
        onPress={() => navigation.navigate("international")}
        >
        <Text style={styles.buttonTXT}>International</Text>
        </Pressable>

        <Pressable 
        style={styles.drinks}
        title="drink"
        onPress={() => navigation.navigate("drinks")}
        >
        <Text style={styles.buttonTXT}>Drinks</Text>
        </Pressable>

        </View>
        <View>
        <Text style={styles.txt}>{"Please press a button above to view dining options in that food style"}</Text>
        
        <ImageBackground
        source={require("../assets/WelBot.png")}
        style={styles.welcomeDown}
      ></ImageBackground>
        </View>


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
    marginLeft: "5%",
    marginRight: "5%",

    fontSize: 39,
    top: -80,
    fontWeight:"bold"
  },
  welcomeUp: {
    height: 200,
    width: 300,
    marginLeft: -100,
    justifyContent: "center",
    transform: [{ scaleX: -1 }],
  },
  welcomeDown: {
    height: 300,
    width: 150,
    left: -30,
    bottom: -50,
    position: "absolute"

  },
  taco:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -30,
    left: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  american:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -0,
    left: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },

  drinks:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -300,
    right: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  

  },
  international:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -330,
    right: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  
  },
 
  buttonTXT: {
    fontSize: 20,
    color: "white",
    borderRadius: 10,
  },
  txt: {
    marginLeft: "7%",
    marginRight: "7%",
    fontSize: 17, 
    color: "white",
    textAlign:"center",
    top:-250

  }
});