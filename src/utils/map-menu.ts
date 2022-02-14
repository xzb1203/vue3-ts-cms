import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types'

let firstMenu: any = undefined
let firstRoute: RouteRecordRaw | undefined = undefined

export function menuMapToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.读取本地所有的路由
  let localRoutes: any = []
  const routeFiles: any = import.meta.globEager('../router/main/**/*.ts')
  const routePath: any = []
  for (let key in routeFiles) {
    routePath.push(key)
  }

  routePath.forEach(async (key: string) => {
    if (key.indexOf('./main.ts') !== -1) return
    let cpnsName = key.split('.')[2]
    const route = await import('..' + cpnsName)
    localRoutes.push(route.default)
    console.log(localRoutes, '为什么')
  })
  // 2.菜单的映射
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((route: any) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute && !firstMenu) {
          firstMenu = menu
          firstRoute = route
        }
      } else {
        _recurseGetRoute(menu.children ?? [])
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(userMenus: any[], currentPath: string, breadcrumbs?: IBreadcrumb[]): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: '/' })
        breadcrumbs?.push({ name: findMenu.name, path: '/' })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
