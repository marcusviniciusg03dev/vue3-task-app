import type { ITask } from '@/interfaces/ITask'
import { defineStore } from 'pinia'

export const useTasks = defineStore('tasks', {
  state: () => ({ list: <ITask[]>[] }),
  getters: {
    reverse(): ITask[] {
      return [...this.list].reverse()
    }
  },
  actions: {
    set(tasks: ITask[]) {
      this.list = tasks
    },
    add(task: ITask) {
      this.$state.list.push(task)
    },
    remove(id: number) {
      this.$state.list = this.$state.list.filter((item) => item.id !== id)
    }
  }
})