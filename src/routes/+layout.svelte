<script>
	import Header from './Header.svelte';
	import Nav from '$lib/Nav.svelte';
	import './styles.css';

	export let data;
</script>

<div class="app">
	<Nav
		ccdata="{data.data[0].rate.slice(0, -5)}"
	/>
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>
