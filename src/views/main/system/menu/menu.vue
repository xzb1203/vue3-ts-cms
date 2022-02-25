<template>
  <page-content :contentTableConfig="contentTableConfig" pageName="menu"></page-content>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
</script>

<style scoped></style>
