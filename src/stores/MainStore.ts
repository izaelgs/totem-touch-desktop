import { defineStore } from 'pinia';
import { ref } from 'vue';

export type OrderType = 'takeaway' | 'dinein';
export type ProductType = 'appetizers' | 'combos' | 'drinks' | 'desserts';

export enum ProductTypes {
  appetizers = 'ENTRADAS',
  combos = 'COMBOS',
  drinks = 'BEBIDAS',
  desserts = 'SOBREMESAS',
}

export const useMainStore = defineStore('main', () => {
  const orderType = ref<OrderType>('dinein');
  const productType = ref<ProductType>('appetizers');

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
