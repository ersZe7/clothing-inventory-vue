<script setup>
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "../stores/authStore"

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  username: "",
  password: "",
})

const error = reactive({
  message: "",
})

const submit = () => {
  const success = authStore.login(
    form.username,
    form.password
  )

  if (success) {
    router.push("/")
  } else {
    error.message = "Invalid login or password"
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

      <div class="mb-6 text-center">
        <h1 class="text-2xl font-bold">Aspan Admin</h1>
      </div>

      <div
        v-if="error.message"
        class="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded"
      >
        {{ error.message }}
      </div>


      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-sm text-gray-600 mb-1"> Login
          </label>
          <input
            v-model="form.username"
            type="text"
            placeholder="admin"
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-600 mb-1"> Password
          </label>
          <input
            v-model="form.password"
            type="password"
            placeholder="password"
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Sign in
        </button>
      </form>

    </div>
  </div>
</template>
