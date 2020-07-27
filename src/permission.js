import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import defaultSettings from './settings.js'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!defaultSettings.whiteList.includes(to.path)) {
    if (Boolean(getToken())) {
      next()
    } else {
      window.location.href = 'http://192.168.0.43:9931/login.html'
      NProgress.done()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
