<script lang="ts" setup>
import { langs } from '@/langs'
import { userStore } from '@/stores/user';
import { onMounted } from 'vue';

const router = useRouter()

const handleChangeRoute = (e: any) => {
  router.push(`/${e.target.value}/${router.currentRoute.value.path.split('/').slice(2).join('/')}`)
}

onMounted(() => {
  const localstorageName = window.localStorage.getItem('user_name')
  if (localstorageName) userStore().set({ name: localstorageName })
})
</script>
<template>
  <NuxtLoadingIndicator color="red" />
  <div id="message-box-area" />
  <div class="h-screen grid grid-rows-[10%_90%]">
    <div class="flex justify-end bg-slate-800 py-4 px-5">
      <ClientOnly>
      <select
        name="route"
        class="z-10 right-5 top-2 p-2 bg-black text-slate-100 rounded-sm"
        @change="handleChangeRoute"
        :value="$route.params.lang"
      >
        <option v-for="lang in Object.keys(langs)" :key="lang" :value="lang">{{ lang }}</option>
      </select>
    </ClientOnly>
    </div>
    <slot />
  </div>
</template>
