<script setup>
import { reactive, ref } from "vue"
import { useProductStore } from "../stores/productStore"

const store = useProductStore()
const error = ref("")

const form = reactive({
  name: "",
  price: "",
  sizes: { S: 0, M: 0, L: 0, XL: 0 },
})

const submit = () => {
  if (!form.name || !form.price) {
    error.value = "Please fill product name and price"
    return
  }

  store.addProduct({
    name: form.name,
    price: Number(form.price),
    sizes: { ...form.sizes },
  })

  form.name = ""
  form.price = ""
  Object.keys(form.sizes).forEach(k => (form.sizes[k] = 0))
  error.value = ""
}
</script>

<template>
  <form class="bg-white border rounded p-6 mb-8" @submit.prevent="submit">
    <h2 class="text-xl font-semibold mb-1">Add new product</h2>

    <p v-if="error" class="text-red-600 mb-3">{{ error }}</p>

    <label class="block text-sm text-gray-600 mb-1">Product name</label>
    <input v-model="form.name" class="border p-2 w-full mb-3" />

    <label class="block text-sm text-gray-600 mb-1">Price</label>
    <input
      v-model="form.price"
      type="number"
      class="border p-2 w-full mb-4"
    />

    <div class="grid grid-cols-4 gap-3 mb-4">
      <div v-for="size in ['S','M','L','XL']" :key="size">
        <label class="block text-sm text-gray-600 mb-1">{{ size }}</label>
        <input
          v-model.number="form.sizes[size]"
          type="number"
          min="0"
          class="border p-2 w-full"
        />
      </div>
    </div>

    <button class="bg-blue-600 text-white px-4 py-2 rounded">
      Add product
    </button>
  </form>
</template>
