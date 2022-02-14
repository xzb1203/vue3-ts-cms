import hyRequest from '../../index'

import { IPageListDataType } from './types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IPageListDataType>({
    url: url,
    data: queryInfo
  })
}
