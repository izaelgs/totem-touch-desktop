<template>
	<div class="h-screen w-screen flex flex-col bg-white">
		<div
			to="order-type-selection"
			class="w-full h-[14.5%] flex justify-center items-center bg-red-650 cursor-pointer"
			aria-hidden="true">
			<img
				src="../../assets/bemBoladoLogo.png"
				alt="Logo"
				class="mx-7 h-2/3 object-cover" />
		</div>
		<aside class="bg-red-650 grow w-[25.4%]">
      <div class="h-[18.1%] flex justify-center items-center text-white border-y border-indigo-500 cursor-pointer">ENTRADAS</div>
      <div class="h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer">COMBOS</div>
      <div class="h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer">BEBIDAS</div>
      <div class="h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer">SOBREMESAS</div>
    </aside>
		<RouterView />
	</div>
</template>

<script setup lang="ts">
// import 'vue3-toastify/dist/index.css'
</script>
