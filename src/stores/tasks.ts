import type { ITask } from '@/interfaces/ITask'
import { computed, ref } from 'vue'

const tasks = ref<ITask[]>([])

export const useTasks = () => {
  const reversedTasks = computed(() => [...tasks.value].reverse())

  return {
    tasks,
    reversedTasks
  }
}
