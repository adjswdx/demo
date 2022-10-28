// 权限管理
import Layout from '@/layout'

const permission = {
    path: '/permission',
    name: 'permission',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/permission'),
            meta: {
                title: '权限管理',
                icon: 'lock'
            }
        }
    ]
}

export default permission
