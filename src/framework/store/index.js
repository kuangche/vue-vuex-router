import Vue from 'vue'
import Vuex from 'vuex'
import module from 'framework/module'
import config from 'conf'

const { getters, modules } = config

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        module,
        ...modules
    },
    getters
})

export default store
