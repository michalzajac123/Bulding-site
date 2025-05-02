<template>
	<div class="w-full flex justify-between bg-gray-100">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full px-8 max-w-7xl mx-auto">
			<div
				class="p-8 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
				<h1 class="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6 tracking-tight">
					Oto kilka naszych projektów
					<span class="block w-16 h-2 bg-white mt-4 rounded-full"></span>
				</h1>

				<p class="text-white/90 text-md lg:text-lg font-medium mb-6">Zobacz także nasze sociale:</p>

				<div class="flex space-x-5">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						aria-label="Facebook"
						class="transition-all transform hover:scale-110 hover:rotate-6">
						<div class="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-blue-500 transition-all duration-300">
							<svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.88h2.76l-.44 2.89h-2.32v6.99C18.34 21.13 22 17 22 12z" />
							</svg>
						</div>
					</a>

					<a
						href="https://www.instagram.com/"
						target="_blank"
						aria-label="Instagram"
						class="transition-all transform hover:scale-110 hover:-rotate-6">
						<div
							class="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-gradient-to-br from-pink-500 to-purple-600 transition-all duration-300">
							<svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5A3.25 3.25 0 0 1 19.5 7.75v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5A3.25 3.25 0 0 1 4.5 16.25v-8.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
							</svg>
						</div>
					</a>
				</div>
			</div>
			<div class="bg-white shadow-md p-4 rounded">Element 2</div>
			<div class="bg-white shadow-md p-4 rounded">Element 3</div>
			<div class="bg-white shadow-md p-4 rounded">Element 4</div>
			<div class="bg-white shadow-md p-4 rounded">Element 5</div>
			<div class="bg-white shadow-md p-4 rounded">Element 6</div>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>
