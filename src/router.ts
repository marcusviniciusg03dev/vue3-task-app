import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import TasksView from '@/views/tasks/TasksView.vue'
import TaskView from '@/views/task/TaskView.vue'
import { hasUser, userStore } from './stores/user'
import { langsList } from './langs'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:lang/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:lang/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/:lang/tasks/:id',
      name: 'task',
      component: TaskView
    }
  ]
})

router.beforeEach((to, _from, next) => {
  if (!langsList.includes(to.params.lang as string)) {
    next('/en/')
  }
  next()
})

router.beforeEach((_to, _from, next) => {
  const userName = window.localStorage.getItem('user_name')
  if (!hasUser.value && userName) {
    userStore.set(userName!)
  }
  next()
})
