<script setup>
import { useOrderStore } from "../stores/orderStore"
import OrdersTable from "../components/OrdersTable.vue"
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <div>
        <h1 class="text-2xl font-bold">Orders</h1>
        <p class="text-gray-600">
          List of all customer orders
        </p>
      </div>


      <router-link
        to="/orders/new"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        + New order
      </router-link>
    </div>

    <OrdersTable :orders="useOrderStore().orders" />
  </div>
</template>
