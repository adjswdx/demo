// 组织架构
import Layout from '@/layout'

const departments = {
    path: '/departments',
    name: 'departments',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/departments'),
            meta: {
                title: '组织架构',
                icon: 'tree'
            }
        }
    ]
}

export default departments
