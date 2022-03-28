import React from 'react'
import { signIn } from 'src/common/firebaseApp'
import { FcGoogle } from 'react-icons/fc'
import Flex from 'src/ui/Flex'
import { GradientDiv } from 'src/styles/styles'


const Login = () => {

  return (
    <GradientDiv>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 65px)'
        }}
      >

        <Flex
          as={'button'}
          onClick={signIn}
          sx={{
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: '40px',
            padding: '5px 10px'
          }}
        >
          Login with Google
          <FcGoogle size={40} />
        </Flex>

      </Flex>
    </GradientDiv>
  )
}

export default Login