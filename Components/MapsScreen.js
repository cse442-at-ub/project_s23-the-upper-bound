import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";






export default function MapsScreen({ navigation }) {
	const [location, setLocation] = useState({});

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
			setLocation(loc);
		})();
	}, []);

	console.log("Location of user: ", location);

	return (
		// Renders the map 
		<MapView
			userInterfaceStyle={"dark"}
			style={styles.container}
			showsUserLocation={true}

			// This is the location the map will load to
			initialRegion={{
				latitude: 43.000288,
				longitude: -78.786316,
				latitudeDelta: 0.00522,
				longitudeDelta: 0.00421,
			}}
		/>
	);
}

// Everything below is used to style this screen
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		alignItems: "center",
	},
});
