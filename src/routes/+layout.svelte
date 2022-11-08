<script>
	import Nav from '$lib/Nav.svelte';
	import './styles.css';

	export let data;
</script>

<div class="app">
	<Nav ccdata={data.data[0].rate.slice(0, -5)} />

	<main>
		<slot />
	</main>

	<footer>
		<div class="w-full p-2 py-8 mt-8 text-center border-t border-gray-200">
			<span class="inline-flex">
				&copy; {new Date().getFullYear()} msalvati.com
			</span>
		</div>
	</footer>
</div>
