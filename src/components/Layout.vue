<script setup>
import Sidebar from "./Sidebar.vue"
</script>

<template>
  <div class="flex min-h-screen bg-gray-100">
    <Sidebar />

    <main class="flex-1 p-6">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<style>


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
