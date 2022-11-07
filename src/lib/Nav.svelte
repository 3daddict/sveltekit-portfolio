<script>
	import { page } from '$app/stores';

	export let ccdata;

	let mobileMenuOpen = false;
	let active = 'bg-gray-900 text-white';
	let inactive = 'text-gray-300 hover:bg-gray-700 hover:text-white';
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				>
					<span class="sr-only">Open main menu</span>
					<!--
            Icon when menu is closed.
            Heroicon name: outline/bars-3
            Menu open: "hidden", Menu closed: "block"
          -->
					<svg
						class="{mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
            Icon when menu is open.
            Heroicon name: outline/x-mark
            Menu open: "block", Menu closed: "hidden"
          -->
					<svg
						class="{mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<!-- Logo -->
					<img
						class="block h-8 w-auto rounded-full"
						src="https://avatars.githubusercontent.com/u/29803478?s=80"
						alt="A dedicated developer in deep thought"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a
							data-sveltekit-prefetch
							href="/"
							class="{$page.url.pathname === '/'
								? active
								: inactive} px-3 py-2 rounded-md text-sm font-medium"
							aria-current="page">Home</a
						>

						<a
							data-sveltekit-prefetch
							href="/about"
							class="{$page.url.pathname === '/about'
								? active
								: inactive} px-3 py-2 rounded-md text-sm font-medium">About</a
						>

						<a
							data-sveltekit-prefetch
							href="/projects"
							class="{$page.url.pathname === '/projects'
								? active
								: inactive} px-3 py-2 rounded-md text-sm font-medium">Projects</a
						>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<!-- Right Side of Nav -->
				<p class="text-gray-400">₿: ${ccdata}</p>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden {mobileMenuOpen ? '' : 'hidden'}" id="mobile-menu">
		<div class="space-y-1 px-2 pt-2 pb-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<a
				href="/"
				class="{$page.url.pathname === '/'
					? active
					: inactive} block px-3 py-2 rounded-md text-base font-medium"
				aria-current="page"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>Home</a
			>

			<a
				href="/about"
				class="{$page.url.pathname === '/about'
					? active
					: inactive} block px-3 py-2 rounded-md text-base font-medium"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>About</a
			>

			<a
				href="/projects"
				class="{$page.url.pathname === '/projects'
					? active
					: inactive} block px-3 py-2 rounded-md text-base font-medium"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>Projects</a
			>
		</div>
	</div>
</nav>
