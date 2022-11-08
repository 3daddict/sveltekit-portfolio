<script>
	import shopifyProject from '$lib/images/shopify_store_project.jpeg';
</script>

<section class="bg-white mt-8 md:mt-24">
	<div aria-hidden="true" class="relative">
		<img
			src={shopifyProject}
			alt="latest project shopify theme development with webpack"
			class="h-96 w-full object-cover object-center"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-white" />
	</div>

	<div class="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<div class="lg:text-center md:mb-20">
				<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">
					Latest Project
				</h2>
				<p
					class="text-2xl sm:text-4xl md:text-6xl mt-2 font-extrabold leading-8 tracking-tight text-gray-900"
				>
					Modern Shopify Theme
				</p>
				<p class="max-w-2xl mt-4 text-base sm:text-lg md:text-xl text-gray-500 lg:mx-auto">
					This is a starter Theme using Webpack 5, Shopify CLI and Tailwind CSS. The goal is to
					create a tool with a component-based folder structure that makes it easy to build Shopify
					themes.
				</p>
				<div class="text-center">
					<a
						href="https://github.com/3daddict/webpack-shopify-cli"
						target="_blank"
						rel="noreferrer"
						class="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium text-white hover:bg-gray-800 sm:w-auto bg-black"
					>
						<svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-white"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
							/></svg
						>
						<span class="pl-2 pr-1">See the Repo</span>
					</a>
				</div>
			</div>
		</div>

		<dl
			class="mx-auto mt-8 md:mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
		>
			<div class="border-t border-gray-200 pt-4">
				<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">
					Component Based
				</dt>
				<dd class="mt-2 text-sm text-gray-500">
					This is pre-defined for a component-based file structure compatible with Shopify 2.0
					files. All liquid, js, json and scss are in the same folder to keep things in one place.
				</dd>
			</div>

			<div class="border-t border-gray-200 pt-4">
				<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">Webpack 5</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Webpack 5 is used to compile the liquid, JavaScript, JSON and CSS assets and allows for
					easy npm package imports.
				</dd>
			</div>

			<div class="border-t border-gray-200 pt-4">
				<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">Shopify CLI</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Shopify CLI is used to spin up a temporary Shopify theme during development. It also
					allows for Hot Module Reloading with a local url.
				</dd>
			</div>

			<div class="border-t border-gray-200 pt-4">
				<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">Tailwind CSS</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
				</dd>
			</div>

			<div class="border-t border-gray-200 pt-4">
				<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">
					Theme Check Action
				</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Automated Theme Check Action to ensure your theme is up to date with the latest Shopify
					standards.
				</dd>
			</div>

			<div class="border-t border-gray-200 pt-4">
				<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">
					Lighthouse Action
				</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Automated Lighthouse Action to audit your theme for performance, accessibility, best
					practices, SEO and more.
				</dd>
			</div>
		</dl>
	</div>
</section>
