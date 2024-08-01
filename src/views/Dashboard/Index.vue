<template>
	<div class="h-screen w-screen flex flex-col bg-white">
		<Header />

		<div class="grid grid-cols-7 gap-4 grow">
			<Sidebar />

			<div class="col-span-5">
				<h2 class="text-[150%] my-[2%]">
					{{ ProductTypes[mainStore.productType] }}
				</h2>

				<div class="grid grid-cols-2 col-span-7 gap-4 bg-red-400">
          <h2 class="text-[150%] my-[2%]">
            {{ ProductTypes[mainStore.productType] }}
          </h2>
          <h2 class="text-[150%] my-[2%]">
            {{ ProductTypes[mainStore.productType] }}
          </h2>
          <h2 class="text-[150%] my-[2%]">
            {{ ProductTypes[mainStore.productType] }}
          </h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CountryList from "../../components/CountryList.vue";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import { useMainStore, ProductTypes } from "../../stores/MainStore";

const mainStore = useMainStore();
</script>
