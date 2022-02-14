<template>
  <hy-form v-bind="searchFormConfig" :formData="formData">
    <template #header>
      <h1 class="text-1.5rem mb-1.5rem">高级检索</h1>
    </template>
    <template #footer>
      <div class="text-right mr-2.5rem">
        <el-button>重置</el-button>
        <el-button type="primary">搜索</el-button>
      </div>
    </template>
  </hy-form>
</template>

<script setup lang="ts">
import HyForm from '@/base-ui/form'
const props = defineProps({
  searchFormConfig: {
    type: Object,
    reuqired: true
  }
})
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped lang="scss"></style>
