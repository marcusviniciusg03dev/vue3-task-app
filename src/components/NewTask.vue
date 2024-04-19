<script lang="ts" setup>
import { useTasks } from '@/stores/tasks'
import { Teleport, ref } from 'vue'

const title = defineModel<string>({
  type: String
})
const isTyping = ref(false)
const error = ref<string | null>(null)
let typingInterval: any
const handleTyping = () => {
  if (typingInterval) clearInterval(typingInterval)
  isTyping.value = true
  typingInterval = setInterval(() => {
    isTyping.value = false
  }, 500)
}
const { tasks } = useTasks()
const runErrorAlert = (text: string) => {
  error.value = text
  setTimeout(() => (error.value = null), 4000)
}
const handleSubmit = async () => {
  if (error.value) {
    error.value = null
  }
  if (!title.value) {
    return runErrorAlert('O título está vazio!')
  }
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      userId: 1
    }),
    headers: {
      'Content-type': 'application/json'
    }
  })
  if (!response.ok) {
    return runErrorAlert('Não foi possível criar item.')
  }
  const createdTask = await response.json()
  tasks.value = [...tasks.value, createdTask]
  title.value = ''
}
</script>
<template>
  <Teleport to="#app">
    <Transition name="alert">
      <div v-if="error" class="mt-8 right-8 flex absolute bg-red-100 p-6 rounded-sm shadow-md">
        <p class="text-red-500 font-bold">{{ error }}</p>
      </div>
    </Transition>
  </Teleport>

  <header class="p-5 bg-slate-800 text-[#fefefe] flex items-center justify-center">
    <form @submit.prevent="handleSubmit" class="flex gap-4">
      <input
        @keyup.prevent="handleTyping"
        v-model="title"
        placeholder="Título"
        class="border-0 bg-[#fefefe] text-black rounded-md w-full min-w-[25rem] p-4 placeholder:tracking-wider placeholder:font-bold"
      />
      <button
        type="submit"
        :disabled="isTyping"
        class="p-4 px-5 bg-red-600 font-bold border-0 rounded-md tracking-wider hover:shadow-lg"
      >
        {{ isTyping ? 'Digitando...' : 'Adicionar' }}
      </button>
    </form>
  </header>
</template>
