<script setup>
import { computed } from "vue"
import { useProductStore } from "../stores/productStore"
import { useOrderStore } from "../stores/orderStore"

const productStore = useProductStore()
const orderStore = useOrderStore()

const productsCount = computed(() =>
  productStore.products.length
)

const ordersCount = computed(() =>
  orderStore.orders.length
)

const totalStock = computed(() =>
  productStore.products.reduce((total, product) => {
    return (
      total +
      Object.values(product.sizes).reduce((a, b) => a + b, 0)
    )
  }, 0)
)
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Dashboard</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Products -->
      <div
        class="bg-white rounded-xl p-6 border-l-4 border-blue-500 hover:shadow transition"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Products</p>
            <p class="text-3xl font-bold mt-1">
              {{ productsCount }}
            </p>
          </div>
          <span class="text-3xl">📦</span>
        </div>
      </div>

      <!-- Orders -->
      <div
        class="bg-white rounded-xl p-6 border-l-4 border-green-500 hover:shadow transition"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Orders</p>
            <p class="text-3xl font-bold mt-1">
              {{ ordersCount }}
            </p>
          </div>
          <span class="text-3xl">🧾</span>
        </div>
      </div>

      <!-- Total stock -->
      <div
        class="bg-white rounded-xl p-6 border-l-4 border-purple-500 hover:shadow transition"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Total stock</p>
            <p class="text-3xl font-bold mt-1">
              {{ totalStock }}
            </p>
          </div>
          <span class="text-3xl">📊</span>
        </div>
      </div>
    </div>
  </div>
</template>


