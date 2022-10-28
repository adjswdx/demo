import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/404'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    //   如果有token 继续判断是不是去登录页
    if (to.path === '/login') {
      // 有token要去登录页，强行转到首页，有token凑什么热闹
      next({ path: '/' })
    } else {
      // 判断有无用户信息，有则放行，没有则获取然后放行
      const hasGetUserInfo = store.getters.userId
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          await store.dispatch('user/getUserInfo')
          next()
        } catch (error) {
          // 获取不到则删除token重新登录
          store.dispatch('user/logout')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    //  没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 找到就放行
      next()
    } else {
      // 找不到去登录页
      next(`/login?redirect=${to.path}`)
    }
  }
})
// 后置守卫
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
