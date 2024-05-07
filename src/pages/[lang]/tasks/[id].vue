<script lang="ts" setup>
import { inject } from 'vue'

import type { ITask } from '@/interfaces/ITask'
import Button from '@/components/Button.vue'
import { ref } from 'vue';

const translate = inject('translate')

const route = useRoute()

const task = await useFetch<ITask>(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`, {
  watch: [ref(route.params.id)]
})

useHead({
  title: task.data.value?.title,
  meta: [
    { name: 'description', content: 'Visualizar tarefa.' },
    { name: 'robots', content: 'noindex,nofollow' }
  ]
})
</script>
<template>
  <main class="h-full w-full bg-gray-50 p-16">
    <Button @handle-click="() => $router.back()">{{ translate('taskView.back') }}</Button>
    <div v-if="task.pending.value" id="loading">{{ translate('_shared.loading') }}</div>
    <div v-else-if="task.error.value" id="error">
      {{ task.status.value === 404 ? translate('_shared.errors.notFound') : translate('_shared.errors.unexpected') }}
    </div>
    <div v-else class="flex flex-col gap-10 mt-5">
      <h1 class="font-bold text-xl">{{ task.data.value?.title }}</h1>
      <p>
        {{ translate('taskView.completedLabel') }}:
        {{ task.data.value?.completed ? translate('_shared.true') : translate('_shared.false') }}
      </p>
      <p>{{ translate('taskView.userIdLabel') }}: {{ task.data.value?.userId }}</p>
    </div>
  </main>
</template>
