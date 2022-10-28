// 社保
import Layout from '@/layout'

const social = {
    path: '/social',
    name: 'social',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/social'),
            meta: {
                title: '社保',
                icon: 'table'
            }
        }
    ]
}

export default social
