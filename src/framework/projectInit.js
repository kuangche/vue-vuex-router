/**
 * 功能：框架入口
 * 作者：安超
 * 日期：2018/7/20
 */
import Vue from 'vue'
import Router from 'vue-router'
import config from 'conf'
import App from '@/components/app'
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
            App
        },
        template: '<App/>',
        store
    })
}

export default projectInit
