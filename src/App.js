import 'src/App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from 'src/components/NavBar'
import AppRouter from 'src/components/AppRouter'
import { useContext } from 'react'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from 'src/components/Loader'

const App = () => {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App


