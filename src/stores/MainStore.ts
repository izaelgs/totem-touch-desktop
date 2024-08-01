import { defineStore } from 'pinia';
import { ref } from 'vue';

export type OrderType = 'takeaway' | 'dinein';
export type ProductType = 'APPETIZERS' | 'COMBOS' | 'DRINKS' | 'DESSERTS';

export enum ProductTypes {
  APPETIZERS = 'ENTRADAS',
  COMBOS = 'COMBOS',
  DRINKS = 'BEBIDAS',
  DESSERTS = 'SOBREMESAS',
}

export const useMainStore = defineStore('main', () => {
  const orderType = ref<OrderType>('dinein');
  const productType = ref<ProductType>('APPETIZERS');

  const selectOrderType = (type: OrderType) => {
    orderType.value = type;
  };

  const selectProductType = (type: ProductType) => {
    productType.value = type;
  };

  return {
    orderType,
    productType,
    selectOrderType,
    selectProductType,
  };
});
