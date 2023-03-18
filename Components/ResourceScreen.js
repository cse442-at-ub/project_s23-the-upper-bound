import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export default function ResourceScreen({ navigation }) {
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
        onPress={() =>
          Linking.openURL(
            "https://www.buffalo.edu/studentlife/life-on-campus/health/mental-well-being/counseling.html"
          )
        }
      >
        <Text style={styles.buttonTXT}>Mental Health</Text>
      </Pressable>

      <Pressable
        style={styles.Mbuttons}
        title="MEDICAL"
        onPress={() =>
          Linking.openURL(
            "https://www.buffalo.edu/studentlife/life-on-campus/health/medical-care.html"
          )
        }
      >
        <Text style={styles.buttonTXT}>Medical Resources</Text>
      </Pressable>

      <Pressable
        style={styles.CLbuttons}
        title="housing"
        onPress={() =>
          Linking.openURL("https://www.buffalo.edu/campusliving.html")
        }
      >
        <Text style={styles.buttonTXT}>Housing Resources</Text>
      </Pressable>

      <Pressable
        style={styles.Wbuttons}
        title="writing"
        onPress={() => Linking.openURL("https://www.buffalo.edu/writing.html")}
      >
        <Text style={styles.buttonTXT}>Writing Resources</Text>
      </Pressable>
      <Pressable
        style={styles.CRbuttons}
        title="career"
        onPress={() => Linking.openURL("https://www.buffalo.edu/career.html")}
      >
        <Text style={styles.buttonTXT}>Career Resources</Text>
      </Pressable>

      <Pressable
        style={styles.Abuttons}
        title="career"
        onPress={() => Linking.openURL("https://advising.buffalo.edu/")}
      >
        <Text style={styles.buttonTXT}>Academic Advising</Text>
      </Pressable>

      <Pressable
        style={styles.Fbuttons}
        title="career"
        onPress={() => Linking.openURL("https://financialaid.buffalo.edu/")}
      >
        <Text style={styles.buttonTXT}>{"Financial Aid"}</Text>
      </Pressable>

      <Pressable
        style={styles.Tbuttons}
        title="career"
        onPress={() => Linking.openURL("https://www.buffalo.edu/ubit.html")}
      >
        <Text style={styles.buttonTXT}>Tech Resources</Text>
      </Pressable>

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
    top: -50,
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
  MHbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -30,
    left: -80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  Mbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -130,
    left: 80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  CLbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -100,
    left: -80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },

  Wbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -200,
    left: 80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },

  CRbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -170,
    left: -80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },

  Abuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -270,
    left: 80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },

  Fbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -230,
    left: 80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  Tbuttons: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -330,
    left: -80,
    backgroundColor: "#3265CB",
    borderRadius: 30,
  },
  buttonTXT: {
    fontSize: 20,
    color: "white",
    borderRadius: 10,
  },
});
