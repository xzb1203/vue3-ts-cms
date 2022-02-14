import { createPinia } from 'pinia'
import { useUserStore } from './modules/login/login'
import { useSystemStore } from './modules/main/system/system'
const pinia = createPinia()

export { useUserStore, useSystemStore }
export default pinia
