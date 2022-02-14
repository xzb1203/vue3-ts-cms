<template>
  <div class="nav-header">
    <el-icon class="menu-icon" @click="handleFoldClick">
      <component :is="isFold ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="content">
      <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
      <nav-info></nav-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavInfo from './nav-info.vue'
import { useUserStore } from '@store'
import NavBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
const { userMenus } = useUserStore()
const route = useRoute()
const emit = defineEmits(['fooldChange'])
const isFold = ref(false)
const breadcrumbs = ref<IBreadcrumb[]>([])

function pathMapToMenu(userMenus: any[], currentPath: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs.value?.push({ name: menu.name })
        breadcrumbs.value?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
pathMapToMenu(userMenus, route.path)

watch(
  () => route.path,
  (currentPath) => {
    breadcrumbs.value = []
    pathMapToMenu(userMenus, currentPath)
  }
)

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
