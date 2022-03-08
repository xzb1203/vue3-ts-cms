import { createPinia } from 'pinia'
import { useUserStore } from './modules/login/login'
import { useSystemStore } from './modules/main/system/system'
import { useAnalysisStore } from './modules/main/analysis/analysis'
const pinia = createPinia()

export { useUserStore, useSystemStore, useAnalysisStore }
export default pinia
