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
        path: url.login.path,
        name: 'login',
        component: url.login.component,
    },
    {
        path: url.app.root.path,
        component: url.app.root.component,
        children: [
            {
                path: '',
                redirect: { name: 'todos' }
            },
            {
                path: url.app.todos.path,
                name: 'todos',
                component: url.app.todos.component
            },
            {
                path: url.app.others.path,
                name: 'others',
                component: url.app.others.component,
                children: [
                    {
                        path: '',
                        redirect: { name: 'validate' }
                    },
                    {
                        path: url.app.validate.path,
                        name: 'validate',
                        component: url.app.validate.component
                    },
                    {
                        path: url.app.element.path,
                        name: 'element',
                        component: url.app.element.component
                    },
                    {
                        path: url.app.drag.path,
                        name: 'drag',
                        component: url.app.drag.component
                    },
                ]
            }
        ]
    }
]

export default routes
