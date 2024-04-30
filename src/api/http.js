import axios from 'axios'
import router from '@/router/index'
import { getCookieItem } from './tools'
import { Message } from 'element-ui'
import { initMock } from './mock'

initMock()

class HttpError extends Error {
  static prefix = '[HTTP]'
  name = 'httpError'

  constructor(msg, ...args) {
    msg = HttpError.prefix + msg
    super(msg, ...args)
  }
}

const Qs = require('qs')
const CryptoJS = require('crypto-js')
const baseDomain = '/vc'
const pendingRequest = new Map()

const api = axios.create({
  baseURL: baseDomain + '/',
  method: 'POST',
  headers: {}
})
export const requestResolve = async (config) => {
  if (config.cancelTokenSceneKey) {
    // 发起新请求时会取消相同 cancelTokenSceneKey 的接口调用
    const sceneKey = config.cancelTokenSceneKey
    if (pendingRequest.has(sceneKey)) {
      const cancel = pendingRequest.get(sceneKey)
      cancel(sceneKey)
    }
    config.cancelToken = new axios.CancelToken((cancel) => {
      pendingRequest.set(sceneKey, cancel)
    })
  }

  const userId = sessionStorage.getItem('userId')
  const token = getCookieItem('token')
  if (userId) {
    config.headers['X-uid'] = userId
  }
  if (userId) {
    config.headers['X-token'] = token
  }
  let timestamp = Date.now()
  config.headers['timestamp'] = timestamp

  if (config.method === 'post') {
    let body = config.data
    let bodyToString = ''
    if (typeof body === 'string') {
      bodyToString = body
    } else if (typeof body === 'object') {
      bodyToString = JSON.stringify(body || {})
    }
    let sign = CryptoJS.MD5(
      CryptoJS.MD5(token).toString().toUpperCase() + timestamp + bodyToString
    ).toString().toUpperCase() // 签名算法生产签名
    config.headers['sign'] = sign
  } else if (config.method === 'get') {
    let body = config.url.includes('?') ? config.url.split('?')[1] : '' // 已经拼接到url中的query参数
    if (config.params) {
      body = body
        ? `${body}&${Qs.stringify(config.params)}`
        : Qs.stringify(config.params)
    }
    let sign = CryptoJS.MD5(
      CryptoJS.MD5(token).toString().toUpperCase() + timestamp + body
    ).toString().toUpperCase() // 签名算法生产签名
    config.headers['sign'] = sign
  }
  return config
}

export const responseResolve = (response) => {
  if (response?.config?.responseType !== 'blob') {
    if (response?.data?.code === 401) { // 没权限
      let msg = response?.data?.msg || '没有权限'
      Message.error(msg)
      throw new HttpError(msg)
    } else if (response?.data?.code === 404) { // token过期
      let msg = response?.data?.msg || '服务异常'
      Message.error(msg)
      router.push({
        path: '/login'
      })
      throw new HttpError(msg)
    } else if (response.data.code !== 0) { // 接口错误
      let msg = response?.data?.msg || '接口错误'
      Message.error(msg)
      throw new HttpError(msg)
    } else if (response?.data?.code === 0) {
      return response.data
    }
  } else {
    // 文件流
    return response.data
  }
}

export const resReject = (error) => {
  if (axios.isCancel(error)) {
    console.warn('request canceled', error.message || '')
    return
  }
  return Promise.reject(error)
}

api.interceptors.request.use(requestResolve, resReject)
api.interceptors.response.use(responseResolve, resReject)

export { api }