<script setup lang="ts">
import { type ProductDetails } from '@/api/data'

const props = defineProps<{
  list: ProductDetails[] | undefined
}>()
</script>
<template>
  <div class="block p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8">
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 block">
        <div v-for="(item, index) in props.list" v-bind:key="index" class="">
          <RouterLink :to="`/products/${item.id}`">
            <li class="p-2 rounded hover:bg-gray-200">
              {{ item.title }}
            </li>
          </RouterLink>
        </div>
      </ul>
    </div>
  </div>
</template>
