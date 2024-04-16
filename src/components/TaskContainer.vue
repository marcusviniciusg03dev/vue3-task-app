<script lang="ts" setup>
import { tasks, reversedTasks } from '@/stores/tasks'

const props = defineProps(['task', 'index'])
</script>
<template>
  <div class="task">
    <h3>{{ props.task.title }}</h3>
    <a
      @click.prevent="tasks = [...reversedTasks.filter((_, i) => i !== props.index)].reverse()"
      class="remove-task"
      >remove</a
    >
  </div>
</template>
<style src="../styles/components/TaskContainer.css" scoped></style>
