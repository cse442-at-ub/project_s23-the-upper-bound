import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground, ScrollView} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Header } from "react-native-elements";


{/* need to run npx expo install expo-linking , npx expo install @expo/html-elements on machine , npx expo install expo-web-browser*/}
export default function AppScreen({navigation}){
    
    return(
        <View style={styles.container}>
          <ScrollView>
            <Header
            backgroundColor="#3265CB"
            centerComponent={{ text: 'Recommended Apps', style: { color: '#fff', fontSize: 17 } }}
            />

            <View style={styles.topButtonRow}>
            <View style={styles.buttonAndTextView}>
              <Pressable
                style={styles.wepa}
                title="Wepa Printing"
                onPress={() => Linking.openURL('https://www.buffalo.edu/ubit/services/print-anywhere.html')}
                >
                <ImageBackground
                source={require("../Components/AppImages/wepa.png")}
                style = {{width:140, height:140, borderRadius: 100, overflow: "hidden"}}
                ></ImageBackground>
              </Pressable>
              <Text style={styles.underButtonText}>{"WEPA"}</Text>
              </View>
              <View style={styles.buttonAndTextView}>

              <Pressable
                style={styles.wepa}
                title="Navigate"
                onPress={() => Linking.openURL('https://www.buffalo.edu/studentsuccess/succeed/navigate.html')}
                >
                <ImageBackground
                source={require("../Components/AppImages/navigate.png")}
                style = {{width:140, height:140, borderRadius: 100, overflow: "hidden"}}
                ></ImageBackground>
              </Pressable>
              <Text style={styles.underButtonText}>{"Navigate"}</Text>
              </View>

            </View>

            <View style = {styles.secondButtonRow}>
            <View style={styles.buttonAndTextView}>

            <Pressable
              style={styles.get}
              title="GET App"
              onPress={() => Linking.openURL('https://myubcard.com/card/manage-account')}
              >
              <ImageBackground
              source={require("../Components/AppImages/get.png")}
              style = {{width:145, height:145, borderRadius: 100, overflow: "hidden"}}
              ></ImageBackground>
            </Pressable>
            <Text style={styles.underButtonText2}>{"GET"}</Text>
            </View>

            <View style={styles.buttonAndTextView}>
            <Pressable
              style={styles.get}
              title="Duo Mobile"
              onPress={() => Linking.openURL('https://www.buffalo.edu/ubit/duo')}
              >
              <ImageBackground
              source={require("../Components/AppImages/duo.png")}
              style = {{width:145, height:145, borderRadius: 100, overflow: "hidden"}}
              ></ImageBackground>
            </Pressable>
            <Text style={styles.underButtonText2}>{"DUO"}</Text>
            </View>

            </View>

            <View style = {styles.thirdButtonRow}>
            <View style={styles.buttonAndTextView}>
              <Pressable
                style={styles.rewards}
                title="UB Rewards"
                onPress={() => Linking.openURL('https://ubbulls.com/sports/2021/8/3/student-mobile-tickets')}
                >
                <ImageBackground
                source={require("../Components/AppImages/rewards.png")}
                style = {{width:140, height:140, borderRadius: 100, overflow: "hidden"}}
                ></ImageBackground>
              </Pressable>
              <Text style={styles.underButtonText2}>{"Rewards"}</Text>
              </View>

              <View style={styles.buttonAndTextView}>

              <Pressable
                style={styles.rewards}
                title="Blackboard"
                onPress={() => Linking.openURL('https://ublearns.blackboard.com/')}
                >
                <ImageBackground
                source={require("../Components/AppImages/blackboard.png")}
                style = {{width:140, height:140, borderRadius: 100, overflow: "hidden"}}
                ></ImageBackground>
              </Pressable>
              <Text style={styles.underButtonText2}>{"Blackboard"}</Text>
            </View>
            </View>


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
    fontSize:25,
    paddingBottom:0,
    top:-80,
	},
  buttonAndTextView: {
		marginLeft: 10,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},
  
    wepa: {
	
      height: 150,
      width: 150,
      justifyContent: "center",
      alignItems: "center",
      top: 30,
      left: 0,
      backgroundColor: "#292e36",
      borderRadius: 100,
      borderColor: "#3265CB",
      borderWidth: 2
	},
  get: {
	
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: 60,
    left: 0,
    backgroundColor: "#292e36",
    borderRadius: 100,
    borderColor: "#3265CB",
    borderWidth: 2
},
  rewards: {
    
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    left: 0,
    backgroundColor: "#292e36",
    borderRadius: 100,
    borderColor: "#3265CB",
    borderWidth: 2
  },
  underButtonTextRow: {
		flexDirection: "row",
		fontSize: 12,
		color: "#d9d9d9",
		alignItems: "center",
		justifyContent: "space-between",
	},
  underButtonText: {
		fontSize: 12,
		color: "#d9d9d9",
		marginTop: 40,
	},
  underButtonText2: {
		fontSize: 12,
		color: "#d9d9d9",
		marginTop: 70,
	},
  navigate: {
	
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    top: -100,
    left: 30,
    backgroundColor: "#292e36",
    borderRadius: 100,
    borderColor: "#3265CB",
    borderWidth: 2
},
    buttons: {
		fontSize: 20,
		color: "white",
	},
    welcomeUp: {
		height: 200,
		width: 300,
		marginLeft: -100,
        justifyContent:"center",
        transform: [{ scaleX: -1 }]
	},

    logo: {
		width: 300,
		height: 300,
		top:-100,
		alignItems: "center",
	},

  topButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 30,
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
	},

  secondButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
	},
	thirdButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
	},



});