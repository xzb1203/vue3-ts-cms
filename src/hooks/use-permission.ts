import { useUserStore } from '@/store'
export function usePermission(pageName: string, hanldeName: string) {
  const permissions = useUserStore().permissions
  const verifyPermission = `system:${pageName}:${hanldeName}`
  return !!permissions.find((item) => item === verifyPermission)
}
