import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'
import { registerElementIcon } from '@/plugins'
import 'virtual:windi.css'
const app = createApp(App)
registerElementIcon(app)
app.use(router).use(piniaStore).mount('#app')
