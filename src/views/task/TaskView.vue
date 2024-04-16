<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ITask } from '@/interfaces/ITask'

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
      error.value = 'Item não encontrado.'
    }
    loading.value = false
  }
  getTodos()
})
</script>
<template>
  <main class="h-screen w-full bg-gray-50 p-16">
    <div v-if="loading" id="loading">loading...</div>
    <div v-else-if="error" id="error">
      {{ error }}
    </div>
    <div v-else class="flex flex-col gap-10">
      <h1 class="font-bold text-xl">{{ task!.title }}</h1>
      <p>Completo: {{ task!.completed ? 'verdadeiro' : 'falso' }}</p>
      <p>Id do usuário: {{ task!.userId }}</p>
    </div>
  </main>
</template>
