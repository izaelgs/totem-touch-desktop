<template>
	<div class="flex flex-col h-screen w-screen bg-red-100 relative">
		<img
			src="../assets/idleBackground.png"
			alt="Logo"
			class="w-full h-[80%] object-cover" />

		<div
			class="flex justify-end gap-1 md:gap-2 w-screen p-[2%] absolute top-0">
			<CountryList />
		</div>

		<router-link
			to="order-type-selection"
			class="w-full h-[20%] flex items-center bg-red-650 cursor-pointer"
			aria-hidden="true">
			<img
				src="../assets/bemBoladoLogo.png"
				alt="Logo"
				class="mx-[10%] h-[80%] object-cover" />

			<div class="flex flex-col justify-center items-center">
				<div class="mb-2 text-white text-[300%]">TOQUE PARA COMEÇAR</div>
				<div
					class="text-white text-[50%] glegoo-regular absolute bottom-0 end-0 pb-1 pe-3">
					v 1.0.0
				</div>
			</div>
		</router-link>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import CountryList from '../components/CountryList.vue';
import { useCustomerStore } from '../stores/CustomerStore';

const customerStore = useCustomerStore();

onMounted(() => {
  customerStore.costumerName = '';
  customerStore.costumerCpf = '';
  customerStore.showNameInput = true;
  customerStore.showCpfQuestion = false;
  customerStore.showCpfInput = false;
});
</script>
