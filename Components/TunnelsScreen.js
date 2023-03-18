import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, {PROVIDER_GOOGLE,} from "react-native-maps";
import * as Location from "expo-location";
import { Marker, Polygon } from "react-native-maps";
import { mapStyle } from "../Constants/MapConstants";
import {
	baldyHall, baldyHallMarker, oBrianHall, oBrianHallMarker,
	lockwood, lockwoodMarker, parkHallMarker, parkHall,
	jacobsManagementMarker, jacobsManagement, clemensHallMarker, clemensHall,
	bairdHallMarker, bairdHall, sleeHall, sleeHallMarker,
	studentUnionMarker, studentUnion, bellHall, bellHallMarker,
	furnasHall, furnasHallMarker, jarvisHallMarker, jarvisHall,
	bonnerHall, bonnerHallMarker, cookeHall, cookeHallMarker,
	hochstetter, hochstetterMarker, mathBuilding, mathBuildingMarker,
	nscMarker, nsc, fronczakHallMarker, fronczakHall,
	computingCenterMarker, computingCenter, capenHall, cqpenHallMarker,
	nortonHall, nortonHallMarker,
} from "../Constants/TunnelConstants";






export default function TunnelsScreen(content, { navigation }) {
	const [location, setLocation] = useState({});
	const [prompt, setPrompt] = useState("");

	var contentToLoad = [{}];

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

	// Output current coordinates for testing
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
				minZoomLevel={17} // Locks the zoom out so that the buildings don't disappear on certain phones.
				loadingEnabled={true}
				showsCompass={true}

				// This is the location the map will first load to
				initialRegion={{
					latitude: 43.000288,
					longitude: -78.786316,
					latitudeDelta: 0.00522,
					longitudeDelta: 0.00421,
				}}
			>
				{/* #####/////////                     Polygon Content Starts Here                     /////////#####  */}

				{/* O'Brian Hall */}
				<Marker coordinate={oBrianHallMarker} onPress={() => setPrompt("Tapped on O'Brian Hall")}>
					<Text style={styles.markerStyle}>{"O'Brian Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={oBrianHall.coordinates}
					tappable={true}
					strokeWidth={0} // To remove the outline of the polygon. You'll find this on every other polygon.
					//fillColor='#868f9e'
					onPress={() => setPrompt("Tapped on O'Brian Hall")}
				></Polygon>

				

				{/* Baldy Hall */}
				<Marker coordinate={baldyHallMarker} onPress={() => setPrompt("Tapped on Baldy Hall")}>
					<Text style={styles.markerStyle}>{"Baldy Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={baldyHall.coordinates}
					tappable={true}
					strokeWidth={0}
					//fillColor='#868f9e'
					onPress={() => setPrompt("Tapped on Baldy Hall")}
				></Polygon>

				

				{/* Lockwood Library */}
				<Marker coordinate={lockwoodMarker} onPress={() => setPrompt("Tapped on Lockwood Library")}>
					<Text style={styles.markerStyle}>{"Lockwood\n Library"}</Text>
				</Marker>
				<Polygon
					coordinates={lockwood.coordinates}
					tappable={true}
					strokeWidth={0}
					//fillColor='#868f9e'
					onPress={() => setPrompt("Tapped on Lockwood Library")}
				></Polygon>

				
				
				{/* Clemens Hall */}
				<Marker coordinate={clemensHallMarker} onPress={() => setPrompt("Tapped on Clemens Hall")}>
					<Text style={styles.markerStyle}>{"Clemens Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={clemensHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Clemens Hall")}
				></Polygon>

				
				
				{/* Baird Hall */}
				<Marker coordinate={bairdHallMarker} onPress={() => setPrompt("Tapped on Baird Hall")}>
					<Text style={styles.markerStyle}>{"Baird Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={bairdHall.coordinates}
					tappable={true}
					onPress={() => setPrompt("Tapped on Baird Hall")}
				></Polygon>

				
				
				{/* Slee Hall */}
				<Marker coordinate={sleeHallMarker} onPress={() => setPrompt("Tapped on Slee Hall")}>
					<Text style={styles.markerStyle}>{"Slee Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={sleeHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Slee Hall")}
				></Polygon>

				
				
				{/* Park Hall */}
				<Marker coordinate={parkHallMarker} onPress={() => setPrompt("Tapped on Park Hall")}>
					<Text style={styles.markerStyle}>{"Park Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={parkHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Park Hall")}
				></Polygon>

				

				{/* Jacobs Management Building */}
				<Marker coordinate={jacobsManagementMarker} onPress={() => setPrompt("Tapped on Jacobs Management Center")}>
					<Text style={styles.markerStyle}>{"Jacobs\nManagement\nCenter"}</Text>
				</Marker>
				<Polygon
					coordinates={jacobsManagement.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Jacobs Management Center")}
				></Polygon>

				{/* Student Union */}
				<Marker coordinate={studentUnionMarker} onPress={() => setPrompt("Tapped on Student Union")}>
					<Text style={styles.markerStyle}>{"Student\nUnion"}</Text>
				</Marker>
				<Polygon
					coordinates={studentUnion.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Student Union")}
				></Polygon>

				{/* Bell Hall */}
				<Marker coordinate={bellHallMarker} onPress={() => setPrompt("Tapped on Bell Hall")}>
					<Text style={styles.markerStyle}>{"Bell\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={bellHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Bell Hall")}
				></Polygon>

				{/* Furnas Hall */}
				<Marker coordinate={furnasHallMarker} onPress={() => setPrompt("Tapped on Furnas Hall")}>
					<Text style={styles.markerStyle}>{"Furnas\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={furnasHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Furnas Hall")}
				></Polygon>

				{/* Jarvis Hall */}
				<Marker coordinate={jarvisHallMarker} onPress={() => setPrompt("Tapped on Jarvis Hall")}>
					<Text style={styles.markerStyle}>{"Jarvis\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={jarvisHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Jarvis Hall")}
				></Polygon>

				{/* Bonner Hall */}
				<Marker coordinate={bonnerHallMarker} onPress={() => setPrompt("Tapped on Bonner Hall")}>
					<Text style={styles.markerStyle}>{"Bonner\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={bonnerHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Bonner Hall")}
				></Polygon>

				{/* Cooke Hall */}
				<Marker coordinate={cookeHallMarker} onPress={() => setPrompt("Tapped on Cooke Hall")}>
					<Text style={styles.markerStyle}>{"Cooke\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={cookeHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Cooke Hall")}
				></Polygon>

				{/* Hochstetter Hall */}
				<Marker coordinate={hochstetterMarker} onPress={() => setPrompt("Tapped on Hochstetter Hall")}>
					<Text style={styles.markerStyle}>{"Hochstetter\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={hochstetter.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Hochstetter Hall")}
				></Polygon>

				{/* Math Building */}
				<Marker coordinate={mathBuildingMarker} onPress={() => setPrompt("Tapped on Mathematics Building")}>
					<Text style={styles.markerStyle}>{"Mathematics\nBuilding"}</Text>
				</Marker>
				<Polygon
					coordinates={mathBuilding.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Mathematics Building")}
				></Polygon>

				{/* NSC */}
				<Marker coordinate={nscMarker} onPress={() => setPrompt("Tapped on Natural Science Complex")}>
					<Text style={styles.markerStyle}>{"Natural Science\nComplex"}</Text>
				</Marker>
				<Polygon
					coordinates={nsc.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Natural Science Complex")}
				></Polygon>

				{/* Fronczak Hall */}
				<Marker coordinate={fronczakHallMarker} onPress={() => setPrompt("Tapped on Fronczak Hall")}>
					<Text style={styles.markerStyle}>{"Fronczak Hall"}</Text>
				</Marker>
				<Polygon
					coordinates={fronczakHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Fronczak Hall")}
				></Polygon>


				{/* Computing Center */}
				<Marker coordinate={computingCenterMarker} onPress={() => setPrompt("Tapped on Computing Center")}>
					<Text style={styles.markerStyle}>{"Computing\nCenter"}</Text>
				</Marker>
				<Polygon
					coordinates={computingCenter.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Computing Center")}
				></Polygon>

				{/* Capen Hall */}
				<Marker coordinate={cqpenHallMarker} onPress={() => setPrompt("Tapped on Capen Hall")}>
					<Text style={styles.markerStyle}>{"Capen\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={capenHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Capen Hall")}
				></Polygon>

				{/* Norton Hall */}
				<Marker coordinate={nortonHallMarker} onPress={() => setPrompt("Tapped on Norton Hall")}>
					<Text style={styles.markerStyle}>{"Norton\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={nortonHall.coordinates}
					tappable={true}
					strokeWidth={0}
					onPress={() => setPrompt("Tapped on Norton Hall")}
				></Polygon>
				{/* #####/////////                     Polygon Content ENDS Here                     /////////#####  */}
				
				
				
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
