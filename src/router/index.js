import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../pages/Dashboard.vue"
import Login from "../pages/Login.vue"
import NotFound from "../pages/NotFound.vue"

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/:catchAll(.*)", component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
