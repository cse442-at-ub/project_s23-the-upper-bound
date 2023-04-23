import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import { mapStyle } from "../Constants/MapConstants";
import Modal from "react-native-modal";
import { Button, Text, Image} from "react-native";





export default function MapsScreen(content, { navigation }) {
	const [location, setLocation] = useState({});

	// sorry there are so many of these :( i need one per modal 
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
	  setModalVisible(!isModalVisible);
	};
	const [isModalVisible1, setModalVisible1] = useState(false);
	const toggleModal1 = () => {
	  setModalVisible1(!isModalVisible1);
	};
	const [isModalVisible2, setModalVisible2] = useState(false);
	const toggleModal2 = () => {
	  setModalVisible2(!isModalVisible2);
	};
	const [isModalVisible3, setModalVisible3] = useState(false);
	const toggleModal3 = () => {
	  setModalVisible3(!isModalVisible3);
	};
	const [isModalVisible4, setModalVisible4] = useState(false);
	const toggleModal4 = () => {
	  setModalVisible4(!isModalVisible4);
	};
	const [isModalVisible5, setModalVisible5] = useState(false);
	const toggleModal5 = () => {
	  setModalVisible5(!isModalVisible5);
	};
	const [isModalVisible6, setModalVisible6] = useState(false);
	const toggleModal6 = () => {
	  setModalVisible6(!isModalVisible6);
	};
	const [isModalVisible7, setModalVisible7] = useState(false);
	const toggleModal7 = () => {
	  setModalVisible7(!isModalVisible7);
	};
	const [isModalVisible8, setModalVisible8] = useState(false);
	const toggleModal8 = () => {
	  setModalVisible8(!isModalVisible8);
	};
	const [isModalVisible9, setModalVisible9] = useState(false);
	const toggleModal9 = () => {
	  setModalVisible9(!isModalVisible9);
	};
	const [isModalVisible10, setModalVisible10] = useState(false);
	const toggleModal10 = () => {
	  setModalVisible10(!isModalVisible10);
	};
	const [isModalVisible11, setModalVisible11] = useState(false);
	const toggleModal11 = () => {
	  setModalVisible11(!isModalVisible11);
	};
	const [isModalVisible12, setModalVisible12] = useState(false);
	const toggleModal12 = () => {
	  setModalVisible12(!isModalVisible12);
	};
	const [isModalVisible13, setModalVisible13] = useState(false);
	const toggleModal13 = () => {
	  setModalVisible13(!isModalVisible13);
	};
	const [isModalVisible14, setModalVisible14] = useState(false);
	const toggleModal14 = () => {
	  setModalVisible14(!isModalVisible14);
	};
	const [isModalVisible15, setModalVisible15] = useState(false);
	const toggleModal15 = () => {
	  setModalVisible15(!isModalVisible15);
	};
	const [isModalVisible16, setModalVisible16] = useState(false);
	const toggleModal16 = () => {
	  setModalVisible16(!isModalVisible16);
	};
	const [isModalVisible17, setModalVisible17] = useState(false);
	const toggleModal17 = () => {
	  setModalVisible17(!isModalVisible17);
	};
	const [isModalVisible18, setModalVisible18] = useState(false);
	const toggleModal18 = () => {
	  setModalVisible18(!isModalVisible18);
	};
	const [isModalVisible19, setModalVisible19] = useState(false);
	const toggleModal19 = () => {
	  setModalVisible19(!isModalVisible19);
	};
	const [isModalVisible20, setModalVisible20] = useState(true);
	const toggleModal20 = () => {
	  setModalVisible20(!isModalVisible20);
	};
	
	var contentToLoad = [{}];

	// Various printer locations across campus
	const PrinterLocations = [
		{ latitude: 43.000555, longitude: -78.787997 },
		{latitude: 43.007473, longitude: -78.785524},
		{latitude: 42.999766, longitude: -78.787897},
		{latitude: 43.000555, longitude: -78.787997},
		{latitude: 43.00113, longitude: -78.788199},
		{latitude: 43.000694, longitude: -78.791763},
		{latitude: 43.000792, longitude: -78.791331},
		{latitude: 42.999987, longitude: -78.786007},
		{latitude: 43.000011, longitude: -78.785977},
		{latitude: 43.002617, longitude: -78.787593},
		{latitude: 42.999985, longitude: -78.785959},
		{latitude: 42.999997, longitude: -78.78594},
		{latitude: 43.000551, longitude: -78.787951},
		{latitude: 43.000009, longitude: -78.786055},
		{latitude: 43.00750241, longitude: -78.78557326},
		{latitude: 43.00113, longitude: -78.788199},
		{latitude: 43.00114546, longitude: -78.78619017},
		{latitude: 43.00004631, longitude: -78.78443008},
		{latitude: 43.000581, longitude: -78.78507},
		{latitude: 43.000402085740994, longitude: -78.78621254462671},
		{latitude: 43.00030321, longitude: -78.78605576},
		{latitude: 43.00027967, longitude: -78.78606113},
		{latitude: 43.001064, longitude: -78.78958},
		{latitude: 43.001794, longitude: -78.794893},
		{latitude: 43.001136, longitude: -78.786282},
		{latitude: 43.00881, longitude: -78.785407},
		{latitude: 43.000945, longitude: -78.789728},
		{latitude: 43.001056, longitude: -78.789739},
		{latitude: 43.000921, longitude: -78.789736},
		{latitude: 43.001025, longitude: -78.789709},
		{latitude: 43.001015, longitude: -78.789679},
		{latitude: 43.000907, longitude: -78.78970},
		{latitude: 43.001009, longitude: -78.78962},
		{latitude: 43.001101, longitude: -78.789668},
		{latitude: 43.001099, longitude: -78.78948},
		{latitude: 43.001156, longitude: -78.789649},
		{latitude: 43.00115, longitude: -78.789727},
		{latitude: 42.999995, longitude: -78.785928},
		{latitude: 42.999857, longitude: -78.78715},
		{latitude: 43.01197515, longitude: -78.79318966},
		{latitude: 43.00519128, longitude: -78.80088306},
		{latitude: 42.99763298, longitude: -78.78723882},
		{latitude: 43.0064575, longitude: -78.78552371},
		{latitude: 43.00282824, longitude: -78.77950383},
		{latitude: 42.99861396, longitude: -78.79452687}
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
	];

	//
	const blueLightLocations = [	{
		title: "Park Hall on Talbert Way",
		latitude: 43.000090378254946,
		longitude: -78.78753675191092,
	},
	{
		title: "Park Hall between Jacobs A & B parking lot",
		latitude: 42.998849471126995,
		longitude: -78.78758533050615,
	},
	{
		title: "Baird Lot in the Northeast Corner",
		latitude: 42.99890282501945,
		longitude: -78.78427832845986,
	},
	{
		title: "Bus stop East of Alumni Arena Entrance 11 (facing Stadium)",
		latitude: 42.999914173673716,
		longitude: -78.78244997294453,
	},
	{
		title: "Lake LaSalle Parking lot",
		latitude: 43.001283037755556,
		longitude: -78.7802010370165,
	},
	{
		title: "Coventry Loop at Alumni",
		latitude: 43.00001468768577,
		longitude: -78.78337936831363,
	},
	{
		title: "Slee Lot B (south)",
		latitude: 42.999761461870804,
		longitude: -78.78318683032339,
	},
	{
		title: "Quad area Southwest of Student Activities Center (Student Union)",
		latitude: 43.00082673206815,
		longitude:  -78.78684999258255,
	},
	{
		title: "Beane Center",
		latitude: 42.99412425278977,
		longitude:  -78.79775353468898,
	},
	{
		title: "Bus Stop South of Bissell Hall",
		latitude: 42.99903823341985,
		longitude:  -78.78046375480442,
	},
	{
		title: "Special Events lot East",
		latitude: 42.997981158954765,
		longitude:  -78.78519532774293,
	},
	{
		title: "Special Events lot West",
		latitude: 42.997735267922906,
		longitude: -78.7828320481735,
	},
	{
		title: "Flint Loop",
		latitude: 43.0001340845628,
		longitude: -78.78948510147926,
	},
	{
		title: "CFA rear between building and lake",
		latitude: 43.00157833044345,
		longitude: -78.78258967211862,
	},
	{
		title: "Center for Tomorrow Lot (2 speaker locations)",
		latitude: 42.992715205566725,
		longitude: -78.79301959437088,
	},
	{
		title: "Flint Road at Audobon Parkway (2 speaker locations)",
		latitude: 42.992355303668724,
		longitude: -78.79209961981223,
	},
	{
		title: "Bus Stop across from Child Care",
		latitude: 43.002078519882446,
		longitude: -78.77929825719254,
	},
	{
		title: "Clemens North facing the Commons",
		latitude: 43.000675361554045,
		longitude: -78.78469085975361,
	},
	{
		title: "Student Union",
		latitude: 43.001367692744104,
		longitude: -78.78556339294134,
	},
	{
		title: "Hochstetter at Talbert Way",
		latitude: 42.999504717910824,
		longitude: -78.79073792285398,
	},
	{
		title: "Lee Bookstore Lot (2 speaker locations)",
		latitude: 43.002336493170674,
		longitude: -78.78574630736085,
	},
	{
		title: "Lee Entrance at Jarvis Lot (2 speaker locations)",
		latitude: 43.00447602437512,
		longitude: -78.786073523101,
	},
	{
		title: "Jarvis A and B (2 speaker locations)",
		latitude: 43.00344467664682,
		longitude: -78.7876891887213,
	},
	{
		title: "Hamilton loop at Ketter Hall (2 speaker locations)",
		latitude: 43.00223955324486,
		longitude: -78.7892707256273,
	},
	{
		title: "Lockwood Library/Hall on Talbert Way",
		latitude: 42.999957041096664,
		longitude: -78.78548369590067,
	},
	{
		title: "Talbert Way West side",
		latitude: 43.00021466182786,
		longitude: -78.79258828398643,
	},
	{
		title: "Rensch Loop",
		latitude: 43.00021466182786,
		longitude: -78.79258828398643,
	},
	{
		title: "Audobon at Hamilton Road (2 speaker locations)",
		latitude: 43.00752894612842,
		longitude: -78.78629617806615,
	},
	{
		title: "Fargo Parking Lot (2 speaker locations)",
		latitude: 43.006895859787804,
		longitude:  -78.78777151536933,
	},
	{
		title: "Audobon at Lee entrance",
		latitude: 43.00360848945634, 
		longitude:  -78.78602456024407,
	},
	{
		title: "South of Fargo Hall at Lake LaSalle",
		latitude: 43.0072002452058,
		longitude:  -78.78457872767414, 
	},
	{
		title: "Red Jacket Lot",
		latitude: 43.00883110535041,
		longitude:  -78.78749433489799, 
	},
	{
		title: "Richmond B Parking Lot Berm",
		latitude: 43.01001513788589,
		longitude:  -78.7864932140113, 
	},
	{
		title: "Spaulding (Old Richmond)",
		latitude: 43.01001513788589,
		longitude:  -78.7864932140113, 
	},
	{
		title: "Spaulding Parking Lot Berm (2 speaker locations)",
		latitude: 43.009648806800875,
		longitude: -78.78300817767717,
	},
	{
		title: "Richmond Lot at Ellicott (2 speaker locations)",
		latitude: 43.01018047135453,
		longitude: -78.7852141629572,
	},
	{
		title: "Wilkeson near Kanazawa Island",
		latitude: 43.00846077985067,
		longitude: -78.78308436966589,
	},
	
	
];

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
		case "blue Lights":
			contentToLoad = blueLightLocations;
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
			
			{(contentToLoad == buildingLocations || contentToLoad == PrinterLocations) &&
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


			{contentToLoad == blueLightLocations &&
				contentToLoad.map((marker, index) => (

				// Places a marker for each object in PrinterLocations
				<Marker
					key={index}
					coordinate={marker}
					title={marker.title}
					//image={{uri:'../assets/map-printer.png'}}
					//image={require("../assets/map-printer.png")}
				></Marker>
			))
			}

			{contentToLoad == foodLocations &&
				<View style={{ flex: 1 }} >

					{/* marker for tim hortons at SU */}
					
					<Marker
						key={6}
						coordinate={{latitude: 43.001519, longitude: -78.786464}}
						title={"Tim Horton's at Student Union"}
						onPress = {toggleModal}
					></Marker>

					<Modal isVisible = {isModalVisible} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 150}} source={require('../DiningLocationImages/tim_hortons_at_student_union.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >7:00am - 8:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >8:00am - 6:00pm</Text>
							
          					<Button title = "close" onPress={toggleModal}></Button>
       					 </View>
					</Modal>

					{/* marker for tim hortons at alfiero */}
					<Marker
						key={5}
						coordinate={{latitude: 42.999694, longitude: -78.78667}}
						title={"Tim Horton's at the Alfiero Center"}
						onPress = {toggleModal1}
					></Marker>

					<Modal isVisible = {isModalVisible1} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 150}} source={require('../DiningLocationImages/tim_hortons_at_student_union.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >7:00am - 8:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >7:00am - 5:00pm</Text>
							
          					<Button title = "close" onPress={toggleModal1}></Button>
       					 </View>
					</Modal>

					{/* dining location for teddys */}
					<Marker
						key={1}
						coordinate={{latitude: 43.00248, longitude: -78.79447}}
						title={"Teddy's"}
						onPress = {toggleModal2}
					></Marker>

					<Modal isVisible = {isModalVisible2} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 140}} source={require('../DiningLocationImages/teddys.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Sunday</Text>
							<Text style = {styles.plainText} >4:00pm - 10:00pm</Text>	
          					<Button title = "close" onPress={toggleModal2}></Button>
       					 </View>
					</Modal>

					{/* dining location for the cellar */}
					<Marker
						key={2}
						coordinate={{latitude: 43.00242, longitude: -78.79453}}
						title={"The Cellar"}
						onPress = {toggleModal3}
					></Marker>

					<Modal isVisible = {isModalVisible3} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 140}} source={require('../DiningLocationImages/the_cellar.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >8:00am - 3:00pm</Text>	
          					<Button title = "close" onPress={toggleModal3}></Button>
       					 </View>
					</Modal>

					{/* dining location for governor's dining center */}
					<Marker
						key={3}
						coordinate={{latitude: 43.002366, longitude: -78.794417}}
						title={"Governor's Dining Center"}
						onPress = {toggleModal4}
					></Marker>

					<Modal isVisible = {isModalVisible4} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 140}} source={require('../DiningLocationImages/governors_dining_center.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >4:30pm - 9:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >10:00am - 9:00pm</Text>
          					<Button title = "close" onPress={toggleModal4}></Button>
       					 </View>
					</Modal>

					{/* dining location for capen cafe */}
					<Marker
						key={4}
						coordinate={{latitude: 43.001209, longitude: -78.789798}}
						title={"Capen Café"}
						onPress = {toggleModal5}
					></Marker>

					<Modal isVisible = {isModalVisible5} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 140}} source={require('../DiningLocationImages/capen_caf.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >8:00am - 6:00pm</Text>
          					<Button title = "close" onPress={toggleModal5}></Button>
       					 </View>
					</Modal>

					{/* dining location for union marketplace */}
					<Marker
						key={7}
						coordinate={{latitude: 43.001367, longitude: -78.786561}}
						title={"Union Marketplace & Eatery"}
						onPress = {toggleModal6}
					></Marker>

					<Modal isVisible = {isModalVisible6} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 140}} source={require('../DiningLocationImages/union_marketplace__eatery.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >10:30am - 8:00pm</Text>
          					<Button title = "close" onPress={toggleModal6}></Button>
       					 </View>
					</Modal>

					{/* dining location for moe's */}
					<Marker
						key={8}
						coordinate={{latitude: 43.001418, longitude: -78.786459}}
						title={"Moe's at Student Union"}
						onPress = {toggleModal7}
					></Marker>

					<Modal isVisible = {isModalVisible7} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 300}} source={require('../DiningLocationImages/moes_at_student_union.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							  <Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >10:30am - 8:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >11:00am - 4:00pm</Text>
          					<Button title = "close" onPress={toggleModal7}></Button>
       					 </View>
					</Modal>	

					{/* dining location for champa sushi */}
					<Marker
						key={9}
						coordinate={{latitude: 43.001228, longitude: -78.786426}}
						title={"Champa Sushi"}
						onPress = {toggleModal8}
					></Marker>

					<Modal isVisible = {isModalVisible8} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 100}} source={require('../DiningLocationImages/champa_sushi.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >10:30am - 7:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >10:30am - 4:00pm</Text>
          					<Button title = "close" onPress={toggleModal8}></Button>
       					 </View>
					</Modal>		

					{/* dining location for pistachios */}	
					<Marker
						key={10}
						coordinate={{latitude: 43.001166, longitude: -78.786501}}
						title={"Pistachio's"}
						onPress = {toggleModal9}
					></Marker>

					<Modal isVisible = {isModalVisible9} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 100}} source={require('../DiningLocationImages/pistachios.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							  <Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >11:00am - 6:00pm</Text>
          					<Button title = "close" onPress={toggleModal9}></Button>
       					 </View>
					</Modal>	

					{/* dining location for jamba */}
					<Marker
						key={11}
						coordinate={{latitude: 43.001136, longitude: -78.786533}}
						title={"Jamba"}
						onPress = {toggleModal10}
					></Marker>

					<Modal isVisible = {isModalVisible10} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 100}} source={require('../DiningLocationImages/jamba.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >08:30am - 8:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >11:00am - 4:00pm</Text>
          					<Button title = "close" onPress={toggleModal10}></Button>
       					 </View>
					</Modal>	

					{/* dining location for starbucks */}
					<Marker
						key={12}
						coordinate={{latitude: 43.00169, longitude: -78.785573}}
						title={"Starbuck's Coffee"}
						onPress = {toggleModal11}
					></Marker>

					<Modal isVisible = {isModalVisible11} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 150, height: 150}} source={require('../DiningLocationImages/starbucks_coffee.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Thursday</Text>
							<Text style = {styles.plainText} >05:30am - 9:00pm</Text>
							<Text style = {styles.boldText} >Friday</Text>
							<Text style = {styles.plainText} >05:30am - 8:30pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >06:00am - 8:30pm</Text>
          					<Button title = "close" onPress={toggleModal11}></Button>
       					 </View>
					</Modal>

					{/* dining location for young chow */}
					<Marker
						key={13}
						coordinate={{latitude: 43.0017535, longitude: -78.785147}}
						title={"Young Chow"}
						onPress = {toggleModal12}
					></Marker>

					<Modal isVisible = {isModalVisible12} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 150}} source={require('../DiningLocationImages/young_chow.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >10:30am - 8:30pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >12:00pm - 9:00pm</Text>
          					<Button title = "close" onPress={toggleModal12}></Button>
       					 </View>
					</Modal>

					{/* dining location for poke factory */}
					<Marker
						key={14}
						coordinate={{latitude: 43.0015035, longitude: -78.785147}}
						title={"Poke Factory"}
						onPress = {toggleModal13}
					></Marker>

					<Modal isVisible = {isModalVisible13} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 200, height: 200}} source={require('../DiningLocationImages/poke_factory.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >10:00am - 8:00pm</Text>
          					<Button title = "close" onPress={toggleModal13}></Button>
       					 </View>
					</Modal>

					{/* dining location for ABP */}
					<Marker
						key={15}
						coordinate={{latitude: 43.007004, longitude: -78.785406}}
						title={"Au Bon Pain"}
						onPress = {toggleModal14}
					></Marker>

					<Modal isVisible = {isModalVisible14} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 100}} source={require('../DiningLocationImages/au_bon_pain.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >08:00am - 8:30pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday </Text>
							<Text style = {styles.plainText} >10:30pm - 8:30pm</Text>
          					<Button title = "close" onPress={toggleModal14}></Button>
       					 </View>
					</Modal>

					{/* dining location for guac and roll */}
					<Marker
						key={16}
						coordinate={{latitude: 43.008896, longitude: -78.785675}}
						title={"Guac And Roll"}
						onPress = {toggleModal15}
					></Marker>

					<Modal isVisible = {isModalVisible15} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 100}} source={require('../DiningLocationImages/guac_and_roll.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >11:00am - 8:30pm</Text>
          					<Button title = "close" onPress={toggleModal15}></Button>
       					 </View>
					</Modal>

					{/* dining location for C3 */}
					<Marker
						key={17}
						coordinate={{latitude: 43.00898, longitude: -78.786147}}
						title={"Crossroads Culinary Center"}
						onPress = {toggleModal16}
					></Marker>

					<Modal isVisible = {isModalVisible16} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 200, height: 200}} source={require('../DiningLocationImages/c3.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >08:00am - 10:30pm</Text>
							<Text style = {styles.plainText} >5:00pm - 9:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday</Text>
							<Text style = {styles.plainText} >10:00am - 9:00pm</Text>
          					<Button title = "close" onPress={toggleModal16}></Button>
       					 </View>
					</Modal>

					{/* dining location for wrap it up */}
					<Marker
						key={18}
						coordinate={{latitude: 43.009009, longitude: -78.785465}}
						title={"Wrap it Up"}
						onPress = {toggleModal17}
					></Marker>

					<Modal isVisible = {isModalVisible17} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 200, height: 200}} source={require('../DiningLocationImages/wrap_it_up.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >7:00am - 3:00pm</Text>
          					<Button title = "close" onPress={toggleModal17}></Button>
       					 </View>
					</Modal>

					{/* dining location for perks */}
					<Marker
						key={19}
						coordinate={{latitude: 43.009077, longitude: -78.785167}}
						title={"Perks"}
						onPress = {toggleModal18}
					></Marker>

					<Modal isVisible = {isModalVisible18} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 200, height: 200}} source={require('../DiningLocationImages/perks.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >8:00am - 8:00pm</Text>
							<Text style = {styles.boldText} >Saturday - Sunday</Text>
							<Text style = {styles.plainText} >11:30am - 5:30pm</Text>
          					<Button title = "close" onPress={toggleModal18}></Button>
       					 </View>
					</Modal>

					{/* dining locations for sizzles */}
					<Marker
						key={20}
						coordinate={{latitude: 43.009018, longitude: -78.785546}}
						title={"Sizzles"}
						onPress = {toggleModal19}
					></Marker>

					<Modal isVisible = {isModalVisible19} >
						<View style = {styles.modalView} >
							<ImageBackground style = {{width: 300, height: 100}} source={require('../DiningLocationImages/sizzles.png')}/>
          					<Text style = {styles.bigBoldText} >Regular Business Hours:</Text>
							<Text style = {styles.boldText} >Monday - Friday</Text>
							<Text style = {styles.plainText} >10:00am - 10:30pm</Text>
          					<Button title = "close" onPress={toggleModal19}></Button>
       					 </View>
					</Modal>

				</View>
			}


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
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
	},
	bigBoldText: {
		marginTop: 10,
		fontWeight: 'bold',
		marginBottom: 10

	},

	boldText: {
		fontWeight: 'bold',
	},

	plainText: {
		marginBottom: 10

	}

});

