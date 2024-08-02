import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product, ProductAddableItem, ProductRemovableItem } from './ProductStore';

interface CartItem {
  product: Product;
  removableItems: ProductRemovableItem[];
  addableItems: ProductAddableItem[];
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  const addProductToCart = (
    product: Product,
    removableItems: ProductRemovableItem[],
    addableItems: ProductAddableItem[]
  ) => {
    cartItems.value.push({ product, removableItems, addableItems });
  };

  const removeProductFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.product.id !== productId);
  };

  const updateCartItem = (
    productId: number,
    removableItems: ProductRemovableItem[],
    addableItems: ProductAddableItem[]
  ) => {
    const item = cartItems.value.find(item => item.product.id === productId);
    if (item) {
      item.removableItems = removableItems;
      item.addableItems = addableItems;
    }
  };

  return {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    updateCartItem
  };
});
