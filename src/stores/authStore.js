import { defineStore } from "pinia"
import { useLocalStorage } from "../composables/useLocalStorage"

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: useLocalStorage("user", null),
    isAuthenticated: useLocalStorage("auth", false),
  }),

  actions: {
    login(username, password) {
      if (username === "admin" && password === "admin12345") {
        this.user = { username }
        this.isAuthenticated = true
        return true
      }
      return false
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
    },
  },
})
