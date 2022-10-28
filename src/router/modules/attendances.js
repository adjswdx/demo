// 考勤
import Layout from '@/layout'

const attendances = {
    path: '/attendances',
    name: 'attendances',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/attendances'),
            meta: {
                title: '考勤',
                icon: 'skill'
            }
        }
    ]
}

export default attendances
