import { defineStore } from 'pinia'
import { UserState } from './types'
import localCache from '@/utils/cache'
import router from '@/router'
import { menuMapToRoutes, menuMapToPermissions } from '@/utils/map-menu'

import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userInfo: {},
    userMenus: {},
    permissions: []
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    setUserMenus(userMenus: any) {
      this.userMenus = userMenus
      console.log(userMenus)

      // 根据菜单映射路由
      // const routes = menuMapToRoutes(userMenus)
      // routes.forEach((route) => {
      //   router.addRoute('main', route)
      // })
    },
    async setAccountLoginAction(account: { name: string; password: string }) {
      //用户登录
      const loginResult = await accountLoginRequest(account)
      const { id, token } = loginResult
      this.setToken(token)
      localCache.setCache('token', token)

      //获取用户信息
      const userInfo = await getUserById(id)
      this.setUserInfo(userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.用户菜单树
      const userMenus = await getUserMenus(userInfo.role.id)
      this.setUserMenus(userMenus)
      localCache.setCache('userMenus', userMenus)
      console.log(userMenus)

      // 跳转到首页
      router.push('/main')
    }
  }
})
