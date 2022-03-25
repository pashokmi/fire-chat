import React from 'react'
import styled from 'styled-components'
import { GiSmallFire } from 'react-icons/gi'
import { Button } from 'src/styles/styles'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from 'src/utils/constans'


const Nav = styled.div`
  background-color: #9c9c9c;
  padding: 10px 5px;
  display: flex;
  align-items: center;
`
const FText = styled.p`
  padding: 0 10px;
  display: block`
const NavBar = () => {
  const user = false
  return (
    <Nav>

      <GiSmallFire size={25} color={'red'} />
      <FText>Fire-CHAT</FText>
      {user ?
        <Button>Log Out</Button>
        :
        <NavLink to={LOGIN_ROUTE}>
          <Button>Login</Button>
        </NavLink>

      }
    </Nav>
  )
}

export default NavBar