<template>
	<div class="h-screen w-screen bg-white">
		<Header />

		<div class="grid grid-cols-7 gap-4 h-[85.5%]">
			<Sidebar />

			<div class="col-span-5 h-full overflow-y-auto">
				<h2 class="text-[150%] md:text-[250%] my-[2%]">
					{{ ProductTypes[mainStore.productType] }}
				</h2>

        <template v-if="productsStore.loading">
          <div class="grid grid-cols-2 col-span-7 gap-4">
            <template v-for="n in 9" :key="n">
              <SkeletonProductCard />
            </template>
          </div>
        </template>
        <div v-else-if="productsStore.error">{{ productsStore.error }}</div>
        <div class="grid grid-cols-2 col-span-7 gap-4" v-else>
          <template v-for="product in productsStore.products" :key="product.id">
            <ProductCard :product="product" />
          </template>
        </div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import { useMainStore, ProductTypes } from "../../stores/MainStore";
import { useProductStore } from "../../stores/ProductStore";
import { watch } from 'vue'
import ProductCard from "./ProductCard.vue";
import SkeletonProductCard from "./SkeletonProductCard.vue";

const mainStore = useMainStore();
const productsStore = useProductStore()

watch(mainStore, () => {
  console.log('rendering dashboard')
  productsStore.fetchProducts(mainStore.productType)
})

</script>
