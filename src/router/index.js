import { createRouter, createWebHistory } from "vue-router"
import Layout from "../components/Layout.vue"
import Dashboard from "../pages/Dashboard.vue"
import Products from "../pages/Products.vue"
import Login from "../pages/Login.vue"
import NotFound from "../pages/NotFound.vue"
import { useAuthStore } from "../stores/authStore"

const routes = [
  {
    path: "/",
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: Dashboard,
      },
      {
        path: "products",
        component: Products,
      },
      {
        path: "orders",
        component: () => import("../pages/Orders.vue"),
      },
      {
        path: "orders/new",
        component: () => import("../pages/NewOrder.vue"),
      },
      {
        path: "products/:id",
        component: () => import("../pages/ProductDetails.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return "/login"
  }
})


export default router
