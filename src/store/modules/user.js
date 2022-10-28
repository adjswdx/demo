import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'

const state = {
  token: getToken() || null,
  userInfo: {}
}

const mutations = {
  // 储存token
  setToken(state, payload) {
    state.token = payload
    setToken(payload)
  },
  // 删除token
  removeToken(state) {
    state.token = null
    removeToken()
  },
  // 设置用户信息
  setUserInfo(state, payload) {
    // 用 浅拷贝的方式去赋值对象 因为这样数据更新之后，才会触发组件的更新
    state.userInfo = { ...payload }
  },
  // 删除用户信息
  reomveUserInfo(state) {
    state.userInfo = {}
  }
}

const actions = {
  // 登录
  async login({ commit }, data) {
    const result = await login(data)
    // console.log(result)
    if (result.success) {
      commit('setToken', result.data)
      setTimeStamp() // 将当前的最新时间写入缓存
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    // 获取信息
    const result = await getUserInfo()
    // 获取头像
    const baseInfo = await getUserDetailById(result.data.userId)
    const baseResult = { ...result.data, ...baseInfo.data }
    commit('setUserInfo', baseResult)
    return baseResult
  },
  // 退出
  logout({ commit }) {
    // 删除token
    commit('removeToken')
    // 删除用户信息
    commit('reomveUserInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

