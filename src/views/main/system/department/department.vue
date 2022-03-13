<template>
  <div>
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>

    <page-content
      pageName="department"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>

    <page-modal
      ref="pageModalRef"
      :defaultInfo="modalInfo"
      :modalConfig="modalConfigRef"
      pageName="department"
    ></page-modal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { usePageSearch } from '@/hooks/use-page-search'
import { modalConfig } from './config/modal.config'
import { useSystemStore } from '@/store'
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

const [pageModalRef, modalInfo, handleNewData, handleEditData] = usePageModal()
const entireDepartment = computed(() => useSystemStore().entireDepartment)
console.log(entireDepartment)
const modalConfigRef = computed(() => {
  const parentIdItem = modalConfig.formItems?.find((item) => item.field === 'parentId')
  parentIdItem!.options = entireDepartment.value.map((item: any) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})
</script>

<style scoped lang="scss"></style>
