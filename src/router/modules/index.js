import { Layout } from '../constants'
import HomeRoute from './home'
import loginRoute from './login'
import recordRoute from './record'
import userRoute from './user'

const RootRoute = {
  path: '/',
  component: Layout,
  redirect: '/login',
}

export const basicRoutes = [RootRoute,HomeRoute, loginRoute, recordRoute, userRoute]
