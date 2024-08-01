<template>
	<aside class="bg-red-650 col-span-2">
		<div
			@click="() => handleSelectProductType('APPETIZERS')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-y border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'APPETIZERS' ? 'bg-amber-450' : null
			}`">
			ENTRADAS
		</div>
		<div
			@click="() => handleSelectProductType('COMBOS')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'COMBOS' ? 'bg-amber-450' : null
			}`">
			COMBOS
		</div>
		<div
			@click="() => handleSelectProductType('DRINKS')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'DRINKS' ? 'bg-amber-450' : null
			}`">
			BEBIDAS
		</div>
		<div
			@click="() => handleSelectProductType('DESSERTS')"
			:class="`h-[18.1%] flex justify-center items-center text-white border-b border-indigo-500 cursor-pointer active:bg-amber-450 ${
				mainStore.productType === 'DESSERTS' ? 'bg-amber-450' : null
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
