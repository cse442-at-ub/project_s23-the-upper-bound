import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";






export default function HomeScreen({ navigation }) {


    function onPressMapButton(content) {

        switch (content) {

            case "buildings":
                navigation.navigate("maps", {content: content})
                break;
            
            case "printers":
                console.log("content to pass: ", content)
                navigation.navigate("maps", {content: content})
                break;
            
            default:
                break
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
                        <Text style={styles.buttons}>Buildings</Text>
                    </Pressable>
                </View>

                <View style= {styles.secondButtonRow}>
                    <Pressable
                        style={styles.mapButtons}
                        title="Tunnels"
                        onPress={() => onPressMapButton("tunnels")}
                    >
                        <Text style={styles.buttons}>Tunnels</Text>
                    </Pressable>

                    
                    <Pressable
                        style={styles.mapButtons}
                        title="Blue Lights"
                        onPress={() => onPressMapButton("blue Lights")}
                    >
                        <Text style={styles.buttons}>Blue Lights</Text>
                    </Pressable>
                </View>

                <View style= {styles.thirdButtonRow}>
                    <Pressable
                        style={styles.closerMapButtons}
                        title="Food"
                        onPress={() => onPressMapButton("food")}
                    >
                        <Text style={styles.buttons}>Food</Text>
                    </Pressable>


                    <Pressable
                        style={styles.closerMapButtons}
                        title="printers"
                        onPress={() => onPressMapButton("printers")}
                    >
                        <Text style={styles.buttons}>Printers</Text>
                    </Pressable>
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
        marginTop: 100
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

    thirdButtonRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 10,
    },

    mapButtons: {
		borderRadius: 100,
        height: 80,
        width: 80,
		alignItems: "center",
		justifyContent: "center",
        backgroundColor: "#3265CB",
        marginLeft:25,
        marginRight:25
    },
    
    closerMapButtons: {
        marginLeft:10,
        marginRight: 10,
        borderRadius: 100,
        height: 80,
        width: 80,
		alignItems: "center",
		justifyContent: "center",
        backgroundColor: "#3265CB",
    },
	
    
    


	buttons: {
		fontSize: 18,
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
	},
});
