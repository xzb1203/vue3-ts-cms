<template>
  <div id="app">
    <el-config-provider :locale="zhCn">
      <router-view> </router-view>
    </el-config-provider>
  </div>
</template>
<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
