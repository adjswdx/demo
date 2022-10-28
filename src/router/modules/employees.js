//   员工
import Layout from '@/layout'

const employees = {
    path: '/employees',
    name: 'employees',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/employees'),
            meta: {
                title: '员工管理',
                icon: 'people'
            }
        }
    ]
}

export default employees
