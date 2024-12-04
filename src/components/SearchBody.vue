<script setup lang="ts">
import { type ProductDetails } from '@/api/data'

const props = defineProps<{
  list: ProductDetails[] | undefined
  isQueryEmpty: boolean
}>()
</script>
<template>
  <div class="block p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8">
    <div class="flow-root">
      <ul v-if="props.list" role="list" class="divide-y divide-gray-200 block">
        <div v-for="(item, index) in props.list" v-bind:key="index" class="">
          <RouterLink :to="`/products/${item.id}`">
            <li class="p-2 rounded hover:bg-gray-200">
              {{ item.title }}
              <div class="my-2">
                <span
                  class="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                  >{{ item.category }}</span
                >
              </div>
            </li>
          </RouterLink>
        </div>
      </ul>
      <div v-if="!isQueryEmpty">No items found</div>
    </div>
  </div>
</template>
