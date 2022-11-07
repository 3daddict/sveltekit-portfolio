<script>
	import heroImage from '$lib/images/office-desk-developers.jpg';
	export let scrollId = 'heroContainer';

	function scrollToContent(scrollId) {
		document.getElementById(`${scrollId}`).scrollIntoView();
	}
</script>

<div class="relative mt-10 mb-4 overflow-hidden bg-white" id="heroContainer">
	<div class="mx-auto max-w-7xl">
		<div
			class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
		>
			<svg
				class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>
			<main class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
						<span class="block mb-1 xl:inline">👋 Hello...</span>
						<span class="block text-blue-600 xl:inline">I like to build things.</span>
					</h1>
					<p
						class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
					>
						Thanks for checking out my portfolio, here are a few things I like to work with.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="rounded-md shadow">
							<button
								on:click={scrollToContent(scrollId)}
								class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
							>
								Get in touch
							</button>
						</div>
						<div class="mt-3 sm:mt-0 sm:ml-3">
							<a
								href="https://github.com/3daddict/"
								target="_blank"
								rel="noreferrer"
								class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
							>
								GitHub Page
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
			src={heroImage}
			alt="Development office view"
		/>
	</div>
</div>
