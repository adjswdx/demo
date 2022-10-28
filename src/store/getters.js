const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // user模块中的数据映射到getters中
  token: state => state.user.token,
  name: state => state.user.userInfo.username,
  userId: state => state.user.userInfo.userId,
  staffPhoto: state => state.user.userInfo.staffPhoto
}
export default getters
