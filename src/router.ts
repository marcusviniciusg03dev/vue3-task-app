import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import TasksView from '@/views/tasks/TasksView.vue'
import TaskView from '@/views/task/TaskView.vue'
import { hasUser, userStore } from './stores/user'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/tasks/:index',
      name: 'task',
      component: TaskView
    }
  ]
})

router.beforeEach((_to, _from, next) => {
  const userName = window.localStorage.getItem('user_name')
  if (!hasUser.value && userName) {
    userStore.set(userName!)
  }
  next()
})
