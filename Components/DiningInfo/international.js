import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function International() {
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.Name}>
          {"Noodle Pavilion"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Pho, Ramen, Rotating Monthly Special\n"}
              {"Meats: Beef, Pork, Chicken\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: One World Cafe\n"}
            </Text>
          </View>
  
          <View>
        <Text style={styles.Name}>
          {"Kali Orexi"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Rotates Weekly\n"}
              {"Meats: Lamb, Beef  \n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: One World Cafe\n"}
            </Text>
          </View>
  
          <View>
        <Text style={styles.Name}>
          {"Champa Sushi"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Sushi, Dumplings\n"}
              {"Meats: Seafood, Chicken  \n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Student Union\n"}
            </Text>
          </View>

          <View>
        <Text style={styles.Name}>
          {"Dancing Chopsticks"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Betno Box, Fried Rice, Sushi\n"}
              {"Meats: Chicken, Pork, Beef, Calamari\n"}
              {"Takes Dining Dollars/Meal Swipes? : No\n"}
              {"Location: Commons\n"}
            </Text>
          </View>
          <View>
        <Text style={styles.Name}>
          {"Austin's Kitchen"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Korean Style Rice, Soups, and Meats\n"}
              {"Meat: Pork, Beef, Tofu\n"}
              {"Takes Dining Dollars/Meal Swipes? : No\n"}
              {"Location: Commons\n"}
            </Text>
          </View>
          <View>
        <Text style={styles.Name}>
          {"Bollywood Bistro"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Byriani, Kebabs, Naan, Parantha\n"}
              {"Meats: Halal Chicken, Halal Lamb, Shrimp \n"}
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
     Name:{
      color:"white",
      fontSize:30,
  
      top:60,
      fontWeight:"bold",
     },
     Text:{
      color:"white",
      top:60,
      fontSize:15,
     },
  });