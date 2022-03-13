<template>
  <div class="overview">
    <!-- <div>
      <global-test></global-test>
      <div class="flex">
        <svg-icon :name="item" v-for="item in iconNames"></svg-icon>
      </div>
    </div> -->
    <hy-card title="关于" class="mb-10px">
      <div>
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </hy-card>
    <hy-card title="技术栈" class="mb-10px">
      <hy-text-link :text-arrs="technologyStacks" />
      <hy-descriptions title="生产环境依赖" :column="2" :table-datas="dependencies" />
      <hy-descriptions title="开发环境依赖" :column="2" :table-datas="devDependencies" />
    </hy-card>
    <hy-card title="Git提交规范">
      <hy-descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'npm run commit' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </hy-card>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/svg-icon'
import iconNames from '@/assets/icons/svg'
import HyCard from '@/base-ui/card'
import HyTextLink from '@/base-ui/text-link'
import HyCode from '@/base-ui/code'
import HyDescriptions from '@/base-ui/descriptions'

import { technologyStacks, dependencies, devDependencies, projectDir } from './config'
</script>

<style scoped lang="scss"></style>
