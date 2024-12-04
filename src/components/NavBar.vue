<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import IconCart from './icons/IconCart.vue'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import CartBody from './CartBody.vue'
import SearchBar from './SearchBar.vue'

const store = useCartStore()
const { cart } = storeToRefs(store)
const cartOpen = ref(false)
function toggleCart() {
  cartOpen.value = !cartOpen.value
}
</script>

<template>
  <nav class="bg-white">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">
        <RouterLink to="/" title="" class="mr-4">
          <img
            class="block w-auto h-8"
            src="http://aayulogic.com/_nuxt/img/aayulogic-main.ef7e693.svg"
            alt=""
          />
        </RouterLink>

        <div class="hidden sm:block mx-auto sm:max-w-md md:w-full">
          <SearchBar />
        </div>
        <div
          v-if="cartOpen"
          class="absolute top-0 left-0 z-10 w-full h-full"
          @click="toggleCart"
        ></div>

        <div class="relative flex items-center z-20 lg:space-x-2">
          <button
            @click="toggleCart"
            type="button"
            class="relative inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
          >
            <span class="sr-only"> Cart </span>
            <IconCart />
            <span class="hidden sm:flex">My Cart</span>
            <div
              v-if="cart.length > 0"
              class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2"
            >
              {{ cart.length }}
            </div>
          </button>
          <CartBody v-if="cartOpen" />
        </div>
      </div>
      <div class="sm:hidden mx-auto mt-4 sm:max-w-md md:w-full">
        <SearchBar />
      </div>
    </div>
  </nav>
</template>
