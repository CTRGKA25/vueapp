import { Layout } from '../constants'

const loginRoute = {
  path: '/home',
  component: Layout,
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index'),
      meta: { title: '仪表盘', keepAlive: false, showTab: false },
    },
  ],
}
export default loginRoute
