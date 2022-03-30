import React, { useContext } from 'react'
import styled from 'styled-components'
import { GiSmallFire } from 'react-icons/gi'
import { Button, LogOuts } from 'src/styles/styles'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'


const Nav = styled.div`
  background-image: linear-gradient(315deg, #070707 0%, #3b3833 74%);
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NavBar = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const logOut = () => {
    auth.signOut(auth)
  }

  return (
    <Nav>
      <Flex
        alignItems={'center'}
      >
        <GiSmallFire size={45} color={'red'} />
        <Text
          fontSize={[3, 4]}
          p={'0 10px'}
          color={'white'}
        >
          {user
            ?
            'Fire-CHAT'
            :
            'Fire-LOGIN'
          }
        </Text>
      </Flex>
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