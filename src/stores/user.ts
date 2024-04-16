import { computed, reactive } from 'vue'

export const userStore = reactive({
  name: <string | null>null,
  set(name: string) {
    window.localStorage.setItem('user_name', name)
    this.name = name
  }
})

export const hasUser = computed(() => !!userStore.name)
