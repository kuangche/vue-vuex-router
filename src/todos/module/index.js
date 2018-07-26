/**
 * 功能：todos模块状态管理
 * 作者：安超
 * 日期：2018/7/26
 */

import { createActions, handleMutations } from 'framework'
import * as actionTypes from '../actions/actionTypes'

const todos = {
    namespaced: true,
    state: {
        list: []
    },
    mutations: handleMutations({
        [actionTypes.SET_TODOLIST_TODOS]: {
            success(state, payload){
                state.list = payload
            }
        }
    }),
    actions: createActions({
        getTodos: {
            url: '/api/getTodos',
            actionType: actionTypes.SET_TODOLIST_TODOS
        }
    })
}

export default todos
