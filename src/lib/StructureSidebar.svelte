<script lang="ts">
	let structure = $props();
</script>

<div>
	<h1>{structure.name}</h1>
	<p>{structure.description}</p>
</div>

<style>
	div {
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		height: 100%;
	}
</style>
