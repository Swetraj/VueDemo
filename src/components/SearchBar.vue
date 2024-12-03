<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue'
import { onMounted, ref } from 'vue'
import { getAllData, type ProductDetails } from '@/api/data'
import SearchBody from './SearchBody.vue'

const searchClicked = ref(false)
const allData = ref<ProductDetails[]>()

const toggleSearch = () => {
  searchClicked.value = !searchClicked.value
}

const loadData = async () => {
  const response = await getAllData()
  allData.value = response
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <form class="relative">
    <div>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >Search</label
      >
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="search"
          @focusout="toggleSearch"
          @focusin="toggleSearch"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
    <div v-if="searchClicked" class="absolute block top-13 right-0">
      <SearchBody />
    </div>
  </form>
</template>
