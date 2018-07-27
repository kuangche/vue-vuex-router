/**
 * 功能：todos模块状态管理
 * 作者：安超
 * 日期：2018/7/26
 */

import { createActions, handleMutations } from 'framework'
import * as constant from '@/conf/constant'
import todoGetter from '../getter'
import * as actionTypes from '../actions/actionTypes'

const todos = {
    namespaced: true,
    state: {
        isLoading: false,
        list: [],
        filter: constant.VisibilityFilters.SHOW_ALL
    },
    mutations: handleMutations({
        [actionTypes.GET_ALL_TODO]: {
            pre(state){ state.isLoading = true },
            success(state, payload){
                state.list = payload
                state.isLoading = false
            },
            error(state){ state.isLoading = false },
            always(state){ state.isLoading = false }
        },
        [actionTypes.ADD_TODO]: {
            success(state, payload){
                state.list.unshift(payload)
            }
        },
        [actionTypes.UPDATE_TODO]: {
            success(state, payload){
                const { id, completed } = payload
                state.list = state.list.map((item) => {
                    if (item.id === id) {
                        return { ...item, completed }
                    }
                    
                    return item
                })
            }
        },
        [actionTypes.REMOVE_TODO]: {
            success(state, payload){
                const { id } = payload
                state.list = state.list.filter(item => item.id !== id)
            }
        },
        [actionTypes.SET_VISIBILITY_FILTER](state, payload){
            state.filter = payload
        },
        [actionTypes.CLEAR_COMPLETED_TODO](state){
            state.list = state.list.filter(item => !item.completed)
        }
    }),
    actions: createActions({
        getTodos: {
            url: '/api/getTodos',
            method: 'GET',
            hasLoading: true,
            actionType: actionTypes.GET_ALL_TODO
        },
        addTodo: {
            url: '/api/addTodo',
            method: 'POST',
            handleError: true,
            actionType: actionTypes.ADD_TODO
        },
        removeTodo: {
            url: '/api/removeTodo',
            method: 'DELETE',
            handleError: true,
            actionType: actionTypes.REMOVE_TODO
        },
        updateTodo: {
            url: '/api/updateTodo',
            method: 'PUT',
            handleError: true,
            actionType: actionTypes.UPDATE_TODO
        },
        checkedAllTodo({ commit }){
            commit(actionTypes.CHECKED_ALL_TODO)
        },
        setFilter({ commit }, filter){
            commit(actionTypes.SET_VISIBILITY_FILTER, filter)
        },
        clearCompletedTodo({ commit }) {
            commit(actionTypes.CLEAR_COMPLETED_TODO)
        }
    }),
    getters: todoGetter
}

export default todos
