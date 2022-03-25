import React, { useContext } from 'react'
import { Button } from 'src/styles/styles'
import styled from 'styled-components'
import bgHero from 'src/assets/bgHero.jpeg'
import firebase from 'firebase/app'
import { Context } from 'src/index'
import { GoogleAuthProvider } from "firebase/auth";


const LoginCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 65px);
  background-image: url(${bgHero});
  background-size: cover;
  background-position: top center;
`

const Login = () => {
  const { auth } = useContext(Context)
  const logIn = async () => {

    const provider = new GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }
  return (
    <LoginCenter>
      <Button onClick={logIn}>Login with Google</Button>
    </LoginCenter>
  )
}

export default Login