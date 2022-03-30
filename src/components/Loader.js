import React from 'react'
import styled, { keyframes } from 'styled-components'
import Flex from 'src/ui/Flex'

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderIcon = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fc0404;
    border-color: #fc0404 transparent #fc0404 transparent;
    animation: ${Rotate} 1.2s linear infinite;
  }

`


const Loader = () => {
  return (
    <Flex
      sx={{
        backgroundImage: 'linear-gradient(315deg, #070707 0%, #3b3833 74%)',
        height:'100vh'
      }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      < LoaderIcon />
    < /Flex>
  )
}

export default Loader