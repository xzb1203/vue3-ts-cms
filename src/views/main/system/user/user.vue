<template>
  <svg-icon name="wallet" size="60" color="green" />
  <span>123</span>
  <div class="user">
    <hy-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import HyForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
import SvgIcon from '@/components/svg-icon'
</script>
<style scoped lang="scss"></style>
