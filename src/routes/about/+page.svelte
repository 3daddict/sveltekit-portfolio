<script>
	import profileImage from '$lib/images/profile_image.jpeg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="bg-white">
	<div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
		<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
			<div class="space-y-5 sm:space-y-4 max-w-md">
				<ul class="space-y-12 sm:grid">
					<li>
						<div class="space-y-4">
							<div class="aspect-w-3 aspect-h-3">
								<img
									class="rounded object-cover shadow"
									src={profileImage}
									alt="Mike Salvati Web Developer"
								/>
							</div>
							<div class="space-y-1 text-lg font-medium leading-6">
								<h3>Mike Salvati</h3>
								<p class="text-blue-600">Full-Stack Developer</p>
							</div>
							<div class="text-lg">
								<p class="text-gray-500">
									Specializing in front-end development with a focus on React, SvelteKit, and
									Tailwind CSS. I also have experience with back-end development using Node.js,
									Express, and MongoDB.
								</p>
							</div>
							<ul class="flex space-x-5">
								<li>
									<a
										href="https://twitter.com/rvncmd"
										target="_blank"
										rel="noreferrer"
										class="text-gray-400 hover:text-gray-500"
									>
										<span class="sr-only">Twitter</span>
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
											<path
												d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/msalvati/"
										target="_blank"
										rel="noreferrer"
										class="text-gray-400 hover:text-gray-500"
									>
										<span class="sr-only">LinkedIn</span>
										<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
											<path
												fill-rule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clip-rule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div class="lg:col-span-2">
				<h2
					class="text-2xl sm:text-4xl md:text-6xl mt-2 font-extrabold leading-8 tracking-tight mb-4"
				>
					About me
				</h2>
				<p class="text-base md:text-xl text-gray-500 mb-6">
					Previously coming from an engineering background, I have always been interested in web
					development. In a previous startup venture I had the opportunity to learn how to build a
					website from scratch. I was hooked. I have been working as a web developer for the past 5
					years. I have experience with front-end development using React, Svelte, and Tailwind CSS
					as well as experience with back-end development using Node.js, Express and MongoDB.
				</p>
				<p class="text-base md:text-xl text-gray-500 mb-6">
					I currently work as a full-stack developer and product manager for a portfolio of
					eCommerce brands. I have had a heavy influence on the company's technology stack and have
					been able to implement new technologies and processes to improve the efficiency of the
					development team. With previous startup experience and the ability to work in a fast-paced
					environment, I am able to quickly adapt to new situations and learn new technologies.
				</p>
				<p class="text-base md:text-xl text-gray-500 mb-6">
					In my free time, I build web apps in SvelteKit and React. I am also interested in working
					with TypeScript and GraphQL. As a previous miner I am also fascinated with Web3 and
					Blockchain. I have some experience with Solana and would be open to opportunities where I
					can grow as a blockchain developer. If you're looking for a developer with a wide range of
					experience, feel free to contact me. I'm always happy to help out and chat about code!
				</p>
				<a
					href="/#contactSection"
					class="flex mx-auto text-white mt-12 justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium hover:bg-blue-700 sm:w-auto bg-blue-600"
					>Let's Connect</a
				>
			</div>
		</div>
	</div>
</section>
