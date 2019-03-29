
/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_SEARCH_SHOPS, RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SHOP_INFOS
} from './mutation-types'

import {
  reqAddress,
  reqCategories,
  reqShops,
  reqUserInfo,
  reqSearchShops,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfos
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
  },
  // 异步获取搜索商家信息
  async searchShops({commit,state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash,keyword)
    if(result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{ searchShops })
    }
  },
  // 异步退出
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 获取商品列表
  async getShopGoods({commit},callback) {
    const　result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_SHOP_GOODS,{goods})
      // 数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 获取商家信息
  async getShopInfos({commit}) {
    const result = await reqShopInfos()
    if (result.code === 0) {
      const infos = result.data
      commit(RECEIVE_SHOP_INFOS, {infos})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_SHOP_RATINGS,{ratings})
      // 数据更新了，通知一下组件
      callback && callback()
    }
  }
}
