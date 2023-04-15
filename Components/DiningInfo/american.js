import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function American() {
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.Name}>
          {"1846 Grill"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Burgers, Fries, Breakfast Sandwiches, Bagels\n"}
              {"Meats: Chicken, Steak, Bacon, Ham, Sausage\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: One World Cafe\n"}
            </Text>
          </View>
  
          <View>
        <Text style={styles.Name}>
          {"Stackers"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Burgers, Fries\n"}
              {"Meats: Ground Beef, Impossible Burger \n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Student Union - Union Marketplace\n"}
            </Text>
          </View>
  
          <View>
        <Text style={styles.Name}>
          {"Sizzles"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Burgers, Sandwiches, Pancakes, Daily Specials\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Ellicott Food Court\n"}
            </Text>
          </View>

          <View>
        <Text style={styles.Name}>
          {"Subway"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Sub Sandwiches\n"}
              {"Meats: Ham, Turkey, Roast Beef, Salami, Chicken\n"}
              {"Takes Dining Dollars/Meal Swipes? : No\n"}
              {"Location: Commons\n"}
            </Text>
          </View>
          <View>
        <Text style={styles.Name}>
          {"Fowl Play"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Fried Chickem, French Fries\n"}
              {"Meat: Chicken\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Student Union - Union Marketplace\n"}
            </Text>
          </View>
          <View>
        <Text style={styles.Name}>
          {"Tim Hortons"}      
          </Text>
          </View>
          <View>
            <Text style={styles.Text}>
              {"Options: Sandwhiches, soups, baked goods\n"}
              {"Meats: Ham, Turkey, Bacon, Sausage\n"}
              {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
              {"Location: Student Union\n"}
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