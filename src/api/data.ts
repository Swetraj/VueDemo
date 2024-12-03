import type { ProductDetails } from '@/stores/cart'

export const getAllData = async (count: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${count}`)
    const posts: ProductDetails[] = await response.json()
    return posts
  } catch (e) {
    console.log('Error fetching summary from REST API : ' + e)
  }
}
