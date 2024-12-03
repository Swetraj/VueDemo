<script setup lang="ts">
import CartPageItem from '@/components/CartPageItem.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import NavBar from '@/components/NavBar.vue'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'

const store = useCartStore()
const { cart, totalPrice } = storeToRefs(store)
</script>
<template>
  <header>
    <NavBar />
  </header>
  <section class="bg-white py-8 antialiased">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

      <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div class="space-y-6">
            <div v-for="item in cart" v-bind:key="item.id">
              <CartPageItem :item="item" :remove-function="store.removeFromCart" />
            </div>
          </div>
        </div>

        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <p class="text-xl font-semibold text-gray-900">Order summary</p>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                    Original price
                  </dt>
                  <dd class="text-base font-medium text-gray-900">Rs. {{ totalPrice }}</dd>
                </dl>
              </div>

              <dl
                class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700"
              >
                <dt class="text-base font-bold text-gray-900">Total</dt>
                <dd class="text-base font-bold text-gray-900">{{ totalPrice }}</dd>
              </dl>
            </div>

            <a
              href="#"
              class="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >Proceed to Checkout</a
            >

            <div class="flex items-center justify-center gap-2">
              <span class="text-sm font-normal text-gray-500"> or </span>
              <RouterLink
                to="/"
                class="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline"
              >
                Continue Shopping
                <IconArrow />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
