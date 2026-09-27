<div id="map"></div>

<script lang="ts">
import { type LatLngTuple } from "leaflet";

import { onMount } from "svelte";
import { INITIAL_COORDINATES, INITIAL_ZOOM_LEVEL, MAX_ZOOM_LEVEL } from "$lib/constants";
import { POLYGONS } from "$lib/database/polygons";

onMount(async () => {
	const Leaflet = await import("leaflet");
	await import("leaflet/dist/leaflet.css");

	const L = Leaflet.default;

	const map = L.map('map').setView(INITIAL_COORDINATES, INITIAL_ZOOM_LEVEL);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: MAX_ZOOM_LEVEL,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	for (const [landmarkName, coordinates] of Object.entries(POLYGONS)) {
		const polygon = L.polygon(coordinates).addTo(map);

		polygon.on("click", (e) => console.log(landmarkName, "clicked"));
	}
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
