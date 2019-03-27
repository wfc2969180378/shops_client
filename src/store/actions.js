
/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO
} from './mutation-types'

import {
  reqAddress,
  reqCategories,
  reqShops,
  reqUserInfo
} from '../api'


export default {
  // 异步获取地址
  async getAddress({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)

    if(result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 异步获取食品分类列表
  async getCategories({commit, state}) {
    // 发送异步ajax请求
    const result = await reqCategories()

    // 提交一个mutation
    if(result.code === 0) {
      const categories = result.data
      commit(RECEIVE_CATEGORIES, { categories })
    }
  },
  // 异步获取商家列表信息
  async getShops({commit, state}) {
    // 发送异步ajax请求
    const { latitude, longitude } = state
    const result = await reqShops(latitude, longitude)

    // 提交一个mutation
    if(result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  },
  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  }
}
