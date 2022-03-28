import React, { useContext } from 'react'
import styled from 'styled-components'
import { GiSmallFire } from 'react-icons/gi'
import { Button, LogOuts } from 'src/styles/styles'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Flex from 'src/ui/Flex'


const Nav = styled.div`
  background-image: linear-gradient(315deg, #070707 0%, #3b3833 74%);
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const FText = styled.p`
  padding: 0 10px;
  display: block;
  color: aliceblue;
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
          <LogOuts onClick={logOut}>Log Out</LogOuts>
        </>

        :
        <Flex flexWrap={'wrap'} justifyContent={'flex-end'}>
          <NavLink to={ABOUT_ROUTE}>
            <Button>About the project</Button>
          </NavLink>
          <NavLink to={LOGIN_ROUTE}>
            <Button>Login</Button>
          </NavLink>
        </Flex>


      }
    </Nav>
  )
}

export default NavBar