<script setup lang="ts">
import type { RemoveFunction } from '@/stores/cart'
import { RouterLink } from 'vue-router'
import IconRemove from './icons/IconRemove.vue'
import type { ProductDetails } from '@/api/data'
import IconStar from './icons/IconStar.vue'

const props = defineProps<{
  item: ProductDetails
  removeFunction: RemoveFunction
}>()

const { item, removeFunction } = props

const { id, title, price, image, rating } = item
const link = '/product/' + String(id)
</script>

<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
    <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <RouterLink :to="link" class="shrink-0 md:order-1">
        <img class="h-20 w-20" :src="image" alt="imac image" />
      </RouterLink>

      <div class="w-full flex-1 space-y-4 md:order-2">
        <RouterLink :to="link" class="text-base font-medium text-gray-900 hover:underline">{{
          title
        }}</RouterLink>

        <div class="mt-2 flex items-center gap-2">
          <div class="flex items-center">
            <div v-for="index in Math.floor(rating.rate)" v-bind:key="index"><IconStar /></div>
          </div>
          <p class="text-sm font-medium text-gray-900">{{ rating.rate }}</p>
          <p class="text-sm font-medium text-gray-500 dark:text-gray-600">({{ rating.count }})</p>
        </div>

        <p class="text-base font-bold text-gray-900">Rs. {{ price }}</p>

        <button
          @click="() => removeFunction(id)"
          type="button"
          class="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
        >
          <IconRemove />
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
