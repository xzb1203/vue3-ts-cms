<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="users"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { useSystemStore } from '@/store'
const entireDepartment = computed(() => useSystemStore().entireDepartment)
const entireRole = computed(() => useSystemStore().entireRole)
// 处理密码的逻辑
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = true
}
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newCallback,
  editCallback
)
//设置下拉选项
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
  departmentItem!.options = entireDepartment.value.map((item) => {
    return { title: item.name, value: item.id }
  })
  const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
  roleItem!.options = entireRole.value.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
</script>
