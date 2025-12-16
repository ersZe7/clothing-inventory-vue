import { defineStore } from "pinia";
import { useAuthStore } from "../stores/authStore"

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),

    actions: {
        login(email, password) {
            if(email === "admin@gmail.com" && password === "admin12345") {
                this.user = {email}
                this.isAuthenticated = true

                localStorage.setItem("auth", "true")
                localStorage.setItem("user", JSON.stringify(this.user))
                return true
            }
            return false
        },

        logout() {
            this.user = null
            this.isAuthenticated = false
            localStorage.clear()
        },

        loadSession() {
            const auth = localStorage.getItem("auth")
            if(auth) {
                this.isAuthenticated = true
                this.user = JSON.parse(localStorage.getItem("user"))
            }
        },
    },
})