<script lang="ts" setup>
import { tasks } from '@/stores/tasks'
import TaskContainer from '@/components/TaskContainer.vue'
import { reversedTasks } from '@/stores/tasks'
import { onMounted, watch } from 'vue'

watch(
  () => tasks.value,
  (val) => {
    window.localStorage.setItem('tasks', JSON.stringify(val))
  }
)

onMounted(() => {
  tasks.value = JSON.parse(`${window.localStorage.getItem('tasks')}`) ?? []
})

const handleClear = () => {
  tasks.value = []
}
</script>
<template>
  <div id="tasks-list">
    <template v-if="tasks.length">
      <TaskContainer v-for="(task, i) in reversedTasks" v-bind:key="i" :index="i" :task="task" />
      <button @click.prevent="handleClear" id="clear-tasks">Limpar</button>
    </template>
    <div v-else class="alert-box">Você não tem tarefas!</div>
  </div>
</template>
<style src="../styles/components/TasksList.css" scoped></style>
