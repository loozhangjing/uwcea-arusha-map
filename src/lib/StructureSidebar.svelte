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
		width: 10rem;
		height: 100%;
		/* no vertical padding so it doesn't overflow (height is already 100%) */
		padding: 0 2rem;

		font-family: system-ui, Arial, sans-serif;
		background-color: #FFFFFFAA;
	}
</style>
