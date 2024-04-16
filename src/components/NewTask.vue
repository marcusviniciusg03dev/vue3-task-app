<script lang="ts" setup>
import { tasks } from '@/stores/tasks'
import { ref } from 'vue'

const title = defineModel<string>({
  type: String
})
const isTyping = ref(false)
let typingInterval: any
const handleTyping = () => {
  if (typingInterval) clearInterval(typingInterval)
  isTyping.value = true
  typingInterval = setInterval(() => {
    isTyping.value = false
  }, 500)
}
const handleSubmit = () => {
  if (!title.value) return alert('O título está vazio!')
  tasks.value = [...tasks.value, { title: title.value }]
  title.value = ''
}
</script>
<template>
  <header>
    <form @submit.prevent="handleSubmit">
      <input @keyup.prevent="handleTyping" v-model="title" placeholder="Título" />
      <button type="submit" :disabled="isTyping">
        {{ isTyping ? 'Digitando...' : 'Adicionar' }}
      </button>
    </form>
  </header>
</template>
<style src="../styles/components/NewTask.css" scoped></style>
