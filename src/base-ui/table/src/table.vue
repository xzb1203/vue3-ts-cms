<template>
  <el-table :data="listData" style="width: 100%" border>
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
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  listData: {
    type: Array,
    require: true
  },
  propList: {
    type: Array as PropType<any>,
    require: true
  }
})
</script>

<style scoped lang="scss"></style>
