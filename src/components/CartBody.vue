<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import CartItem from './CartItem.vue'
import { RouterLink } from 'vue-router'
import storePhoto from '@/assets/cartEmpty.png'

const store = useCartStore()
</script>

<template>
  <div
    class="absolute top-10 right-0 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8"
  >
    <div class="flex items-center justify-between mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900">Cart Item</h5>
      <RouterLink to="/cart" class="t ext-sm font-medium text-blue-600 hover:underline">
        View all
      </RouterLink>
    </div>
    <div class="flow-root">
      <div v-if="store.cart.length == 0" class="px-4 py-3 min-w-80 flex-col text-center">
        <img :src="storePhoto" alt="store empty" class="w-full" />
        <h4 class="font-bold">Your Cart is Empty</h4>
      </div>

      <ul v-if="store.cart.length > 0" role="list" class="divide-y divide-gray-200">
        <div v-for="(item, index) in store.cart" v-bind:key="index">
          <CartItem :item="item" />
        </div>
      </ul>
    </div>
  </div>
</template>
