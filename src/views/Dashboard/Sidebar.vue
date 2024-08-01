<template>
	<aside class="bg-red-650 col-span-2 h-full">
		<div
			@click="() => handleSelectProductType('appetizers')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-y border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'appetizers' ? 'bg-amber-450' : null
			}`">
			ENTRADAS
		</div>
		<div
			@click="() => handleSelectProductType('combos')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'combos' ? 'bg-amber-450' : null
			}`">
			COMBOS
		</div>
		<div
			@click="() => handleSelectProductType('drinks')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'drinks' ? 'bg-amber-450' : null
			}`">
			BEBIDAS
		</div>
		<div
			@click="() => handleSelectProductType('desserts')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'desserts' ? 'bg-amber-450' : null
			}`">
			SOBREMESAS
		</div>
	</aside>
</template>

<script setup lang="ts">
import { ProductType, useMainStore } from "../../stores/MainStore";

const mainStore = useMainStore();

const handleSelectProductType = (productType: ProductType) => {
	mainStore.selectProductType(productType);
};
</script>
