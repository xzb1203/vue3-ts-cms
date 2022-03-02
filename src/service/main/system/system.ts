import hyRequest from '../../index'
import { IDataType } from '../../types'

import { IPageListDataType } from './types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IPageListDataType>({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}
export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
export function getPageList(pageUrl: string, queryInfo: any) {
  return hyRequest.post({
    url: pageUrl,
    data: queryInfo
  })
}
