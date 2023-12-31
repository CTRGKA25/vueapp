import { Layout } from '../constants'

const HomeRoute = {
  path: '/home',
  component: Layout,
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '仪表盘', keepAlive: false, showTab: true },
    },
  ],
}
export default HomeRoute
