import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore, { useUserStore, useSystemStore } from './store'
import { registerElementIcon } from '@/plugins'
import globalComponents from '@/global-components'
import { globalRegister } from './global'
import { MotionPlugin } from '@vueuse/motion'

import 'virtual:svg-icons-register'
import '@/global-components'
import 'virtual:windi.css'

const app = createApp(App)
app.use(piniaStore)
useUserStore().loadLocalCache()
app.use(router).use(globalComponents).use(globalRegister).use(MotionPlugin).mount('#app')

registerElementIcon(app)
//待优化
