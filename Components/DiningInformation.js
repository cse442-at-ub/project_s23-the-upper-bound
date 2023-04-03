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
import Mexican from "./tacos"
import { NavigationContainer } from "@react-navigation/native";

export default function DiningInfo({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/BlueTri.png")}
        style={styles.welcomeUp}
      ></ImageBackground>
      <Text style={styles.userTxt}>Dining Information</Text>
        <Pressable 
        style={styles.taco}
        title="tacos"
        onPress={() => navigation.navigate("mexican")}
        >
        <Text style={styles.buttonTXT}>Mexican</Text>
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
    justifyContent: "center",
    transform: [{ scaleX: -1 }],
  },
  welcomeDown: {
    height: 300,
    width: 150,
    left: 200,
    top: -440,
    justifyContent: "center",
    transform: [{ scaleX: 1 }, { scaleY: -1 }],
    alignItems: "center",
  },
  taco:{
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -30,
    left: -80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  smoothies:{},
  chicken:{},
  burgers:{},
  american:{},
  greek:{},
  indian:{},
  pasta:{},
  noodles:{},
  chinese:{},
  sandwhiches:{},
  salads:{},
  buttonTXT: {
    fontSize: 20,
    color: "white",
    borderRadius: 10,
  },
});
