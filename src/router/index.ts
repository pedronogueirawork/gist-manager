import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import GistsView from '@/views/GistsView.vue'
import GistCreateView from '../views/GistCreateView.vue'
import GistEditView from '../views/GistEditView.vue'
import { RouteNames } from '@/enums'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.LOGIN,
      component: LoginView
    },
    {
      path: '/gists',
      name: RouteNames.GISTS,
      component: GistsView
    },
    {
      path: '/gist/create',
      name: RouteNames.CREATE,
      component: GistCreateView
    },
    {
      path: '/gist/:id/edit',
      name: RouteNames.EDIT,
      component: GistEditView
    },
  ]
})

export default router
