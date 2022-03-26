import React, { useContext } from 'react'
import { CHAT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from 'src/index'
import { Navigate, Route, Routes } from 'react-router-dom'
import Chat from 'src/components/Chat'
import Login from 'src/components/Login'

const AppRouter = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return user ?
    (
      <Routes>
        <Route
          path={'chat'}
          element={<Chat />}
          render={<Navigate to={CHAT_ROUTE} />} />
        <Route path='*' element={<Chat />} />
      </Routes>
    )
    :
    (
      <Routes>
        <Route
          path={'login'}
          element={<Login />}
          render={<Navigate to={LOGIN_ROUTE} />} />
        <Route path='*' element={<Login />} />
      </Routes>
    )
}

export default AppRouter