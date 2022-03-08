import { defineStore } from 'pinia'
import { IAnalysis } from './types'
import {
  getAmountList,
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getGoodsSaleTop10,
  getGoodsAddressSale
} from '@/service/main/analysis/analysis'
export const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysis => ({
    topPanelDatas: [],
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    goodsSaleTop10: [],
    goodsAddressSale: []
  }),
  actions: {
    async getAnalysisDataAction() {
      const topPanelDatas = await getAmountList()
      this.topPanelDatas = topPanelDatas

      const categoryGoodsCount = await getCategoryGoodsCount()
      this.categoryGoodsCount = categoryGoodsCount

      const categoryGoodsSale = await getCategoryGoodsSale()
      this.categoryGoodsSale = categoryGoodsSale

      const categoryGoodsFavor = await getCategoryGoodsFavor()
      this.categoryGoodsFavor = categoryGoodsFavor

      const goodsSaleTop10 = await getGoodsSaleTop10()
      this.goodsSaleTop10 = goodsSaleTop10

      const goodsAddressSale = await getGoodsAddressSale()
      this.goodsAddressSale = goodsAddressSale
    }
  }
})
