import { ref, watch } from "vue"

export function useLocalStorage(key, defaultValue = null) {
  const storedValue = localStorage.getItem(key)

  const data = ref(
    storedValue ? JSON.parse(storedValue) : defaultValue
  )

  watch(
    data,
    (newValue) => {
      if (newValue === null) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true }
  )

  return data
}
