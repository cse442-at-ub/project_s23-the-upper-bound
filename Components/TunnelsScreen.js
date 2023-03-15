import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import MapView, {PROVIDER_GOOGLE,} from "react-native-maps";
import * as Location from "expo-location";
import { Marker, Polygon } from "react-native-maps";
import { mapStyle } from "../Constants/MapConstants";
import {
	baldyHall, baldyHallMarker, oBrianHall, oBrianHallMarker,
	lockwood, lockwoodMarker, parkHallMarker, parkHall, jacobsManagementMarker, jacobsManagement
} from "../Constants/TunnelConstants";






export default function TunnelsScreen(content, { navigation }) {
	const [location, setLocation] = useState({});
	const [prompt, setPrompt] = useState("");

	var contentToLoad = [{}];

	const tunnelLocations = [];

	// Should be in a useEffect but I can't get it to work :(
	switch (content.route.params["content"]) {
		case "tunnels":
			console.log("tunnels prop passed successfully");
			break;

		default:
			console.log("error in content selection");
	}

	// Used to ask for user for location permissions
	// If permission has been granted, continuously update their location while the map is rendered
	useEffect(() => {
		(async () => {
			// Get location while app is being used
			let { status } = await Location.requestForegroundPermissionsAsync();

			// Error checking
			if (status == "granted") {
				console.log("Permission successful!");
			} else {
				console.log("Permission NOT granted!");
			}

			// Save current location
			const loc = await Location.getCurrentPositionAsync();
			console.log(loc);
			console.log(loc.coords.latitude);
			currentLocation.latitude = loc.coords.latitude;
			currentLocation.longitude = loc.coords.longitude;
			console.log(currentLocation);
			setLocation(loc);
		})();
	}, []);

	var currentLocation = {
		latitude: 0.0,
		longitude: 0.0,
		latitudeDelta: 0.0041,
		longitudeDelta: 0.0021,
	};

	console.log("Location of user: ", location);

	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				showsUserLocation={true}
				showsMyLocationButton={true}
				style={styles.mapViewStyle}
				customMapStyle={mapStyle}
				showsIndoors={false}
				loadingEnabled={true}
				showsCompass={true}
				// This is the location the map will load to
				initialRegion={{
					latitude: 43.000288,
					longitude: -78.786316,
					latitudeDelta: 0.00522,
					longitudeDelta: 0.00421,
				}}
			>
				{/* O'Brian Hall */}
				<Marker coordinate={oBrianHallMarker} onPress={() => setPrompt("Tapped on O'Brian Hall")}>
					<Text style={styles.markerStyle}>{"O'Brian Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={oBrianHall.coordinates}
					tappable={true}
					onPress={() => setPrompt("Tapped on O'Brian Hall")}
				></Polygon>

				{/* Baldy Hall*/}
				<Marker coordinate={baldyHallMarker} onPress={() => setPrompt("Tapped on Baldy Hall")}>
					<Text style={styles.markerStyle}>{"Baldy Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={baldyHall.coordinates}
					tappable={true}
					onPress={() => setPrompt("Tapped on Baldy Hall")}
				></Polygon>

				{/* Lockwood Library */}
				<Marker coordinate={lockwoodMarker} onPress={() => setPrompt("Tapped on Lockwood Library")}>
					<Text style={styles.markerStyle}>{"Lockwood\n Library"}</Text>
				</Marker>
				<Polygon
					coordinates={lockwood.coordinates}
					tappable={true}
					onPress={() => setPrompt("Tapped on Lockwood Library")}
				></Polygon>

				{/* Park Hall */}
				<Marker coordinate={parkHallMarker} onPress={() => setPrompt("Tapped on Park Hall")}>
					<Text style={styles.markerStyle}>{"Park Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={parkHall.coordinates}
					tappable={true}
					onPress={() => setPrompt("Tapped on Park Hall")}
				></Polygon>

				{/* Jacobs Management Building */}
				<Marker coordinate={jacobsManagementMarker} onPress={() => setPrompt("Tapped on Jacobs Management Center")}>
									<Text style={styles.markerStyle}>{"Jacobs\nManagement\nCenter"}</Text>
								</Marker>
								<Polygon
									coordinates={jacobsManagement.coordinates}
									tappable={true}
									onPress={() => setPrompt("Tapped on Park Hall")}
								></Polygon>




				{contentToLoad != [{}] &&
					contentToLoad.map((marker, index) => (
						// Places a marker for each object in PrinterLocations
						<Marker
							key={index}
							coordinate={marker}
							title={marker.title}
							//image={{uri:'../assets/map-printer.png'}}
							//image={require("../assets/map-printer.png")}
						></Marker>
					))}
			</MapView>

			<View style={styles.promptViewStyle}>
				<Text style={styles.promptText}>{prompt}</Text>
			</View>
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

	mapViewStyle: {
		width: "100%",
		height: "80%",
	},

	promptViewStyle: {
		width: "100%",
		height: "20%",
		backgroundColor: "#1E1E1E",
		color: "white",
	},

	promptText: {
		color: "white",
	},
	markerStyle: {
		fontSize: 12,
		color: "white",
		textAlign: "center"
	},
});
