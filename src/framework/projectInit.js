/**
 * 功能：框架入口
 * 作者：安超
 * 日期：2018/7/20
 */
import Vue from 'vue'
import Router from 'vue-router'
import config from 'conf'
import Root from '@/components/root'
import store from './store'

const { routes } = config

Vue.config.productionTip = false
Vue.use(Router)

const projectInit = function (oContainer) {
    window.projectApp = new Vue({
        el: oContainer,
        router: new Router({
            routes,
        }),
        components: {
            Root
        },
        template: '<Root/>',
        store
    })
}

export default projectInit
