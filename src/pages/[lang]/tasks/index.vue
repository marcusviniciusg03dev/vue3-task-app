<script setup lang="ts">
import TaskContainer from '@/components/TaskContainer.vue';
import { useTasks } from '@/stores/tasks'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

useHead({
  title: 'Tarefas',
  meta: [
    { name: 'description', content: 'Suas tarefas.' },
    { name: 'robots', content: 'noindex,nofollow' }
  ]
})

const tasks = useTasks()
const { list } = storeToRefs(tasks)

await tasks.fetchTasks()
</script>
<template>
  <NuxtLayout name="tasks">
    <div class="flex flex-col items-center gap-4 overflow-y-auto p-4 bg-slate-100">
      <TaskContainer v-for="(task, i) in [...list].reverse()" v-bind:key="i" :task="task" />
    </div>
  </NuxtLayout>
</template>
