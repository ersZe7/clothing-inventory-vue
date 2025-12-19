<script setup>
import { reactive, ref } from "vue"

const emit = defineEmits(["add"])
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

  emit("add", {
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

    <input v-model="form.name" placeholder="Product name" class="border p-2 w-full mb-3" />
    <input v-model="form.price" type="number" placeholder="Price" class="border p-2 w-full mb-4" />

    <div class="grid grid-cols-4 gap-3 mb-4">
      <input
        v-for="size in ['S','M','L','XL']"
        :key="size"
        v-model.number="form.sizes[size]"
        type="number"
        min="0"
        :placeholder="size"
        class="border p-2 w-full"
      />
    </div>

    <button class="bg-blue-600 text-white px-4 py-2 rounded">
      Add product
    </button>
  </form>
</template>
