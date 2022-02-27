<template>
  <div class="fixed top-0 left-0 w-full h-full">
    <el-container class="h-full">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="h-full">
        <el-header class="!h-48px">
          <nav-header @fooldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="h-full bg-white rounded-8px p-5">
            <router-view class="router-view" v-slot="{ Component }">
              <!-- transition只能用于单元素包裹的节点上 -->
              <transition name="slide-left" mode="out-in">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
const isCollapse = ref(false)
const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
  console.log(isFold)
}
</script>

<style lang="scss" scoped>
.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}

.slide-left-enter-from {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-left-enter-to {
  transform: translateX(0px);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s;
}
</style>
