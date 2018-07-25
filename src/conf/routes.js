/**
 * 功能：路由配置
 * 作者：安超
 * 日期：2018/7/18
 */
import url from './url'

const routes = [
    {
        path: url.root,
        name: 'root',
        redirect: {
            name: 'login'
        }
    },
    {
        path: url.login,
        name: 'login',
        component: () => import('@/login/components/login'),
    },
    {
        path: url.app.root,
        name: 'app',
        component: () => import('@/components/app'),
        children: [
            {
                path: '',
                redirect: { name: 'todos' }
            },
            {
                path: 'todos',
                name: 'todos',
                component: () => import('@/todos/components')
            }
        ]
    }
]

export default routes
