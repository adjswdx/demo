// 审批
import Layout from '@/layout'

const approvals = {
    path: '/approvals',
    name: 'approvals',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/approvals'),
            meta: {
                title: '审批',
                icon: 'tree-table'
            }
        }
    ]
}

export default approvals
