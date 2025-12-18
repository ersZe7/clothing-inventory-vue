<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { useProductStore } from "../stores/productStore"

const route = useRoute()
const store = useProductStore()

const product = computed(() => {
  return store.products.find(
    p => p.id === Number(route.params.id)
  )
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Product details
    </h1>

    <div
      v-if="product"
      class="bg-white border rounded-xl p-6 max-w-lg"
    >
      <h2 class="text-xl font-semibold mb-2">
        {{ product.name }}
      </h2>

      <p class="text-gray-600 mb-4">
        Price: {{ product.price }} ₸
      </p>

      <div class="grid grid-cols-4 gap-3 text-center">
        <div
          v-for="(qty, size) in product.sizes"
          :key="size"
          class="border rounded p-3"
        >
          <p class="font-medium">{{ size }}</p>
          <p class="text-gray-600">{{ qty }}</p>
        </div>
      </div>

      <router-link
        to="/products"
        class="inline-block mt-6 text-primary hover:underline"
      >
        ← Back to products
      </router-link>
    </div>

    <p v-else class="text-gray-500">
      Product not found
    </p>
  </div>
</template>
