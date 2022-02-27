import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/analysis/overview',
    component: () => import('@views/main/main.vue'),
    children: [
      {
        path: '/main/analysis/overview',
        name: 'overview',
        component: () => import('@/views/main/analysis/overview/overview.vue'),
        children: []
      },
      {
        path: '/main/analysis/dashboard',
        name: 'dashboard',
        component: () => import('@/views/main/analysis/dashboard/dashboard.vue'),
        children: []
      },
      {
        path: '/main/system/department',
        name: 'department',
        component: () => import('@/views/main/system/department/department.vue'),
        children: []
      },
      {
        path: '/main/system/menu',
        name: 'menu',
        component: () => import('@/views/main/system/menu/menu.vue'),
        children: []
      },
      {
        path: '/main/system/role',
        name: 'role',
        component: () => import('@/views/main/system/role/role.vue'),
        children: []
      },
      {
        path: '/main/system/user',
        name: 'user',
        component: () => import('@/views/main/system/user/user.vue'),
        children: []
      },
      {
        path: '/main/product/category',
        name: 'category',
        component: () => import('@/views/main/product/category/category.vue'),
        children: []
      },
      {
        path: '/main/product/goods',
        name: 'goods',
        component: () => import('@/views/main/product/goods/goods.vue'),
        children: []
      },
      {
        path: '/main/story/chat',
        name: 'chat',
        component: () => import('@/views/main/story/chat/chat.vue'),
        children: []
      },
      {
        path: '/main/story/list',
        name: 'list',
        component: () => import('@/views/main/story/list/list.vue'),
        children: []
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
router.beforeEach((to) => {
  NProgress.start()
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }

    // if (to.path === '/main') {
    //   console.log(firstRoute)
    //   return firstRoute?.path
    // }
    NProgress.done()
  } else {
    NProgress.done()
  }
})
export default router
