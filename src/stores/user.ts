import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userStore = defineStore('user', () => {
  const name = ref<string | null>(null)
  
  const set = (props: { name: string }) => {
    window.localStorage.setItem('user_name', props.name)
    name.value = props.name
  }
  
  const hasUser = () => {
    return !!name.value
  }

  return { name, set, hasUser }
})
