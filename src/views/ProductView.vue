<script setup lang="ts">
import { getDataById } from '@/api/data'
import IconAddToCart from '@/components/icons/IconAddToCart.vue'
import NavBar from '@/components/NavBar.vue'
import { onMounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { ProductDetails } from '@/api/data'
import { useCartStore } from '@/stores/cart'
import IconStar from '@/components/icons/IconStar.vue'

const route = useRoute()
const store = useCartStore()

const post = ref<ProductDetails>()

const loadData = async () => {
  const response = await getDataById(route.params.id)
  post.value = response
}

onMounted(() => {
  loadData()
})
onUpdated(() => {
  loadData()
})
</script>

<template>
  <header>
    <NavBar />
  </header>
  <section class="py-8 bg-white md:py-16 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div v-if="post" class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <img class="w-full" :src="post?.image" alt="" />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl">
            {{ post?.title }}
          </h1>
          <div class="my-2">
            <span
              class="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
              >{{ post?.category }}</span
            >
          </div>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl">{{ post?.price }}</p>

            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <div v-if="post?.rating.rate" class="flex items-center gap-1">
                <IconStar v-for="index in Math.floor(post?.rating.rate)" v-bind:key="index" />
              </div>
              <p class="text-sm font-medium leading-none text-gray-500">{{ post?.rating.rate }}</p>
              <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline"
              >
                {{ post?.rating.count }} Reviews
              </a>
            </div>
          </div>

          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <button
              @click="store.addToCart(post!)"
              class="text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center"
            >
              <IconAddToCart />

              Add to cart
            </button>
          </div>

          <hr class="my-6 md:my-8 border-gray-200" />

          <p class="mb-6 text-gray-500">
            {{ post?.description }}
          </p>
        </div>
      </div>
      <div v-else>Loading...</div>
    </div>
  </section>
</template>
