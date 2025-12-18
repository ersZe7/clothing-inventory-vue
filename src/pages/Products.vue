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
    <p class="text-gray-600 mb-6">
      Manage your inventory
    </p>

    <!-- Add product -->
    <AddProductForm class="mb-6" />

    <!-- Loading -->
    <p v-if="store.loading" class="text-gray-500">
      Loading products...
    </p>

    <!-- Error -->
    <p v-else-if="store.error" class="text-red-600">
      {{ store.error }}
    </p>

    <!-- Products table -->
    <ProductsTable
      v-else
      :products="store.products"
    />
  </div>
</template>

