<script>
	import Hero from '$lib/Hero.svelte';
	import Interests from '$lib/Interests.svelte';
	import Latest from '$lib/Latest.svelte';
	import Contact from '$lib/Contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Mike Salvati | Developer" />
</svelte:head>

<Hero scrollId="contactSection" />
<Interests />
<Latest />
<Contact />
