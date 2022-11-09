<script>
	export let url;
	export let title;
	export let caption;
	export let description;
	export let image;
	export let altText;
	export let index;
</script>

<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 mt-12 mb-24">
	<div
		class="mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 {index % 2 == 0
			? 'lg:col-start-1'
			: 'lg:col-start-8 xl:col-start-9'}"
	>
		<h3 class="text-lg font-medium text-gray-900">
			{#if url}
				<a
					class={url ? 'hover:text-blue-600 hover:underline' : ''}
					href={url}
					target="blank"
					rel="noreferrer">{title}</a
				>
			{:else}
				<p class={url ? 'hover:text-blue-600 hover:underline' : ''}>{title}</p>
			{/if}
		</h3>
		<dt class="text-base font-semibold tracking-wide text-blue-600 uppercase">
			{caption}
		</dt>
		<p class="mt-2 text-sm text-gray-500">
			{description}
		</p>
	</div>
	<div
		class="flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 {index % 2 == 0
			? 'lg:col-start-6 xl:col-start-5'
			: 'lg:col-start-1'}"
	>
		<div
			class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 shadow hover:md:hover:scale-105 transform transition-transform duration-300 ease-in-out"
		>
			{#if url}
				<a class="hover:text-blue-600 hover:underline" href={url} target="blank" rel="noreferrer">
					<img src={image} alt={altText} class="object-cover object-center" />
				</a>
			{:else}
				<img src={image} alt={altText} class="object-cover object-center" />
			{/if}
		</div>
	</div>
</div>
