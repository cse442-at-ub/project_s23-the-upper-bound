import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { mapStyle } from "../Constants/MapConstants";





export default function MapsScreen(content, { navigation }) {
	const [location, setLocation] = useState({});
	
	var contentToLoad = [{}];

	// Various printer locations across campus
	const PrinterLocations = [
		{ latitude: 43.000555, longitude: -78.787997 },
		{ latitude: 42.953372, longitude: -78.818261 },
		{ latitude: 42.953411, longitude: -78.818249 },
		{ latitude: 42.953405, longitude: -78.818236 },
		{ latitude: 42.953585, longitude: -78.817192 },
		{ latitude: 42.998614, longitude: -78.7945269 },
	];

	// All building locations for North Campus
	const buildingLocations = [
		{
			title: "Mathematics Building",
			latitude: 43.00121031882114,
			longitude: -78.79278288758773,
		},
		{
			title: "Dorsheimer Laboratory/Greenhouse",
			latitude: 42.9997846363507,
			longitude: -78.79203932840716,
		},
		{
			title: "Natural Sciences Complex",
			latitude: 43.00075237199376,
			longitude: -78.79176007714069,
		},
		{
			title: "Fronczak Hall",
			latitude: 43.00124738498162,
			longitude: -78.79093494224631,
		},
		{
			title: "Cooke Hall",
			latitude: 42.99999161375377,
			longitude: -78.79144046642001,
		},
		{
			title: "Hochstetter Hall",
			latitude: 42.99998932290844,
			longitude: -78.79075204836911,
		},
		{
			title: "Norton Hall",
			latitude: 43.00108719233058,
			longitude: -78.78866198590958,
		},
		{
			title: "Ketter Hall Addition",
			latitude: 43.00276687574388,
			longitude: -78.78830744586425,
		},
		{
			title: "Ketter Hall",
			latitude: 43.00239270478161,
			longitude: -78.7882067303352,
		},
		{
			title: "Bonner Hall",
			latitude: 43.00151299915381,
			longitude: -78.78814182250936,
		},
		{
			title: "Knox Lecture Hall",
			latitude: 43.00102616307274,
			longitude: -78.78788760240617,
		},
		{
			title: "O'Brian Hall",
			latitude: 43.00041868236351,
			longitude: -78.7880557036045,
		},
		{
			title: "Park Hall",
			latitude: 42.99974500765016,
			longitude: -78.78787231937633,
		},
		{
			title: "Davis Hall",
			latitude: 43.00275310445728,
			longitude: -78.78722128934005,
		},
		{
			title: "Jarvis Hall",
			latitude: 43.0022999424851,
			longitude: -78.78708229062849,
		},
		{
			title: "Furnas Hall",
			latitude: 43.00193146357522,
			longitude: -78.7871072897764,
		},
		{
			title: "Bell Hall",
			latitude: 43.00152980430693,
			longitude: -78.78700336822934,
		},
		{
			title: "Baldy Hall",
			latitude: 43.00036867584336,
			longitude: -78.78708905010087,
		},
		{
			title: "Alfiero Center",
			latitude: 42.99978012595931,
			longitude: -78.78704266271411,
		},
		{
			title: "Jacobs Management Center",
			latitude: 42.99952212660576,
			longitude: -78.78694942059825,
		},
		{
			title: "UB Commons",
			latitude: 43.00162383193572,
			longitude: -78.78488395695156,
		},
		{
			title: "Clemens Hall",
			latitude: 43.00025853666757,
			longitude: -78.78499950448409,
		},
		{
			title: "Baird Hall",
			latitude: 43.00004420474259,
			longitude: -78.78448597964672,
		},
		{
			title: "Lockwood Memorial Library",
			latitude: 43.00025286178912,
			longitude: -78.78602757819535,
		},
		{
			title: "Student Union",
			latitude: 43.00116440108123,
			longitude: -78.78614704127043,
		},
		{
			title: "Center for the Arts",
			latitude: 43.00094654481062,
			longitude: -78.78287575151788,
		},
		{
			title: "Morris Sports Performance Center",
			latitude: 42.99979165944014,
			longitude: -78.77900287503519,
		},
		{
			title: "UB Stadium",
			latitude: 42.99896794670038,
			longitude: -78.77749998430836,
		},
		{
			title: "Murchie Family Fieldhouse",
			latitude: 43.000445,
			longitude: -78.777548,
		},
		{
			title: "Bissell Hall",
			latitude: 42.99852701596522,
			longitude: -78.78071863279813,
		},
		{
			title: "Slee Hall",
			latitude: 43.00042328004822,
			longitude: -78.78398765182203,
		},
		{
			title: "NC Childcare Center",
			latitude: 43.00232107052543,
			longitude: -78.7798510839301,
		},
		{
			title: "Capen Hall",
			latitude: 43.00087988480986,
			longitude: -78.78956773229439,
		},
		{
			title: "Talbert Hall",
			latitude: 43.00068631540694,
			longitude: -78.7903774787054,
		},
	];

	// TBD
	const tunnelLocations = [];

	// All food locations on North Campus
	const foodLocations = [
		{ title: "Teddy's", latitude: 43.00248, longitude: -78.79447 },
		{ title: "The Cellar", latitude: 43.00242, longitude: -78.79453 },
		{
			title: "Governor's Dining Center",
			latitude: 43.002366,
			longitude: -78.794417,
		},
		{ title: "Capen Café", latitude: 43.001209, longitude: -78.789798 },
		{
			title: "Tim Horton's at the Alfiero Center",
			latitude: 42.999694,
			longitude: -78.78667,
		},
		{
			title: "Tim Horton's at Student Union",
			latitude: 43.001519,
			longitude: -78.786464,
		},
		{
			title: "Union Marketplace & Eatery",
			latitude: 43.001367,
			longitude: -78.786561,
		},
		{
			title: "Moe's at Student Union",
			latitude: 43.001418,
			longitude: -78.786459,
		},
		{ title: "Champa Sushi", latitude: 43.001228, longitude: -78.786426 },
		{ title: "Pistachio's", latitude: 43.001166, longitude: -78.786501 },
		{ title: "Jamba", latitude: 43.001136, longitude: -78.786533 },
		{ title: "Starbuck's Coffee", latitude: 43.00169, longitude: -78.785573 },
		{ title: "Young Chow", latitude: 43.0017535, longitude: -78.785147 },
		{ title: "Poke Factory", latitude: 43.0015035, longitude: -78.785147 },
		{ title: "Au Bon Pain", latitude: 43.007004, longitude: -78.785406 },
		{ title: "Guac And Roll", latitude: 43.008896, longitude: -78.785675 },
		{
			title: "Crossroads Culinary Center",
			latitude: 43.00898,
			longitude: -78.786147,
		},
		{ title: "Wrap it Up", latitude: 43.009009, longitude: -78.785465 },
		{ title: "Sizzles", latitude: 43.009018, longitude: -78.785546 },
		{ title: "Perks", latitude: 43.009077, longitude: -78.785167 },
		{ title: "Jamba", latitude: 43.001136, longitude: -78.786533 },
	];

	//
	const blueLightLocations = [];

	// Should be in a useEffect but I can't get it to work :(
	switch (content.route.params["content"]) {
		case "buildings":
			contentToLoad = buildingLocations;
			break;

		case "food":
			contentToLoad = foodLocations;
			break;

		case "printers":
			contentToLoad = PrinterLocations;
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
			setLocation(loc);
		})();
	}, []);

	console.log("Location of user: ", location);

	PrinterLocations.map((marker, index) =>
		console.log("Creating marker #" + index, "at location: ", marker)
	);

	return (
		// Renders the map
		<MapView
			provider={PROVIDER_GOOGLE}
			userInterfaceStyle={"dark"}
			style={styles.container}
			customMapStyle={mapStyle}
			showsUserLocation={true}
			// This is the location the map will load to
			initialRegion={{
				latitude: 43.000288,
				longitude: -78.786316,
				latitudeDelta: 0.00522,
				longitudeDelta: 0.00421,
			}}
		>
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
