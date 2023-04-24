import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Animated, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Marker, Polygon, Polyline } from "react-native-maps";
import { mapStyle } from "../Constants/MapConstants";
import {
	
	baldyHall,
	baldyHallMarker,
	oBrianHall,
	oBrianHallMarker,
	lockwood,
	lockwoodMarker,
	parkHallMarker,
	parkHall,
	jacobsManagementMarker,
	jacobsManagement,
	clemensHallMarker,
	clemensHall,
	bairdHallMarker,
	bairdHall,
	sleeHall,
	sleeHallMarker,
	studentUnionMarker,
	studentUnion,
	bellHall,
	bellHallMarker,
	furnasHall,
	furnasHallMarker,
	jarvisHallMarker,
	jarvisHall,
	bonnerHall,
	bonnerHallMarker,
	cookeHall,
	cookeHallMarker,
	hochstetter,
	hochstetterMarker,
	mathBuilding,
	mathBuildingMarker,
	nscMarker,
	nsc,
	fronczakHallMarker,
	fronczakHall,
	computingCenterMarker,
	computingCenter,
	capenHall,
	capenHallMarker,
	nortonHall,
	nortonHallMarker,
	talbertHallMarker,
	talbertHall,
	knoxHallMarker,
	knoxHall,
	commonsMarker,
	commons
} from "../Constants/TunnelConstants";
import {
	jarvisNodes,
	furnasNodes,
	bellNodes,
	ubCommonsNodes,
	studentUnionNodes,
	Queue,
	Graph,
	CreatePath,
	centerGraph,
	loadCenterGraphNodes,
	loadCenterGraphEdges,
	calculatePathLine,
	lockwoodNodes,
	clemensHallNodes
} from "../Constants/PathFindingAlgo";

export default function TunnelsScreen(content, { navigation }) {
	// Use states -----------------------------------------------------------------------------
	const [location, setLocation] = useState({});
	const [prompt, setPrompt] = useState(
		"Please select a building as a starting point. Then select a destination building."
	);
	const [building1, setBuilding1] = useState("");
	const [building2, setBuilding2] = useState("");
	const [pathLine, setPathLine] = useState([]);
	const [showPathLine, setShowPathLine] = useState(false);
	const [navigating, setNavigating] = useState(false);
	const [finalPath, setFinalPath] = useState([]);
	const [current, setCurrent] = useState(0);
	const [currentPathLine, setCurrentPathLine] = useState([]);
	const [showCurrentPathLine, setShowCurrentPathLine] = useState(false);

	// Use effects -----------------------------------------------------------------------------

	// Used to ask for user for location permissions
	// If permission has been granted, continuously update their location while the map is rendered
	useEffect(() => {
		(async () => {
			// Get location while app is being used
			let { status } = await Location.requestForegroundPermissionsAsync();

			// Error checking
			if (status == "granted") {
			} else {
				console.log("Permission NOT granted!");
			}

			// Save current location
			const loc = await Location.getCurrentPositionAsync();
			currentLocation.latitude = loc.coords.latitude;
			currentLocation.longitude = loc.coords.longitude;
			setLocation(loc);
		})();
	}, []);

	var currentLocation = {
		latitude: 0.0,
		longitude: 0.0,
		latitudeDelta: 0.0041,
		longitudeDelta: 0.0021,
	};

	function onTapStart() {
		if (current == finalPath.length) {
			console.log("should be over");
			return;
		}
		console.log("in start");
		setPathLine([]);
		setShowPathLine(false);
		setShowCurrentPathLine(true);
		var next = current + 1;

		if (next != finalPath.length) {
			var tempPathLine = {
				coordinates: [
					{ latitude: finalPath[current][0].latitude, longitude: finalPath[current][0].longitude },
					{ latitude: finalPath[current + 1][0].latitude, longitude: finalPath[current + 1][0].longitude },
				],
			};
			console.log(tempPathLine);
			setCurrentPathLine(tempPathLine);

			// Done navigating
		} else if (next == finalPath.length) {
			setShowCurrentPathLine(false);
		}

		setPrompt(finalPath[current][1]);
		fadeInText();

		setCurrent(next);
	}

	function stopNavigating(button) {
		fadeOutExitNavButton();
		setPathLine([]);
		setFinalPath([]);
		setBuilding1("");
		setBuilding2("");
		setCurrentPathLine([]);
		setShowPathLine(false);
		setShowCurrentPathLine(false);
		fadeOutStartButton();
		setNavigating(false);
		if (button == "Cancel") {
			setPrompt(
				"Canceled Navigation.\nPlease select a building as a starting point. Then select a destination building."
			);
		} else if (button == "Done") {
			setPrompt("Please select a building as a starting point. Then select a destination building.");
		}
		fadeInText();

		setCurrent(0);
	}

	function onTapPolygon(polygon) {
		// Deselect Building 1
		if (building1 == polygon && building2 == "") {
			setBuilding1("");
			setPrompt("Deselected " + polygon + ".\nPlease select a building as a starting point.");
			fadeInText();
			setNavigating(false);

			setShowPathLine(false);
		}

		// Deselect Building 2
		else if (building2 == polygon) {
			if (!navigating) {
				setBuilding2("");
				setNavigating(false);

				setPrompt("Deselected " + polygon + ".\nPlease select a destination building.");
				fadeInText();
				setShowPathLine(false);
				fadeOutStartButton();
			}
		}

		// No building is saved yet, so save first building
		else if (building1 == "" && building2 == "") {
			slideFromBottom();
			setNavigating(false);

			setBuilding1(polygon);

			setPrompt("Starting at " + polygon + ".\nPlease select the destination building.");
			fadeInText();

			setShowPathLine(false);
		}

		// First building is saved, so save the 2nd building
		else if (building1 != "" && building2 == "") {
			setBuilding2(polygon);
			setNavigating(false);

			setPrompt("Your path is from " + building1 + " to " + polygon + ".\nTap Start to begin navigation.");
			fadeInText();

			loadCenterGraphNodes();
			console.log(centerGraph);
			loadCenterGraphEdges();

			var resultPath = CreatePath(building1, polygon);

			setPathLine(calculatePathLine(resultPath));
			console.log(resultPath);
			setFinalPath(resultPath);
			setShowPathLine(true);
			fadeInStartButton();
		}
	}

	const unselectedColor = "#00308f";
	const selectedColor = "#F6C324";

	const selectedFillClemens =
		building1 == "Clemens Hall" || building2 == "Clemens Hall" ? selectedColor : unselectedColor;
	const selectedFillBaird = building1 == "Baird Hall" || building2 == "Baird Hall" ? selectedColor : unselectedColor;
	const selectedFillOBrian =
		building1 == "O'Brian Hall" || building2 == "O'Brian Hall" ? selectedColor : unselectedColor;
	const selectedFillBaldy = building1 == "Baldy Hall" || building2 == "Baldy Hall" ? selectedColor : unselectedColor;
	const selectedFillLockwood =
		building1 == "Lockwood Library" || building2 == "Lockwood Library" ? selectedColor : unselectedColor;
	const selectedFillSlee = building1 == "Slee Hall" || building2 == "Slee Hall" ? selectedColor : unselectedColor;
	const selectedFillPark = building1 == "Park Hall" || building2 == "Park Hall" ? selectedColor : unselectedColor;
	const selectedFillJacobs =
		building1 == "Jacobs Management Building" || building2 == "Jacobs Management Building"
			? selectedColor
			: unselectedColor;
	const selectedFillUnion =
		building1 == "Student Union" || building2 == "Student Union" ? selectedColor : unselectedColor;
	const selectedFillBell = building1 == "Bell Hall" || building2 == "Bell Hall" ? selectedColor : unselectedColor;
	const selectedFillFurnas = building1 == "Furnas Hall" || building2 == "Furnas Hall" ? selectedColor : unselectedColor;
	const selectedFillJarvis = building1 == "Jarvis Hall" || building2 == "Jarvis Hall" ? selectedColor : unselectedColor;
	const selectedFillBonner = building1 == "Bonner Hall" || building2 == "Bonner Hall" ? selectedColor : unselectedColor;
	const selectedFillCooke = building1 == "Cooke Hall" || building2 == "Cooke Hall" ? selectedColor : unselectedColor;
	const selectedFillHochstetter =
		building1 == "Hochstetter Hall" || building2 == "Hochstetter Hall" ? selectedColor : unselectedColor;
	const selectedFillMath =
		building1 == "Mathematics Building" || building2 == "Mathematics Building" ? selectedColor : unselectedColor;
	const selectedFillNSC =
		building1 == "Natural Science Complex" || building2 == "Natural Science Complex" ? selectedColor : unselectedColor;
	const selectedFillFronczak =
		building1 == "Fronczak Hall" || building2 == "Fronczak Hall" ? selectedColor : unselectedColor;
	const selectedFillComputing =
		building1 == "Computing Center" || building2 == "Computing Center" ? selectedColor : unselectedColor;
	const selectedFillCapen = building1 == "Capen Hall" || building2 == "Capen Hall" ? selectedColor : unselectedColor;
	const selectedFillNorton = building1 == "Norton Hall" || building2 == "Norton Hall" ? selectedColor : unselectedColor;
	const selectedFillTalbert =
		building1 == "Talbert Hall" || building2 == "Talbert Hall" ? selectedColor : unselectedColor;
	const selectedFillKnox = building1 == "Knox Hall" || building2 == "Knox Hall" ? selectedColor : unselectedColor;
	const selectedFillCommons = building1 == "UB Commons" || building2 == "UB Commons" ? selectedColor : unselectedColor;

	const fadeAnim = useRef(new Animated.Value(0.0)).current;
	const fadeAnimText = useRef(new Animated.Value(1.1)).current;
	const bounceValue = useRef(new Animated.Value(700)).current;
	const fadeAnimExitButton = useRef(new Animated.Value(0.0)).current;
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const fadeInStartButton = () => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const fadeOutStartButton = () => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const fadeOutStartFadeInNext = async () => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
		await delay(300);

		fadeInStartButton();
	};

	const fadeInExitNavButton = async () => {
		Animated.timing(fadeAnimExitButton, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const fadeOutExitNavButton = async () => {
		Animated.timing(fadeAnimExitButton, {
			toValue: 0,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const fadeInText = async () => {
		fadeOutText();
		await delay(300);
		Animated.timing(fadeAnimText, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	const fadeOutText = () => {
		Animated.timing(fadeAnimText, {
			toValue: 0,
			duration: 400,
			useNativeDriver: true,
		}).start();
	};

	const slideFromBottom = () => {
		Animated.spring(bounceValue, {
			toValue: 0,
			velocity: 3,
			tension: 2,
			friction: 8,
			useNativeDriver: true,
		}).start();
	};
	slideFromBottom();

	if (navigating) {
		fadeInExitNavButton();
	} else {
		fadeOutExitNavButton();
	}

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

				{/* The entire path */}
				{showPathLine && pathLine !== undefined && (
					<Polyline coordinates={pathLine.coordinates} strokeColor="#8f0000" strokeWidth={2}></Polyline>
				)}

				{/* Destination marker for building 2 */}
				<Marker
					coordinate={
						pathLine.coordinates != undefined
							? pathLine.coordinates[pathLine.coordinates.length - 1]
							: { latitude: 0.0, longitude: 0.0 }
					}
					opacity={building2 != "" ? 1.0 : 0.0}
				></Marker>

				{/* Current path to follow  */}
				{showCurrentPathLine && currentPathLine !== undefined && (
					<Polyline coordinates={currentPathLine.coordinates} strokeColor="#8f0000" strokeWidth={2}></Polyline>
				)}

				{/* Marker where the user must currently travel to */}
				<Marker
					coordinate={
						currentPathLine.coordinates != undefined
							? currentPathLine.coordinates[currentPathLine.coordinates.length - 1]
							: { latitude: 0.0, longitude: 0.0 }
					}
				></Marker>

				{/* O'Brian Hall */}

				<Marker
					coordinate={oBrianHallMarker}
					onPress={() => {
						onTapPolygon("O'Brian Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"O'Brian Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillOBrian}
					coordinates={oBrianHall.coordinates}
					tappable={true}
					//strokeWidth={0} // To remove the outline of the polygon. You'll find this on every other polygon.
					//fillColor='#868f9e'
					onPress={() => {
						onTapPolygon("O'Brian Hall");
					}}
				></Polygon>

				{/* Baldy Hall */}
				<Marker
					coordinate={baldyHallMarker}
					onPress={() => {
						onTapPolygon("Baldy Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Baldy Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillBaldy}
					coordinates={baldyHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Baldy Hall");
					}}
				></Polygon>

				{/* Lockwood Library */}
				<Marker
					coordinate={lockwoodMarker}
					onPress={() => {
						onTapPolygon("Lockwood Library");
					}}
				>
					<Text style={styles.markerStyle}>{"Lockwood\n Library"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillLockwood}
					coordinates={lockwood.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Lockwood Library");
					}}
				></Polygon>

				{/* Clemens Hall */}
				<Marker
					coordinate={clemensHallMarker}
					onPress={() => {
						onTapPolygon("Clemens Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Clemens Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillClemens}
					coordinates={clemensHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Clemens Hall");
					}}
				></Polygon>

				{/* Baird Hall */}
				<Marker
					coordinate={bairdHallMarker}
					onPress={() => {
						onTapPolygon("Baird Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Baird Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillBaird}
					coordinates={bairdHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Baird Hall");
					}}
				></Polygon>

				{/* Slee Hall */}
				<Marker
					coordinate={sleeHallMarker}
					onPress={() => {
						onTapPolygon("Slee Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Slee Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillSlee}
					coordinates={sleeHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Slee Hall");
					}}
				></Polygon>

				{/* Park Hall */}
				<Marker
					coordinate={parkHallMarker}
					onPress={() => {
						onTapPolygon("Park Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Park Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillPark}
					coordinates={parkHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Park Hall");
					}}
				></Polygon>

				{/* Jacobs Management Building */}
				<Marker
					coordinate={jacobsManagementMarker}
					onPress={() => {
						onTapPolygon("Jacobs Management Building");
					}}
				>
					<Text style={styles.markerStyle}>{"Jacobs\nManagement\nCenter"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillJacobs}
					coordinates={jacobsManagement.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Jacobs Management Building");
					}}
				></Polygon>

				{/* Student Union */}
				<Marker
					coordinate={studentUnionMarker}
					onPress={() => {
						onTapPolygon("Student Union");
					}}
				>
					<Text style={styles.markerStyle}>{"Student\nUnion"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillUnion}
					coordinates={studentUnion.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Student Union");
					}}
				></Polygon>

				{/* Bell Hall */}
				<Marker
					coordinate={bellHallMarker}
					onPress={() => {
						onTapPolygon("Bell Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Bell\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillBell}
					coordinates={bellHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Bell Hall");
					}}
				></Polygon>

				{/* Furnas Hall */}
				<Marker
					coordinate={furnasHallMarker}
					onPress={() => {
						onTapPolygon("Furnas Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Furnas\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillFurnas}
					coordinates={furnasHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Furnas Hall");
					}}
				></Polygon>

				{/* Jarvis Hall */}
				<Marker
					coordinate={jarvisHallMarker}
					onPress={() => {
						onTapPolygon("Jarvis Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Jarvis\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillJarvis}
					coordinates={jarvisHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Jarvis Hall");
					}}
				></Polygon>

				{/* Bonner Hall */}
				<Marker
					coordinate={bonnerHallMarker}
					onPress={() => {
						onTapPolygon("Bonner Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Bonner\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillBonner}
					coordinates={bonnerHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Bonner Hall");
					}}
				></Polygon>

				{/* Cooke Hall */}
				<Marker
					coordinate={cookeHallMarker}
					onPress={() => {
						onTapPolygon("Cooke Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Cooke\nHall"}</Text>
				</Marker>
				<Polygon
					coordinates={cookeHall.coordinates}
					tappable={true}
					strokeColor="black"
					fillColor={selectedFillCooke}
					onPress={() => {
						onTapPolygon("Cooke Hall");
					}}
				></Polygon>

				{/* Hochstetter Hall */}
				<Marker
					coordinate={hochstetterMarker}
					onPress={() => {
						onTapPolygon("Hochstetter Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Hochstetter\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillHochstetter}
					coordinates={hochstetter.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Hochstetter Hall");
					}}
				></Polygon>

				{/* Math Building */}
				<Marker
					coordinate={mathBuildingMarker}
					onPress={() => {
						onTapPolygon("Mathematics Building");
					}}
				>
					<Text style={styles.markerStyle}>{"Mathematics\nBuilding"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillMath}
					coordinates={mathBuilding.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Mathematics Building");
					}}
				></Polygon>

				{/* NSC */}
				<Marker
					coordinate={nscMarker}
					onPress={() => {
						onTapPolygon("Natural Science Complex");
					}}
				>
					<Text style={styles.markerStyle}>{"Natural Science\nComplex"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillNSC}
					coordinates={nsc.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Natural Science Complex");
					}}
				></Polygon>

				{/* Fronczak Hall */}
				<Marker
					coordinate={fronczakHallMarker}
					onPress={() => {
						onTapPolygon("Fronczak Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Fronczak Hall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillFronczak}
					coordinates={fronczakHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Fronczak Hall");
					}}
				></Polygon>

				{/* Computing Center */}
				<Marker
					coordinate={computingCenterMarker}
					onPress={() => {
						onTapPolygon("Computing Center");
					}}
				>
					<Text style={styles.markerStyle}>{"Computing\nCenter"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillComputing}
					coordinates={computingCenter.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Computing Center");
					}}
				></Polygon>

				{/* Capen Hall */}
				<Marker
					coordinate={capenHallMarker}
					onPress={() => {
						onTapPolygon("Capen Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Capen\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillCapen}
					coordinates={capenHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Capen Hall");
					}}
				></Polygon>

				{/* Norton Hall */}
				<Marker
					coordinate={nortonHallMarker}
					onPress={() => {
						onTapPolygon("Norton Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Norton\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillNorton}
					coordinates={nortonHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Norton Hall");
					}}
				></Polygon>

				{/* Talbert Hall */}
				<Marker
					coordinate={talbertHallMarker}
					onPress={() => {
						onTapPolygon("Talbert Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Talbert\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillTalbert}
					coordinates={talbertHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Talbert Hall");
					}}
				></Polygon>

				{/* Knox Hall */}
				<Marker
					coordinate={knoxHallMarker}
					onPress={() => {
						onTapPolygon("Knox Hall");
					}}
				>
					<Text style={styles.markerStyle}>{"Knox\nHall"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillKnox}
					coordinates={knoxHall.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("Knox Hall");
					}}
				></Polygon>

				{/* UB Commons */}
				<Marker
					coordinate={commonsMarker}
					onPress={() => {
						onTapPolygon("UB Commons");
					}}
				>
					<Text style={styles.markerStyle}>{"UB\nCommons"}</Text>
				</Marker>
				<Polygon
					strokeColor="black"
					fillColor={selectedFillCommons}
					coordinates={commons.coordinates}
					tappable={true}
					onPress={() => {
						onTapPolygon("UB Commons");
					}}
				></Polygon>

				{/* #####/////////                     Polygon Content ENDS Here                     /////////#####  */}
			</MapView>
			<Animated.View style={[styles.promptViewStyle, { transform: [{ translateY: bounceValue }] }]}>
				<View style={styles.item}>
					<View style={styles.promptTextArea}>
						<Animated.View
							style={[
								styles.promptText,
								{
									opacity: fadeAnimText,
								},
							]}
						>
							<Text style={styles.promptText}>{prompt}</Text>
						</Animated.View>
					</View>
				</View>
				{!navigating && (
					<View style={styles.promptButtonArea}>
						{pathLine.length != 0 && (
							<Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
								<TouchableOpacity
									style={styles.startButton}
									title="Start"
									disabled={building2 != "" ? false : true}
									onPress={() => {
										setNavigating(true);
										onTapStart();
										fadeOutStartFadeInNext();
									}}
								>
									<Text style={styles.buttons}>Start</Text>
								</TouchableOpacity>
							</Animated.View>
						)}
					</View>
				)}
				{navigating && (
					<View style={styles.promptButtonArea}>
						{current < finalPath.length && (
							<Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
								<TouchableOpacity
									style={[styles.startButton, { backgroundColor: "purple" }]}
									title="Next"
									disabled={building2 != "" ? false : true}
									onPress={() => {
										setNavigating(true);
										onTapStart();
									}}
								>
									<Text style={styles.buttons}>Next</Text>
								</TouchableOpacity>
							</Animated.View>
						)}
						{current == finalPath.length && (
							<Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
								<TouchableOpacity
									style={[styles.startButton, { backgroundColor: "#00308f" }]}
									title="Done"
									disabled={building2 != "" ? false : true}
									onPress={() => {
										stopNavigating("Done");
									}}
								>
									<Text style={styles.buttons}>Done</Text>
								</TouchableOpacity>
							</Animated.View>
						)}
					</View>
				)}
			</Animated.View>

			{navigating && (
				<Animated.View style={[styles.exitNavigationView, { opacity: fadeAnimExitButton }]}>
					<TouchableOpacity
						style={styles.exitNavigationButton}
						onPress={() => {
							stopNavigating("Cancel");
						}}
					>
						<Text style={styles.exitNavigationButtonText}>X</Text>
					</TouchableOpacity>
				</Animated.View>
			)}
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
		height: "100%",
	},

	promptViewStyle: {
		position: "absolute",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		marginBottom: 0,
		height: 120,
		width: "94%",
		backgroundColor: "#1E1E1E",
		bottom: "14.5%",
		gap: 0,
		borderRadius: 30,
		justifyContent: "flex-end",
	},

	exitNavigationView: {
		position: "absolute",
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		marginBottom: 0,
		height: 55,
		width: 55,
		bottom: "6.5%",
		justifyContent: "center",
		backgroundColor: "transparent",
	},

	promptTextArea: {
		flex: 1,
		minWidth: "75%",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		color: "white",

		//backgroundColor: "blue",
	},
	promptButtonArea: {
		flex: 1,
		height: "100%",
		minWidth: "25%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-end",
	},
	promptText: {
		flex: 1,
		alignSelf: "flex-start",
		paddingTop: 15,
		paddingLeft: 10,
		color: "white",
	},
	markerStyle: {
		fontSize: 12,
		color: "white",
		textAlign: "center",
	},
	buttons: {
		fontSize: 20,
		color: "white",
	},

	exitNavigationButton: {
		flex: 1,
		borderRadius: 100,
		backgroundColor: "darkred",
		width: 55,
		height: 55,
		alignItems: "center",
		textAlign: "center",
		textAlignVertical: "center",
	},

	exitNavigationButtonText: {
		fontSize: 22,
		color: "#FFFF",
		textAlignVertical: "center",
		top: "25%",
		bottom: "25%",
	},

	startButton: {
		marginRight: 8,
		color: "green",
		marginTop: "50%",
		width: 70,
		borderRadius: 30,
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "green",
		padding: 0,
	},
});
