import { createActions, handleMutations } from 'framework'
import * as actionTypes from '../actions/actionTypes'

const login = {
    namespaced: false,
    state: {
        username: 'aa',
        userType: actionTypes.USER_TYPE[0]
    },
    mutations: handleMutations({
        [actionTypes.SET_USER_INFO_LOGIN]: {
            success(state, payload){
                state.username = payload
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
        },
    })
}

export default login
