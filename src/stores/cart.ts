import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ProductDetails } from '@/api/data'

export type RemoveFunction = (id: number) => void

export const useCartStore = defineStore('cart', () => {
  const cart = ref<ProductDetails[]>([])

  const totalPrice = computed(() => {
    const total = cart.value.map((item) => item.price)

    const totalPrice = total.reduce((sum, num) => sum + num, 0)
    return totalPrice
  })
  function addToCart(item: ProductDetails) {
    cart.value = [...cart.value, item]
  }

  function removeFromCart(id: number) {
    cart.value = cart.value.filter((item) => item.id != id)
  }

  return { cart, totalPrice, addToCart, removeFromCart }
})
