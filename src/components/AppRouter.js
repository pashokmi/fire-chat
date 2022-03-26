import React, { useContext } from 'react'
import { privateRoutes, publicRoutes } from 'src/routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from 'src/index'
import { Navigate, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return user ?
    (
      <Routes>
        {privateRoutes.map(({ path, Component }) =>
          <Route
            key={path}
            path={path}
            element={<Component />}
            render={() => <Navigate to={CHAT_ROUTE} />} />
        )}
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({ path, Component }) =>
          <Route
            key={path}
            path={path}
            element={<Component />}
            render={() => <Navigate to={LOGIN_ROUTE} />} />
        )}
      </Routes>
    )
}

export default AppRouter