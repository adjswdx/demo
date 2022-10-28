import router from '@/router'
import store from '@/store'
import { getTimeStamp } from '@/utils/auth'
const TimeOut = 3600 // 定义超时时间

import { Message } from 'element-ui'

export const getMessageError = (error) => {
    const { response: data } = error
    Message.error(data.data.message)
}
// 登出操作
export const logOutError = () => {
    store.dispatch('user/logout')
    // `/login?redirect=${this.$route.fullPath}`
    router.push('/login')
}
// 是否超时
export const IsCheckTimeOut = () => {
    const currentTime = Date.now() // 当前时间戳
    const timeStamp = getTimeStamp() // 缓存时间戳
    // console.log((currentTime - timeStamp) / 1000)
    return (currentTime - timeStamp) / 1000 > TimeOut
}
