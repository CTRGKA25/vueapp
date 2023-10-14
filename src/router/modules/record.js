import { Layout } from '../constants'

const recordRoute = {
  path: '/record',
  component: Layout,
  children: [
    {
      path: '/record',
      name: 'record',
      component: () => import('@/views/record/index'),
      meta: { title: '仪表盘', keepAlive: false, showTab: true },
    },
  ],
}
export default recordRoute
