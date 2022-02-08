import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'

import 'virtual:windi.css'

createApp(App).use(router).use(piniaStore).mount('#app')
