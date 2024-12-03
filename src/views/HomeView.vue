<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CardItem from '@/components/CardItem.vue'
import NavBar from '@/components/NavBar.vue'
import { useCartStore } from '@/stores/cart'
import { getCountData } from '@/api/data'

type Item = {
  id: number
  image: string
  title: string
  price: number
  rating: {
    rate: number
    count: number
  }
  description: string
}

const store = useCartStore()

const posts = ref<Item[]>()

const postCount = ref(8)

function showMore() {
  postCount.value = postCount.value + 4
  loadData()
}

const loadData = async () => {
  const response = await getCountData(postCount.value)
  posts.value = response
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <header>
    <NavBar />
  </header>
  <section class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 flex flex-col items-center">
    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="(post, index) in posts" :key="index">
        <CardItem :item="post" :add-to-cart="store.addToCart" />
      </div>
    </div>
    <button
      @click="showMore()"
      type="button"
      class="text-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      Show More
    </button>
  </section>
</template>
