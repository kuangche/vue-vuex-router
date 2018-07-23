/**
 * 功能：路由配置
 * 作者：安超
 * 日期：2018/7/18
 */
import url from './url'

const routes = [
    {
        path: url.root,
        name: 'login',
        component: () => import('@/login/components/login'),
    },
]

export default routes
