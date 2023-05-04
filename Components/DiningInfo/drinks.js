import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Scrollview,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "react-native-elements";

export default function Drinks() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
      <Header
          backgroundColor="#3265CB"
          centerComponent={{ text: 'Drink Options', style: { color: '#fff', fontSize: 20 } }}
        />

        <Text style={styles.Name}>
          {"Jamba Juice"}
        </Text>

        <Text style={styles.Text}>
          {"Options: Smoothies, Oatmeal, Acai Bowls\n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: Student Union\n"}
        </Text>
        <View style={{borderBottomColor:'white', borderBottomWidth:3}}></View>
        
        

        <Text style={styles.Name}>
        
          {"Tim Hortons"}
        </Text>
        

        <Text style={styles.Text}>
          {"Options: Coffee, Tea, Lemondade \n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: Student Union, Alfiero Center\n"}
          
        </Text>
        <View style={{borderBottomColor:'white', borderBottomWidth:3}}></View>


        <Text style={styles.Name}>
          {"Starbucks"}
        </Text>

        <Text style={styles.Text}>
          {"Options: Coffee, Tea, Iced Coffee\n"}
          {"Takes Dining Dollars/Meal Swipes? : No\n"}
          {"Location: Commons\n"}
        </Text>
        <View style={{borderBottomColor:'white', borderBottomWidth:3}}></View>
        

        <Text style={styles.Name}>
          {"Perks"}
        </Text>
 

        <Text style={styles.Text}>
          {"Options: Coffee, Tea, Milkshakes\n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: Ellicott Food Court\n"}
        </Text>
        <View style={{borderBottomColor:'white', borderBottomWidth:3}}></View>

        <Text style={styles.Name}>
          {"Kung Fu Tea"}
        </Text>
        

        <Text style={styles.Text}>
          {"Options: Milk Tea, Fruit Tea, Slush, Seasonal Specials\n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: Ellicott Food Court\n"}
        </Text>
  

      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",

  },
  scroll: {
    backgroundColor: "#1E1E1E",
    flexGrow: 1,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'white',
    margin: 10,
  },
  Name: {
    color: "white",
    fontSize: 30,

    //top: 60,
    fontWeight: "bold",
  },
  Text: {
    color: "white",
    //top: 60,
    fontSize: 15,
  },
});