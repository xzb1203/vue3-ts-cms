<template>
  <hy-form v-bind="searchFormConfig" :formData="formData">
    <template #header>
      <h1 class="text-1.5rem mb-1.5rem">高级检索</h1>
    </template>
    <template #footer>
      <div class="text-right mr-2.5rem">
        <el-button @click="handleResetClick">重置</el-button>
        <el-button type="primary" @click="handleQueryClick">搜索</el-button>
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
const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = ref({})
for (const item of formItems) {
  formOriginData.value[item.field] = ''
}
const formData = ref(formOriginData.value)

const handleResetClick = () => {
  //todo
  formData.value = {}
  emit('resetBtnClick')
}
const handleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}
</script>

<style scoped lang="scss"></style>
