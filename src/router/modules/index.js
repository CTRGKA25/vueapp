import { Layout } from '../constants'
import HomeRoute from './home'
const RootRoute = {
  path: '/',
  component: Layout,
  redirect: '/home',
}

export const basicRoutes = [RootRoute, HomeRoute]
