import { StatusBar } from "expo-status-bar";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Button,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapsScreen from "./Components/MapsScreen.js";
import WelcomeScreen from "./Components/WelcomeScreen.js";
import LoginScreen from "./Components/LoginScreen";
import SignupScreen from "./Components/SignupScreen";
import EventScreen from "./Components/EventScreen";
import AppScreen from "./Components/AppScreen";

import HomeScreen from "./Components/HomeScreen.js";
import ResourceScreen from "./Components/ResourceScreen.js";

//////////////////////////////////////////////////////////////////////////// END OF IMPORTS






export default function App() {

	const Stack = createNativeStackNavigator();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (

		// NavigationContainer contains all screens that we wish to use as a stack 
		// (Meaning you can swipe right from the edge of the screen to go pop the current screen. This is not what we want for the entire app but it works for now)
		// If you make a new screen, write and save your screen as a separate .js file in the Components folder and follow other screen formats and import it above
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Welcome"
				screenOptions={{ headerShown: true }}
			>
				{/* Create a route to the welcome screen */}
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{ headerShown: false }}
				/>

				{/* Create a route to the login screen */}
				<Stack.Screen
					name="login"
					options={{ headerShown: false }}
					component={LoginScreen}
				></Stack.Screen>

				<Stack.Screen 
					name="signup" 
					options={{ headerShown: false }}
					component={SignupScreen}
				></Stack.Screen>

				{/* Create a route for the maps screen */}
				<Stack.Screen
					name="maps"
					component={MapsScreen}
					options={{
						title: "Map",
						headerStyle: {
							backgroundColor: "#3265CB",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontWeight: "normal",
						},
						headerRight: () => (
							<Button
								onPress={() => alert("This is a button!")}
								title="Info"
								color="#fff"
							/>
						),
					}}
				></Stack.Screen>

				<Stack.Screen
					name="events"
					component={EventScreen}
					options={{headerShown:false}}
				></Stack.Screen>

				<Stack.Screen
				name="apps"
				component={AppScreen}
				options={{headerShown:false}}
				></Stack.Screen>
				
				<Stack.Screen
					name="home"
					component={HomeScreen}
					options={{ headerShown: false }}				
				></Stack.Screen>

				<Stack.Screen
					name="resources"
					component={ResourceScreen}
					options={{ headerShown: false }}				
				></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
