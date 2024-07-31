<template>
	<div class="flex flex-col justify-center items-center h-screen w-screen bg-stone-350">
    <div class="grid grid-cols-2 gap-10 h-1/3 w-screen px-6">
      <div @click="() => selectOrder('takeaway')" class="flex justify-center items-center bg-white rounded-lg drop-shadow-md relative active:border-2 active:border-red-650 cursor-pointer">
        <img
          src="../assets/bag.svg"
          alt="Logo"
          class="object-cover h-20 mb-8 pb-2">
        </img>
        <div class="mb-2 text-lg text-center absolute w-full top-2/3">PARA VIAGEM</div>
      </div>
      <div @click="() => selectOrder('dinein')" class="flex justify-center items-center bg-white rounded-lg drop-shadow-md relative active:border-2 active:border-red-650 cursor-pointer">
        <img
          src="../assets/meal.svg"
          alt="Logo"
          class="object-cover h-20 mb-10">
        </img>
        <div class="mb-2 text-lg text-center absolute w-full top-2/3">COMER AGORA</div>
      </div>
    </div>

    <div class="flex justify-center gap-1 w-screen my-16">
      <img
          src="../assets/flags/brazilFlag.png"
          alt="Logo"
          class="object-fill h-3 w-4">
        </img>
      <img
          src="../assets/flags/euaFlag.png"
          alt="Logo"
          class="object-fill h-3 w-4">
        </img>
      <img
          src="../assets/flags/japanFlag.png"
          alt="Logo"
          class="object-fill h-3 w-4">
        </img>
    </div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { OrderType, useMainStore } from '../stores/MainStore'

const router = useRouter();
const {selectOrderType} = useMainStore();

const selectOrder = (orderType: OrderType) => {
  selectOrderType(orderType);
  router.push('dashboard')
}
</script>
