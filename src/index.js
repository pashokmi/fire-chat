import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from 'src/App'
import 'firebase/firestore'
import 'firebase/auth'
import { auth, firestore } from 'src/common/firebaseApp'

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


