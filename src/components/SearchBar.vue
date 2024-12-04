<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue'
import { onMounted, ref } from 'vue'
import { getAllData, type ProductDetails } from '@/api/data'
import SearchBody from './SearchBody.vue'

const searchClicked = ref(false)
const allData = ref<ProductDetails[]>()
const searchData = ref<ProductDetails[]>()
const searchQuery = ref<string>()
const isQueryEmpty = ref(false)

const openSearch = () => {
  searchClicked.value = true
}
const closeSearch = () => {
  searchClicked.value = false
}
const loadData = async () => {
  const response = await getAllData()
  allData.value = response
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value.toLowerCase()
  searchQuery.value = value
  if (searchQuery.value == '' || searchQuery.value == ' ') {
    searchData.value = []
    isQueryEmpty.value = true
    return
  }
  searchData.value = allData.value?.filter(
    (item) =>
      item.title.toLowerCase().includes(value) || item.category.toLowerCase().includes(value),
  )
  isQueryEmpty.value = false
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div
    v-if="searchClicked"
    class="absolute top-0 left-0 z-0 w-full h-full"
    @click="closeSearch"
  ></div>
  <form class="relative z-10">
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
          @input="handleInput"
          @focusin="openSearch"
          :value="searchQuery"
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
    <div v-if="searchClicked" class="absolute z-10 block top-13 left-0 w-full">
      <SearchBody :list="searchData" :is-query-empty="isQueryEmpty" />
    </div>
  </form>
</template>
