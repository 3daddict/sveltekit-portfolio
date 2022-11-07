<script>
	import shopifyLogo from '$lib/images/shopify_glyph.svg';
	import nodeJsLogo from '$lib/images/nodejs.png';
	import svelteLogo from '$lib/images/svelte_logo.png';
	import postmanLogo from '$lib/images/postman_logo.png';
	import reactLogo from '$lib/images/react_logo.svg';
	import graphqlLogo from '$lib/images/graphql_logo.svg';
</script>

<div class="container py-12 mx-auto bg-white">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<div class="lg:text-center md:mb-20">
			<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Interestes</h2>
			<p
				class="text-2xl sm:text-4xl md:text-6xl mt-2 font-extrabold leading-8 tracking-tight text-gray-900"
			>
				Here are some things I 💖 to work with
			</p>
			<p class="max-w-2xl mt-4 text-base sm:text-lg md:text-xl text-gray-500 lg:mx-auto">
				I work with a lot of different stacks, platforms and API's. Here are a few that I enjoy
				working with and I am always looking to learn new things.
			</p>
		</div>

		<div class="mt-10">
			<dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
				<div class="flex">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center w-auto h-12">
							<img
								class="rounded-md w-auto	h-16"
								src={shopifyLogo}
								alt="shopify e-commerce platform"
							/>
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg font-medium leading-6 text-gray-900">Shopify</dt>
						<dd class="mt-2 text-base text-gray-500">
							I am a Shopify Partner working with building custom themes, integrating platforms and
							setting up automations for e-commerce stores.
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center w-auto h-12">
							<img
								class="rounded-md w-auto	h-16"
								src={nodeJsLogo}
								alt="nodejs backend software development"
							/>
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg font-medium leading-6 text-gray-900">Node.js</dt>
						<dd class="mt-2 text-base text-gray-500">
							Whether I am creating a back-end server, writing custom scripts, building apps or
							creating servless functions. Node.js is my go to asynchronous JavaScript runtime
							environment.
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center w-auto h-12">
							<img
								class="rounded-md w-auto	h-16"
								src={svelteLogo}
								alt="svelte cybernetically enhanced web apps"
							/>
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg font-medium leading-6 text-gray-900">Svelte</dt>
						<dd class="mt-2 text-base text-gray-500">
							Svelte is the latest approach to building user interfaces and has quickly become my
							favorite choice when building front-end clients.
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center w-auto h-12">
							<img
								class="rounded-md w-auto	h-16"
								src={postmanLogo}
								alt="restful api data and json"
							/>
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg font-medium leading-6 text-gray-900">RESTful API</dt>
						<dd class="mt-2 text-base text-gray-500">
							Building a REST API and working with json data from RESTful API Web Services is
							something I truly enjoy. Data is everything.
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center w-auto h-12">
							<img class="rounded-md w-auto	h-16" src={reactLogo} alt="React javascript framework" />
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg font-medium leading-6 text-gray-900">React</dt>
						<dd class="mt-2 text-base text-gray-500">
							React is another JavaScript framework I enjoy working with. Since it's adoption of
							hooks I am eager to get back into working with it.
						</dd>
					</div>
				</div>

				<div class="flex">
					<div class="flex-shrink-0">
						<div class="flex items-center justify-center w-auto h-12">
							<img class="rounded-md w-auto	h-16" src={graphqlLogo} alt="GraphQL query language" />
						</div>
					</div>
					<div class="ml-4">
						<dt class="text-lg font-medium leading-6 text-gray-900">GraphQL</dt>
						<dd class="mt-2 text-base text-gray-500">
							I have worked with GraphQL on front-end themes for Shopify. I really enjoy this method
							of queries and mutations of data.
						</dd>
					</div>
				</div>
			</dl>
		</div>
	</div>
</div>
