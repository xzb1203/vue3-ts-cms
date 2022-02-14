<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useSystemStore } from '@/store'
const { getUserList } = useSystemStore()
onMounted(() => {
  getUserList({
    pageUrl: '/users/list',
    queryInfo: {
      offset: 0,
      size: 10
    }
  })
})
console.log(useSystemStore().userCount)
</script>
