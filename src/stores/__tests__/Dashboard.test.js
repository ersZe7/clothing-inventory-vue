import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { createPinia } from "pinia"
import Dashboard from "@/pages/Dashboard.vue"

describe("Dashboard", () => {
  it("renders dashboard title", () => {
    const wrapper = mount(Dashboard, {
      global: {
        plugins: [createPinia()],
      },
    })

    expect(wrapper.text()).toContain("Dashboard")
  })
})
