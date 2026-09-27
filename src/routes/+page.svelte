<script lang="ts">
import { onMount } from "svelte";
import { INITIAL_COORDINATES, INITIAL_ZOOM_LEVEL, MAX_ZOOM_LEVEL } from "$lib/constants";
import { POLYGONS } from "$lib/database/polygons";
import { STRUCTURES, type Structure } from "$lib/database/structures";

import StructureSidebar from "$lib/StructureSidebar.svelte";

let selectedStructure: null | Structure = $state(null);

onMount(async () => {
	const Leaflet = await import("leaflet");
	await import("leaflet/dist/leaflet.css");

	const L = Leaflet.default;

	const map = L.map('map').setView(INITIAL_COORDINATES, INITIAL_ZOOM_LEVEL);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: MAX_ZOOM_LEVEL,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	for (const [structureName, coordinates] of Object.entries(POLYGONS)) {
		const polygon = L.polygon(coordinates).addTo(map);

		polygon.on("click", (e) => {
			console.log(structureName, "clicked")
			selectedStructure = STRUCTURES[structureName];
		});
	}
});
</script>

<div id="map"></div>
<StructureSidebar {...selectedStructure} />

<style>
:global(body) {
	margin: 0;
}
#map {
	/* ensure that the sidebar can appear above the map */
	z-index: 1;
	height: 100vh;
}
</style>
