import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";






export default function WelcomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/path_icon.png")}
				style={styles.logo}
			>
				<ImageBackground
					source={require("../assets/BlueTri.png")}
					style={styles.welcomeUp}
				></ImageBackground>
				<Pressable
					style={styles.loginBtn}
					title="home"
					onPress={() => navigation.navigate("home")}
				>
					<Text style={styles.buttons}>Home </Text>
				</Pressable>
			
				<ImageBackground
					source={require("../assets/WelBot.png")}
					style={styles.welcomeDown}
				></ImageBackground>
			</ImageBackground>
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
	welcomeUp: {
		height: 200,
		width: 150,
		marginLeft: 250,
	},
	welcomeDown: {
		marginTop: 30,
		height: 400,
		width: 400,
		bottom:"-10%"
	},
});