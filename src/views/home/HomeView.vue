<script setup lang="ts">
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

import { userStore, hasUser } from '@/stores/user'

const name = defineModel('name', { type: String })

onUnmounted(() => {
  if (name.value) userStore.set(name.value)
})
</script>
<template>
  <main id="page">
    <div id="no-user-container" v-show="!hasUser">
      <p>Vi que você não nos informou seu nome. Como posso te chamar?</p>
      <input v-model="name" id="name-input" placeholder="Nome" />
    </div>
    <router-link to="/tasks" id="go-tasks"
      >Continuar
      {{ userStore.name || name ? `como '${userStore.name || name}'` : 'sem nome' }}</router-link
    >
  </main>
</template>
<style src="../../styles/views/home/HomeView.css" scoped></style>
