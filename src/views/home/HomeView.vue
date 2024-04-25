<script setup lang="ts">
import { inject, onUnmounted } from 'vue'
import { userStore } from '@/stores/user'

const user = userStore()

const translate = inject('translate')

const name = defineModel('name', { type: String })

onUnmounted(() => {
  if (name.value) user.set(name.value)
})
</script>
<template>
  <main class="p-4 bg-[#ff0000] flex flex-col items-center justify-center gap-10">
    <div class="grid gap-4 text-gray-50" v-show="!user.hasUser">
      <p>{{ translate('home.noNameMessage') }}</p>
      <input
        v-model="name"
        class="w-full p-4 border-0 text-slate-600"
        :placeholder="translate('home.nameInputPlaceholder')"
      />
    </div>
    <router-link
      :to="`/${$route.params.lang}/tasks`"
      class="bg-[#ffeeee] text-black p-4 justify-center align-center transition-all duration-75 hover:shadow-xl"
      >{{
        `${translate('home.signIn.template')} ${
          user.name || name ? user.name || name : translate('home.signIn.templateNoName')
        }`
      }}</router-link
    >
  </main>
</template>
