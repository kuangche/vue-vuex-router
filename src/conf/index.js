/**
 * 功能：所有配置
 * 作者：安超
 * 日期：2018/7/18
 */
import errors from './errors'
import modules from './modules'
import * as constant from './constant'
import routes from './routes'
import getters from './getters'
import url from './url'
import * as mutationTypes from './mutation-types'

const config = {
    errors,
    modules,
    constant,
    url,
    routes,
    getters,
    mutationTypes
}

export default config
