<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" :formData="formData" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>
<style scoped lang="scss"></style>
