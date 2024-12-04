<script setup lang="ts">
import IconAddToCart from './icons/IconAddToCart.vue'
import { RouterLink } from 'vue-router'
import IconStar from './icons/IconStar.vue'
import type { ProductDetails } from '@/api/data'

type AddFunction = (item: ProductDetails) => void

const props = defineProps<{
  item: ProductDetails
  addToCart: AddFunction
}>()

const { item, addToCart } = props
const { id, image, title, price, description, rating, category } = item
const link = '/products/' + String(id)
</script>

<template>
  <div
    class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-[100%] flex flex-col justify-between"
  >
    <div>
      <div class="h-56 w-full">
        <RouterLink :to="link">
          <img class="mx-auto h-full" :src="image" alt="" />
        </RouterLink>
      </div>
      <div class="pt-6">
        <RouterLink
          :to="link"
          class="text-lg font-semibold leading-tight text-gray-900 hover:underline line-clamp-2"
          >{{ title }}</RouterLink
        >
        <div class="mt-2 flex items-center gap-2">
          <div class="flex items-center">
            <div v-for="index in Math.floor(rating.rate)" v-bind:key="index"><IconStar /></div>
          </div>
          <p class="text-sm font-medium text-gray-900">{{ rating.rate }}</p>
          <p class="text-sm font-medium text-gray-500">({{ rating.count }})</p>
        </div>
        <div class="my-2">
          <span class="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">{{
            category
          }}</span>
        </div>

        <div class="text-gray-900 line-clamp-3">
          {{ description }}
        </div>
      </div>
    </div>
    <div class="mt-4 flex items-center justify-between gap-4">
      <p class="text-xl font-extrabold leading-tight text-gray-900">Rs. {{ price }}</p>

      <button
        @click="addToCart(item)"
        type="button"
        class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <IconAddToCart />
        Add to cart
      </button>
    </div>
  </div>
</template>
