import { describe, it, expect, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useProductStore } from "../productStore"

describe("Product Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("adds a new product", () => {
    const store = useProductStore()

    store.addProduct({
      name: "Test Hoodie",
      price: 19990,
      sizes: { S: 1, M: 2, L: 3, XL: 4 },
    })

    expect(store.products.length).toBeGreaterThan(1)
    expect(store.products.at(-1).name).toBe("Test Hoodie")
  })
})
