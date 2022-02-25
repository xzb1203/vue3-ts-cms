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
