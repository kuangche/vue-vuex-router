/**
 * 功能：路由配置
 * 作者：安超
 * 日期：2018/7/18
 */

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/login/components/login/index.vue'),
    },
]

export default routes
