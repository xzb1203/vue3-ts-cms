<template>
  <el-form :model="account" label-width="60px" ref="formRef" :rules="accountRules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { Account } from '../types'
import localCache from '@/utils/cache'
import { useUserStore } from '@store'
const props = defineProps({
  account: {
    type: Object as PropType<Account>,
    default: () => ({})
  }
})
const { setAccountLoginAction } = useUserStore()
const accountRules = {
  name: [
    { required: true, message: '必须输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '必须是3位以上数字', trigger: 'blur' }
  ]
}
const formRef = ref<InstanceType<typeof ElForm>>()
const accountLoginAction = (isKeep: boolean) => {
  // 1.验证是否成功
  formRef.value?.validate((valid) => {
    if (valid) {
      // 登录逻辑
      const name = props.account.name
      const password = props.account.password
      // 保存账号和密码
      if (isKeep) {
        localCache.setCache('name', name)
        localCache.setCache('password', password)
      }

      // 登录
      console.log('请求登录接口')
      setAccountLoginAction({ ...props.account })
    } else {
      ElMessage.error('账号或者密码错误~')
    }
  })
}
defineExpose({
  accountLoginAction
})
</script>

<style scoped></style>
