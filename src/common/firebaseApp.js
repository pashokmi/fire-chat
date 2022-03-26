import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)
export const db = getFirestore(app);
export default app

export const signIn = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
    .catch((error) => {
      console.log(error)
    })

}
