<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量"> </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)"> </hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="mt-20px">
      <el-col :span="12">
        <hy-card title="分类商品的销量"> </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏"> </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import HyCard from '@/base-ui/card'
import { PieEchart } from '@/components/page-echarts'

import { useAnalysisStore } from '@/store'
const { getAnalysisDataAction } = useAnalysisStore()
getAnalysisDataAction()

const categoryGoodsCount = computed(() => {
  return useAnalysisStore().categoryGoodsCount.map((item: any) => {
    return { value: item.goodsCount, name: item.name }
  })
})
</script>

<style scoped lang="scss"></style>
