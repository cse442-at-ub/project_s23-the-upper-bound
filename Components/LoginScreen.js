import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, TextInput, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('WBMZQx3eCRpiyvHoLvRcLC46lyV6yLXTmpG2jY3Z','MSnW5CM6O6sRFHsexOxs7ZpIgpE3GXD846xz9uEg');
Parse.serverURL = 'https://parseapi.back4app.com/';
import { NavigationContainer } from "@react-navigation/native";




export default function LoginScreen({ navigation }) {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState("");
	const [error, setError] = useState("");

	function onPressLogin() {
		fetchPerson();
		console.log("Correct username and password");
		
	}
	async function fetchPerson() {
		if (user==""){
			setError("Please enter a username")
			return;
		}
		if(password==""){
			setError("Please enter a password")
			return;
		}
		//create your Parse Query using the Person Class you've created
		let query = new Parse.Query('Person');
		//run the query to retrieve all objects on Person class, optionally you can add your filters
		let queryResult = await query.find();
		var i=0
		var found=false
		for(i=0; i<queryResult.length;i++){
			var currentP=queryResult[i];
			
			if(currentP.get('username')==user){
				if(currentP.get('password')==password){
					navigation.navigate("home");
					found=true
					return;
				}
				else{
					setError("Incorrect Password\nPlease try again")
					console.log("incorrect password");
					return;
				}
			}
			//navigation.navigate("home")

		}
		if(found==false){
		setError("User does not exist\nPlease sign up first!");
		}
		//navigation.navigate("signup")
		console.log("user does not exist")
	}

	console.log("Current username: ", user);
	console.log("Current password: ", password);

	return (
		<View style={styles.container}>

			<ImageBackground
				source={require("../assets/some_tri.png")}
				style={styles.welcomeUp}
			></ImageBackground>

			{/* Main Text */}
			<Text style={styles.welbak}>{"Welcome\n\tBack"}</Text>

			{/* Error Message */}
			<Text style={{ paddingTop: 8, paddingBottom: 10, color: "red" }}>
				{errorText}
			</Text>

			{/* Username Text Field */}
			<View style={styles.usrPass}>
				<TextInput
					style={styles.userTxt}
					placeholder="Username"
					placeholderTextColor="gray"
					onChangeText={(user) => setUser(user)}
				></TextInput>

			</View>

			{/* Password Text Field */}
			<View style={styles.usrPass}>
				<TextInput
					style={styles.userTxt}
					placeholder="Password"
					placeholderTextColor="gray"
					onChangeText={(password) => setPassword(password)}
				></TextInput>
			</View>

			{/* Login button */}
			<Pressable style={styles.loginBtn} title="ENTER" onPress={onPressLogin}>
				<Text style={styles.buttons}>Login</Text>
			</Pressable>


			<Text 
				style={styles.smallText}>{"Need an account?"}
			</Text>
			<Pressable style={styles.signupButton} title="GoToLogin" onPress={() =>navigation.navigate("signup")}>
				<Text style={styles.signupSmall}> {"Sign up here"}</Text>
			</Pressable>

			<Text style={{ paddingTop: 8, paddingBottom: 10, color: "red" }}>
				{error}
			</Text>

			<ImageBackground
				source={require("../assets/WelBot.png")}
				style={styles.welcomeDown}
			></ImageBackground>
		</View>
	);
}

// Everything below is used to style this screen
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		alignItems: "center",
	},
	logo: {
		width: 300,
		height: 300,
		marginBottom: 500,
		alignItems: "center",
	},

	loginBtn: {
		width: "70%",
		borderRadius: 7,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#393939",
		borderColor: "#FFFFFF",
		elevation: 3,
		marginTop: 20,
	},

	signupBtn: {
		width: "70%",
		borderRadius: 7,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3265CB",
		borderColor: "#FFFFFF",
		elevation: 3,
		marginTop: 20,
	},
	buttons: {
		fontSize: 20,
		color: "white",
	},
	userTxt: {
		color: "#FFFFFF",
		marginLeft: 10,
		fontSize: 15,
	},
	smallText:{
		marginTop: 15,
		fontSize: 12,
		color: "white",
		justifyContent: "center",
	},
	usrPass: {
		backgroundColor: "#1E1E1E",
		borderBottomColor: "#F9F6EE",
		borderBottomWidth: 2,
		borderRadius: 5,
		width: "70%",
		height: 50,
		marginBottom: 30,
		alignContent: "center",
		justifyContent: "center",
	},
	welbak: {
		fontSize: 25,
		color: "white",
		marginTop: -225,
		marginBottom: 10,
		justifyContent: "center",
	},
	welcomeDown: {
		marginTop: 0,
		height: 400,
		width: 400,
	},
	welcomeUp: {
		height: 400,
		width: 400,
	},
	signupButton:{
		justifyContent:"center",
		//color:"blue",
		height:20, 
		width:100,
		
		//alignContent:"center",
	},
	signupSmall:{
		fontSize: 12,
		color:"#3265CB",
	},
});

