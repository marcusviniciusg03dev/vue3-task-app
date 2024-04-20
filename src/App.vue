<script lang="ts" setup>
import { langs } from '@/langs'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleChangeRoute = (e: any) => {
  router.push(`/${e.target.value}/${router.currentRoute.value.path.split('/').slice(2).join('/')}`)
}
</script>
<template>
  <router-view />
  <select
    name="route"
    class="absolute right-5 top-2 p-2 bg-black text-slate-100 rounded-sm"
    @change="handleChangeRoute"
    :value="$route.params.lang"
  >
    <option v-for="lang in Object.keys(langs)" :key="lang" :value="lang">{{ lang }}</option>
  </select>
</template>
