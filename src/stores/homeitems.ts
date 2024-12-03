import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getAllData } from '@/api/data'

export type RemoveFunction = (id: number) => void

export const useHomeItemsStore = defineStore('homeItems', () => {
  const itemCount = ref(8)

  function increaseItems() {
    itemCount.value = itemCount.value + 8
  }

  const itemList = computed(async () => {
    const items = await getAllData(itemCount.value)

    return items
  })

  return { itemList, increaseItems }
})
