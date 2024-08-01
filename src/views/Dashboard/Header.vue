<template>
	<div
		to="order-type-selection"
		class="w-full h-[14.5%] flex justify-center items-center bg-red-650 cursor-pointer relative"
		aria-hidden="true">
		<img
			src="../../assets/bemBoladoLogo.png"
			alt="Logo"
			class="mx-7 h-2/3 object-cover" />

		<div
			class="flex justify-end gap-1 md:gap-2 w-screen p-[2%] absolute top-0">
			<CountryList />
		</div>
	</div>
</template>

<script setup lang="ts"></script>
