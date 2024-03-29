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

export default function Drinks() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="#3265CB"
          centerComponent={{ text: 'Drinks', style: { color: '#fff', fontSize: 17 } }}
        />
      <View>
        <Text style={styles.Name}>
          {"Jamba Juice"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Smoothies, Oatmeal, Acai Bowls\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Student Union\n"}
            </Text>
          </View>
  
          <View>
        <Text style={styles.Name}>
          {"Tim Hortons"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Coffee, Tea, Lemondade \n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Student Union, Alfiero Center\n"}
            </Text>
          </View>
  
          <View>
        <Text style={styles.Name}>
          {"Starbucks"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Coffee, Tea, Iced Coffee\n"}
              {"Takes Dining Dollars/Meal Swipes? : No\n"}
              {"Location: Commons\n"}
            </Text>
          </View>

          <View>
        <Text style={styles.Name}>
          {"Perks"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Coffee, Tea, Milkshakes\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Ellicott Food Court\n"}
            </Text>
          </View>

          <View>
        <Text style={styles.Name}>
          {"Kung Fu Tea"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Milk Tea, Fruit Tea, Slush, Seasonal Specials\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Ellicott Food Court\n"}
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
     Name:{
      color:"white",
      fontSize:30,
  
      top:60,
       fontWeight: "bold",
       marginLeft: "3%",
       marginRight: "3%",
     },
     Text:{
      color:"white",
      top:60,
       fontSize: 15,
       marginLeft: "3%",
       marginRight: "3%",
     },
  });
