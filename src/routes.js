import { CHAT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import Login from 'src/components/Login'
import Chat from 'src/components/Chat'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
]