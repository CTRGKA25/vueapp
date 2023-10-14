import { Layout } from '../constants'

const userRoute = {
  path: '/user',
  component: Layout,
  children: [
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/index'),
      meta: { title: '仪表盘', keepAlive: false, showTab: true },
    },
  ],
}
export default userRoute
