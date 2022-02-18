import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'
export const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersCount: 0,
    roleList: [],
    roleCount: 0
  }),
  actions: {
    async getPageListAction(payload: any) {
      const { list, totalCount } = await getPageListData(payload.pageUrl, payload.queryInfo)
      this[payload.pageName + 'List'] = list
      this[payload.pageName + 'Count'] = totalCount
    }
  }
})
