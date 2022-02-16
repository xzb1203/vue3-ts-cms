import { App } from 'vue'
import { formatUtcString } from '@/utils/date-format'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $filters: any
  }
}
export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {},
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
