<script setup>
import { useProductStore } from "../stores/productStore"
import AddProductForm from "../components/AddProductForm.vue"
import ProductTable from "../components/ProductTable.vue"

const store = useProductStore()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-1">Products</h1>
    <p class="text-gray-600 mb-6">
      Manage product catalog and stock levels
    </p>

    <AddProductForm />
    <ProductTable :products="store.products" />
  </div>
</template>
