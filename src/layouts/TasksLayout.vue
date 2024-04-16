<script lang="ts" setup>
import NewTask from '@/components/NewTask.vue'
</script>
<template>
  <div id="layout">
    <NewTask />
    <slot></slot>
  </div>
</template>
<style src="../styles/layouts/TasksLayout.css" scoped></style>
