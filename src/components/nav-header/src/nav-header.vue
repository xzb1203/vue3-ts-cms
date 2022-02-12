<template>
  <div class="nav-header">
    <el-icon class="menu-icon" @click="handleFoldClick">
      <component :is="isFold ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="content">
      <!-- <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <nav-info /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['fooldChange'])
let isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('fooldChange', isFold.value)
  console.log(isFold.value)
}
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  align-items: center;
  flex: 1;

  .menu-icon {
    font-size: 28px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
