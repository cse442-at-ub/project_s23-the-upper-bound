import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Header } from "react-native-elements";

export default function ResourceScreen({ navigation }) {
  return (

    <View style = {styles.container}>
      <ScrollView>
        <Header
          backgroundColor="#3265CB"
          centerComponent={{ text: 'Campus Resources', style: { color: '#fff', fontSize: 17 } }}
        />

        <Pressable
        style={styles.MHbuttons}
        title="Mental Health"
        onPress={() =>
          Linking.openURL(
            "https://www.buffalo.edu/studentlife/life-on-campus/health/mental-well-being/counseling.html"
          )
        }
        >
          {/* */}
        <ImageBackground
          source={require("../Components/ResourcesImages/mental-health.jpeg")}
          style = {{width:120, height:120, marginLeft: "-58%", top: "28%", borderRadius: 30, overflow: "hidden"}}
        ></ImageBackground>
        <Text style={styles.buttonTXT}>Mental Health</Text>
        <Text style={{fontSize: 10, color: "white", borderRadius: 10, alignContent: "left", justifyContent: "center", 
        top: -60, marginLeft: 149, marginRight: 10}}>Whether you’re worried about grades or a personal crisis, we’re here to support mental wellness through a variety of services to currently registered students.</Text>
      </Pressable>

      <Pressable
        style={styles.Mbuttons}
        title="Mental Health"
        onPress={() =>
          Linking.openURL(
            "https://www.buffalo.edu/studentlife/life-on-campus/health/medical-care.html"
          )
        }
      >
        <ImageBackground
          source={require("../Components/ResourcesImages/medical-resources.jpeg")}
          style = {{width:120, height:120, marginLeft: "-58%", top: "20%", borderRadius: 30, overflow: "hidden"}}
        ></ImageBackground>
        <Text style={styles.MbuttonTXT}>Medical Resources</Text>
        <Text style={{fontSize: 10, color: "white", borderRadius: 10, alignContent: "left", justifyContent: "center", 
        top: -60, marginLeft: 149, marginRight: 10}}>Whether you’re feeling sick, or you want to stay healthy, we're here to
        take care of you, at your time at UB. </Text>
      </Pressable>

      <Pressable
        style={styles.MMbuttons}
        title="Writing Resources"
        onPress={() =>
          Linking.openURL(
            "https://www.buffalo.edu/writing.html"
          )
        }
      >
        <ImageBackground
          source={require("../Components/ResourcesImages/writing-resource.jpeg")}
          style = {{width:120, height:120, marginLeft: "-58%", top: "24%", borderRadius: 30, overflow: "hidden"}}
        ></ImageBackground>
        <Text style={styles.MbuttonTXT}>Writing Resources</Text>
        <Text style={{fontSize: 10, color: "white", borderRadius: 10, alignContent: "left", justifyContent: "center", 
        top: -60, marginLeft: 150, marginRight: 10}}>Whatever your major or assignment, the Center for Excellence in 
        Writing is here for you! Take advantage of our individual writing consultation service. </Text>
      </Pressable>

      <Pressable
        style={styles.MMMbuttons}
        title="Career Resources"
        onPress={() =>
          Linking.openURL(
            "https://www.buffalo.edu/career.html"
          )
        }
      >
        <ImageBackground
          source={require("../Components/ResourcesImages/career-resources.png")}
          style = {{width:120, height:120, marginLeft: "-58%", top: "28%", borderRadius: 30, overflow: "hidden"}}
        ></ImageBackground>
        <Text style={styles.MbuttonTXT}>Career Resources</Text>
        <Text style={{fontSize: 10, color: "white", borderRadius: 10, alignContent: "left", justifyContent: "center", 
        top: -60, marginLeft: 150, marginRight: 10}}>The Career Design Center gives you new ways to think about 
        designing your next steps, getting the answers you need — and the opportunities you deserve.</Text>
      </Pressable>

      <Pressable
        style={styles.MMMMbuttons}
        title="Advising Resources"
        onPress={() =>
          Linking.openURL(
            "https://advising.buffalo.edu/"
          )
        }
      >
        <ImageBackground
          source={require("../Components/ResourcesImages/advising-resource.jpeg")}
          style = {{width:120, height:120, marginLeft: "-58%", top: "23%", borderRadius: 30, overflow: "hidden"}}
        ></ImageBackground>
        <Text style={styles.MMbuttonTXT}>Advising Resources</Text>
        <Text style={{fontSize: 10, color: "white", borderRadius: 10, alignContent: "left", justifyContent: "center", 
        top: -60, marginLeft: 150, marginRight: 10}}>Advisors offer a personal connection 
        to the university and assist students with a full range of services, resources and support.</Text>
      </Pressable>

      </ScrollView>
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
    height: 150,
    marginLeft: "3%",
    marginRight:"3%",

    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    backgroundColor: "#292e36",
    borderRadius: 30,
    borderColor: "#3265CB",
    borderWidth: 2,

  },
  Mbuttons: {
    height: 150,
    marginLeft: "3%",
    marginRight: "3%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    backgroundColor: "#292e36",
    borderRadius: 30,
    borderColor: "#3265CB",
    borderWidth: 2
  },
  MMbuttons: {
    height: 150,
    marginLeft: "3%",
    marginRight: "3%",    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    backgroundColor: "#292e36",
    borderRadius: 30,
    borderColor: "#3265CB",
    borderWidth: 2
  },
  MMMbuttons: {
    height: 150,
    marginLeft: "3%",
    marginRight: "3%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    backgroundColor: "#292e36",
    borderRadius: 30,
    borderColor: "#3265CB",
    borderWidth: 2
  },
  MMMMbuttons: {
    height: 150,
    marginLeft: "3%",
    marginRight: "3%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: 30,
    backgroundColor: "#292e36",
    borderRadius: 30,
    borderColor: "#3265CB",
    borderWidth: 2
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
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: -65,
    marginLeft: 68
  },
  MbuttonTXT: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: -65,
    marginLeft: 100
  },
  MMbuttonTXT: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    top: -65,
    marginLeft: 113
  },
  buttontxt: {
    fontSize: 10,
    color: "white",
    borderRadius: 10,
    alignContent: "left",
    justifyContent: "center",
    top: -70,
    marginLeft: 140
  },
});
