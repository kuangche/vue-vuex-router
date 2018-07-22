import Vue from 'vue'
import Vuex from 'vuex'
import defaultAction from 'framework/defaultAction'
import config from 'conf'

const { getters, modules } = config

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        defaultAction,
        ...modules
    },
    getters
})

export default store
