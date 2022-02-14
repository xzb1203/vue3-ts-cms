//当前目录下的组件会被自动全局注册
import { defineAsyncComponent, App } from 'vue'
const components = import.meta.glob('./*/*.vue')
export default function install(app: App) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.split('/')[1]
    app.component(name, defineAsyncComponent(value))
  }
}
