<template>
  <div class="header">
    <slot name="header">
      <div class="title">{{ title }}</div>
      <div class="handler">
        <slot name="headerHandler"></slot>
      </div>
    </slot>
  </div>
  <el-table :data="listData" style="width: 100%" border @selection-change="handleSelectionChange">
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
  <div class="footer">
    <slot name="footer">
      <!-- <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination> -->
    </slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const emit = defineEmits(['selectionChange'])
const props = defineProps({
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
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  }
})
const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
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
