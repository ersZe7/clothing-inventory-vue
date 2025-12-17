import { defineStore } from "pinia"

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
  },
})
