<script setup lang="ts">
import { type ProductDetails } from '@/api/data'
import { RouterLink } from 'vue-router'
import IconCrossRed from './icons/IconCrossRed.vue'
import { useCartStore } from '@/stores/cart'

const props = defineProps<{
  item: ProductDetails
}>()
const { item } = props
const { id, title, description, price, image } = item
const link = '/cart/#' + String(id)
const store = useCartStore()
</script>

<template>
  <li class="py-3 sm:py-4 truncate overflow-hidden">
    <div class="flex items-center">
      <RouterLink
        :to="link"
        class="flex items-center truncate py-2 px-2 rounded-md hover:bg-gray-100"
      >
        <div class="flex-shrink-0">
          <img class="w-8 h-8 rounded-full" :src="image" alt="Neil image" />
        </div>
        <div class="flex-1 min-w-0 ms-4">
          <p class="text-sm font-medium text-gray-900 truncate">{{ title }}</p>
          <p class="text-sm text-gray-500 truncate">
            {{ description }}
          </p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 ml-2">
          Rs. {{ price }}
        </div>
      </RouterLink>
      <button @click="store.removeFromCart(id)" class="ml-4">
        <IconCrossRed />
      </button>
    </div>
  </li>
</template>
