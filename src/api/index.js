// API 統一管理
import request from '../utils/request'

export function showApi() {
  return request({
    url: '/todos/1',
    method: 'get'
  })
}