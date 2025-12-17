import { defineStore } from "pinia"
import { useProductStore } from "./productStore"

export const useOrderStore = defineStore("orders", {
  state: () => ({
    orders: [],
  }),

  actions: {
    createOrder(order) {
      const productStore = useProductStore()

      productStore.sell(
        order.productId,
        order.size,
        order.quantity
      )

      this.orders.unshift({
        id: Date.now(),
        date: new Date().toLocaleString(),
        ...order,
      })
    },

    deleteOrder(orderId) {
      this.orders = this.orders.filter(o => o.id !== orderId)
    },
  },
})
