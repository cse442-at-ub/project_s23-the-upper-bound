import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground} from "react-native";
import React, { useEffect, useState } from "react";
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

{/* need to run npx expo install expo-linking , npx expo install @expo/html-elements on machine , npx expo install expo-web-browser*/}
export default function EventScreen({navigation}){
    
    return(
        <View style={styles.container}>
            <ImageBackground
					source={require("../assets/BlueTri.png")}
					style={styles.welcomeUp}
				></ImageBackground>
            <Text style={styles.userTxt}>Upcoming Events</Text> 
            <Pressable
            style={styles.signupBtn}
            title="Check out CSE Events"
            onPress={() => Linking.openURL('https://engineering.buffalo.edu/computer-science-engineering/news-and-events/events.html')}
            >
                <Text style={styles.buttons}>Check out what CSE is up to!</Text>
             </Pressable>
             <Pressable
            style={styles.signupBtn}
            title="Check out sport events"
            onPress={() => Linking.openURL('https://ubbulls.com/calendar?date=3/6/2023&vtype=list')}
            >
            <Text style={styles.buttons}>See upcoming sport events!</Text>
             </Pressable>

             <Pressable
            style={styles.signupBtn}
            title="Student life events"
            onPress={() => Linking.openURL('https://www.buffalo.edu/studentlife/life-on-campus/clubs-and-activities/event-calendars/student-life-events.html')}
            >
            <Text style={styles.buttons}>Student life activities!</Text>
             </Pressable>

             <Pressable
            style={styles.signupBtn}
            title="Student life events"
            onPress={() => Linking.openURL('https://buffalo.campuslabs.com/engage/events')}
            >
            <Text style={styles.buttons}>UB club events!</Text>
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
        fontSize:40,
        paddingBottom:0,
        top:-90,
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
		marginLeft: 100,
        justifyContent:"center",
	},

    logo: {
		width: 300,
		height: 300,
		top:-100,
		alignItems: "center",
	},





});