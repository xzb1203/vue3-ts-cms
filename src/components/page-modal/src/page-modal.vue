<template>
  <div class="page-modal">
    <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center destroy-on-close>
      <hy-form v-bind="modalConfig" :formData="formData"></hy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"> 确 定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import HyForm from '@/base-ui/form'
import { useSystemStore } from '@/store'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    require: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
})
const { createPageData, editPageDataAction } = useSystemStore()
const dialogVisible = ref(false)
const formData = ref<any>({ name: '' })

watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  }
)
const handleConfirmClick = () => {
  if (Object.keys(props.defaultInfo).length) {
    editPageDataAction({
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  } else {
    createPageData({
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
  dialogVisible.value = false
}

defineExpose({
  dialogVisible
})
</script>

<style scoped></style>
