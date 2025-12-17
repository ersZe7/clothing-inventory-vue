<script setup>
import { useOrderStore } from "../stores/orderStore"

defineProps({
  orders: Array,
})

const store = useOrderStore()

const remove = (id) => {
  if (confirm("Delete this order?")) {
    store.deleteOrder(id)
  }
}
</script>

<template>
  <div class="bg-white border rounded">
    <table class="w-full text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-3 text-left">Date</th>
          <th class="p-3 text-left">Customer</th>
          <th class="p-3 text-left">Phone</th>
          <th class="p-3 text-left">Product</th>
          <th class="p-3 text-center">Size</th>
          <th class="p-3 text-center">Qty</th>
          <th class="p-3 text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="o in orders"
          :key="o.id"
          class="border-t"
        >
          <td class="p-3">{{ o.date }}</td>
          <td class="p-3">{{ o.customer }}</td>
          <td class="p-3">{{ o.phone }}</td>
          <td class="p-3">{{ o.productName }}</td>
          <td class="p-3 text-center">{{ o.size }}</td>
          <td class="p-3 text-center font-medium">
            {{ o.quantity }}
          </td>

          <td class="p-3 text-center">
            <button
              @click="remove(o.id)"
              class="text-red-600 hover:underline"
            >
              Delete
            </button>
          </td>
        </tr>

        <tr v-if="!orders.length">
          <td
            colspan="7"
            class="p-4 text-center text-gray-500"
          >
            No orders yet
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
