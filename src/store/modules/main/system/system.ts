import { defineStore } from 'pinia'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData,
  getPageList
} from '@/service/main/system/system'
export const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0,
    goodsList: [],
    goodsCount: 0,
    menuList: [],
    menuCount: 0,
    entireDepartment: [],
    entireRole: [],
    entireMenus: []
  }),
  actions: {
    async getPageListAction(payload: any) {
      console.log(payload, 'payload')
      const { list, totalCount } = await getPageListData(payload.pageUrl, payload.queryInfo)
      this[payload.pageName + 'List'] = list
      this[payload.pageName + 'Count'] = totalCount
    },
    async deletePageDataAction(payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      await deletePageData(pageUrl)

      this.getPageListAction({
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })

      ElMessage({
        type: 'success',
        message: '删除成功!'
      })
    },
    async getInitialDataAction() {
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const entireMenusResult = await getPageList('/menu/list', {})

      this.entireDepartment = departmentResult.list
      this.entireRole = roleResult.list
      this.entireMenus = entireMenusResult.list
    },
    async createPageData(payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      this.getPageListAction({
        pageUrl: `/${pageName}/list`,
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction(payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      this.getPageListAction({
        pageUrl: `/${pageName}/list`,
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
})
