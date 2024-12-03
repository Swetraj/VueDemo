export type ProductDetails = {
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

export const getCountData = async (count: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${count}`)
    const posts: ProductDetails[] = await response.json()
    return posts
  } catch (e) {
    console.log('Error fetching summary from REST API : ' + e)
  }
}

export const getAllData = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const posts: ProductDetails[] = await response.json()
    return posts
  } catch (e) {
    console.log('Error fetching summary from REST API : ' + e)
  }
}

export const getDataById = async (id: string | string[]) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const post: ProductDetails = await response.json()
    return post
  } catch (e) {
    console.log('Error fetching summary from REST API : ' + e)
  }
}
