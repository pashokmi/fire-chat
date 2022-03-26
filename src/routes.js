import Login from 'src/components/Login'
import Chat from 'src/components/Chat'


const LOGIN_ROUTE = '/login'
const CHAT_ROUTE = '/chat'

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