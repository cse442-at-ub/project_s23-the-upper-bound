import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

{/* need to run npx expo install expo-linking , npx expo install @expo/html-elements on machine , npx expo install expo-web-browser*/}
export default function AppScreen({navigation}){
    
    return(
        <View style={styles.container}>
            <ImageBackground
					source={require("../assets/BlueTri.png")}
					style={styles.welcomeUp}
				></ImageBackground>
            <Text style={styles.userTxt}>Recommended Apps</Text> 
            <Pressable
            style={styles.signupBtn}
            title="Wepa Printing"
            onPress={() => Linking.openURL('https://www.buffalo.edu/ubit/services/print-anywhere.html')}
            >
            <Text style={styles.buttons}>Wepa Printing</Text>
             </Pressable>
             <Pressable
            style={styles.signupBtn}
            title="GET App"
            onPress={() => Linking.openURL('https://myubcard.com/card/manage-account')}
            >
            <Text style={styles.buttons}>GET App</Text>
             </Pressable>

             <Pressable
            style={styles.signupBtn}
            title="UB Rewards"
            onPress={() => Linking.openURL('https://ubbulls.com/sports/2021/8/3/student-mobile-tickets')}
            >
            <Text style={styles.buttons}>UB Rewards</Text>
             </Pressable>

             <Pressable
            style={styles.signupBtn}
            title="Navigate"
            onPress={() => Linking.openURL('https://www.buffalo.edu/studentsuccess/succeed/navigate.html')}
            >
            <Text style={styles.buttons}>UB Navigate</Text>
             </Pressable>

             <ImageBackground
				source={require("../assets/path_icon.png")}
				style={styles.logo}
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
        fontSize:25,
        paddingBottom:0,
        top:-80,
	},
    signupBtn: {
		width: "70%",
		borderRadius: 20,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3265CB",
		elevation: 3,
		marginTop: 60,
        top:-100,
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





});