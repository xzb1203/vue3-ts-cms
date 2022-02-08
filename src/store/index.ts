import { createPinia } from 'pinia'
import { useUserStore } from './modules/login/login'

const pinia = createPinia()

export { useUserStore }
export default pinia
