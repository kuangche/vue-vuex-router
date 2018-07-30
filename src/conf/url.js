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
            path: '/app/todos',
            component: () => import('@/todos/components/main')
        },
        others: {
            path: '/app/others',
            component: () => import('@/others/components/main')
        },
        validate: {
            path: '/app/others/validate',
            component: () => import('@/others/components/validate')
        },
        element: {
            path: '/app/others/element',
            component: () => import('@/others/components/element')
        },
        drag: {
            path: '/app/others/drag',
            component: () => import('@/others/components/drag')
        }
    }
}

export default url
