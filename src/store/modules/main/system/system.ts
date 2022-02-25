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
    menuCount: 0
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
    }
  }
})
