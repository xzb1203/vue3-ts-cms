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
    <page-modal :defaultInfo="defaultInfo" ref="pageModalRef" pageName="users" :modalConfig="modalConfig"></page-modal>
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

// pageModal相关的hook逻辑
// 1.处理密码的逻辑
const newCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
  passwordItem!.isHidden = true
}
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(newCallback, editCallback)
</script>
