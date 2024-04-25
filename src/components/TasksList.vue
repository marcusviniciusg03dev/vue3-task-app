<script lang="ts" setup>
import TaskContainer from '@/components/TaskContainer.vue'
import { useTasks } from '@/stores/tasks'
import { onMounted } from 'vue'

const tasks = useTasks()

onMounted(() => {
  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (response.ok) {
      tasks.set(await response.json())
    }
  }
  getTodos()
})
</script>
<template>
  <div class="flex flex-col items-center gap-4 overflow-y-auto p-4 bg-slate-100">
    <TaskContainer v-for="(task, i) in tasks.reverse" v-bind:key="i" :task="task" />
  </div>
</template>
