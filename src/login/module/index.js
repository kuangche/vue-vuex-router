/**
 * 功能：登录模块状态管理
 * 作者：安超
 * 日期：2018/7/26
 */
import { createActions, handleMutations } from 'framework'
import * as actionTypes from '../actions/actionTypes'

const login = {
    namespaced: true,
    state: {
        username: '',
        userType: actionTypes.USER_TYPE[0]
    },
    mutations: handleMutations({
        [actionTypes.SET_USER_INFO_LOGIN]: {
            success(state, payload){
                const { username, userType } = payload
                state.username = username
                state.userType = userType
            }
        }
    }),
    actions: createActions({
        login: {
            url: '/api/login',
            method: 'post'
        },
        logout: {
            url: '/api/logout'
        },
        getUserInfo: {
            url: '/api/getUserInfo',
            actionType: actionTypes.SET_USER_INFO_LOGIN
        }
    })
}

export default login
