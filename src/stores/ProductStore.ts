import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useAxiosStore } from '../services/axiosStore'
import type { ProductType } from './MainStore'

export interface Product {
  id: number
  name: string,
  imageUrl: string,
  price: number,
}

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const axios = useAxiosStore()

  const fetchProducts = async (productType: ProductType) => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get<Product[]>('products/' + productType)

      products.value = response
    } catch (err: any) {
      error.value = err.message
      toast.error('Error fetching products. Please try again later.')
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
})
