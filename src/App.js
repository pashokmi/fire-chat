import 'src/App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from 'src/components/NavBar'
import AppRouter from 'src/components/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
