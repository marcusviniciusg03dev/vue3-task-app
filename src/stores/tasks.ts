import { computed, ref } from 'vue'

export const tasks = ref<object[]>([])

export const reversedTasks = computed(() => [...tasks.value].reverse())
