import React from 'react'
import { Button } from 'src/styles/styles'
import styled from 'styled-components'
import bgHero from 'src/assets/bgHero.jpeg'
import { signIn } from 'src/common/firebaseApp'


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

  return (
    <LoginCenter>
      <Button onClick={signIn}>Login with Google</Button>
    </LoginCenter>
  )
}

export default Login