import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";






export default function LoginScreen({ navigation }) {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [errorText, setErrorText] = useState("");

	function onPressLogin() {
		if (user === "Username" && password === "Password") {
			if (errorText !== "") {
				setErrorText("");
			}
			navigation.navigate("home")


			console.log("Correct username and password");
		} else {
			setErrorText("Incorrect username and password combination");
			console.log("Incorrect username and password combination");
		}
	}

	console.log("Current username: ", user);
	console.log("Current password: ", password);

	return (
		<View style={styles.container}>
			{/* Main Text */}
			<Text style={styles.welbak}>{"Welcome back"}</Text>

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

				{/* Password Text Field */}
			</View>

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
		borderRadius: 20,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3265CB",
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
		fontSize: 20,
	},
	usrPass: {
		backgroundColor: "#1E1E1E",
		borderBottomColor: "#393939",
		borderBottomWidth: 2,
		borderRadius: 5,
		width: "70%",
		height: 50,
		marginBottom: 30,
		alignContent: "center",
		justifyContent: "center",
	},
	welbak: {
		fontSize: 36,
		color: "white",
		marginTop: 200,
		justifyContent: "center",
	},
});

