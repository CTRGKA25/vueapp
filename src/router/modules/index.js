import { Layout } from '../constants'
import HomeRoute from './home'
import loginRoute from './login'
import recordRoute from './record'
import userRoute from './user'

// const RootRoute = {
//   path: '/',
//   component: Layout,
//   redirect: '/home',
// }

export const basicRoutes = [HomeRoute, loginRoute, recordRoute, userRoute]
