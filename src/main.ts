import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore, { useUserStore } from './store'
import 'virtual:svg-icons-register'
import { registerElementIcon } from '@/plugins'
import 'virtual:windi.css'
const app = createApp(App)
app.use(router).use(piniaStore).mount('#app')
registerElementIcon(app)
useUserStore().loadLocalCache()
