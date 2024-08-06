<template>
	<div class="flex flex-col justify-center items-center h-screen w-screen bg-stone-350">
    <div class="grid grid-cols-2 gap-[16%] h-1/3 w-screen px-12">
      <div @click="() => selectOrder('takeaway')" class="flex justify-center items-center bg-white rounded-lg drop-shadow-md relative active:border-4 active:border-red-600 cursor-pointer">
        <img
          src="../assets/bag.svg"
          alt="Logo"
          class="object-cover h-[31%] mb-8 pb-2">
        </img>
        <div class="mb-2 text-[110%] md:text-[210%] text-center absolute w-full top-2/3">PARA VIAGEM</div>
      </div>
      <div @click="() => selectOrder('dinein')" class="flex justify-center items-center bg-white rounded-lg drop-shadow-md relative active:border-4 active:border-red-600 cursor-pointer">
        <img
          src="../assets/meal.svg"
          alt="Logo"
          class="object-cover h-[36%] mb-10">
        </img>
        <div class="mb-2 text-[110%] md:text-[210%] text-center absolute w-full top-2/3">COMER AGORA</div>
      </div>
    </div>

    <div class="flex justify-center gap-1 md:gap-2 w-screen my-[15%]">
      <CountryList />
    </div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { OrderType, useMainStore } from '../stores/MainStore'

import CountryList  from '../components/CountryList.vue'

const router = useRouter();
const {selectOrderType} = useMainStore();

const selectOrder = (orderType: OrderType) => {
  selectOrderType(orderType);
  router.push('dashboard')
}
</script>
