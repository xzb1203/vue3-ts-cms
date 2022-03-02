<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />

    <page-content
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>

    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
    >
      <el-tree
        class="ml-px"
        :check-strictly="false"
        ref="elTreeRef"
        :data="entireMenus"
        show-checkbox
        node-key="id"
        @check="handleMenuCheckChange"
        :props="{ label: 'name', children: 'children' }"
      >
      </el-tree>
    </page-modal>
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
const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal()
const entireMenus = computed(() => useSystemStore().entireMenus)
const otherInfo = ref({})
const handleMenuCheckChange = (data1: any, data2: any) => {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}
</script>
