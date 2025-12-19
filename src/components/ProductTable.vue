<script setup>
defineProps({ products: Array })

const totalStock = (product) =>
  Object.values(product.sizes).reduce((a, b) => a + b, 0)
</script>

<template>
  <table class="w-full border bg-white text-sm">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-3 text-left">Name</th>
        <th class="p-3 text-left">Price</th>
        <th class="p-3 text-center">S</th>
        <th class="p-3 text-center">M</th>
        <th class="p-3 text-center">L</th>
        <th class="p-3 text-center">XL</th>
        <th class="p-3 text-center">Total</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="p in products" :key="p.id"
        class="border-t hover:bg-gray-50 transition">

        <td class="p-3 text-primary hover:underline">
          <router-link :to="`/products/${p.id}`">
            {{ p.name }}
          </router-link>
        </td>

        <td class="p-3">{{ p.price }}</td>

        <td class="p-3 text-center">{{ p.sizes.S }}</td>
        <td class="p-3 text-center">{{ p.sizes.M }}</td>
        <td class="p-3 text-center">{{ p.sizes.L }}</td>
        <td class="p-3 text-center">{{ p.sizes.XL }}</td>

        <td class="p-3 text-center font-medium">
          {{ totalStock(p) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
