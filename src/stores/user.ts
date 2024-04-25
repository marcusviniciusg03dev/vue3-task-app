import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({ name: <string | null>null }),
  actions: {
    set(name: string): void {
      window.localStorage.setItem('user_name', name)
      this.name = name
    }
  },
  getters: {
    hasUser(state): boolean {
      return !!state.name
    }
  }
})
