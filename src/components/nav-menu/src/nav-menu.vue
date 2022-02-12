<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="mx-10px w-25px" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse" class="title">VUE3+TS</span>
    </div>
    <el-menu
      :default-active="currentItemId"
      class="el-menu-vertical"
      background-color="#0c2135"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in menus" :key="item.id">
        <el-sub-menu :index="item.id + ''" v-if="item.children && item.children.length">
          <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item :index="subitem.id + ''">
              <span>{{ subitem.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item :index="item.id + ''" v-else>
          <el-icon><icon-menu /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import localCache from '@/utils/cache'
const menus = localCache.getCache('userMenus')
const currentItemId = ref('39')

const props = defineProps({
  collapse: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
</script>
<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;
  padding: 10px 0;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
