<script setup>
import { onMounted } from "vue"
import { useProductStore } from "../stores/productStore"
import ProductsTable from "../components/ProductTable.vue"
import AddProductForm from "../components/AddProductForm.vue"

const store = useProductStore()

onMounted(() => {
  store.loadProductsFromApi()
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-1">Products</h1>

    <AddProductForm class="mb-6" @add="store.addProduct"/>

    <p v-if="store.loading" class="text-gray-500">
      Loading products...
    </p>

    <p v-else-if="store.error" class="text-red-600">
      {{ store.error }}
    </p>

    <ProductsTable
      v-else
      :products="store.products"
    />
  </div>
</template>
