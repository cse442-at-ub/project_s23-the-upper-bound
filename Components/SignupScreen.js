import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";






export default function SignupScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.welbak}>
				{"To\n"}
				{"Be Added...\n"}
			</Text>
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
});
