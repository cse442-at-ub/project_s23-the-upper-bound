// GRAPH DEFINITIONS START 
// CENTER TREE --------------------------------------------------------------
export let jarvisNodes = {
	nodes: [
		{
			building: "Jarvis Hall",
			number: 0,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.002167664036634,
			longitude: -78.7868925926461
		}
	]
}

export let furnasNodes = {
	nodes: [
		{
			building: "Furnas Hall",
			number: 0,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.00187808303488,
			longitude: -78.78677291594136
		},
		{
			building: "Furnas Hall",
			number: 1,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.00188200620176,
			longitude: -78.78684667668549
		},
		{
			building: "Furnas Hall",
			number: 2,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.00201048977993,
			longitude: -78.78685874662789
		}
	]
}

export let bellNodes = {
	nodes: [
		{
			building: "Bell Hall",
			number: 0,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.00159564567005,
			longitude: -78.78678255274367
		},
		{
			building: "Bell Hall",
			number: 1,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.00159258079641,
			longitude: -78.78731605949713
		},
		{
			building: "Bell Hall",
			number: 2,
			floor: 2,
			tree: "center",
			transition: false,
			latitude: 43.00157394566385,
			longitude: -78.78730667176606
		},
		{
			building: "Bell Hall",
			number: 3,
			floor: 3,
			tree: "center",
			transition: false,
			latitude: 43.00157394566385,
			longitude: -78.78730667176606
		},
		{
			building: "Bell Hall",
			number: 4,
			floor: 3,
			tree: "center",
			transition: false,
			latitude: 43.00159258079641,
			longitude: -78.78731605949713
		},
		{
			building: "Bell Hall",
			number: 5,
			floor: 3,
			tree: "center",
			transition: false,
			latitude: 43.00159846557398,
			longitude: -78.78678229993056
		}
	]
}



// ClASS DEFINITIONS START ----------------------------------------------------------
export class Queue {
	constructor() {
		this.items = {};
		this.frontIndex = 0;
		this.backIndex = 0;
	}

	enqueue(item) {
		this.items[this.backIndex] = item;
		this.backIndex++;
		return item + " inserted";
	}

	dequeue() {
		const item = this.items[this.frontIndex];
		delete this.items[this.frontIndex];
		this.frontIndex++;
		return item;
	}

	peek() {
		return this.items[this.frontIndex];
	}

	isEmpty() {
		if (this.peek() === undefined) {
			return true;
		}
		return false;
	}

	get printQueue() {
		return this.items;
	}
}

export class Graph {
	constructor(nodeCount) {
		this.nodeCount = nodeCount;
		this.adjList = new Map();
	}

	// Add lone node to graph
	addNode(n) {
		this.adjList.set(n, []);
	}

	addEdge(n, w, directions) {
		// Add an edge from n to w
		this.adjList.get(n).push([w, directions]);

	}

	outputGraph() {
		var keys = this.adjList.keys();

		for (var i of keys) {
			var list = this.adjList.get(i);
			var temp = "";

			for (var j of list) {
				temp += j + " ";
			}

			console.log(i + " -> " + temp);
		}
	}

	findPath(startingNode, endNode) {
		const visited = new Map();
		const priors = new Map();

		// create a visited object
		var keys = this.adjList.keys();

		for (var i of keys) {
			visited.set(i, false);
			priors.set(i, [-1]);
		}

		// Create an object for queue
		var q = new Queue();

		// add the starting node to the queue
		visited.set(startingNode, true);
		q.enqueue(startingNode);

		// loop until queue is empty
		while (!q.isEmpty()) {
			// get the element from the queue
			var getQueueElement = q.dequeue();

			// passing the current vertex to callback function
			// get the adjacent list for current vertex
			var get_List = this.adjList.get(getQueueElement);

			// loop through the list and add the element to the
			// queue if it is not processed yet
			for (var i in get_List) {
				var neigh = get_List[i][0];

				if (!visited.get(neigh)) {
					visited.set(neigh, true);
					
					priors.set(neigh, [getQueueElement, get_List[i][1]]);
					
					q.enqueue(neigh);
				}
			}
		}

		var path = [[endNode, "Arrive"]];
		var current = endNode;

		while (priors.get(current)[0] !== -1) {
			path.unshift([priors.get(current)[0], priors.get(current)[1]]);
			current = priors.get(current)[0];
		}

		return path;
	}
}

// Not finished, but will probably be one of the last steps
function GiveUserPath(path) {
	for (var i; i < path.length; i++) {
		for (var j; i < path.length; i++) {}
	}
}

export function CreatePath(building1, building2) {
	var ret = [undefined, undefined];

	switch (building1) {
		case "Jarvis Hall":
			ret[0] = jarvisNodes.nodes[0]

			if (building2 === "Furnas Hall") {
				console.log("HERERERERERREE")
				ret[1] = furnasNodes.nodes[2]
			}
			else if (building2 == "Bell Hall") {
				ret[1] = bellNodes.nodes[5]
			}
			break;
		
		case "Furnas Hall":
			if (building2 == "Jarvis Hall") {
				ret[0] = furnasNodes.nodes[2]
				ret[1] = jarvisNodes.nodes[0]
			}
			else {
				ret[0] = furnasNodes.nodes[0]

				if (building2 == "Bell Hall") {
					ret[1] = bellNodes.nodes[5]
				}
			}
			break;
		
		case "Bell Hall":
			if (building2 == "Jarvis Hall" || building2 == "Furnas Hall") {
				ret[0] = bellNodes.nodes[5]
			}
			else {
				ret[0] = bellNodes.nodes[5]
			}

			if (building2 == "Jarvis Hall") {
					ret[1] = jarvisNodes.nodes[0]
			}
			
			else if (building2 == "Furnas Hall") {
				ret[1] = furnasNodes.nodes[0]
			}

			break;
		default:
	}
	return centerGraph.findPath( ret[0], ret[1]);
}

// Using the above implemented graph class
export var centerGraph = new Graph(10)

export function loadCenterGraphNodes() {
	// These loops are adding nodes to graph
	// This should be handled by a function.
	for (var i = 0; i < jarvisNodes.nodes.length; i++) {
		centerGraph.addNode(jarvisNodes.nodes[i]);
	}

	for (var i = 0; i < furnasNodes.nodes.length; i++) {
		centerGraph.addNode(furnasNodes.nodes[i]);
	}

	for (var i = 0; i < bellNodes.nodes.length; i++) {
		centerGraph.addNode(bellNodes.nodes[i]);
	}
}

export function loadCenterGraphEdges() {
	// Adding Edges to the direct Center Tree
	// This is really ugly right now and should be in a function, but this out here for testing
	centerGraph.addEdge(jarvisNodes.nodes[0], furnasNodes.nodes[2], "Travel through Furnas-Jarvis tunnel.");
	centerGraph.addEdge(furnasNodes.nodes[2], jarvisNodes.nodes[0], "Travel through Furnas-Jarvis tunnel.");


	centerGraph.addEdge(furnasNodes.nodes[2], furnasNodes.nodes[1], "Go straight down the hall. At the end of it, you will see a short hall on your left.");
	centerGraph.addEdge(furnasNodes.nodes[1], furnasNodes.nodes[2], "Turn right and go straight down to the entrance of the Furnas-Jarvis tunnel");


	centerGraph.addEdge(furnasNodes.nodes[1], furnasNodes.nodes[0], "Take the short hall on your left. You will reach the Bell-Furnas tunnel.");
	centerGraph.addEdge(furnasNodes.nodes[0], furnasNodes.nodes[1], "Take the short hall on your left.");


	centerGraph.addEdge(furnasNodes.nodes[0], bellNodes.nodes[5], "Travel through Bell-Furnas Tunnel.");
	centerGraph.addEdge(bellNodes.nodes[5], furnasNodes.nodes[0], "Travel through Bell-Furnas Tunnel.");


	centerGraph.addEdge(bellNodes.nodes[5], bellNodes.nodes[4], "Turn right and go all the way down the hall. Room 342 will be on the right.");
	centerGraph.addEdge(bellNodes.nodes[4], bellNodes.nodes[5], "Turn right and go all the way down the hall. The entrance to the Bell-Furnace tunnel will be on the left.");


	centerGraph.addEdge(bellNodes.nodes[4], bellNodes.nodes[3], "Turn left and enter the elevator on the left.");
	centerGraph.addEdge(bellNodes.nodes[3], bellNodes.nodes[4], "Exit the elevator and make a right. Stop in front of room 342 at the end of the hall.");

	centerGraph.addEdge(bellNodes.nodes[3], bellNodes.nodes[2], "Take the elevator down to the 2nd floor.");
	centerGraph.addEdge(bellNodes.nodes[2], bellNodes.nodes[3], "Take the elevator up to the 3rd floor.");


	centerGraph.addEdge(bellNodes.nodes[2], bellNodes.nodes[1], "Exit the elevator and go right. You should reach the entrance of room 201.");
	centerGraph.addEdge(bellNodes.nodes[1], bellNodes.nodes[2], "Turn left and enter the elevator on the left.");


	centerGraph.addEdge(bellNodes.nodes[1], bellNodes.nodes[0], "Go all the way down the long hall on your right until you find signs to Student Union on the right.");
	centerGraph.addEdge(bellNodes.nodes[0], bellNodes.nodes[1], "Pivot slightly left and go down the long hall straight ahead. Stop at the end in front of room 201.");
}



export function calculatePathLine(path) {

	var ret = {
		coordinates:[]
	}

	for (var i = 0; i < path.length; i++){
		ret.coordinates.push({latitude: path[i][0].latitude,longitude: path[i][0].longitude});
	}

	return ret
}





