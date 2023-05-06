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
        <Text style={styles.buttonTXT}>European/Asian</Text>
        </Pressable>

        <Pressable 
        style={styles.drinks}
        title="drink"
        onPress={() => navigation.navigate("drinks")}
        >
        <Text style={styles.buttonTXT}>Drinks</Text>
        </Pressable>

        </View>
        <ImageBackground
        source={require("../assets/BlueTri.png")}
        style={styles.welcomeDown}

        ></ImageBackground>
        


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
    left: 110,
    top: -350,
    justifyContent: "center",
    transform: [{ scaleX: 1 }, { scaleY: -1 }],
    alignItems: "center",
  },
  taco:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -80,
    left: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  american:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -50,
    left: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },

  drinks:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -350,
    right: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  

  },
  international:{
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -380,
    right: -100,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  
  },
 
  buttonTXT: {
    fontSize: 20,
    color: "white",
    borderRadius: 10,
  },
  txt:{
    fontSize:30, 
    color:"white",
    top:-250

  }
});
