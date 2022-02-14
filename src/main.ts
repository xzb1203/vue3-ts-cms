import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore, { useUserStore } from './store'
import 'virtual:svg-icons-register'
import { registerElementIcon } from '@/plugins'
import '@/global-components'
import 'virtual:windi.css'
import globalComponents from '@/global-components'
const app = createApp(App)
app.use(router).use(piniaStore).use(globalComponents).mount('#app')
registerElementIcon(app)
useUserStore().loadLocalCache()
