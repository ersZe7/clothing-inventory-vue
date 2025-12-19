import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "../components/Layout.vue"
import { useAuthStore } from "../stores/authStore"

const routes = [
  {
    path: "/",
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: () => import("../pages/Dashboard.vue"),
      },
      {
        path: "products",
        component: () => import("../pages/Products.vue"),
      },
      {
        path: "products/:id",
        component: () => import("../pages/ProductDetails.vue"),
      },
      {
        path: "orders",
        component: () => import("../pages/Orders.vue"),
      },
      {
        path: "orders/new",
        component: () => import("../pages/NewOrder.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../pages/NotFound.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return "/login"
  }
})

export default router
