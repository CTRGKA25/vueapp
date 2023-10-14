import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

import router from '@/router'
import { login } from '@/api/user'

// create an axios instance
const service = axios.create({
  //   baseURL: `${urlList.apiUrl}`, // url = base url + request url
  //   baseURL: `http://192.168.3.46:8089/workOrder/`, // 黄伟兴本地
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
})

// 设置全局的请求次数，请求的间隙
service.defaults.retry = 2
service.defaults.retryDelay = 1000

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    for (const i in config.header) {
      config.headers[i] = config.header[i]
    }
    let accessToken = ''
    if (store.getters.token) {
      accessToken = store.getters.token
    } else {
      accessToken = window.localStorage.getItem('accessToken')
    }
    config.headers['Access-Token'] = accessToken
    if (!config.data) {
      config.data = []
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.body && res.body.code === '500') {
      Toast(res.body.msg)
      return Promise.reject(new Error(res.body.msg || 'Error'))
    }
    if ((res.code === '00' || res.code === '200') && res.success === 'true') {
      return res
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000 && res.code !== 200 && res.code) {
      res.msg && res.msg != '老人未入住' && Toast(res.msg)
      res.message && Toast(res.message)
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  async (error) => {
    let originalRequest = error.config
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') !== -1 &&
      !originalRequest._retry
    ) {
      let config = error.config
      if (!config || !config.retry) return Promise.reject(error)

      config.__retryCount = config.__retryCount || 0

      if (config.__retryCount >= config.retry) {
        Message({
          message: '连接超时,请检查网络后重试!',
          type: 'error',
          duration: 2 * 1000,
        })
        return Promise.reject(error)
      }

      config.__retryCount += 1

      let backoff = new Promise(function (resolve) {
        setTimeout(function () {
          resolve()
        }, config.retryDelay || 1)
      })

      return backoff.then(function () {
        return service(config)
      })
    }
    if (error && error.response && error.response.status && error.response.status === 401) {
      // 获取登录时保存的信息
      let obj = JSON.parse(window.localStorage.getItem('loginStringData_family'))
      // 数据被存储了去登陆
      //*
      if (obj && obj.loginName && obj.password) {
        const res = await login(obj)
        store.dispatch('user/setToken', res.body)
        let config = error.config
        if (!config) return Promise.reject(error)
        return service(config)
      } else {
        // 否走重新走原来的逻辑
        router.replace({
          path: '/login',
        })
        store.dispatch('user/logout')
      }
      // */
    } else {
      if (error.message === 'Network Error') {
        Toast('网络错误,请检查网络后重试!')
      } else {
        Toast(error.message)
      }
    }
    return Promise.reject(error)
  }
)

service.jsonp = ({ url, params }) => {
  // let paramString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  const paramString = new URLSearchParams(params).toString()
  // console.log('paramString', paramString)
  return new Promise((resolve, reject) => {
    const jsonCallBackName = `jsonpCallBack${Date.now()}`
    // 这里的 "jsonCallBack" ，和调用的 jsonp 的 url 中的 callback 值相对应（见粗体字）
    window[jsonCallBackName] = (result) => {
      resolve(result)
    }
    const JSONP = document.createElement('script')
    JSONP.type = 'text/javascript'
    JSONP.src = `${url}?${paramString}&callback=${jsonCallBackName}`
    const headDom = document.getElementsByTagName('head')[0]
    headDom.appendChild(JSONP)
    setTimeout(() => {
      headDom.removeChild(JSONP)
      delete window[jsonCallBackName]
    }, 500)
  })
}

export default service
