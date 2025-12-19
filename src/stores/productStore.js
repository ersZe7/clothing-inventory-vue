import { defineStore } from "pinia"
import { fetchProductsFromApi } from "../services/api"

export const useProductStore = defineStore("products", {
  state: () => ({

    products: [
      {
        id: 1,
        name: "Oversize T-Shirt",
        price: 12990,
        sizes: { S: 3, M: 5, L: 1, XL: 0 },
      },
    ],

    loading: false,
    error: null,
  }),

  actions: {
    addProduct(product) {
      this.products.push({
        id: Date.now(),
        ...product,
      })
    },

    sell(productId, size, quantity = 1) {
      const product = this.products.find(p => p.id === productId)
      if (product && product.sizes[size] >= quantity) {
        product.sizes[size] -= quantity
      }
    },

    async loadProductsFromApi() {
      this.loading = true
      this.error = null

      try {
        const apiProducts = await fetchProductsFromApi()

        const mapped = apiProducts.slice(0, 5).map(p => ({
          id: p.id,
          name: p.title,
          price: p.price,
          sizes: {
            S: 10,
            M: 10,
            L: 10,
            XL: 10,
          },
        }))

        this.products.push(...mapped)
      } catch (err) {
        this.error = err.message || "Failed to load products"
      } finally {
        this.loading = false
      }
    },
  },
})
