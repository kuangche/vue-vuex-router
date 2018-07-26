/**
 * 功能：工程路由path配置
 * 作者：安超
 * 日期：2018/7/23
 */

const url = {
    root: '',
    login: {
        path: '/login',
        component: () => import('@/login/components/login')
    },
    app: {
        root: {
            path: '/app',
            component: () => import('@/components/app')
        },
        todos: {
            path: 'todos',
            component: () => import('@/todos/components')
        },
        others: {
            path: 'others',
            component: () => import('@/others/components')
        }
    }
}

export default url
