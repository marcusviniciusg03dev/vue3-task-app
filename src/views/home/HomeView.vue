<script setup lang="ts">
import { onUnmounted } from 'vue'

import { userStore, hasUser } from '@/stores/user'

const name = defineModel('name', { type: String })

onUnmounted(() => {
  if (name.value) userStore.set(name.value)
})
</script>
<template>
  <main class="h-screen bg-[#ff0000] flex flex-col items-center justify-center gap-10">
    <div class="grid gap-4 text-gray-50" v-show="!hasUser">
      <p>Notamos que você não nos informou seu nome. Como podemos chamar você?</p>
      <input v-model="name" class="w-full p-4 border-0" placeholder="Nome" />
    </div>
    <router-link
      to="/tasks"
      class="bg-[#ffeeee] text-black p-4 justify-center align-center transition-all duration-75 hover:shadow-xl"
      >Continuar
      {{ userStore.name || name ? `como '${userStore.name || name}'` : 'sem nome' }}</router-link
    >
  </main>
</template>
