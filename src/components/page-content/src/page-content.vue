<template>
  <div class="mt-2">
    <hy-table :listData="listData" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.enable">启用</el-tag>
        <el-tag v-else>禁用</el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button type="text" :icon="Edit">编辑</el-button>
          <el-button type="text" :icon="Delete">删除</el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script setup lang="ts">
import HyTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'
import { useSystemStore } from '@/store'

const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
  contentTableConfig: {
    type: Object,
    require: true
  }
})
const { getPageListAction, usersCount } = useSystemStore()
getPageListAction({
  pageUrl: `/${props.pageName}/list`,
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const listData = computed(() => useSystemStore().usersList)
// const listData = computed(() => useSystemStore()[props.pageName)]
</script>

<style scoped lang="scss"></style>
