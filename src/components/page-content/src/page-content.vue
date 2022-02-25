<template>
  <div class="mt-2">
    <hy-table :listData="listData" v-bind="contentTableConfig" :listCount="usersCount" v-model:page="pageInfo">
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick">新建数据</el-button>
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.enable">启用</el-tag>
        <el-tag v-else>禁用</el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button type="text" :icon="Edit" v-if="isUpdate" @click="handleEditClick(scope.row)">编辑</el-button>
          <el-button type="text" :icon="Delete" v-if="isDelete" @click="handleDeleteClick(scope.row)">删除</el-button>
        </div>
      </template>
      <!-- 在page-content中动态插入剩余的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script setup lang="ts">
import HyTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'
import { useSystemStore } from '@/store'
import { usePermission } from '@/hooks/use-permission'
const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
  contentTableConfig: {
    type: Object,
    require: true
  }
})
const emit = defineEmits(['newBtnClick', 'editBtnClick'])
// 0.获取操作的权限
const isCreate = usePermission(props.pageName, 'create')
const isUpdate = usePermission(props.pageName, 'update')
const isDelete = usePermission(props.pageName, 'delete')
const isQuery = usePermission(props.pageName, 'query')

const pageInfo = ref({ currentPage: 0, pageSize: 5 })
const { getPageListAction, deletePageDataAction } = useSystemStore()
const usersCount = computed(() => useSystemStore().usersCount)
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return

  getPageListAction({
    pageUrl: `/${props.pageName}/list`,
    pageName: props.pageName,
    queryInfo: {
      offset: pageInfo.value.currentPage,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
//todo
// const listData = computed(() => useSystemStore().goodsList)
const listData = computed(() => useSystemStore()[props.pageName + 'List'])

// 4.获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
  if (item.slotName === 'status') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handler') return false
  return true
})

const handleDeleteClick = (item: any) => {
  ElMessageBox.confirm('确认删除吗?', '警告', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      deletePageDataAction({ pageName: props.pageName, id: item.id })
    })
    .catch(() => {
      return false
    })
}
const handleNewClick = () => {
  emit('newBtnClick')
}
const handleEditClick = (item: any) => {
  emit('editBtnClick', item)
}
onMounted(() => {
  getPageData()
})
watch(pageInfo, () => {
  getPageData()
})
defineExpose({
  getPageData
})
</script>

<style scoped lang="scss"></style>
