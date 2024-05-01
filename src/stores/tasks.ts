import type { ITask } from '@/interfaces/ITask'
import { defineStore, type Pinia } from 'pinia'
import { ref, type Ref } from 'vue'

export const useTasks = defineStore('tasks', () => {
  const list = ref([] as ITask[])
  const requested = ref(false)

  const fetchTasks = async () => {
    if (!requested.value) {
      const response = await $fetch('https://jsonplaceholder.typicode.com/todos')
      if (response) {
        list.value = response as ITask[]
        requested.value = true
      }
    }
  }
  const set = (tasks: ITask[]) => {
    list.value = tasks
  }
  const add = (task: ITask) => {
    list.value.push(task)
  }
  const remove = (id: number) => {
    list.value = list.value.filter((item) => item.id !== id)
  }

  return { list, set, add, remove, fetchTasks }
})