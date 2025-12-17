<script setup>
import { useAuthStore } from "../stores/authStore"
import { useRouter, useRoute } from "vue-router"

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const logout = () => {
  auth.logout()
  router.push("/login")
}

const isActive = (path) => route.path === path
</script>

<template>
  <aside class="w-64 bg-slate-900 text-slate-100 min-h-screen flex flex-col">
  <!-- Logo -->
  <div class="px-6 py-5 border-b border-slate-800">
    <h2 class="text-xl font-bold tracking-wide">
      Aspan Admin
    </h2>
    <p class="text-xs text-slate-400">
      Inventory system
    </p>
  </div>

  <!-- Navigation -->
  <nav class="flex flex-col gap-1 px-3 py-4">
    <router-link
      to="/"
      class="px-3 py-2 rounded-lg transition"
      :class="isActive('/') 
        ? 'bg-slate-800 text-white' 
        : 'hover:bg-slate-800/60 text-slate-300'"
    >
      Dashboard
    </router-link>

    <router-link
      to="/products"
      class="px-3 py-2 rounded-lg transition"
      :class="isActive('/products') 
        ? 'bg-slate-800 text-white' 
        : 'hover:bg-slate-800/60 text-slate-300'"
    >
      Products
    </router-link>

    <router-link
      to="/orders"
      class="px-3 py-2 rounded-lg transition"
      :class="isActive('/orders') 
        ? 'bg-slate-800 text-white' 
        : 'hover:bg-slate-800/60 text-slate-300'"
    >
      Orders
    </router-link>
  </nav>

  <!-- Logout -->
  <div class="mt-auto px-6 py-4 border-t border-slate-800">
    <button
      @click="logout"
      class="text-sm text-red-400 hover:text-red-300"
    >
      Logout
    </button>
  </div>
</aside>
</template>

  