import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";
import { Marker } from 'react-native-maps';





export default function MapsScreen(content,{ navigation }) {
	const [location, setLocation] = useState({});
	var contentToLoad = [{}]


	// Various printer locations across campus
	const PrinterLocations = [
		{latitude : 43.000555, longitude : -78.787997},
		{latitude : 42.953372, longitude : -78.818261},
		{latitude : 42.953411, longitude : -78.818249},
		{latitude : 42.953405, longitude : -78.818236},
		{latitude : 42.953585, longitude : -78.817192},
		{latitude : 42.998614, longitude : -78.7945269}
	];


	if ( content.route.params["content"] === "printers") {
		contentToLoad = PrinterLocations
	}
	
	
	console.log("markers",contentToLoad, content.route.params["content"])

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

	PrinterLocations.map((marker, index) => console.log("Creating marker #" + index, "at location: ", marker))

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
		>
			{ contentToLoad != [{}] &&
				
					contentToLoad.map((marker, index) => (
						// Places a marker for each object in PrinterLocations
						<Marker
							key={index}
							coordinate={marker}
							//image={{uri:'../assets/map-printer.png'}}
							image={require('../assets/map-printer.png')}
						/>
		
		))}
			
		</MapView>
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
