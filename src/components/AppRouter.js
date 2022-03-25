import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from 'src/routes'
import { CHAT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'

const AppRouter = () => {
  // const {auth} = useContext(Context)
  // const [user] = useAuthState(auth)
  const user = false
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