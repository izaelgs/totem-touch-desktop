<template>
	<router-link
		:to="{ name: 'ProductComplements', params: { id: product.id } }"
		class="p-4 cursor-pointer">
		<div class="relative">
			<div class="mb-3 h-60 rounded relative w-full">
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
			<div class="hind-semibold text-red-550 text-2xl mb-3">
				{{ product.name }}
			</div>
			<div class="hind-regular w-full text-lg leading-4">
				{{ product.description}}
			</div>
			<div class="flex pb-8 justify-end border-b border-stone-350">
				<div class="hind-semibold text-red-550 text-lg leading-4">
					{{ product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) }}
				</div>
			</div>
      <div
        class="rounded-full w-10 h-10 flex justify-center items-center bg-red-650 text-white absolute -right-4 -top-4"
        v-if="
          cartStore.cartItems.find(
            p => p.product.id === product.id
          )
        ">
        <Icon
          height="33"
          icon="material-symbols-light:check" />
      </div>
		</div>
	</router-link>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import SpinnerComponent from "../../components/SpinnerComponent.vue";
import { Product } from "../../stores/ProductStore";
import { useCartStore } from "../../stores/CartStore";
import { Icon } from "@iconify/vue";

const props = defineProps<{
	product: Product;
}>();

const imageLoading = ref(true);

const cartStore = useCartStore();

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
