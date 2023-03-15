import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { Marker, Polygon } from "react-native-maps";
import { mapStyle } from "../Constants/MapConstants";
import { baldyHall, oBrianHall } from "../Constants/TunnelConstants";




export default function TunnelsScreen(content, { navigation }) {
	const [location, setLocation] = useState({});
	
	var contentToLoad = [{}];

	

	const tunnelLocations = [];
	
	
	// Should be in a useEffect but I can't get it to work :(
	switch (content.route.params["content"]) {
		case "tunnels":
			console.log("tunnels prop passed successfully")
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
            currentLocation.latitude = loc.coords.latitude
            currentLocation.longitude = loc.coords.longitude
            console.log(currentLocation);
			setLocation(loc);
		})();
    }, []);
    
    var currentLocation = {
        latitude: 0.0,
        longitude: 0.0,
        latitudeDelta: 0.0041,
        longitudeDelta: 0.0021
        };

    

	console.log("Location of user: ", location);

	return (
		// Renders the map
		<MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}

            showsMyLocationButton={true}

			style={styles.container}
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
                        <Pressable onPress={() => { 
  console.log("pressed this poly");
}}>

				<Polygon coordinates={oBrianHall.coordinates}>
					
            
				</Polygon>
				
				<Polygon coordinates={baldyHall.coordinates}
					tappable={true}
							onPress={() => console.log("pressed polygon")}
							>
					
            
				</Polygon>

            </Pressable>
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
