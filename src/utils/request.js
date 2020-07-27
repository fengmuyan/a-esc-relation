import axios from 'axios'
import store from '@/store'
import { MessageBox } from 'element-ui'
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({
  /* baseURL: process.env.VUE_APP_BASE_API, */
  baseURL: "http://192.168.0.43:9931/",
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    if (config.data && config.data.$_isFormData === true) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
      config.data = config.data.formData
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(res => {
  const code = res.data.code
  if (code === -100001) {
    if (store.getters.tipAppeared === false) {
      store.dispatch('toggleTip', true).then(() => {
        MessageBox({
          message: '登录信息失效。',
          type: 'error',
          customClass: 'el-message-box-err',
          closeOnClickModal: false,
          closeOnPressEscape: false
        }).then(() => {
          store.dispatch('LogOut').then(() => {
            store.dispatch('toggleTip', false)
            location.reload()
          })
        })
      })
    } else {
      return
    }

  } else if (code !== 0) {
    MessageBox({
      message: res.data.msg,
      type: 'error',
      duration: 5 * 1000,
      customClass: 'el-message-box-err'
    })
    return Promise.reject('error')
  } else {
    return res.data
  }
},
  error => {
    console.log('err' + error)
    MessageBox({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
      customClass: 'el-message-box-err'
    })
    return Promise.reject(error)
  }
)

export default service