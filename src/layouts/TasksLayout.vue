<script lang="ts" setup>
import NewTask from '@/components/NewTask.vue'
</script>
<template>
  <div class="h-full grid grid-rows-[10rem_auto]">
    <NewTask />
    <slot></slot>
  </div>
</template>
