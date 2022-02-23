<template>
  <div class="header">
    <slot name="header">
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </slot>
  </div>
  <el-table :data="listData" style="width: 100%" @selection-change="handleSelectionChange">
    <el-table-column
      v-if="showSelectColumn"
      type="selection"
      align="center"
      width="60"
    ></el-table-column>
    <el-table-column
      v-if="showIndexColumn"
      type="index"
      label="序号"
      align="center"
      width="80"
    ></el-table-column>
    <template v-for="propItem in propList" :key="propItem.prop">
      <el-table-column v-bind="propItem" align="center">
        <template #default="scope">
          <slot :name="propItem.slotName" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="footer" v-if="showFooter">
    <slot name="footer">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        :page-sizes="[5, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
      >
      </el-pagination>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const emit = defineEmits(['selectionChange', 'update:page'])
const props = defineProps({
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  listData: {
    type: Array,
    require: true
  },
  propList: {
    type: Array as PropType<any>,
    require: true
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  },
  listCount: {
    type: Number,
    default: 0
  }
})
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
}

const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  display: flex;
  justify-content: end;
}
</style>
