<script setup>
import { useProductStore } from "../stores/productStore"
import AddProductForm from "../components/AddProductForm.vue"
import ProductTable from "../components/ProductTable.vue"

const store = useProductStore()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-1">Products</h1>

    <AddProductForm />
    <ProductTable :products="store.products" />
  </div>
</template>
