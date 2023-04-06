// GRAPH DEFINITIONS START 
// CENTER TREE --------------------------------------------------------------
let baldy = {
	nodes: [
		{
			building: "Baldy Hall",
			number: 0,
			tree: "center",
			lat: 1.2,
			long: 3.4,
		},

		{
			building: "Baldy Hall",
			number: 1,
			tree: "center",
			lat: 1.1,
			long: 2.2,
		},
	],
};

let lockwood = {
	nodes: [
		{
			building: "Lockwood",
			number: 0,
			tree: "center",
			lat: 1.2,
			long: 3.4,
		},

		{
			building: "Lockwood",
			number: 1,
			tree: "center",
			lat: 0.0,
			long: -9.9,
		},
	],
};


// ALGO STARTS ----------------------------------------------------------
class Queue {
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

class Graph {
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

		// Add an edge from w to n
		this.adjList.get(w).push([n, directions]);
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

	bfs(startingNode, endNode) {
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

function GiveUserPath(path) {
	for (var i; i < path.length; i++) {
		for (var j; i < path.length; i++) {}
	}
}

// Using the above implemented graph class
var g = new Graph(4);



// adding vertices

for (var i = 0; i < lockwood.nodes.length; i++) {
	g.addNode(lockwood.nodes[i]);
}

for (var i = 0; i < baldy.nodes.length; i++) {
	g.addNode(baldy.nodes[i]);
}

// adding edges
g.addEdge(lockwood.nodes[0], lockwood.nodes[1], "go up");
g.addEdge(lockwood.nodes[0], baldy.nodes[0], "go down");
g.addEdge(lockwood.nodes[1], baldy.nodes[1], "go left");

console.log("#########################################");

path = g.bfs(lockwood.nodes[0], baldy.nodes[1]);
console.log("Paths", path);

//path2 = g.bfs(baldy.nodes[1], lockwood.nodes[0]);
//console.log("Paths 2",path2)
//console.log(g.adjList.get(lockwood.nodes[0])[1])
