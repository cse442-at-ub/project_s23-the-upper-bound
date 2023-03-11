import { StatusBar } from "expo-status-bar";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";






export default function HomeScreen({ navigation }) {
	function onPressMapButton(content) {
		switch (content) {
			case "buildings":
				navigation.navigate("maps", { content: content });
				break;

			case "food":
				console.log("content to pass: ", content);
				navigation.navigate("maps", { content: content });
				break;

			case "printers":
				console.log("content to pass: ", content);
				navigation.navigate("maps", { content: content });
				break;

			default:
		}
	}

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

				<View style={styles.topButtonRow}>
					<Pressable
						style={styles.buildingsButton}
						title="Buildings"
						onPress={() => onPressMapButton("buildings")}
					>
						<Text style={styles.buttons}>🏫</Text>
					</Pressable>
				</View>
				<Text style={styles.underButtonText}>Buildings</Text>

				<View style={styles.secondButtonRow}>
					<View style={styles.buttonAndTextView}>
						<Pressable
							style={styles.mapButtons}
							title="Tunnels"
							onPress={() => onPressMapButton("tunnels")}
						>
							<Text style={styles.buttons}>🌉</Text>
						</Pressable>
						<Text style={styles.underButtonText}>Tunnels</Text>
					</View>

					<View style={styles.buttonAndTextView}>
						<Pressable
							style={styles.mapButtons}
							title="Blue Lights"
							onPress={() => onPressMapButton("blue Lights")}
						>
							<Text style={styles.buttons}>🚔</Text>
						</Pressable>
						<Text style={styles.underButtonText}>Blue Lights</Text>
					</View>
				</View>

				<View style={styles.underButtonTextRow}></View>

				<View style={styles.thirdButtonRow}>
					<View style={styles.buttonAndTextViewRow3}>
						<Pressable
							style={styles.closerMapButtons}
							title="Food"
							onPress={() => onPressMapButton("food")}
						>
							<Text style={styles.buttons}>🍔</Text>
						</Pressable>
						<Text style={styles.underButtonText}>Food</Text>
					</View>

					<View style={styles.buttonAndTextViewRow3}>
						<Pressable
							style={styles.closerMapButtons}
							title="printers"
							onPress={() => onPressMapButton("printers")}
						>
							<Text style={styles.buttons}>🖨</Text>
						</Pressable>
						<Text style={styles.underButtonText}>Printers</Text>
					</View>
				</View>
                <View style={styles.thirdButtonRow}>
					<View style={styles.buttonAndTextViewRow3}>
						<Pressable
							style={styles.closerMapButtons}
							title="Food"
							onPress={() => navigation.navigate("events")}
						>
							<Text style={styles.buttons}>📃</Text>
						</Pressable>
						<Text style={styles.underButtonText}>Events</Text>
					</View>
				</View>

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

	topButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 100,
	},

	buildingsButton: {
		borderRadius: 100,
		height: 80,
		width: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3265CB",
		paddingHorizontal: 0,
	},

	secondButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
	},

	buttonAndTextView: {
		marginLeft: 25.5,
		marginRight: 25.5,
		alignItems: "center",
		justifyContent: "center",
	},

	thirdButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
	},

	buttonAndTextViewRow3: {
		marginLeft: 10,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	mapButtons: {
		borderRadius: 100,
		height: 80,
		width: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3265CB",
	},

	closerMapButtons: {
		borderRadius: 100,
		height: 80,
		width: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3265CB",
	},

	buttons: {
		fontSize: 50,
		color: "white",
	},

	underButtonText: {
		fontSize: 12,
		color: "#d9d9d9",
		marginTop: 5,
	},

	underButtonTextRow: {
		flexDirection: "row",
		fontSize: 12,
		color: "#d9d9d9",
		alignItems: "center",
		justifyContent: "space-between",
	},

	welcomeUp: {
		height: 200,
		width: 150,
		marginLeft: 250,
	},
	welcomeDown: {
		marginBottom: 0,
		height: 400,
		width: 400,
	},
    thirdButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
	},
});