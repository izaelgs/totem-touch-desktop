<template>
	<div class="h-screen w-screen bg-white">
		<Header />

		<div
			:class="`grid grid-cols-7 gap-4 ${
				cartStore.cartItems.length > 0 ? 'h-[77.5%]' : 'h-[85.5%]'
			}`">
			<Sidebar />

			<div class="col-span-5 h-full overflow-y-auto custom-scrollbar">
				<h2 class="text-[150%] md:text-[260%] my-[2%]">
					{{ ProductTypes[mainStore.productType] }}
				</h2>

				<template v-if="productsStore.loading">
					<div class="grid grid-cols-2 col-span-7 gap-4">
						<template v-for="n in 9" :key="n">
							<SkeletonProductCard />
						</template>
					</div>
				</template>
				<div v-else-if="productsStore.error">
					{{ productsStore.error }}
				</div>
				<div class="grid grid-cols-2 col-span-7 gap-4" v-else>
					<template
						v-for="product in productsStore.products"
						:key="product.id">
						<ProductCard :product="product" />
					</template>
				</div>
			</div>
		</div>

    <div id="toastContainer"></div>

		<OrderBottomMenu />
	</div>
</template>

<script setup lang="ts">
import Sidebar from "./Sidebar.vue";
import { useMainStore, ProductTypes } from "../../stores/MainStore";
import { useProductStore } from "../../stores/ProductStore";
import { watch, onMounted, computed } from "vue";
import ProductCard from "./ProductCard.vue";
import SkeletonProductCard from "./SkeletonProductCard.vue";
import Header from "../../components/Header.vue";
import { useCartStore } from "../../stores/CartStore";
import OrderBottomMenu from "./OrderBottomMenu.vue";
import { useFlashStore } from "../../stores/FlashStore";

const mainStore = useMainStore();
const productsStore = useProductStore();
const cartStore = useCartStore();
const flashStore = useFlashStore();

const messages = computed(() => flashStore.messages);

const fetchProducts = () => {
	productsStore.fetchProducts(mainStore.productType);
};

onMounted(() => {
	for (const message of flashStore.messages) {
		flashStore.displayMessage(message);
	}
	flashStore.clearMessages();
	fetchProducts();
});

watch(
	() => mainStore.productType,
	() => {
		fetchProducts();
	}
);
</script>
