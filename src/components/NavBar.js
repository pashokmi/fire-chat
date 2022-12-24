import React, { useContext } from 'react'
import { GiSmallFire } from 'react-icons/gi'
import { Button, LogOuts } from 'src/styles/styles'
import { NavLink } from 'react-router-dom'
import { ABOUT_ROUTE, LOGIN_ROUTE } from 'src/utils/constans'
import { Context } from 'src/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import Flex from 'src/ui/Flex'
import Text from 'src/ui/Text'
import Container from 'src/ui/Container'
import Box from 'src/ui/Box'

const NavBar = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const logOut = () => {
    auth.signOut(auth)
  }

  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(315deg, #070707 0%, #3b3833 74%)'
      }}
    >
      <Container>
        <Flex
          sx={{
            padding: '10px 25px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >

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
                'LOGIN'
              }
            </Text>
          </Flex>
          {user
            ?
            <LogOuts onClick={logOut}>Log Out</LogOuts>
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
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar