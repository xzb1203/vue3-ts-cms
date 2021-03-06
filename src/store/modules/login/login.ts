import { defineStore } from 'pinia'
import { UserState } from './types'
import localCache from '@/utils/cache'
import router from '@/router'
import { menuMapToRoutes, mapMenusToPermissions } from '@/utils/map-menu'
import { accountLoginRequest, getUserById, getUserMenus } from '@/service/login/login'
import { ElMessage } from 'element-plus'
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    loginLoading: false,
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
      // 根据菜单映射路由
      const routes = menuMapToRoutes(userMenus)
      routes.forEach((route: any) => {
        router.addRoute('main', route)
      })
      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(userMenus)
      this.permissions = permissions
    },
    async setAccountLoginAction(account: { name: string; password: string }) {
      this.loginLoading = true
      //用户登录
      const loginResult = await accountLoginRequest(account)
      console.log(loginResult)
      if (!loginResult) {
        this.loginLoading = false
        ElMessage.warning('用户名或密码错误!')
        return
      }
      const { id, token } = loginResult
      this.setToken(token)
      localCache.setCache('token', token)

      //获取用户信息
      const userInfo = await getUserById(id)
      this.setUserInfo(userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.用户菜单树
      const userMenus = await getUserMenus(userInfo.role.id)
      this.loginLoading = false
      this.setUserMenus(userMenus)
      localCache.setCache('userMenus', userMenus)
      // 跳转到首页
      router.push('/main')
    },
    loadLocalCache() {
      const token = localCache.getCache('token')
      if (token) {
        this.setToken(token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        this.setUserInfo(userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        this.setUserMenus(userMenus)
      }
    }
  }
})
