
/*
* vuex最核心的管理对象store
* */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutation'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store ({
    state,
    mutations,
    getters,
    actions,
})
