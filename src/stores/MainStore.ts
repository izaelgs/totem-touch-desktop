import { defineStore } from 'pinia'
import { ref } from 'vue'

export type OrderType = 'takeaway' | 'dinein';

export const useMainStore = defineStore('main', () => {
  const orderType = ref<OrderType>('dinein')

  const selectOrderType = (type: OrderType) => {
    orderType.value = type;
  }

  return {
    orderType,
    selectOrderType
  }
})
