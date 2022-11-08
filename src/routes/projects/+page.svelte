<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
	import olukaiWebsite from '$lib/images/olukai_website@2x.jpg';
	import melinWebsite from '$lib/images/melin_website@2x.jpg';
	import roarkWebsite from '$lib/images/roark_website@2x.jpg';
	import kaenonWebsite from '$lib/images/kaenon_website@2x.jpg';
	import bearmtnWebsite from '$lib/images/bearmtn_website@2x.jpg';

	const projectData = [
		{
			url: 'https://olukai.com',
			title: 'OluKai',
			caption: 'Premium Hawaiian Inspired Footwear',
			description:
				'Custom Shopify Plus theme featuring a custom product structure, custom product page, and custom checkout experience. This theme includes advanced features like gated content, product recommendations and customized templates.',
			image: olukaiWebsite,
			altText: 'OluKai premium Hawaiian inspired footwear website homepage'
		},
		{
			url: 'https://melin.com',
			title: 'melin',
			caption: 'Better headwear for better adventures',
			description:
				'Custom Shopify Plus theme featuring Webpack scaffolding, custom Shopify product structure, Tailwind CSS, estimated shipping dates and custiom page templates.',
			image: melinWebsite,
			altText: 'melin better headwear for better adventures website homepage'
		},
		{
			url: 'https://roark.com',
			title: 'Roark',
			caption: 'Adventure Ready Goods',
			description:
				'Custom Shopify Plus theme featuring Webpack scaffolding, Tailwind CSS, gift with purchase, product filtering and custiom page templates.',
			image: roarkWebsite,
			altText: 'Roark Adventure Ready Goods website homepage'
		},
		{
			url: 'https://kaenon.com',
			title: 'Kaenon',
			caption: 'Polarized Sunglasses',
			description:
				'Custom Shopify Plus theme featuring custom collection pages, estimated shipping dates, address verification and custom page templates.',
			image: kaenonWebsite,
			altText: 'Kaenon Polarized Sunglasses website homepage'
		},
		{
			url: 'https://bearmtnsolar.com/',
			title: 'Bear Mountain Solar',
			caption: 'Solar Installation Website',
			description:
				'Custom website built with SvelteKit and Tailwind CSS. This website features a homepage, about page, and financing page.',
			image: bearmtnWebsite,
			altText: 'Bear Mountain Solar Solar Installation Website'
		}
	];
</script>

<section class="bg-white">
	<div class="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-24 lg:max-w-7xl lg:px-8">
		<div class="mx-auto max-w-3xl text-center mb-24">
			<h2
				class="text-3xl sm:text-4xl md:text-6xl mt-2 font-extrabold leading-8 tracking-tight text-gray-900"
			>
				Projects
			</h2>
			<p class="mt-4 text-gray-500 text-base md:text-xl">
				Here are a few projects I've worked on recently.
			</p>
		</div>

		{#each projectData as project, i}
			<ProjectCard
				url={project.url}
				title={project.title}
				caption={project.caption}
				description={project.description}
				image={project.image}
				altText={project.altText}
				index={i}
			/>
		{/each}
	</div>
</section>
