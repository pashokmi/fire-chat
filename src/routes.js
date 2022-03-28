import Login from 'src/components/Login'
import Chat from 'src/components/Chat/Chat'
import { ABOUT_ROUTE, CHAT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import About from 'src/components/About'


export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: ABOUT_ROUTE,
    Component: About
  }
]

export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat
  }
]