import { defineStore } from 'pinia'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'
export const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    userCount: 0
  }),
  actions: {
    async getUserList(payload: any) {
      const { list, totalCount } = await getPageListData(payload.pageUrl, payload.queryInfo)
      this.userList = list
      this.userCount = totalCount
    }
  }
})
