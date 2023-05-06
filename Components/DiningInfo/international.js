import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import { Header } from "react-native-elements";

import React, { useEffect, useState } from "react";

export default function International() {
  return (
    <View style={styles.container}>
      <Header
          backgroundColor="#3265CB"
          centerComponent={{ text: 'International', style: { color: '#fff', fontSize: 17 } }}
        />
      <ScrollView style={styles.scroll}>
        <Text>{"\n\n\n"}</Text>
        <Text style={styles.Name}>{"Noodle Pavilion"}</Text>

        <Text style={styles.Text}>
          {"Options: Pho, Ramen, Rotating Monthly Special\n"}
          {"Meats: Beef, Pork, Chicken\n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: One World Cafe\n"}
        </Text>

        <Text style={styles.Name}>{"Kali Orexi"}</Text>

        <Text style={styles.Text}>
          {"Options: Rotates Weekly\n"}
          {"Meats: Lamb, Beef  \n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: One World Cafe\n"}
        </Text>

        <Text style={styles.Name}>{"Champa Sushi"}</Text>

        <Text style={styles.Text}>
          {"Options: Sushi, Dumplings\n"}
          {"Meats: Seafood, Chicken  \n"}
          {"Takes Dining Dollars/Meal Swipes? : Yes\n"}
          {"Location: Student Union\n"}
        </Text>

        <Text style={styles.Name}>{"Dancing Chopsticks"}</Text>

        <Text style={styles.Text}>
          {"Options: Betno Box, Fried Rice, Sushi\n"}
          {"Meats: Chicken, Pork, Beef, Calamari\n"}
          {"Takes Dining Dollars/Meal Swipes? : No\n"}
          {"Location: Commons\n"}
        </Text>

        <Text style={styles.Name}>{"Austin's Kitchen"}</Text>

        <Text style={styles.Text}>
          {"Options: Korean Style Rice, Soups, and Meats\n"}
          {"Meat: Pork, Beef, Tofu\n"}
          {"Takes Dining Dollars/Meal Swipes? : No\n"}
          {"Location: Commons\n"}
        </Text>

        <Text style={styles.Name}>{"Bollywood Bistro"}</Text>

        <Text style={styles.Text}>
          {"Options: Byriani, Kebabs, Naan, Parantha\n"}
          {"Meats: Halal Chicken, Halal Lamb, Shrimp \n"}
          {"Takes Dining Dollars/Meal Swipes? : No\n"}
          {"Location: Commons\n"}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    backgroundColor: "#1E1E1E",
    flexGrow:1,
  },

  lineStyle: {
    borderWidth: 0.5,
    borderColor: "white",
    //margin: 10,
  },
  Name: {
    color: "white",
    fontSize: 30,

    //top: 60,
    fontWeight: "bold",
    marginLeft: "3%",
       marginRight: "3%",
  },
  Text: {
    color: "white",
    //top: 60,
    fontSize: 15,
    marginLeft: "3%",
       marginRight: "3%",
  },
});
