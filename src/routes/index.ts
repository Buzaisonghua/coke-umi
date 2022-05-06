import Layout from '@/layout'
const routes: RoutesConfig.Routes[] = [
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path: '/',
        component: '@/layout',
        routes: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard')
            },
            {
                path: 'user',
                component: () => import('@/views/user')
            }
        ]
    },
]

export default routes