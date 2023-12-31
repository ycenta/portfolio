import { createRouter, createWebHistory } from 'vue-router'
import Work from './components/Work.vue'
import Main from './components/Main.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router