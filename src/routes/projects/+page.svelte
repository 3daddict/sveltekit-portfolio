<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
	import olukaiWebsite from '$lib/images/olukai_website@2x.jpg';
	import melinWebsite from '$lib/images/melin_website@2x.jpg';
	import roarkWebsite from '$lib/images/roark_website@2x.jpg';
	import kaenonWebsite from '$lib/images/kaenon_website@2x.jpg';
	import bearmtnWebsite from '$lib/images/bearmtn_website@2x.jpg';
	import recipitoWebsite from '$lib/images/recipito_website@2x.jpg';

	const projectData = [
		{
			url: 'https://react-recipe-search.onrender.com/',
			title: 'Recipito',
			caption: 'React Recipe Search',
			description:
				'A recipe search app built with React and Styled Components. This app features a search bar, recipe cards, and a recipe detail page.',
			image: recipitoWebsite,
			altText: 'Reciptio React web application',
			gitHub: 'https://github.com/3daddict/react-recipe-search'
		},
		{
			url: 'https://olukai.com',
			title: 'OluKai',
			caption: 'Premium Hawaiian Inspired Footwear',
			description:
				'Front-End Development utilizing Shopify Liquid, JavaScript, SCSS, and Gulp. Implemented first-party data strategy to improve user experience and personalization. Worked on many third-party integrations including Bloomreach, Reviews.io and Antavo Loyalty.',
			image: olukaiWebsite,
			altText: 'OluKai premium Hawaiian inspired footwear website homepage'
		},
		{
			url: 'https://melin.com',
			title: 'melin',
			caption: 'Better headwear for better adventures',
			description:
				'Front-End Development utilizing Shopify Liquid, JavaScript, SCSS, Tailwind CSS, and Webpack 5. Implemented social widgets, product reviews and referral program. Worked on many third-party integrations including Bloomreach, Attentive and FriendBuy.',
			image: melinWebsite,
			altText: 'melin better headwear for better adventures website homepage'
		},
		{
			url: 'https://roark.com',
			title: 'Roark',
			caption: 'Adventure Ready Goods',
			description:
				'Front-End Development utilizing Shopify Liquid, JavaScript, SCSS, Tailwind CSS and Webpack 5. Implemented user expeirences such as Tailwind CSS navigation menu, product recommendations and SMS program.',
			image: roarkWebsite,
			altText: 'Roark Adventure Ready Goods website homepage'
		},
		{
			url: 'https://kaenon.com',
			title: 'Kaenon',
			caption: 'Polarized Sunglasses',
			description:
				'Front-End Development utilizing Shopify Liquid, JavaScript, SCSS, Tailwind CSS and Webpack 5. Custom Shopify Plus theme featuring custom collection pages, estimated shipping dates, address verification and custom page templates.',
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

<svelte:head>
	<title>Projects</title>
	<meta name="Project Gallery Page" content="Projects I have worked on recently" />
</svelte:head>

<section class="bg-white">
	<div class="mx-auto max-w-2xl px-4 sm:px-6 pt-12 sm:pt-12 sm:pb-6 lg:max-w-7xl lg:px-8">
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
				gitHub={project.gitHub}
				index={i}
			/>
		{/each}
	</div>
</section>
