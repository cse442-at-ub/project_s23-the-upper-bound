import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground, Animated, Image } from "react-native";
import React, { useEffect, useState, useRef } from "react";

export default function HomeScreen({ navigation }) {
	const hide = false;
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

			case "tunnels":
				console.log("content to pass: ", content);
				navigation.navigate("tunnels", { content: content });
				break;

			case "blue Lights":
				console.log("content to pass: ", content);
				navigation.navigate("maps", { content: content });
				break;
		default:
		}
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={require("../assets/path_icon.png")} style={styles.logo}>
				<ImageBackground source={require("../assets/BlueTri.png")} style={styles.welcomeUp}></ImageBackground>
				
				<LoadAnimation>
				<View style={styles.topButtonRow}>
					<View style={styles.buttonAndTextView}>
						<Pressable style={styles.buttonBackground} title="Tunnels" onPress={() => onPressMapButton("tunnels")}>
						<Image style={styles.buttons} source={require("../assets/tunnel-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Tunnels</Text>
					</View>

					<View style={styles.buttonAndTextView}>
						<Pressable style={styles.buttonBackground} title="Buildings" onPress={() => onPressMapButton("buildings")}>
							<Image style={styles.buttons} source={require("../assets/buildings-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>{"Buildings"}</Text>
					</View>

					<View style={styles.buttonAndTextView}>
						<Pressable style={styles.buttonBackground} title="Blue Lights" onPress={() => onPressMapButton("blue Lights")}>
							<Image style={styles.buttons} source={require("../assets/bluelights-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Blue Lights</Text>
					</View>

				</View>
				</LoadAnimation>

				<LoadAnimation>
				<View style={styles.secondButtonRow}>
					<View style={styles.buttonAndTextViewRow3}>
						<Pressable style={styles.buttonBackground} title="Dining Information" onPress={() => navigation.navigate("dining")}>
							<Image style={styles.buttons} source={require("../assets/dining-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>{"   Dining Info"}</Text>
					</View>

					<View style={styles.buttonAndTextViewRow3}>
						<Pressable style={styles.buttonBackground} title="Food" onPress={() => onPressMapButton("food")}>
							<Image style={styles.buttons} source={require("../assets/food-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Food</Text>
					</View>

					<View style={styles.buttonAndTextViewRow3}>
						<Pressable style={styles.buttonBackground} title="Food" onPress={() => navigation.navigate("events")}>
							<Image style={styles.buttons} source={require("../assets/event-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Events</Text>
					</View>
				</View>
				</LoadAnimation>
			
				<View style={styles.underButtonTextRow}></View>

				<LoadAnimation>
				<View style={styles.thirdButtonRow}>

					<View style={styles.buttonAndTextViewRow3}>
						<Pressable style={styles.buttonBackground} title="printers" onPress={() => onPressMapButton("printers")}>
							<Image style={styles.buttons} source={require("../assets/printer-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Printers</Text>
					</View>

					<View style={styles.buttonAndTextViewRow3}>
						<Pressable style={styles.buttonBackground} title="Apps" onPress={() => navigation.navigate("apps")}>
							<Image style={styles.buttons} source={require("../assets/apps-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Apps</Text>
					</View>

					<View style={styles.buttonAndTextViewRow3}>
						<Pressable style={styles.buttonBackground} title="Resource" onPress={() => navigation.navigate("resources")}>
							<Image style={styles.buttons} source={require("../assets/resources-button.png")}></Image>
						</Pressable>
						<Text style={styles.underButtonText}>Resources</Text>
					</View>
				</View>
				</LoadAnimation>


				<ImageBackground source={require("../assets/WelBot.png")} style={styles.welcomeDown}></ImageBackground>
			</ImageBackground>
		</View>
	);
}

const LoadAnimation = props => {
	const buttonAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(buttonAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true
		}).start();
	}, [buttonAnim]);

	return (
		<Animated.View
			style={{
				...props.style,
				opacity: buttonAnim,
			}}>
			{props.children}
		</Animated.View>
	)
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
		marginTop: 125,
	},

	buttonBackground: {
		borderRadius: 25,
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
		marginTop: 20,
	},

	buttonAndTextView: {
		marginLeft: 15,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	thirdButtonRow: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
	},

	buttonAndTextViewRow3: {
		marginLeft: 15,
		marginRight: 10,
		alignItems: "center",
		justifyContent: "center",
	},

	buttons: {
		fontSize: 50,
		width: 60,
		height: 60,
		color: "white",
		alignContent: "center",
		justifyContent: "center",
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
});
