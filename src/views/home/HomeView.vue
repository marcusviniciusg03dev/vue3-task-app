<script setup lang="ts">
import { inject, onUnmounted } from 'vue'
import { userStore, hasUser } from '@/stores/user'

const translate = inject('translate')

const name = defineModel('name', { type: String })

onUnmounted(() => {
  if (name.value) userStore.set(name.value)
})
</script>
<template>
  <main class="h-screen bg-[#ff0000] flex flex-col items-center justify-center gap-10">
    <div class="grid gap-4 text-gray-50" v-show="!hasUser">
      <p>{{ translate('home.noNameMessage') }}</p>
      <input
        v-model="name"
        class="w-full p-4 border-0"
        :placeholder="translate('home.nameInputPlaceholder')"
      />
    </div>
    <router-link
      :to="`/${$route.params.lang}/tasks`"
      class="bg-[#ffeeee] text-black p-4 justify-center align-center transition-all duration-75 hover:shadow-xl"
      >{{
        `${translate('home.signIn.template')} ${
          userStore.name || name ? userStore.name || name : translate('home.signIn.templateNoName')
        }`
      }}</router-link
    >
  </main>
</template>
