<template>
  <div class="flex flex-col w-400px">
    <h1 class="text-center text-26px mb-15px">后台管理系统</h1>
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <el-tab-pane label="账号登录" name="account">
        <login-account ref="accountRef" :account="account" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">手机登录</el-tab-pane>
    </el-tabs>
    <div class="flex items-center justify-between my-5px">
      <el-checkbox v-model="isKeep">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="loginAction" v-loading="loginLoading" size="large"
      >立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from './login-account.vue'
import localCache from '@/utils/cache'
import { useUserStore } from '@/store'
const isKeep = ref(true)
const currentTab = ref('account')
const loginLoading = computed(() => useUserStore().loginLoading)
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const loginAction = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.accountLoginAction(isKeep.value)
  }
}
</script>

<style scoped></style>
