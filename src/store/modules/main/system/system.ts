import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageListData, deletePageData } from '@/service/main/system/system'
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
    entireRole: []
  }),
  actions: {
    async getPageListAction(payload: any) {
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
      this.entireDepartment = departmentResult.list
      this.entireRole = departmentResult.list
      console.log(this.entireDepartment, 'departmentResult')
      console.log(this.entireRole, 'roleResult')
    }
  }
})
