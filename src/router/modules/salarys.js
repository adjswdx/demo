// 工资
import Layout from '@/layout'

const salarys = {
    path: '/salarys',
    name: 'salarys',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/salarys'),
            meta: {
                title: '工资',
                icon: 'money'
            }
        }
    ]
}

export default salarys
