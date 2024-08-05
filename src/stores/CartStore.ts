import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product, ProductRemovableItem } from './ProductStore';

export interface CartItem {
  product: Product;
  removableItems: ProductRemovableItem[];
  addableItems: CartAddableItem[];
  quantity: number;
}

export interface CartAddableItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  const addProductToCart = (
    product: Product,
    removableItems: ProductRemovableItem[],
    addableItems: CartAddableItem[],
    quantity: number
  ) => {
    cartItems.value.push({ product, removableItems, addableItems, quantity });
  };

  const removeProductFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.product.id !== productId);
  };

  const updateCartItem = (
    productId: number,
    payload: CartItem,
  ) => {
    cartItems.value = cartItems.value.map(cartItem => {
      if (cartItem.product.id === productId) {
        return { ...cartItem, ...payload };
      }
      return cartItem;
    });
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  return {
    cartItems,
    addProductToCart,
    removeProductFromCart,
    updateCartItem,
    clearCart,
  };
});
