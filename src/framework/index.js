import axios from 'axios'
import { Loading } from 'element-ui'

// ajax统一配置
const instance = axios.create({
    method: 'get',
    baseURL: '',
    timeout: 0,
    responseType: 'json'
})

const handleWithParameter = function (url, {
    method = 'GET',
    contentType = 'application/json; charset=UTF-8',
    params = {},
    data = {}
}) {
    const { headers } = instance.defaults
    instance.defaults.headers = { ...headers, 'Content-Type': contentType }

    // url替换参数
    let urlNew = url
    const paramsNew = { ...params }
    /*eslint-disable*/
    for (const key in params) {
        const reg = new RegExp(`:${key}`, 'g')
        if ({}.hasOwnProperty.call(params, key) && reg.test(urlNew)) {
            urlNew = urlNew.replace(reg, params[key])
            delete paramsNew[key]
        }
    }

    switch (method.toLowerCase()) {
        case 'get':
            return instance.get(urlNew, { params: paramsNew })
        case 'delete':
            return instance.delete(urlNew, { params: paramsNew })
        case 'post':
            return instance.post(urlNew, data)
        case 'put':
            return instance.put(urlNew, data)
        default: {
            const res = {
                then: resolve => resolve({
                    statusCode: 300,
                    msg: 'method方式错误'
                })
            }
            return Promise.resolve(res)
        }
    }
}
/*
* pre: ajax提交前
* success: ajax连接成功返回正确结果后
* error: ajax连接成功返回错误结果后
* fail: ajax连接失败（网络错误）
* always: ajax无论成功与失败都要执行
 */
const suffix = ['pre', 'success', 'error', 'fail', 'always']
const actionTypeDefault = 'HASNOTCONFIGACTIONTYPE'
const createActions = function (actionMap) {
    const eventNames = Object.keys(actionMap)
    const fnsMap = {}
    eventNames.forEach((eventName) => {
        const configOrFn = actionMap[eventName]
        if (typeof configOrFn !== 'function') {
            const config = { method: 'GET', actionType: actionTypeDefault, ...configOrFn }
            fnsMap[eventName] = ({commit}, payload = {}) => {
                let loadingInstance = null

                if (config.hasLoading || config.hasLoading === undefined) {
                    loadingInstance = Loading.service({
                        lock: true,
                        text: '加载中……',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    })
                }

                commit(`${config.actionType}_PRE`, payload)
                return handleWithParameter(
                    config.url,
                    {
                        ...payload,
                        ...config
                    }
                ).then((res) => {
                    loadingInstance.close()

                    const { stateCode, result, message } = res.data
                    let data = {}
                    // 是否需要接口传递的参数
                    if (config.needFormData) {
                        data = {result: res}
                    } else {
                        data = {result}
                    }

                    // always只有在成功时才返回数据，非200或异常都不返回数据
                    if (stateCode === 200) {
                        commit(`${config.actionType}_SUCCESS`, data.result)
                        commit(`${config.actionType}_ALWAYS`, data.result)

                        return res.data
                    }

                    if (config.handleError || config.handleError === undefined) {
                        if (stateCode === 401) {
                            location.replace(location.origin)
                        } else {
                            window.raptorApp.$message({
                                message,
                                type: 'error'
                            })
                        }
                    }

                    commit(`${config.actionType}_ERROR`, message)
                    commit(`${config.actionType}_ALWAYS`)

                    return res.data
                }).catch((error) => {
                    loadingInstance.close()
                    if(error.response){
                        commit(`${config.actionType}_FAIL`)
                        commit(`${config.actionType}_ALWAYS`)
                        window.raptorApp.$message({
                            message: '服务器端错误😂！',
                            type: 'error'
                        })
                    } else {
                        window.raptorApp.$message({
                            message: `${error.message}！${error.stack}!`,
                            type: 'error'
                        })
                    }
                })
            }
        } else {
            fnsMap[eventName] = configOrFn
        }
    })

    return fnsMap
}

const handleMutations = function (mutationsMap) {
    const result = { ...mutationsMap }
    Object.keys(result).forEach((actionType) => {
        const fnOrObject = result[actionType]
        if (fnOrObject && typeof fnOrObject !== 'function') {
            delete result[actionType]
            const keys = Object.keys(fnOrObject)
            // 补充没有的默认配置
            suffix.forEach(str => {
                if (!keys.includes(str)) {
                    keys.push(str)
                    fnOrObject[str] = ()=>{}
                }
            })

            keys.forEach((suffixAction) => {
                result[`${actionType}_${suffixAction.toUpperCase()}`] = fnOrObject[suffixAction]
            })
        }
    })

    return result
}

export {
    createActions,
    handleMutations
}
