// 公司设置
import Layout from '@/layout'

const setting = {
    path: '/setting',
    name: 'setting',
    component: Layout,
    children: [
        {
            path: '',
            component: () => import('@/views/setting'),
            meta: {
                title: '公司设置',
                icon: 'setting'
            }
        }
    ]
}

export default setting
