<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@store/index'
const { setTestData } = useUserStore()
const testData = computed(() => useUserStore().testData)
</script>
<template>
  <el-button @click="setTestData('啥情况')">改变数据</el-button>
  pinia数据: {{ testData }}
  <div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view> </router-view>
  </div>
</template>
