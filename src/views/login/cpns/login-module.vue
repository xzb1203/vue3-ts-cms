<template>
  <div class="login-box">
    <div class="login-form">
      <el-image :src="logo" class="avatar"></el-image>
      <h2
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
        Pure Admin
      </h2>
      <div
        class="input-group user focus"
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
        <div class="icon">
          <svg-icon name="yonghu"></svg-icon>
        </div>
        <div>
          <h5>用户名</h5>
          <input type="text" class="input" v-model="account.name" />
        </div>
      </div>
      <div
        class="input-group pwd focus"
        v-motion
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 300
          }
        }"
      >
        <div class="icon">
          <svg-icon name="mima"></svg-icon>
        </div>
        <div>
          <h5>密码</h5>
          <input type="password" class="input" v-model="account.password" />
        </div>
      </div>
      <button
        class="btn"
        @click="loginAction"
        v-motion
        :initial="{
          opacity: 0,
          y: 10
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 400
          }
        }"
      >
        登录
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/login/avatar.svg'
import localCache from '@/utils/cache'
import { useUserStore } from '@/store'
const { setAccountLoginAction } = useUserStore()

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const loginAction = () => {
  setAccountLoginAction(account)
}
</script>

<style scoped>
@import url('@/style/login.css');
</style>
