import readline from "node:readline";
// GeoJSON coordinates follow a [longitude, latitude] order
// Leaflet.js instead follows [latitude, longitude]
// since my source of the coordinates of the polygons that represent school buildings is GeoJSON, while this interactive
// map uses Leaflet.js, I have to swap the positions of the coordinates of every polygon

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Please provide an array of arrays with 2 numerical coordinates, i.e. `[number, number][]`, without any newlines. The positions of every pair of numerical coordinates will be swapped.\n", (input) => {
	const originalCoords = JSON.parse(input);

	const swappedCoords = [];

	for (const [num1, num2] of originalCoords) {
		swappedCoords.push([num2, num1]);
	}

	console.log("\nSwapped coordinates:");
	console.log(swappedCoords);
	rl.close();
});
