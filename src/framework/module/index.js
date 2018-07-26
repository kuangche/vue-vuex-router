/**
 * 功能：默认模块状态管理
 * 作者：安超
 * 日期：2018/7/26
 */

import { handleMutations } from 'framework'
import actionTypes from '../actions/actionTypes'

const defaultModule = {
    name: 'DefaultModule',
    state: {
        noop: null
    },
    mutations: handleMutations({
        [actionTypes.HASNOTCONFIGACTIONTYPE]: {
            success(state){
                state.noop = null
            }
        }
    })
}

export default defaultModule
