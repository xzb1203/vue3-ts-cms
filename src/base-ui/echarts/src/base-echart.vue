<template>
  <div class="base-echart">
    <div class="echart" ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { EChartsOption } from 'echarts'
import { useEcharts } from '../hooks/useEcharts'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '350px'
  },
  options: {
    type: Object as PropType<any>,
    // type: Object as PropType<EChartsOption>,
    default: () => {}
  }
})
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const [setOptions] = useEcharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
<style lang="scss" scoped></style>
