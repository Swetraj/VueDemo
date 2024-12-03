<script setup lang="ts">
import type { ProductDetails, RemoveFunction } from '@/stores/cart'
import { RouterLink } from 'vue-router'
import IconRemove from './icons/IconRemove.vue'

const props = defineProps<{
  item: ProductDetails
  removeFunction: RemoveFunction
}>()

const { item, removeFunction } = props

const { id, title, price, image } = item
const link = '/product/' + String(id)
</script>

<template>
  <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
    <div
      class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0 xl:justify-start"
    >
      <RouterLink :to="link" class="shrink-0 md:order-1">
        <img class="h-20 w-20" :src="image" alt="imac image" />
      </RouterLink>

      <div class="w-full flex-1 space-y-4 md:order-2">
        <RouterLink :to="link" class="text-base w-full font-medium text-gray-900 hover:underline">{{
          title
        }}</RouterLink>

        <div class="flex items-center justify-between md:order-3 md:justify-end">
          <div class="text-end md:order-4 md:w-32">
            <p class="text-base font-bold text-gray-900">{{ price }}</p>
          </div>
        </div>

        <div class="flex items-center gap-4">
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
  </div>
</template>
