import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: (): any => ({
    testData: '测试数据'
  }),
  getters: {},
  actions: {
    setTestData(data: any) {
      this.testData = data
    }
  }
})
