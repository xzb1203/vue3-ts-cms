<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="mt-2rem">
      <hy-table :listData="userList" :propList="propList">
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
      </hy-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import HyTable from '@/base-ui/table'
import { searchFormConfig } from './config/search.config'
import { useSystemStore } from '@/store'
const { getUserList } = useSystemStore()
getUserList({
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const userList = computed(() => useSystemStore().userList)
const propList = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实姓名', minWidth: '100' },
  { prop: 'cellphone', label: '手机号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
  {
    prop: 'createAt',
    label: '创建时间',
    minWidth: '250',
    slotName: 'createAt'
  },
  {
    prop: 'updateAt',
    label: '更新时间',
    minWidth: '250',
    slotName: 'updateAt'
  }
]
</script>
