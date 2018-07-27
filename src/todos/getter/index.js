/**
 * 功能：当前store内数据变换方法及数据
 * 作者：安超
 * 日期：2018/7/27
 */
import { VisibilityFilters } from '@/conf/constant'

const {
    SHOW_ACTIVE, SHOW_COMPLETED
} = VisibilityFilters

const todosGetter = {
    listByFilter: (state) => {
        switch (state.filter) {
        case SHOW_ACTIVE:
            return state.list.filter(item => !item.completed)
        case SHOW_COMPLETED:
            return state.list.filter(item => item.completed)
        default:
            return state.list
        }
    }
}

export default todosGetter
