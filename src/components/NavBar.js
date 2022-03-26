import React, { useContext } from 'react'
import styled from 'styled-components'
import { GiSmallFire } from 'react-icons/gi'
import { Button } from 'src/styles/styles'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from 'src/utils/constans'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'


const Nav = styled.div`
  background-color: #9c9c9c;
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
        <Button onClick={logOut}>Log Out</Button>
        :
        <NavLink to={LOGIN_ROUTE}>
          <Button>Login</Button>
        </NavLink>

      }
    </Nav>
  )
}

export default NavBar