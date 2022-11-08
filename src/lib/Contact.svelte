<script>
	import { onMount } from 'svelte';

	onMount(() => {
		window.addEventListener('load', function () {
			document.getElementById('contactForm').reset();
		});
	});
</script>

<section class="relative text-gray-600 body-font" id="contactSection">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col w-full mb-12 text-center">
			<h1
				class="mb-4 text-2xl sm:text-4xl md:text-6xl font-extrabold leading-8 tracking-tight text-gray-900"
			>
				Let's Connect
			</h1>
			<p class="mx-auto text-base leading-relaxed lg:w-2/3">
				Have a question or want to work together? Send me a message and I will get back to you as
				soon as possible!
			</p>
		</div>
		<div class="mx-auto lg:w-1/2 md:w-2/3">
			<form
				id="contactForm"
				action="https://mailthis.to/msalvati"
				method="POST"
				encType="multipart/form-data"
			>
				<div class="flex flex-wrap -m-2">
					<div class="w-1/2 p-2">
						<div class="relative">
							<label for="name" class="text-sm leading-7 text-gray-600">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
							/>
						</div>
					</div>
					<div class="w-1/2 p-2">
						<div class="relative">
							<label for="email" class="text-sm leading-7 text-gray-600">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
							/>
						</div>
					</div>
					<div class="w-full p-2">
						<div class="relative">
							<label for="message" class="text-sm leading-7 text-gray-600">Message</label>
							<textarea
								id="message"
								name="message"
								class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200"
							/>
						</div>
					</div>
					<div class="w-full p-2">
						<button
							type="submit"
							class="flex mx-auto text-white justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium hover:bg-blue-700 sm:w-auto bg-blue-600"
							>Send Message</button
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
