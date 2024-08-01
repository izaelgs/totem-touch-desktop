<template>
	<div class="p-4">
		<div class="mt-2 relative">
			<!-- Image -->
			<div class="mb-4 h-60 rounded relative w-full mt-2 min-h-20">
				<SpinnerComponent
					v-if="imageLoading"
					class="absolute inset-0 m-auto" />
				<img
					v-if="props.product.imageUrl"
					:src="props.product.imageUrl"
					alt="Product Image"
					class="w-full h-60 mt-2 rounded max-h-96 object-cover"
					@load="imageLoading = false"
					@error="imageLoading = false" />
			</div>
			<div class="h-6 hind-semibold text-red-550">{{ product.name }}</div>
			<div class="h-4 hind-regular w-full mb-2">Com pedaços de queijo e bacon completo.</div>
			<div class="flex justify-end">
				<div class="h-4 hind-semibold text-red-550">R$ 30,00</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import SpinnerComponent from "../../components/SpinnerComponent.vue";
import { Product } from "../../stores/ProductStore";

const props = defineProps<{
	product: Product;
}>();

const imageLoading = ref(true);

onMounted(() => {
	if (!props.product.imageUrl) {
		imageLoading.value = false;
	}
});
</script>

<style scoped>
.dz-preview {
	z-index: 9;
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}

.dz-image,
.dz-image img {
	width: 100%;
	position: absolute;
}
</style>
