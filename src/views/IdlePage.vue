<script setup lang="ts"></script>

<template>
	<div class="flex flex-col h-screen w-screen bg-red-650 relative">
		<img
			src="../assets/idleBackground.png"
			alt="Logo"
			class="w-full h-[80%] object-cover" />

		<router-link
			to="order-type-selection"
			class="w-full h-[20%] flex items-center bg-red-650 cursor-pointer"
			aria-hidden="true">
			<img
				src="../assets/bemBoladoLogo.png"
				alt="Logo"
				class="mx-7 h-[80%] object-cover" />

			<div class="flex flex-col justify-center items-center">
				<div class="mb-2 text-white text-4xl">TOQUE PARA COMEÇAR</div>
				<div
					class="text-white text-5xs glegoo-regular absolute bottom-0 end-0 pb-1 pe-3">
					v 1.0.0
				</div>
			</div>
		</router-link>
	</div>
</template>

<script setup></script>
