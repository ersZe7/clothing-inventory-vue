import { describe, it, expect, beforeEach } from "vitest"
import { mount } from "@vue/test-utils"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import Sidebar from "@/components/Sidebar.vue"

beforeEach(() => {
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: { template: "<div />" } },
    { path: "/products", component: { template: "<div />" } },
    { path: "/orders", component: { template: "<div />" } },
  ],
})

describe("Sidebar", () => {
  it("renders navigation links", async () => {
    const pinia = createPinia()

    const wrapper = mount(Sidebar, {
      global: {
        plugins: [pinia, router],
      },
    })

    expect(wrapper.text()).toContain("Dashboard")
    expect(wrapper.text()).toContain("Products")
    expect(wrapper.text()).toContain("Orders")
  })
})
