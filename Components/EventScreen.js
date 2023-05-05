import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground, TouchableHighlight} from "react-native";
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
            <TouchableHighlight underlayColor={"#1e2c70"}
            style={styles.signupBtn}
            title="Check out CSE Events"
            onPress={() => Linking.openURL('https://engineering.buffalo.edu/computer-science-engineering/news-and-events/events.html')}
            >
                <Text style={styles.buttons}>Computer Science events!</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={"#1e2c70"}
            style={styles.signupBtn}
            title="Check out sport events"
            onPress={() => Linking.openURL('https://ubbulls.com/calendar?date=3/6/2023&vtype=list')}
            >
            <Text style={styles.buttons}>See upcoming sport events!</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={"#1e2c70"}
            style={styles.signupBtn}
            title="Student life events"
            onPress={() => Linking.openURL('https://www.buffalo.edu/studentlife/life-on-campus/clubs-and-activities/event-calendars/student-life-events.html')}
            >
            <Text style={styles.buttons}>Student life activities!</Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={"#1e2c70"}
            style={styles.signupBtn}
            title="Student life events"
            onPress={() => Linking.openURL('https://buffalo.campuslabs.com/engage/events')}
            >
            <Text style={styles.buttons}>Club activities!</Text>
            </TouchableHighlight>
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
		width: "90%",
		borderRadius: 20,
		height: 100,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#191b26",
		elevation: 3,
		marginTop: 20,
        top:-30,
        borderColor: "#3265CB",
        borderWidth: 2,
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