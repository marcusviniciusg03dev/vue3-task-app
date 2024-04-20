<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ITask } from '@/interfaces/ITask'

const translate = inject('translate')

const {
  currentRoute: {
    value: { params }
  }
} = useRouter()

const task = ref<ITask | null>()
const loading = ref<boolean>(true)
const error = ref<string | null>()

onMounted(() => {
  const getTodos = async () => {
    loading.value = true
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    if (response.ok) {
      task.value = await response.json()
    } else if (response.status === 404) {
      error.value = translate('taskView.errors.notFound')
    }
    loading.value = false
  }
  getTodos()
})
</script>
<template>
  <main class="h-screen w-full bg-gray-50 p-16">
    <button
      @click.prevent="$router.back()"
      class="p-2 rounded-3xl bg-gray-900 text-slate-50 min-w-28 font-bold border-2 hover:bg-slate-100 hover:text-slate-600 transition-all duration-75"
    >
      voltar
    </button>
    <div v-if="loading" id="loading">{{ translate('_shared.loading') }}</div>
    <div v-else-if="error" id="error">
      {{ error }}
    </div>
    <div v-else class="flex flex-col gap-10">
      <h1 class="font-bold text-xl">{{ task!.title }}</h1>
      <p>
        {{ translate('taskView.completedLabel') }}:
        {{ task!.completed ? translate('_shared.true') : translate('_shared.false') }}
      </p>
      <p>{{ translate('taskView.userIdLabel') }}: {{ task!.userId }}</p>
    </div>
  </main>
</template>
