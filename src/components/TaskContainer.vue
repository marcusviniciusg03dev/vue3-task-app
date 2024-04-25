<script lang="ts" setup>
import { useTasks } from '@/stores/tasks'
import { inject } from 'vue'
const props = defineProps(['task'])

const tasks = useTasks()

const handleDelete = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.task.id}`, {
    method: 'DELETE'
  })
  if (response.ok) {
    tasks.remove(props.task.id)
  }
} 

const translate = inject('translate')
</script>
<template>
  <router-link
    :to="`/${$route.params.lang}/tasks/${task.id}`"
    class="grid grid-cols-[auto_5rem] items-center pointer p-4 w-full max-w-[40rem] bg-slate-200 transition-all hover:shadow-md"
  >
    <h3 class="text-[rgb(130,_40,_40)]">{{ props.task.title }}</h3>
    <a @click.prevent="handleDelete" class="text-red-500 font-extrabold uppercase">{{
      translate('_shared.remove')
    }}</a>
  </router-link>
</template>
