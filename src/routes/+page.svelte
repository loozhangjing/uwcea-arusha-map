<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		 integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		 crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
		 integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
		 crossorigin=""></script>
</svelte:head>

<div id="map"></div>

<script>
import { onMount } from "svelte";
import { LIBRARY } from "$lib/polygons";

// these coordinates & zoom level show most of the school on the screen
const INITIAL_COORDINATES = [-3.361, 36.613];
const INITIAL_ZOOM_LEVEL = 18;
const MAX_ZOOM_LEVEL = 22;

onMount(() => {
	const map = L.map('map').setView(INITIAL_COORDINATES, INITIAL_ZOOM_LEVEL);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: MAX_ZOOM_LEVEL,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	const library = L.polygon(LIBRARY).addTo(map);

	library.on("click", (e) => console.log("library clicked"));
});
</script>

<style>
:global(body) {
	margin: 0;
}
#map {
	height: 100vh;
}
</style>
