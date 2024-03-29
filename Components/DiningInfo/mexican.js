import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Header } from "react-native-elements";

import React, { useEffect, useState } from "react";



export default function Mexican() {
  return (
    <View style={styles.container}>
      <Header
          backgroundColor="#3265CB"
          centerComponent={{ text: 'Mexican', style: { color: '#fff', fontSize: 17 } }}
        />
    <View>
      <Text style={styles.MoName}>
        {"Moe's"}      
        </Text>
        </View>
        <View>
          <Text style={styles.MoText}>
            {"Options: Tacos, Burritos, Salads, Bowls, Quesadillas\n"}
            {"Meats: Chicken, Steak, Ground Beef, Tofu \n"}
            {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
            {"Location: Student Union\n"}
          </Text>
        </View>

        <View>
      <Text style={styles.MoName}>
        {"Guac and Roll"}      
        </Text>
        </View>
        <View>
          <Text style={styles.MoText}>
            {"Options: Burritos, Bowls\n"}
            {"Meats: Chicken, Steak, Fish \n"}
            {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
            {"Location: Ellicot Food Court\n"}
          </Text>
        </View>

        <View>
      <Text style={styles.MoName}>
        {"Chick-Mex Grill"}      
        </Text>
        </View>
        <View>
          <Text style={styles.MoText}>
            {"Options: Tacos, Burritos, Burgers, Steaks, Fried Chicken, Seafood\n"}
            {"Phone: 555-555-5555\n"}
            {"Takes Dining Dollars/Meal Swipes? : No\n"}
            {"Location: Commons\n"}
          </Text>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1E1E1E",

    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'white',
        margin:10,
   },
   MoName:{
    color:"white",
    fontSize:30,

    top:60,
     fontWeight: "bold",
     marginLeft: "3%",
     marginRight: "3%",
   },
   MoText:{
    color:"white",
    top:60,
     fontSize: 15,
     marginLeft: "3%",
     marginRight: "3%",
   },
});