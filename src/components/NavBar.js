import React, { useContext } from 'react'
import styled from 'styled-components'
import { GiSmallFire } from 'react-icons/gi'
import { Button, LogOuts } from 'src/styles/styles'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from 'src/utils/constans'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'


const Nav = styled.div`
  background-color: #ff4e00;
  background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const FText = styled.p`
  padding: 0 10px;
  display: block
`
const Box = styled.div`
  display: flex;
  align-items: center;
`
const NavBar = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const logOut = () => {
    auth.signOut(auth)
  }

  return (
    <Nav>
      <Box>
        <GiSmallFire size={45} color={'red'} />
        <FText>{user ? 'Fire-CHAT' : 'Fire-LOGIN'}</FText>
      </Box>
      {user ?
        <>
          <NavLink to={'/chat'}>CHAT</NavLink>
          <LogOuts onClick={logOut}>Log Out</LogOuts>
        </>

        :
        <>
          <NavLink to={LOGIN_ROUTE}>
            <Button>Login</Button>
          </NavLink>
        </>


      }
    </Nav>
  )
}

export default NavBar