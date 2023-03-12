import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, TextInput, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";

Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('WBMZQx3eCRpiyvHoLvRcLC46lyV6yLXTmpG2jY3Z','MSnW5CM6O6sRFHsexOxs7ZpIgpE3GXD846xz9uEg');
Parse.serverURL = 'https://parseapi.back4app.com/';




export default function SignupScreen({ navigation }) {
	const [person, setPerson] = useState(new Parse.Object('Person'));
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, confirmPassword] = useState("");
	const [errorText, setErrorText] = useState("");
	const [errorReuse, setErrorReuse] = useState("");


	function onPressLogin() {


		if (password === confirm) {
			if (errorText !== "") {
				setErrorText("");
			}

			console.log("Passwords match");
			addPerson();
			navigation.navigate("home");
			
		} else {
			setErrorText("Passwords do not match, please try again");
			console.log("Passwords do not match, please try again");
		}
	}
	async function addPerson() {

		let query = new Parse.Query('Person');
		// looping through the users
		let queryResult = await query.find();
		var i=0
		for(i=0; i<queryResult.length;i++){
			var currentP=queryResult[i];
			if(currentP.get('username')==user){
				setErrorReuse("You already have an account!\nPlease sign in");
				navigation.navigate("login")
				return;
			}
		}
		try {
		  //create a new Parse Object instance
		  const newPerson = new Parse.Object('Person');
		  //define the attributes you want for your Object
		  newPerson.set('username', user);
		  newPerson.set('password', password);
		  //save it on Back4App Data Store
		  await newPerson.save();
		} catch (error) {
		  console.log('Error saving new person: ', error);
		}
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
			<Text 
				style={styles.welbak}>{"Create an\n account"}
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

			{/* Confirm Password Text Field */}
			<View style={styles.usrPass}>
				<TextInput
					style={styles.userTxt}
					placeholder="Confirm Password"
					placeholderTextColor="gray"
					onChangeText={(confirm) => confirmPassword(confirm)}
				></TextInput>
			</View>

			{/* Signup button */}
			<Pressable style={styles.signupBtn} title="ENTER" onPress={onPressLogin}>
				<Text style={styles.buttons}>Sign Up</Text>
			</Pressable>

			<Text 
				style={styles.smallText}>{"Already have an account?"}
			</Text>
			<Pressable style={styles.loginButton} title="GoToLogin" onPress={() =>navigation.navigate("login")} >
				<Text style={styles.loginSmall}> {"Log in here" }</Text>
			</Pressable>

			{/* Error Message */}
			<Text style={{ paddingTop: 8, paddingBottom: 10, color: "red" }}>
				{errorText}
			</Text>
			
			{/* Error Message */}
			<Text style={{ paddingTop: 8, paddingBottom: 10, color: "red" }}>
				{errorReuse}
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
		borderRadius: 20,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#393939",
		paddingHorizontal: 0,
		marginTop: 100,
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
		fontSize: 15,
		color: "white",
	},
	userTxt: {
		color: "#FFFFFF",
		marginLeft: 10,
		fontSize: 15,
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
		marginTop: -300,
		marginBottom: 40,
		justifyContent: "center",
	},
	welcomeDown: {
		marginTop: -40,
		height: 400,
		width: 400,
	},
	welcomeUp: {
		height: 400,
		width: 400,
	},
	smallText:{
		marginTop: 15,
		fontSize: 12,
		color: "white",
		justifyContent: "center",
	},
	loginButton:{
		justifyContent:"center",
		color:"blue",
		height:17, 
		alignContent:"center",

	},
	loginSmall:{
		fontSize: 12,
		color:"#3265CB",
	},
});
