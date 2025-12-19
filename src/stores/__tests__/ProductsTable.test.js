import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import ProductsTable from "@/components/ProductTable.vue"




describe("ProductsTable", () => {
  it("renders products from props", () => {
    const wrapper = mount(ProductsTable, {
      props: {
        products: [
          {
            id: 1,
            name: "Test T-Shirt",
            price: 1000,
            sizes: { S: 1, M: 2, L: 3, XL: 4 },
          },
        ],
      },
    })

    expect(wrapper.text()).toContain("Test T-Shirt")
    expect(wrapper.text()).toContain("1000")
  })
})
