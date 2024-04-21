<script lang="ts" setup>
import { langs } from '@/langs'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleChangeRoute = (e: any) => {
  router.push(`/${e.target.value}/${router.currentRoute.value.path.split('/').slice(2).join('/')}`)
}
</script>
<template>
  <div id="message-box-area" />
  <div class="flex justify-end bg-slate-800 py-4 px-5">
    <select
      name="route"
      class="z-10 right-5 top-2 p-2 bg-black text-slate-100 rounded-sm"
      @change="handleChangeRoute"
      :value="$route.params.lang"
    >
      <option v-for="lang in Object.keys(langs)" :key="lang" :value="lang">{{ lang }}</option>
    </select>
  </div>
  <router-view />
</template>
