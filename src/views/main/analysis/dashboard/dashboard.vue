<template>
  <div class="dashboard">
    <el-row
      :gutter="10"
      v-motion
      :initial="{
        opacity: 0,
        y: 100
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 100
        }
      }"
    >
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>
    <el-row
      :gutter="10"
      v-motion
      :initial="{
        opacity: 0,
        y: 100
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 200
        }
      }"
    >
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>

    <el-row
      :gutter="10"
      class="mt-20px"
      v-motion
      :initial="{
        opacity: 0,
        y: 100
      }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 400
        }
      }"
    >
      <el-col :span="12">
        <hy-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsSale"></bar-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import HyCard from '@/base-ui/card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

import { useAnalysisStore } from '@/store'
const { getAnalysisDataAction } = useAnalysisStore()
getAnalysisDataAction()

const topPanelData = computed(() => useAnalysisStore().topPanelDatas)

const categoryGoodsCount = computed(() => {
  return useAnalysisStore().categoryGoodsCount.map((item: any) => {
    return { value: item.goodsCount, name: item.name }
  })
})

const categoryGoodsSale = computed(() => {
  const goodsSale = useAnalysisStore().categoryGoodsSale
  const labels: string[] = []
  const values: any[] = []
  for (const item of goodsSale) {
    labels.push(item.name)
    values.push(item.goodsCount)
  }
  return { labels, values }
})

const addressGoodsSale = computed(() => {
  return useAnalysisStore().goodsAddressSale.map((item: any) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="scss"></style>
