<template>
  <div>
    <div class="flex">
      <global-test></global-test>
      <svg-icon :name="item" v-for="item in iconNames"></svg-icon>
    </div>
    <div class="overview">
      <h2>overview</h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SvgIcon from '@/components/svg-icon'
import iconNames from '@/assets/icons/svg'
</script>

<style scoped lang="scss"></style>
