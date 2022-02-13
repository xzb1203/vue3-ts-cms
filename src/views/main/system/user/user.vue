<template>
  <div class="user p-5">
    <hy-form :formItems="formItems" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import HyForm, { IFormItem } from '@/base-ui/form'

const formItems: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    type: 'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '喜欢的运动',
    placeholder: '请选择喜欢的运动',
    options: [
      { title: '篮球', value: 'basketball' },
      { title: '足球', value: 'football' }
    ]
  },
  {
    type: 'datepicker',
    label: '创建时间',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]
</script>
<style scoped lang="scss"></style>
