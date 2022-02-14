<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
</script>
