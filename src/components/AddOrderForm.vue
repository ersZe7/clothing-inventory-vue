<script setup>
import { reactive, computed, ref } from "vue"
import { useProductStore } from "../stores/productStore"
import { useOrderStore } from "../stores/orderStore"

const productStore = useProductStore()
const orderStore = useOrderStore()

const error = ref("")

const form = reactive({
  customer: "",
  phone: "",
  productId: "",
  size: "",
  quantity: 1,
})

const selectedProduct = computed(() =>
  productStore.products.find(p => p.id === Number(form.productId))
)

const availableSizes = computed(() =>
  selectedProduct.value ? Object.keys(selectedProduct.value.sizes) : []
)

const submit = () => {
  if (
    !form.customer ||
    !form.phone ||
    !form.productId ||
    !form.size
  ) {
    error.value = "Please fill all fields"
    return
  }

  const available =
    selectedProduct.value.sizes[form.size]

  if (available < form.quantity) {
    error.value = "Not enough stock for selected size"
    return
  }

  orderStore.createOrder({
    customer: form.customer,
    phone: form.phone,
    productId: Number(form.productId),
    productName: selectedProduct.value.name,
    size: form.size,
    quantity: form.quantity,
  })

  // reset
  Object.assign(form, {
    customer: "",
    phone: "",
    productId: "",
    size: "",
    quantity: 1,
  })

  error.value = ""
}
</script>

<template>
  <form
    @submit.prevent="submit"
    class="bg-white border rounded p-6 max-w-xl"
  >
    <h2 class="text-xl font-semibold mb-1">
      Create Order
    </h2>
    <p class="text-sm text-gray-500 mb-4">
      Fill customer and product information
    </p>

    <p v-if="error" class="text-red-600 mb-3">
      {{ error }}
    </p>

    <!-- Customer -->
    <label class="block text-sm text-gray-600 mb-1">
      Customer name
    </label>
    <input
      v-model="form.customer"
      class="border p-2 w-full mb-3"
    />

    <label class="block text-sm text-gray-600 mb-1">
      Phone number
    </label>
    <input
      v-model="form.phone"
      class="border p-2 w-full mb-3"
    />

    <!-- Product -->
    <label class="block text-sm text-gray-600 mb-1">
      Product
    </label>
    <select
      v-model="form.productId"
      class="border p-2 w-full mb-3"
    >
      <option value="">Select product</option>
      <option
        v-for="p in productStore.products"
        :key="p.id"
        :value="p.id"
      >
        {{ p.name }}
      </option>
    </select>

    <!-- Size -->
    <label class="block text-sm text-gray-600 mb-1">
      Size
    </label>
    <select
      v-model="form.size"
      class="border p-2 w-full mb-3"
      :disabled="!selectedProduct"
    >
      <option value="">Select size</option>
      <option
        v-for="s in availableSizes"
        :key="s"
      >
        {{ s }} ({{ selectedProduct.sizes[s] }})
      </option>
    </select>

    <!-- Quantity -->
    <label class="block text-sm text-gray-600 mb-1">
      Quantity
    </label>
    <input
      v-model.number="form.quantity"
      type="number"
      min="1"
      class="border p-2 w-full mb-4"
    />

    <button
      class="bg-green-600 text-white px-4 py-2 rounded"
    >
      Place order
    </button>
  </form>
</template>
