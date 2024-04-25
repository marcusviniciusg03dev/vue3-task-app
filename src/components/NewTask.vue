<script lang="ts" setup>
import { useTasks } from '@/stores/tasks'
import { vFocus } from '@/directives/vFocus'
import { Teleport, inject, ref } from 'vue'
import Button from './Button.vue'

const translate = inject('translate')

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
const tasks = useTasks()
const runErrorAlert = (text: string) => {
  error.value = text
  setTimeout(() => (error.value = null), 4000)
}
const handleSubmit = async () => {
  if (error.value) {
    error.value = null
  }
  if (!title.value) {
    return runErrorAlert(translate('newTask.errors.emptyTitle'))
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
    return runErrorAlert(translate('newTask.errors.cannotCreate'))
  }
  const createdTask = await response.json()
  tasks.add(createdTask)
  title.value = ''
}
</script>
<template>
  <Teleport to="#message-box-area">
    <Transition name="alert">
      <div v-if="error" class="mt-20 right-8 flex absolute bg-red-100 p-6 rounded-sm shadow-md">
        <p class="text-red-500 font-bold">{{ error }}</p>
      </div>
    </Transition>
  </Teleport>

  <header class="p-5 bg-slate-800 text-[#fefefe] flex items-center justify-center">
    <form @submit.prevent="handleSubmit" class="flex gap-4">
      <input
        v-focus
        @keyup.prevent="handleTyping"
        v-model="title"
        :placeholder="translate('newTask.titlePlaceholder')"
        class="border-0 bg-[#fefefe] text-black rounded-md w-full max-w-[25rem] p-4 placeholder:tracking-wider placeholder:font-bold focus:border-2 focus:border-blue-400 outline-none sm:w-[20rem] md:w-[25rem]"
      />
      <Button type="submit" :disabled="isTyping" variant="secondary">
        {{ isTyping ? translate('_shared.typing') : translate('newTask.add') }}
      </Button>
    </form>
  </header>
</template>
